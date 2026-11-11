
/* ==========================================
   PORTFOLIO - AFFICHAGE DES FICHES PROJETS
   ========================================== */

(() => {
  "use strict";

  const id = new URLSearchParams(
    window.location.search
  ).get("id");

  const projects =
    typeof PROJETS !== "undefined" &&
    Array.isArray(PROJETS)
      ? PROJETS
      : [];

  const p = projects.find(
    item => item && item.id === id
  );

  const root = document.getElementById("case-content");
  const nav = document.getElementById("case-nav");
  const main = document.getElementById("project-page");

  if (!root || !nav || !main) return;

  /* ---------- Utilitaires ---------- */

  function make(tag, content, className) {
    const el = document.createElement(tag);

    if (className) el.className = className;

    if (content !== undefined && content !== null) {
      el.textContent = String(content);
    }

    return el;
  }

  function safeLink(value) {
    if (typeof value !== "string" || !value.trim()) {
      return null;
    }

    try {
      const url = new URL(value.trim(), location.href);

      return ["http:", "https:"].includes(url.protocol)
        ? url.href
        : null;
    } catch {
      return null;
    }
  }

  /* ---------- Projet introuvable ---------- */

  if (!p) {
    main.replaceChildren();

    const container = make(
      "div",
      null,
      "container missing-case"
    );

    container.append(
      make("h1", "Projet introuvable"),
      make(
        "p",
        "Cette fiche n'existe pas ou son identifiant a changé."
      )
    );

    const back = make(
      "a",
      "← Retour aux réalisations",
      "btn btn-primary"
    );

    back.href = "index.html#realisations";

    container.append(back);
    main.append(container);
    return;
  }

  /* Retour vers le catalogue de la catégorie d’origine. */
  const categorieRetour = ["m1", "m2", "pro"].includes(p.categorie) ? p.categorie : "m1";
  const urlRetour = "realisations.html?categorie=" + encodeURIComponent(categorieRetour);
  document.querySelectorAll(".case-back, .back-header, .case-footer .btn").forEach(lien => {
    lien.href = urlRetour;
  });

  /* Intitulé du sommaire adapté à la nature de la réalisation. */
  const sommaireTitre = document.querySelector(".case-nav-title");
  if (sommaireTitre) {
    const titres = {
      formation: "Dans cette formation",
      ressource: "Dans cette ressource pédagogique",
      communication: "Dans cette action de communication",
      projet: "Dans ce projet"
    };
    sommaireTitre.textContent = p.categorie === "pro"
      ? (titres[p.sousCategorie] || "Dans ce projet")
      : "Dans ce projet";
  }

  /* ---------- Mode d'affichage ---------- */

  const modern =
    p.presentation !== undefined &&
    p.presentation !== null;

  main.classList.add("case-modern");
  if (p.categorie === "pro") main.classList.add("case-pro");

  /* ---------- En-tête ---------- */

  document.title =
    `${p.titre || "Réalisation"} | Giovanni Silvetti - Portfolio`;

  const categories = {
    m1: "Master 1 · MEEF PIF – IFMN",
    m2: "Master 2",
    pro: "Expérience professionnelle"
  };

  const category = document.getElementById("case-category");
  const title = document.getElementById("case-title");
  const resume = document.getElementById("case-resume");

  if (category) {
    category.textContent =
      categories[p.categorie] || "Réalisation";
  }

  if (title) {
    title.textContent = p.titre || "Projet";
  }

  if (resume) {
    resume.textContent = p.resume || "";
  }

  if (modern && p.sousTitre && title) {
    title.insertAdjacentElement(
      "afterend",
      make("p", p.sousTitre, "case-project-subtitle")
    );
  }

  /* ---------- Image principale ---------- */

  const image = document.getElementById("case-image");
  const imageWrap = document.getElementById(
    "case-image-wrap"
  );

  const imageUrl = safeLink(p.image);

  if (image && imageWrap) {
    imageWrap.hidden = true;

    if (imageUrl) {
      image.src = imageUrl;
      image.alt = `Illustration : ${p.titre || "Projet"}`;

      image.onload = () => {
        imageWrap.hidden = false;
      };

      image.onerror = () => {
        imageWrap.hidden = true;
      };
    }
  }

  /* ---------- Création des rubriques ---------- */

  function section(anchor, heading) {
    const el = make("section", null, "case-section");

    el.id = anchor;
    el.append(make("h2", heading));

    root.append(el);

    const link = make("a", heading);
    link.href = `#${anchor}`;

    nav.append(link);

    return el;
  }

  function paragraph(anchor, heading, value) {
    if (
      typeof value !== "string" ||
      !value.trim()
    ) return;

    const bloc = section(anchor, heading);

    // Texte aéré : un retour à la ligne = un paragraphe, et les blocs
    // trop longs sont découpés par groupes de phrases.
    splitParagraphs(value).forEach(texte => {
      bloc.append(make("p", texte));
    });
  }

  function splitParagraphs(value) {
    const blocs = value
      .split(/\s*\n\s*/)
      .map(t => t.trim())
      .filter(Boolean);

    const resultat = [];

    blocs.forEach(bloc => {
      if (bloc.length <= 340) {
        resultat.push(bloc);
        return;
      }

      const phrases = bloc.split(
        /(?<=[.!?])\s+(?=[A-ZÀ-ÖØ-Ý«“"(])/
      );

      let courant = "";

      phrases.forEach(phrase => {
        if (courant && (courant + " " + phrase).length > 340) {
          resultat.push(courant);
          courant = phrase;
        } else {
          courant = courant ? courant + " " + phrase : phrase;
        }
      });

      if (courant) resultat.push(courant);
    });

    return resultat;
  }

  function list(
    anchor,
    heading,
    values,
    className = "case-simple-list"
  ) {
    if (
      !Array.isArray(values) ||
      !values.length
    ) return;

    const bloc = section(anchor, heading);

    const ul = make(
      "ul",
      null,
      className
    );

    values.filter(Boolean).forEach(value => {
      ul.append(make("li", value));
    });

    bloc.append(ul);
  }

  // Objectifs : une majuscule à chaque entrée, liste à flèches.
  function afficherObjectifs(value) {
    const items = (Array.isArray(value) ? value :
      typeof value === "string" ? value.split(/\s*;\s*/) : [])
      .map(item => String(item).trim())
      .filter(Boolean)
      .map(item => item.charAt(0).toLocaleUpperCase("fr") + item.slice(1));
    if (items.length) list("objectifs", "Objectifs pédagogiques", items, "case-objectives");
  }

  // Structure éditoriale commune aux projets universitaires et professionnels.
  const afficherChiffres = Array.isArray(p.indicateurs)
    && p.indicateurs.length
    && (p.categorie !== "pro" || p.sousCategorie === "formation");
  if(afficherChiffres){
    const bloc=section("chiffres", "Chiffres clés");
    const grid=make("div",null,"case-key-figures");
    p.indicateurs.forEach(item=>{
      const card=make("div",null,"case-key-figure");
      card.append(make("strong",item.valeur),make("span",item.label));
      if(item.source)card.append(make("small",item.source,"indicator-source"));
      grid.append(card);
    });
    bloc.append(grid);
  }

  // Métadonnées condensées, sans multiplier les grandes rubriques.
  const informations=[["Date",p.date],["Public",p.publicCible],["Format",p.format],["Durée",p.duree]]
    .filter(([,v])=>typeof v==="string"&&v.trim());
  if(informations.length){
    const dl=make("dl",null,"case-info-list compact-info");
    informations.forEach(([label,value])=>{
      const el=make("div",null,"case-info-item");
      el.append(make("dt",label),make("dd",value));dl.append(el);
    });
    if (p.categorie === "pro") {
      // Carte à révélation douce : survol souris, activation tactile ou clavier.
      const card = make("div", null, "case-details-flip");
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-expanded", "false");
      card.setAttribute("aria-label", "Afficher les informations pratiques du projet");
      const inner = make("div", null, "case-details-inner");
      const front = make("div", null, "case-details-front");
      front.setAttribute("aria-hidden", "false");
      front.append(make("span", "Informations pratiques", "case-details-title"));
      front.append(make("span", "Survoler pour découvrir · toucher pour afficher", "case-details-hint"));
      const back = make("div", null, "case-details-back");
      back.setAttribute("aria-hidden", "true");
      back.append(make("p", "Informations pratiques", "case-details-back-title"), dl);
      inner.append(front, back);
      card.append(inner);
      const reveal = shown => {
        card.classList.toggle("is-revealed", shown);
        card.setAttribute("aria-expanded", String(shown));
        card.setAttribute("aria-label", shown
          ? "Masquer les informations pratiques du projet"
          : "Afficher les informations pratiques du projet");
        front.setAttribute("aria-hidden", String(shown));
        back.setAttribute("aria-hidden", String(!shown));
      };
      card.addEventListener("pointerenter", event => {
        if (event.pointerType === "mouse" || event.pointerType === "pen") reveal(true);
      });
      card.addEventListener("pointerleave", event => {
        if (event.pointerType === "mouse" || event.pointerType === "pen") reveal(false);
      });
      card.addEventListener("click", event => {
        if (event.detail === 0) return; // clavier géré ci-dessous
        if (event.pointerType !== "mouse" && event.pointerType !== "pen") {
          reveal(!card.classList.contains("is-revealed"));
        }
      });
      card.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          reveal(!card.classList.contains("is-revealed"));
        }
        if (event.key === "Escape") reveal(false);
      });
      root.append(card);
    } else {
      root.append(dl);
    }
  }

  const intro=section("presentation","Présentation et besoin identifié");
  const introduction=p.presentation || p.contexte || p.resume;
  if(introduction)intro.append(make("p",introduction));
  // Le besoin est distinct de la présentation lorsqu'il a été explicitement décrit.
  if(p.presentation && p.contexte && p.presentation.trim()!==p.contexte.trim())
    intro.append(make("p",p.contexte,"case-context"));
  if(p.problematique)intro.append(make("p",p.problematique,"case-question"));

  afficherObjectifs(p.objectifs);
  // La démarche est affichée en plus du rôle lorsque les deux sont renseignés.
  if(p.demarche && p.role)paragraph("demarche","Démarche et outils",p.demarche);
  const role=p.role || p.demarche;
  if(role)paragraph("role","Mon rôle et mes réalisations",role);
  if(Array.isArray(p.etapes) && p.etapes.length){
    list("etapes","Étapes du projet",
      p.etapes.map(e=>e && e.titre ? (e.description ? `${e.titre} : ${e.description}` : e.titre) : ""),
      "case-objectives");
  }
  if(p.resultats)paragraph("resultats","Résultats et impact",p.resultats);
  paragraph("bilan","Bilan",p.bilan);
  paragraph("perspectives","Perspectives",p.perspectives);
  // Les productions sont insérées ci-dessous ; les compétences sont déplacées à la fin.

  /* ==========================================
     GALERIE DES LIVRABLES
     COMMUNE AUX DEUX FORMATS
     ========================================== */

  const ressources = Array.isArray(p.ressources)
    ? p.ressources.filter(
        r => r && safeLink(r.url)
      )
    : [];

  if (ressources.length) {

    const bloc = section(
      "ressources",
      "Consulter les productions"
    );

    if (p.precisionRessources) {
      bloc.append(
        make(
          "p",
          p.precisionRessources,
          "precision-ressources"
        )
      );
    }

    const grille = make(
      "div",
      null,
      "livrables-grid"
    );

    ressources.forEach(r => {
      const url = safeLink(r.url);
      const label = r.label || "Livrable du projet";

      const pdf = /\.pdf(?:[?#]|$)/i.test(url);
      const video =
        /\.(mp4|webm|ogg)(?:[?#]|$)/i.test(url);
      const picture =
        /\.(png|jpe?g|webp|gif)(?:[?#]|$)/i.test(url);

      const card = make(
        "article",
        null,
        "livrable-card"
      );

      const preview = make(
        "div",
        null,
        "livrable-preview"
      );

      const thumbnail = safeLink(r.imageApercu);

      if (r.apercu !== false && video) {

        const el = make("video");

        el.src = url;
        el.controls = true;
        el.preload = "metadata";
        el.playsInline = true;

        if (thumbnail) el.poster = thumbnail;

        el.setAttribute(
          "aria-label",
          `Vidéo : ${label}`
        );

        preview.append(el);

      } else if (
        r.apercu !== false &&
        thumbnail
      ) {

        const el = make("img");

        el.src = thumbnail;
        el.alt = `Aperçu de ${label}`;
        el.loading = "lazy";

        preview.append(el);

      } else if (
        r.apercu !== false &&
        pdf
      ) {

        const el = make("iframe");
        const pdfUrl = new URL(url);

        pdfUrl.hash = "page=1&view=FitH";

        el.src = pdfUrl.href;
        el.title = `Aperçu PDF : ${label}`;
        el.loading = "lazy";

        preview.append(el);

      } else if (
        r.apercu !== false &&
        picture
      ) {

        const el = make("img");

        el.src = url;
        el.alt = `Aperçu de ${label}`;
        el.loading = "lazy";

        preview.append(el);

      } else {

        const labelType = video
          ? "▶️ Vidéo"
          : pdf
            ? "📄 Document PDF"
            : picture
              ? "🖼️ Image"
              : "🔗 Ressource en ligne";

        preview.append(
          make(
            "span",
            labelType,
            "livrable-placeholder"
          )
        );
      }

      const content = make(
        "div",
        null,
        "livrable-content"
      );

      const link = make(
        "a",
        video
          ? "Visionner la vidéo ↗"
          : pdf
            ? "Consulter le PDF ↗"
            : picture
              ? "Voir l'image ↗"
              : "Consulter la ressource ↗",
        "livrable-link"
      );

      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      content.append(
        make("h3", label),
        link
      );

      card.append(
        preview,
        content
      );

      grille.append(card);
    });

    bloc.append(grille);
  }

  // Projets sans ressource publique : leurs livrables sont présentés
  // uniquement en fin de fiche, sans créer de fausses URLs.
  if (!ressources.length && Array.isArray(p.livrables) && p.livrables.length) {
    list("livrables", "Consulter les productions", p.livrables, "case-objectives");
  }

  // Compétences transversales : mots-clés courts, conservés en fin de fiche.
  if(Array.isArray(p.competences) && p.competences.length){
    const compact=p.competences.map(v=>String(v).replace(/^Conception de supports pédagogiques$/i,"Supports pédagogiques")
      .replace(/^Analyse des besoins de formation$/i,"Analyse des besoins")
      .replace(/^Accompagnement au développement des compétences$/i,"Accompagnement")
      .replace(/^Évaluation des apprentissages$/i,"Évaluation")
      .replace(/^Co-conception interprofessionnelle$/i,"Co-conception")
      .replace(/^Conception d['’]activités pédagogiques$/i,"Activités pédagogiques"));
    list("competences","Compétences mobilisées",compact,"case-tags");
  }
})();
