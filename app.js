/* GSilvetti – navigation par catégories et carrousels accessibles */
(() => {
  "use strict";
  const EMAIL = "silvetti.giovanni@hotmail.fr";
  const DATA = typeof PROJETS !== "undefined" && Array.isArray(PROJETS) ? PROJETS : [];
  const NAMES = {m1:"Master 1",m2:"Master 2",pro:"Expérience professionnelle"};
  const GROUPS = [
    {key:"formation",name:"Formations",test:p=>p.sousCategorie==="formation"},
    {key:"ressource",name:"Ressources et outils pédagogiques",test:p=>p.sousCategorie==="ressource"},
    {key:"autres",name:"Projets & communication",test:p=>!["formation","ressource"].includes(p.sousCategorie)}
  ];
  function node(tag, cls, text) {
    const e=document.createElement(tag);
    if(cls) e.className=cls;
    if(text!==undefined) e.textContent=text;
    return e;
  }
  function urlFor(p) {return "projet.html?id="+encodeURIComponent(p.id);}
  function safeAsset(raw){return typeof raw==="string" && raw.trim() && !/^(?:javascript|data|vbscript):/i.test(raw.trim()) ? raw.trim() : null;}
  function createCard(p, withSummary) {
    const card=node("article","project-card");
    const art=node("div","project-art art-"+p.categorie);
    const img=safeAsset(p.image);
    if(img){
      art.classList.add("has-image");
      art.style.backgroundImage=`url(${JSON.stringify(img)})`;
    }
    const body=node("div","project-body");
    body.append(node("span","tag",NAMES[p.categorie]||"Projet"));
    const heading=node("h3");
    const headingLink=node("a","project-title-link",p.titre||"Projet sans titre");
    headingLink.href=urlFor(p);
    if(p.statut==="En cours de réalisation")heading.append(p.titre||"Projet sans titre");
    else heading.append(headingLink);
    body.append(heading);
    if(withSummary && typeof p.resume==="string" && p.resume.trim()){
      body.append(node("p","project-summary",p.resume.split(/\s*\n\s*/)[0].trim()));
    }
    if(p.statut==="En cours de réalisation") {
      body.append(node("span","project-status","En cours de réalisation"));
    }else{
      const a=node("a","project-link","Voir la fiche complète →");
      a.href=urlFor(p);body.append(a);
    }
    card.append(art,body);return card;
  }
  function renderCarousel(list,parent,key){
    const viewport=node("div","project-carousel");
    viewport.id="carousel-"+key;
    viewport.tabIndex=0;
    viewport.setAttribute("aria-label","Carrousel de réalisations – "+(NAMES[key]||key));
    list.forEach(p=>viewport.append(createCard(p)));
    parent.append(viewport);
    if(!list.length){parent.append(node("p","empty-projects","Aucune réalisation disponible pour le moment."));return;}
    const controls=node("div","project-carousel-controls");
    const prev=node("button","project-carousel-button","← Précédent"); prev.type="button";
    const counter=node("span","project-carousel-counter");counter.setAttribute("aria-live","polite");
    const next=node("button","project-carousel-button","Suivant →");next.type="button";
    controls.append(prev,counter,next);parent.append(controls);
    const step=()=>{const item=viewport.querySelector(".project-card");return item?item.getBoundingClientRect().width+(parseFloat(getComputedStyle(viewport).gap)||0):0;};
    const update=()=>{
      const s=step()||1; const index=Math.min(list.length,Math.round(viewport.scrollLeft/s)+1);
      counter.textContent=`${index} / ${list.length}`;
      prev.disabled=viewport.scrollLeft<3;
      next.disabled=viewport.scrollLeft+viewport.clientWidth>=viewport.scrollWidth-3;
    };
    const move=dir=>viewport.scrollBy({left:dir*step(),behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"});
    prev.addEventListener("click",()=>move(-1));next.addEventListener("click",()=>move(1));
    viewport.addEventListener("scroll",update,{passive:true});window.addEventListener("resize",update);requestAnimationFrame(update);
  }
  // Sélection mise en avant sur la page d'accueil, distincte des carrousels.
  const featured = document.getElementById("featured-projects");
  if (featured) {
    const preferred = [
      "formation-moodle-communication",
      "chaque-minute-compte",
      "formation-fablab-sorbonne",
      "formation-ioa-fondamentaux",
      "formation-sse-fondamentaux",
      "formation-amavi-professionnelle"
    ];
    const selection = preferred
      .map(id => DATA.find(p => p && p.id === id))
      .filter(Boolean);
    selection.forEach(p => featured.append(createCard(p)));
    const prev = document.getElementById("featured-prev");
    const next = document.getElementById("featured-next");
    const counter = document.getElementById("featured-count");
    if (!selection.length) {
      featured.closest(".featured-carousel-shell").hidden = true;
    } else {
      const getStep = () => {
        const card = featured.querySelector(".project-card");
        return card ? card.getBoundingClientRect().width + (parseFloat(getComputedStyle(featured).gap) || 0) : 1;
      };
      const update = () => {
        const first = Math.min(selection.length, Math.round(featured.scrollLeft / getStep()) + 1);
        const visible = Math.max(1, Math.round((featured.clientWidth + (parseFloat(getComputedStyle(featured).gap) || 0)) / getStep()));
        counter.textContent = `${first}–${Math.min(selection.length,first + visible - 1)} sur ${selection.length}`;
        prev.disabled = featured.scrollLeft < 3;
        next.disabled = featured.scrollLeft + featured.clientWidth >= featured.scrollWidth - 3;
      };
      const scrollOne = direction => featured.scrollBy({left: direction * getStep(), behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth"});
      prev.addEventListener("click", () => scrollOne(-1));
      next.addEventListener("click", () => scrollOne(1));
      featured.addEventListener("scroll", update, {passive:true});
      window.addEventListener("resize", update);
      featured.addEventListener("keydown", event => {
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault();
          scrollOne(event.key === "ArrowRight" ? 1 : -1);
        }
      });
      // Glisser à la souris ; défilement tactile et pavé tactile natifs conservés.
      let down = false, moved = false, startX = 0, startScroll = 0;
      featured.addEventListener("pointerdown", event => {
        if (event.pointerType !== "mouse" || event.button !== 0) return;
        down = true; moved = false; startX = event.clientX; startScroll = featured.scrollLeft;
      });
      featured.addEventListener("pointermove", event => {
        if (!down) return;
        const distance = event.clientX - startX;
        if (Math.abs(distance) > 6) {
          moved = true;
          featured.classList.add("is-dragging");
          featured.scrollLeft = startScroll - distance;
        }
      });
      const stopDrag = () => {down = false; featured.classList.remove("is-dragging");};
      window.addEventListener("pointerup", stopDrag);
      window.addEventListener("pointercancel", stopDrag);
      featured.addEventListener("dragstart", e => e.preventDefault());
      featured.addEventListener("click", event => {
        if (moved) {event.preventDefault(); event.stopPropagation(); moved = false;}
      }, true);
      requestAnimationFrame(update);
    }
  }
  const catalogue=document.getElementById("catalogue-content");
  if(catalogue){
    const query=new URLSearchParams(location.search);
    const key=Object.hasOwn(NAMES,query.get("categorie"))?query.get("categorie"):null;
    document.title=(key ? NAMES[key] : "Mes réalisations")+" | Giovanni Silvetti";
    document.getElementById("catalogue-title").textContent=key ? NAMES[key] : "Mes réalisations";
    const descriptions={
      m1:"Projets menés dans le cadre des UE du Master 1.",
      pro:"Formations, ressources pédagogiques et projets menés dans le cadre de mon activité professionnelle."
    };
    document.getElementById("catalogue-desc").textContent=descriptions[key]||"";
    document.querySelectorAll("[data-cat-link]").forEach(a=>{
      a.classList.toggle("active",a.dataset.catLink===key);
      if(a.dataset.catLink===key)a.setAttribute("aria-current","page");
      else a.removeAttribute("aria-current");
    });
    if(!key){
      const nav=document.getElementById("catalogue-categories");
      if(nav)nav.hidden=true;
      const grid=node("div","pathway-grid");
      ["m1","m2","pro"].forEach(cat=>{
        const items=DATA.filter(p=>p&&p.id&&p.categorie===cat);
        const count=items.length;
        const a=node("a","pathway-card");
        a.href="realisations.html?categorie="+cat;
        a.append(node("span","pathway-eyebrow",cat==="pro"?"Expérience de terrain":"Parcours universitaire"));
        a.append(node("h2",null,NAMES[cat]));
        if(cat === "m2") {
          a.append(node("p","pathway-inprogress","Je suis actuellement en cours de cursus de Master 2. Les projets de cette année sont donc en cours de réalisation et seront présentés au fur et à mesure de leur avancement."));
        } else {
          a.append(node("p",null,count+" réalisation"+(count>1?"s":"")+" à découvrir"));
          const preview=node("ul","pathway-preview");
          if(cat==="pro"){
            // Les titres des formations se ressemblent : on montre plutôt les trois familles.
            GROUPS.forEach(g=>{
              const n=items.filter(g.test).length;
              if(n)preview.append(node("li",null,g.name+" · "+n));
            });
          }else{
            items.slice(0,3).forEach(item=>preview.append(node("li",null,item.titre||"Projet")));
          }
          a.append(preview);
          if(cat!=="pro"&&count>3)a.append(node("span","pathway-more","+ "+(count-3)+" autres"));
        }
        a.append(node("span","pathway-arrow","Explorer les réalisations →"));
        grid.append(a);
      });
      catalogue.append(grid);
    } else {
    if (key === "m2") {
      const notice=node("p","master2-notice","Je suis actuellement en cours de cursus de Master 2. Les projets associés à cette année sont en cours de réalisation ; leurs présentations et productions seront complétées progressivement.");
      catalogue.append(notice);
    }
    const selected=DATA.filter(p=>p&&p.id&&p.categorie===key);
    function group(title,items,id){
      if(!items.length)return;
      const sec=node("section","catalogue-group");sec.id=id;
      if(title)sec.append(node("h2",null,title));
      const grid=node("div","catalogue-grid");items.forEach(p=>grid.append(createCard(p,true)));sec.append(grid);catalogue.append(sec);
    }
    if(key==="pro"){
      GROUPS.forEach(g=>group(g.name,selected.filter(g.test),"groupe-"+g.key));
    }else group("",selected,"toutes-les-realisations");
    if(!selected.length)catalogue.append(node("p","empty-projects","Aucune réalisation pour le moment."));
    }
  }
  const mobileMenu=document.querySelector(".menu-toggle"),nav=document.querySelector(".desktop-nav");
  if(mobileMenu&&nav){
    mobileMenu.addEventListener("click",()=>{const open=nav.classList.toggle("open");mobileMenu.setAttribute("aria-expanded",String(open));mobileMenu.textContent=open?"×":"☰";});
    nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");mobileMenu.setAttribute("aria-expanded","false");mobileMenu.textContent="☰";}));
  }
  document.querySelectorAll(".flip-card").forEach(c=>{
    const flip=()=>{c.classList.toggle("is-flipped");c.setAttribute("aria-pressed",String(c.classList.contains("is-flipped")));};
    c.addEventListener("click",flip);
    c.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();flip();}});
  });
  const emailEl=document.getElementById("email-placeholder");if(emailEl)emailEl.textContent=EMAIL;
  const year=document.getElementById("year");if(year)year.textContent=new Date().getFullYear();
  const form=document.getElementById("contact-form");
  if(form)form.addEventListener("submit",e=>{
    e.preventDefault();const data=new FormData(form);
    const subject=encodeURIComponent(data.get("objet")||"");
    const body=encodeURIComponent(`Bonjour,\n\n${data.get("message")||""}\n\nDe : ${data.get("nom")||""}\nE-mail : ${data.get("email")||""}`);
    location.href=`mailto:${EMAIL}?subject=${subject}&body=${body}`;
  });
})();
