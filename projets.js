const PROJETS = [
  /* EXEMPLE DÉSACTIVÉ : retire les signes /* et * / seulement après avoir compris la structure.
  {
    id: "mon-premier-projet",
    categorie: "m1",
    titre: "Titre de ma réalisation",
    resume: "Deux phrases pour présenter la réalisation et son intérêt.",
    contexte: "Dans quel cadre le projet a-t-il été réalisé ?",
    objectifs: "Quels étaient les objectifs pédagogiques ?",
    demarche: "Quelles étapes, méthodes et outils ai-je utilisés ?",
    role: "Quelle a été ma contribution personnelle ?",
    resultats: "Qu'ai-je produit, évalué ou appris ?",
    image: "images/mon-projet.jpg",
    ressources: [
      { label: "Consulter le support PDF", url: "documents/mon-support.pdf" }
    ]
  },
  */

// PROJET 1 : FORMATION MOODLE

{
  id: "formation-moodle-communication",
  categorie: "m1",
  titre: "Conception d’un parcours de formation sur Moodle : communication managériale et gestion des tensions",
  resume: "Parcours de formation en ligne de 13 modules sur Moodle, consacré à la communication managériale, à la communication non violente (CNV) et à la gestion des conflits. \n Conçu en équipe de 4 étudiants, il associe ressources multimédias, activités interactives et évaluations des acquis.",
  contexte: "Dans le cadre de l’UE « Usage raisonné des outils et médias numériques en formation », nous devions concevoir une formation en ligne et justifier le choix de chaque outil et média numérique mobilisé. \n Notre équipe de 4 étudiants a conçu un parcours Moodle consacré à la communication managériale et à la gestion des tensions, mené sur 4 mois à raison d’environ 4 heures par semaine. \n Le parcours compte 13 modules répartis en trois thématiques : les fondamentaux de la communication, la communication non violente (CNV) et la gestion des conflits. Il s’ouvre sur un quiz de positionnement, puis chaque module alterne apports théoriques, activités interactives, exercices pratiques et fiche de synthèse. \n Les outils ont été choisis selon la nature de chaque ressource : Genially, Animaker, Narakeet, H5P et Canva.",
  objectifs: "À l’issue de la formation, l’apprenant sera capable de : identifier les fondamentaux d’une communication managériale efficace ; distinguer les postures « chacal » et « girafe » et appliquer les principes de la communication non violente ; utiliser la méthode DESC pour aborder une situation de tension ; évaluer ses propres acquis grâce à des quiz et des exercices pratiques.",
  role: "J’ai conçu de bout en bout les modules 1 (fondamentaux de la communication), 5 (mode chacal ou girafe) et 7 (méthode DESC) : scénarisation pédagogique, vidéos animées (Animaker) avec voix de synthèse (Narakeet) et activités interactives (H5P). \n J’ai également créé le quiz d’auto-évaluation ainsi que les badges de chaque module sur Canva, en m’appuyant sur ChatGPT pour affiner leur rendu graphique. \n J’ai intégré l’ensemble de ces productions dans le parcours Moodle.",
  resultats: "Le projet a abouti à un parcours complet de 13 modules sur Moodle, comprenant des activités H5P, des évaluations et des fiches de synthèse. \n Il a été présenté à la promotion, qui l’a testé et évalué, et le groupe a obtenu la note maximale (120/120). \n Ce projet m’a permis de développer des compétences en scénarisation pédagogique, production de ressources multimédias, évaluation des acquis et travail d’équipe.",
  image: "images/presentationue4.png",
  ressources: [
    {
      label: "Fiche de présentation de la formation",
      url: "documents/fichepresentationformation.pdf",
      apercu: true
    },
    {
      label: "Support de présentation orale de la formation",
      url: "documents/ue4presentationoralformation.pdf",
      apercu: true
    },
     {
      label: "Vidéo : diaporama des éléments clés de la formation",
      url: "documents/diapomoodle.mp4",
      apercu: true
    },
    {
      label: "Vidéo : défilement complet du parcours Moodle",
      url: "documents/moodlevideo.mp4",
      apercu: true
    }
  ],
},

// PROJET 2 : CHAQUE MINUTE COMPTE

{
  id: "chaque-minute-compte",
  categorie: "m1",
  titre: "Conception et développement d’un site web de sensibilisation aux gestes de premiers secours",
  resume: "Site web « Chaque minute compte – Les gestes qui sauvent », conçu et développé seul en HTML, CSS et JavaScript pour rendre accessibles à tous des informations essentielles de premiers secours. \n Il associe structuration de contenus pédagogiques, identité visuelle et interactivité, et est publié en ligne.",
  contexte: "Dans le cadre de l’UE « Identité numérique et communication professionnelle : dimension linguistique et interculturelle », qui aborde la communication professionnelle sur Internet, les écritures médiatiques et la conception de sites web, j’ai conçu seul un site de sensibilisation aux gestes de premiers secours, destiné au grand public. \n J’ai choisi cette thématique en m’appuyant sur mon expérience professionnelle dans le domaine de la santé. L’enjeu : rendre accessibles à tous des informations essentielles sur les gestes qui sauvent, présentées de façon claire et lisible. Le projet a été mené sur 1 mois. \n Le site est organisé en 7 fiches thématiques : porter secours, arrêt cardiaque, défibrillateur, inconscience, étouffement, hémorragie et brûlures. JavaScript anime notamment le mouvement des cartes qui présentent les étapes d’intervention. \n Les visuels ont été créés avec ChatGPT ou proviennent de sites dont les sources sont citées. Une note d’intention et une note d’accompagnement documentent mes choix de conception.",
  objectifs: "À l’issue de la consultation du site, le visiteur sera capable de : suivre les étapes pour porter secours à une personne en danger ; reconnaître un arrêt cardiaque et utiliser un défibrillateur ; réagir face à une personne inconsciente, un étouffement, une hémorragie ou une brûlure. \n Côté conception, l’enjeu était de produire un site fonctionnel, à la navigation claire par thématique, présentant des contenus spécialisés de façon lisible.",
  role: "J’ai réalisé seul l’ensemble du projet, de la définition de la thématique à la mise en ligne : sélection et organisation des contenus, structuration des pages en HTML, design en CSS, développement des fonctionnalités en JavaScript et publication sur GitHub Pages. \n J’ai également rédigé la note d’intention et la note d’accompagnement. \n Ce projet m’a permis de mettre mes connaissances du secteur de la santé au service de la conception d’un support numérique de sensibilisation.",
  resultats: "Le projet a abouti à un site fonctionnel, consultable en ligne, proposant 7 fiches sur les gestes de premiers secours. \n Il a obtenu la note maximale (180/180). \n Il m’a permis de développer des compétences en structuration de contenus spécialisés, en conception d’interfaces et en développement web (HTML, CSS, JavaScript), que je pourrai mobiliser dans mes futurs projets d’ingénierie pédagogique.",
  image: "images/presentationue5.png",
  ressources: [
    {
      label: "Note d’intention",
      url: "documents/chaqueminutenoteintention.pdf",
      apercu: true
    },
    {
      label: "Note d’accompagnement",
      url: "documents/chaqueminutenoteaccompagnement.pdf",
      apercu: true
    },
    {
      label: "Découvrir le site « Chaque minute compte »",
      url: "https://silvettigiovanni-cpu.github.io/Chaque.minute.compte-les.gestes.qui.sauvent/",
      apercu: true,
      imageApercu: "images/chaqueminuteminiapercusite.png"
    }
  ]
},

// PROJET 3 : CREATION D'UNE VIDEO CAPSULE - ANALYSE RAPPORT COUR DES COMPTES

{
  id: "analyse-rapport-cour-des-comptes",
  categorie: "m1",
  titre: "Analyse critique d’un rapport de la Cour des comptes sur le numérique éducatif",
  resume: "Analyse du rapport de la Cour des comptes « Le service public numérique pour l’éducation : un concept sans stratégie, un déploiement inachevé », restituée sous forme d’une présentation vidéo d’environ 10 minutes. \n Ce travail porte un regard critique sur les politiques publiques du numérique éducatif.",
  contexte: "Dans le cadre de l’UE « Nouveaux enjeux de la formation et du numérique », qui vise à comprendre les enjeux politiques, économiques, industriels et pédagogiques du numérique dans la formation et l’éducation, chaque étudiant devait analyser un rapport institutionnel qui lui était attribué. \n Le rapport qui m’a été confié est celui de la Cour des comptes, « Le service public numérique pour l’éducation : un concept sans stratégie, un déploiement inachevé ». Il s’agissait d’en proposer une analyse critique, restituée sous la forme d’une présentation vidéo d’environ 10 minutes. \n Ce travail a été réalisé individuellement.",
  objectifs: "Ce projet visait à : analyser un rapport institutionnel consacré au numérique éducatif ; identifier les enjeux politiques, économiques et pédagogiques du déploiement des technologies numériques dans l’éducation ; comprendre le rôle des acteurs institutionnels ; construire une analyse argumentée du document et la restituer dans un format audiovisuel structuré.",
  demarche: "J’ai analysé le rapport en repérant ses constats, ses recommandations et les acteurs concernés, puis j’ai organisé les informations retenues autour des enjeux institutionnels, politiques, économiques et éducatifs. \n J’ai ensuite construit une analyse critique mettant en évidence les apports et les limites du rapport. Je l’ai mise en forme dans une vidéo d’environ 10 minutes, dont les supports ont été réalisés sous PowerPoint puis montés avec iMovie.",
  role: "J’ai réalisé seul l’ensemble du travail : analyse du rapport, sélection et organisation des informations, rédaction de l’argumentation et production de la présentation vidéo.",
  resultats: "Le projet a abouti à une présentation vidéo d’environ 10 minutes et a obtenu la note maximale (180/180). \n Mon analyse souligne la rigueur documentaire du rapport et l’attention portée aux inégalités. Elle en interroge aussi les limites : la place accordée aux dimensions institutionnelles et financières l’emporte sur l’analyse des transformations pédagogiques et des besoins des enseignants. \n Ce travail m’a permis de développer des compétences en analyse documentaire, en argumentation critique et en communication de résultats.",
  image: "images/presentationue3.png",
  ressources: [
    {
      label: "Présentation vidéo : analyse du rapport de la Cour des comptes",
      url: "documents/analysecoursdescomptes.mp4",
      apercu: true,
      imageApercu: "images/presentationue3.png"
    }
  ]
},

// PROJET 4 : CONCEPTION ET GESTION DE PROJET : FORMATION PLAN AMAVI

{
  id: "formation-amavi-urgences",
  categorie: "m1",
  titre: "Conception et gestion d’un projet de formation aux situations sanitaires exceptionnelles (AMaVi)",
  resume: "Projet de formation destiné aux professionnels d’un service d’urgences, pour renforcer leur préparation aux situations sanitaires exceptionnelles (SSE), notamment en cas d’afflux massif de victimes (AMaVi). \n Il articule analyse des besoins, ingénierie pédagogique, gestion de projet et simulation professionnelle.",
  contexte: "Dans le cadre de l’UE « Concevoir et gérer un projet de formation », j’ai conçu seul un projet de formation à partir d’un besoin que je connais par mon expérience professionnelle dans le domaine de la santé : préparer les équipes d’un service d’urgences aux situations sanitaires exceptionnelles (SSE), notamment aux afflux massifs de victimes (AMaVi). \n Pour porter le projet, j’ai imaginé une identité de formation : VITAE Formation Santé. \n Cette UE était couplée à un MOOC de gestion de projet de l’École centrale de Lille, suivi à distance et validé par un diplôme.",
  objectifs: "Ce projet visait à : analyser des besoins de formation sur des terrains diversifiés ; cadrer, planifier et piloter un projet, en s’appuyant sur des outils de gestion de projet et de stratégie (SWOT, WBS, diagramme de Gantt, RACI) ; construire un dispositif pédagogiquement cohérent, réalisable et adapté au terrain ; présenter son projet devant un public. \n Côté apprenants, la formation vise à ce que chaque professionnel soit capable d’appliquer la conduite à tenir en cas d’AMaVi, selon sa fonction (personnel médical, administratif ou paramédical).",
  demarche: "J’ai défini le besoin de formation, puis cadré le projet sur le plan organisationnel : planification des activités, répartition des rôles et choix argumentés des outils. \n J’ai ensuite scénarisé le dispositif pédagogique et illustré le futur dispositif par des ressources et des prototypes : présentation, fiches réflexes, dossier patient, fiche de simulation. \n L’ensemble est formalisé dans une note de cadrage.",
  role: "J’ai élaboré seul le projet de formation et rédigé la note de cadrage. \n J’ai également créé l’identité visuelle du projet et conçu les ressources pédagogiques et prototypes qui l’illustrent.",
  resultats: "Le travail a abouti à une note de cadrage présentant une proposition de formation structurée, accompagnée d’outils de pilotage, de scénarios pédagogiques et de prototypes. Il a obtenu la note maximale (240/240). \n Il m’a permis de développer des compétences en analyse de besoins, gestion de projet et scénarisation pédagogique, en articulant expertise métier et méthodes d’ingénierie de formation. \n Ce travail correspond à la conception et à la planification du dispositif dans un cadre universitaire, et non à son déploiement auprès de professionnels.",
  image: "images/presentationue1.png",
  precisionRessources: "À l’exception de la note de cadrage et du diplôme du MOOC, les ressources ci-dessous ont été conçues pour une simulation de formation réalisée dans le cadre de cette UE. Elles ont une visée pédagogique et universitaire et ne correspondent pas à une formation effectivement dispensée.",
  ressources: [
    {
      label: "Note de cadrage du projet",
      url: "documents/notecadrageue1.pdf",
      apercu: true
    },
    {
      label: "Diplôme du MOOC de gestion de projet (École centrale de Lille)",
      url: "documents/diplomemooc.pdf",
      apercu: true
    },
    {
      label: "Support de formation (présentation PowerPoint)",
      url: "documents/presentationpptamavi.pdf",
      apercu: true
    },
    {
      label: "Fiches réflexes : personnel médical",
      url: "documents/fichereflexepm.pdf",
      apercu: true
    },
    {
      label: "Fiches réflexes : personnel administratif et paramédical",
      url: "documents/fichereflexepnm.pdf",
      apercu: true
    },
    {
      label: "Dossier papier d’un patient",
      url: "documents/dossierpapieramavi.pdf",
      apercu: true
    },
    {
      label: "Fiche de simulation pédagogique",
      url: "documents/ficheformationamavisimulation.pdf",
      apercu: true
    }
  ]
},

// PROJET 5 : ANALYSE SEMIOTIQUE GLEEDEN

{
  id: "analyse-semiotique-gleeden",
  categorie: "m1",
  titre: "Analyse sémiotique d’une campagne publicitaire de Gleeden",
  resume: "Analyse sémiotique d’une affiche publicitaire de Gleeden, plateforme de rencontres extra-conjugales, pour décrypter la construction du message, les choix graphiques, les procédés rhétoriques et les représentations sociales qu’elle véhicule. \n Le travail est restitué sous forme d’un diaporama de 19 diapositives, présenté à l’oral en 10 minutes.",
  contexte: "Dans le cadre de l’UE « Approches fondamentales des sciences de l’information et de la communication », qui initie aux concepts de la sémiologie et à l’analyse critique des images et des messages médiatiques, j’ai réalisé seul l’analyse sémiotique d’une affiche publicitaire de Gleeden, plateforme de rencontres extra-conjugales. \n J’ai choisi cette campagne pour la richesse de ses signes et pour la polémique qu’elle suscite. \n Le travail est restitué sous la forme d’un diaporama de 19 diapositives, présenté à l’oral en 10 minutes.",
  objectifs: "Ce projet visait à : identifier et analyser les signes d’une communication publicitaire ; distinguer les dimensions iconique, plastique, linguistique et symbolique ; comprendre les relations entre texte et image ; analyser les procédés rhétoriques et les références culturelles ; porter un regard critique sur les stratégies de communication.",
  demarche: "J’ai analysé l’affiche selon quatre dimensions : \n l’analyse iconique (éléments représentés et leur disposition) ; l’analyse plastique (couleurs, typographie, hiérarchisation du message) ; l’analyse linguistique (slogan, jeux de mots, figures de style, fonction d’ancrage du texte) ; l’analyse symbolique (références au fruit défendu, à la santé et aux normes sociales). \n J’ai ensuite étudié la dimension polémique de la campagne et les réactions qu’elle suscite.",
  role: "J’ai réalisé seul l’ensemble du travail : choix de la campagne, identification des signes et des procédés de communication, structuration de l’analyse, conception d’un diaporama de 19 diapositives et présentation orale de 10 minutes.",
  resultats: "Le projet a abouti à une analyse structurée de la campagne, qui met en évidence la complémentarité du texte et de l’image, le rôle de la symbolique et les mécanismes de provocation de la stratégie de communication. \n Il a obtenu la note maximale (120/120).",
  bilan: "Ce travail m’a permis d’approfondir ma compréhension de la construction du sens et de développer mon regard critique sur les supports de communication. \n Ces compétences sont transférables à l’ingénierie pédagogique : analyser et concevoir des ressources visuelles, interroger les messages transmis et adapter la communication aux publics visés.",
  perspectives: "Réinvestir les principes de la sémiologie dans la conception de supports pédagogiques numériques : choix de typographie, de couleurs et de symboles, hiérarchisation de l’information, complémentarité entre texte et image.",
  image: "images/presentationue2.png",
  ressources: [
    {
      label: "Support de présentation : analyse sémiotique d’une campagne de Gleeden",
      url: "documents/analysesemiotiquegleeden.pdf",
      apercu: true
    }
  ]
},

// PROJET 6 : CREATION D'UNE FORMATION ARTICULATE : FABLAB

{
  id: "formation-fablab-sorbonne",
  categorie: "m1",
  titre: "Conception d’un module e-learning sur Articulate 360 : règles et bonnes pratiques du FabLab de Sorbonne Université",
  resume: "Module de formation interactif conçu sur Articulate 360 pour sensibiliser les étudiants à la réglementation et aux bonnes pratiques d’utilisation des équipements du FabLab de Sorbonne Université. \n Pensé pour un suivi en autonomie, il est consultable en ligne et délivre un badge de validation permettant d’attester la formation auprès du FabLab.",
  contexte: "Dans le cadre de l’UE « Usage raisonné des outils et médias numériques en formation », j’ai conçu seul un module e-learning destiné à sensibiliser les étudiants à la réglementation et aux bonnes pratiques d’utilisation des équipements du FabLab de Sorbonne Université. \n Il s’agissait de répondre aux besoins et aux exigences du FabLab, en justifiant le choix des fonctionnalités d’Articulate 360 mobilisées. Le projet représente environ 60 heures de travail.",
  objectifs: "À l’issue de la formation, l’étudiant sera capable de : présenter le FabLab (histoire, valeurs, objectifs) ; appliquer les règles d’inscription et expliquer l’importance de badger à l’entrée et à la sortie ; identifier les machines mises à disposition ; appliquer les règles de sécurité propres à chacune (équipements de protection individuelle, etc.) ; se repérer dans les locaux.",
  role: "J’ai conçu et réalisé seul l’ensemble du module : cahier des charges, structuration des contenus, scénarisation de l’interactivité, programmation des conditions d’obtention des badges et production sur Articulate 360. \n Fonctionnalités mobilisées selon leur utilité pédagogique : calques et éléments cliquables pour découvrir les contenus à son rythme, quiz pour vérifier les acquis, menu pour naviguer librement, changements de couleur pour guider l’attention, image 360° pour se repérer dans les locaux. Les variables servent au système de validation : le badge d’un module n’est délivré que si son quiz a été réalisé, et l’obtention de tous les badges débloque un badge final, présentable au FabLab pour justifier l’accès aux locaux. \n Le module est conçu pour être suivi en autonomie et sans durée imposée : l’apprenant avance à son rythme, peut quitter la formation et y revenir.",
  resultats: "Le projet a abouti à un module de formation numérique fonctionnel, consultable en ligne via Articulate Review, avec un parcours de validation par badges. \n Il a obtenu la note maximale (120/120). \n Il m’a permis de développer des compétences en structuration de contenus, en scénarisation de l’interactivité et en conception de ressources e-learning avancées (calques, variables, quiz, image 360°).",
  bilan: "Cette réalisation m’a permis d’approfondir ma pratique de la conception pédagogique numérique et de prendre en main Articulate 360. \n Elle m’a aussi amené à réfléchir à la place de l’interactivité, de l’ergonomie et des contraintes institutionnelles dans la création d’un module de formation.",
  perspectives: "Améliorer le module à partir de retours d’utilisateurs et, si possible, évaluer sa compréhension, son accessibilité et son efficacité auprès d’étudiants du FabLab.",
  image: "images/presentationformationfablab.png",
  ressources: [
    {
      label: "Cahier des charges de la formation FabLab",
      url: "documents/cahierdeschargesfablab.pdf",
      apercu: true
    },
    {
      label: "Découvrir la formation interactive",
      url: "https://360.eu.articulate.com/review/content/90dfa641-a69f-411d-a635-a071868ba896/review",
      apercu: true,
      imageApercu: "images/presentationformationfablab.png"
    }
  ]
},
];

const PROJETS_PRO = [

  /* ===============================================
     A. FORMATIONS PROFESSIONNELLES
     =============================================== */

// FORMATION 1 : IOA - FONDAMENTAUX

{
  id: "formation-ioa-fondamentaux",
  categorie: "pro",
  sousCategorie: "formation",

  titre: "Infirmier organisateur de l’accueil (IOA) – Fondamentaux",
  sousTitre: "Conception et animation d’une formation interne",
  role: "J’ai conçu et animé cette formation à partir des besoins recueillis par questionnaire auprès de l’encadrement du service et des infirmiers. J’ai élaboré le livret préparatoire, structuré les apports théoriques et organisé trois demi-journées de pratique en petits groupes de quatre personnes maximum, à partir de cas cliniques adaptés. \n J’ai également conçu l’évaluation des apprentissages : 20 cas cliniques dans lesquels l’apprenant analyse la situation, rédige le motif IOA, relève les critères de gravité éventuels, mentionne les soins à réaliser à l’accueil et pose un tri.",
  resultats: "À ce jour, 30 IDE ont été formés. Un questionnaire post-formation leur a été adressé, et tous y ont répondu : 85 % des IDE formés se sentent plus à l’aise pour assurer un accueil de qualité et réaliser un examen clinique de manière autonome. \n Les retours qualitatifs font état d’une appréhension réduite face à la prise de fonction de ce nouveau poste, d’une meilleure maîtrise perçue des protocoles et d’un temps d’échange apprécié.",
  indicateurs: [
    { valeur: "30", label: "IDE formés à ce jour" },
    {
      valeur: "85 %",
      label: "Des IDE formés se déclarent plus à l’aise après la formation",
      source: "Questionnaire post-formation envoyé aux 30 IDE formés, ayant tous répondu."
    }
  ],

  date: "Depuis novembre 2021 (formation toujours dispensée)",
  duree: "Livret de préparation à lire en amont (environ 2 h) ; 2 heures de formation théorique ; trois demi-journées d’accompagnement pratique",
  publicCible: "Infirmiers du service des urgences ayant six mois à un an d’ancienneté dans le service, en préparation de leur prise de fonction d’IOA.",
  format: "Formation interne en présentiel, avec livret préparatoire et accompagnement sur le terrain",

  resume: "Conception et animation d’une formation interne destinée à préparer les infirmiers à la fonction d’infirmier organisateur de l’accueil (IOA), en associant livret préparatoire, apports théoriques, accompagnement pratique et évaluation par cas cliniques.",
  presentation: "Créée dans le cadre de mes missions d’infirmier référent, cette formation était l’un des projets présentés lors de ma candidature à ce poste, et je l’ai mise en place dès ma prise de fonction. Elle accompagne les professionnels dans leur prise de fonction d’IOA et constitue une première étape de préparation, en amont d’une formation externe dispensée par un organisme certifié Qualiopi. \n Le livret préparatoire est envoyé environ un mois avant la formation et reste consultable sur l’intranet de l’établissement à partir de la prise de poste.",
  contexte: "La prise de fonction d’IOA mobilise des compétences spécifiques en évaluation clinique, en priorisation et en orientation des patients. Face aux difficultés rencontrées par les professionnels, et à partir d’un questionnaire adressé à l’encadrement et aux infirmiers du service, j’ai développé une formation interne adaptée aux besoins et aux spécificités organisationnelles du service.",
  problematique: "Comment préparer les infirmiers à l’exercice de la fonction d’IOA et favoriser une prise de fonction progressive, autonome et sécurisée ?",
  objectifs: [
      "Identifier le cadre réglementaire, les missions, les responsabilités et les limites d’intervention de l’IOA.",
      "Expliquer le rôle organisationnel de l’IOA dans la gestion des flux et la coordination du parcours patient aux urgences.",
      "Appliquer une démarche structurée d’accueil et de recueil des données cliniques à partir d’une situation simulée.",
      "Analyser les données d’une situation clinique afin de distinguer les signes de gravité et les éléments nécessaires à la priorisation des patients.",
      "Justifier une proposition de priorisation et d’orientation à partir d’un cas clinique, en s’appuyant sur les outils de tri et les protocoles institutionnels.",
      "Adapter sa communication aux patients, aux accompagnants et aux professionnels lors de situations d’accueil, notamment en contexte de stress ou de tension."
  ],
  competences: [
    "Analyse des besoins de formation",
    "Ingénierie pédagogique",
    "Conception de supports pédagogiques",
    "Animation de formation",
    "Accompagnement en situation de travail",
    "Évaluation des apprentissages"
  ],

  image: "images/presentationioafondamentaux.png",
  titreRessources: "Consulter les livrables",
  ressources: [
    {
      label: "Programme pédagogique de la formation IOA – Fondamentaux",
      url: "documents/formationioafondamentaux.pdf",
      apercu: true
    },
    {
      label: "Livret de préparation théorique",
      url: "documents/livretpedagogiqueioa.pdf",
      apercu: true
    },
    {
      label: "Support pédagogique de la formation",
      url: "documents/ioaformationfondamentaux.pdf",
      apercu: true
    },
    {
      label: "Support pédagogique des cas cliniques",
      url: "documents/ioacascliniques.pdf",
      apercu: true
    }
  ]
},

// FORMATION 2 : IOA - PERFECTIONNEMENT

{
  id: "ioa-perfectionnement",
  categorie: "pro",
  sousCategorie: "formation",

  titre: "Infirmier organisateur de l’accueil (IOA) – Perfectionnement",
  sousTitre: "Co-conception et co-animation d’une formation continue",
  role: "J’ai co-conçu et co-animé cette formation avec un médecin urgentiste. Elle est centrée sur la révision des fondamentaux, l’actualisation des protocoles et l’analyse des pratiques professionnelles. \n J’ai rédigé le support PowerPoint transmis aux participants après la formation, et co-animé les 12 sessions. \n J’ai fondé la conception sur une analyse des besoins menée auprès de deux publics : l’encadrement, qui souhaitait homogénéiser les pratiques, et les apprenants, qui souhaitaient revoir des points posant difficulté et faire le point sur les nouveautés et les nouvelles recommandations.",
  resultats: "À ce jour, 30 IDE ont été formés au cours de 12 sessions, tous ayant suivi au préalable la formation IOA – Fondamentaux. Un questionnaire de satisfaction a recueilli 19 réponses, toutes à 5/5. Les retours soulignent l’utilité des rappels, des échanges et du regard médical. \n Ces appréciations mesurent la satisfaction déclarée, et non une amélioration démontrée de la prise en charge.",
  indicateurs: [
    { valeur: "30", label: "IDE formés à ce jour" },
    { valeur: "12", label: "sessions organisées" },
    {
      valeur: "5/5",
      label: "Satisfaction déclarée (19 réponses)",
      source: "19 questionnaires de satisfaction recueillis après la formation, auprès des 30 IDE formés ; toutes les réponses sont à 5/5."
    }
  ],

  date: "Depuis janvier 2024 (formation toujours dispensée)",
  duree: "3 heures",
  publicCible: "Infirmiers exerçant déjà la fonction d’IOA et ayant suivi la formation IOA – Fondamentaux (prérequis)",
  format: "Formation interne en présentiel",

  resume: "Formation continue co-conçue et co-animée avec un médecin urgentiste pour actualiser les connaissances des IOA et favoriser l’harmonisation des pratiques à l’accueil des urgences. Elle fait suite à la formation IOA – Fondamentaux.",
  presentation: "Cette formation interne de perfectionnement, conçue en collaboration avec un médecin urgentiste, s’adresse aux infirmiers exerçant déjà la fonction d’IOA. Elle vise à actualiser leurs connaissances et à favoriser une réflexion collective sur les pratiques professionnelles. \n Elle s’inscrit dans la continuité de la formation IOA – Fondamentaux, dont le suivi est un prérequis : le parcours accompagne ainsi l’IOA de la prise de fonction jusqu’au maintien de ses compétences. Les 30 IDE formés au perfectionnement avaient tous suivi la formation Fondamentaux.",
  contexte: "Après la prise de fonction, les IOA ne bénéficiaient d’aucune remise à niveau. L’évolution des procédures et les écarts de pratiques observés sur le terrain ont fait émerger un besoin de formation continue. \n Le besoin a été analysé auprès de l’encadrement (homogénéiser les pratiques) et des apprenants (revoir des points difficiles, actualiser leurs connaissances sur les nouveautés et les nouvelles recommandations).",
  problematique: "Comment maintenir les compétences des IOA dans le temps et favoriser l’harmonisation de leurs pratiques ?",
  objectifs: [
    "Identifier et décrire les rôles, missions et responsabilités de l’IOA dans le parcours de soins aux urgences.",
    "Appliquer les principes de communication adaptés aux échanges avec les patients, les accompagnants et les professionnels de santé.",
    "Rédiger un motif de recours aux urgences clair, précis et pertinent, conformément aux protocoles et procédures du service.",
    "Analyser une situation clinique afin de déterminer le degré de priorité et d’orienter le patient vers la filière de soins adaptée.",
    "Évaluer l’organisation de l’accueil aux urgences afin d’identifier les difficultés et les axes d’amélioration.",
    "Proposer des ajustements organisationnels favorisant la fluidité du parcours patient et la réduction des délais d’attente."
  ],
  competences: [
    "Analyse des besoins",
    "Ingénierie pédagogique",
    "Conception de supports pédagogiques",
    "Co-conception interprofessionnelle",
    "Animation de formation",
    "Analyse réflexive des pratiques"
  ],

  image: "images/presentationioaperfectionnement.png",
  titreRessources: "Consulter les livrables",
  ressources: [
    {
      label: "Programme pédagogique de la formation",
      url: "documents/formationioaperfectionnement.pdf",
      apercu: true
    },
    {
      label: "Support pédagogique de la formation",
      url: "documents/ioaperfectionnement.pdf",
      apercu: true
    }
  ]
},

// FORMATION 3 : ANALYSE DE PRATIQUE - IOA - IDE

{
  id: "formation-ioa-analyse-pratiques-ide",
  categorie: "pro",
  sousCategorie: "formation",

  titre: "Infirmier organisateur de l’accueil (IOA) – Analyse des pratiques professionnelles",
  sousTitre: "Co-conception et co-animation d’un dispositif de formation réflexive",
  role: "J’ai co-conçu et co-animé ce dispositif avec le médecin urgentiste de la formation Perfectionnement. J’ai rédigé le support de la séance, que les apprenants complètent eux-mêmes avec leur situation avant de la présenter au groupe. J’ai structuré la préparation des situations professionnelles par les infirmiers, puis leur analyse collective au cours d’une séance associant les regards infirmier et médical. \n J’ai adopté une posture de facilitation : les apprenants sont au cœur de la démarche, et les formateurs accompagnent l’analyse plutôt que d’apporter les réponses.",
  resultats: "À ce jour, 15 IDE ont participé au dispositif au cours de 4 sessions, tous ayant suivi au préalable les formations IOA – Fondamentaux et IOA – Perfectionnement. Les situations apportées par les participants alimentent une réflexion collective et ont contribué à des changements concrets, aujourd’hui en vigueur dans le service : \n un brancard identifié et réservé aux urgences vitales, à la suite de l’analyse d’une difficulté d’accès à un brancard ; \n une procédure de prise en charge des personnes victimes de violences conjugales (tri spécifique, prise en charge sociale et psychologique) ; \n un protocole de service permettant aux IOA de prévenir le sevrage alcoolique, par l’administration d’un traitement en fonction d’un score médical.",
  indicateurs: [
    { valeur: "15", label: "IDE ayant participé à ce jour" },
    { valeur: "4", label: "sessions organisées" },
    { valeur: "3", label: "évolutions de pratiques opérationnelles issues des séances" },
    { valeur: "1 h + 3 h", label: "de préparation en amont, puis de séance" }
  ],

  date: "Depuis décembre 2025 (formation toujours dispensée)",
  duree: "1 heure de préparation en amont et 3 heures de séance",
  publicCible: "Infirmiers exerçant la fonction d’IOA et ayant suivi les formations IOA – Fondamentaux et IOA – Perfectionnement (prérequis)",
  format: "Formation participative en présentiel : analyse de situations et table ronde",

  resume: "Dispositif de formation fondé sur l’analyse collective de situations professionnelles proposées et préparées par les infirmiers eux-mêmes, pour développer leur réflexivité et favoriser l’amélioration des pratiques à l’accueil des urgences. Il complète les formations IOA – Fondamentaux et IOA – Perfectionnement.",

  presentation: "Cette formation place les apprenants au cœur de la démarche pédagogique. En amont de la séance, les infirmiers choisissent une situation professionnelle vécue, réussie ou ayant posé difficulté, puis préparent une présentation argumentée à partir du support fourni. Lors de la séance, chaque situation fait l’objet d’une analyse collective, accompagnée par les formateurs dans une posture de facilitation. \n Elle constitue la troisième étape d’un parcours de formation : Fondamentaux (prise de fonction), Perfectionnement (actualisation des connaissances), puis analyse des pratiques (réflexion collective à partir de l’expérience).",

  contexte: "Les professionnels exerçant la fonction d’IOA rencontrent des situations complexes qui mobilisent des compétences cliniques, relationnelles et organisationnelles. \n Le besoin a été identifié sur le terrain : les IDE venaient régulièrement me faire part de leurs difficultés, ou les confier au médecin. Nous avons donc conçu un espace structuré où chacun peut présenter une difficulté et la discuter avec des pairs, qui ont parfois des clés à apporter. Cet espace favorise aussi l’émergence de pistes d’amélioration organisationnelle.",

  problematique: "Comment mobiliser l’expérience des infirmiers pour développer une analyse réflexive de leurs pratiques et faire émerger des solutions individuelles et collectives aux difficultés rencontrées à l’accueil des urgences ?",
  objectifs: [
    "Décrire une situation professionnelle vécue en précisant son contexte, les actions réalisées et les difficultés rencontrées.",
    "Identifier une problématique professionnelle à partir de la situation présentée.",
    "Mobiliser les protocoles, procédures et recommandations pour justifier les décisions prises.",
    "Analyser collectivement les pratiques professionnelles afin d’identifier les points forts et les axes d’amélioration.",
    "Évaluer la pertinence des décisions et des actions mises en œuvre au regard des bonnes pratiques.",
    "Proposer des actions d’amélioration adaptées et transférables aux situations professionnelles futures."
  ],
  competences: [
    "Analyse des besoins de formation",
    "Ingénierie pédagogique",
    "Conception de supports pédagogiques",
    "Conception d’un dispositif participatif",
    "Accompagnement de l’analyse réflexive",
    "Animation et facilitation de groupe",
    "Accompagnement de l’amélioration des pratiques"
  ],

  image: "images/presentationioaanalyse.png",

  titreRessources: "Consulter les livrables",

  ressources: [
    {
      label: "Programme pédagogique de la formation",
      url: "documents/formationioaanalysepratique.pdf",
      apercu: true
    },
    {
      label: "Support pédagogique de la formation",
      url: "documents/ioaanalyse.pdf",
      apercu: true
    }
  ]
},

// FORMATION 4 : AIDE-SOIGNANT - ROLES ET MISSIONS

{
  id: "formation-aide-soignant-accueil",
  categorie: "pro",
  sousCategorie: "formation",

  titre: "L’aide-soignant à l’accueil des urgences : rôles et missions",
  sousTitre: "Conception et animation d’une formation interne",
  role: "J’ai mis en place cette formation, conçu son support et assuré son animation auprès des aides-soignants, avec le médecin des formations IOA en co-animateur. J’ai défini les contenus (missions à l’accueil, complémentarité avec l’infirmier organisateur de l’accueil (IOA), protocoles du service) et préparé des ateliers interactifs, des temps d’échanges entre professionnels et des études de cas.",
  resultats: "À ce jour, 15 aides-soignants ont été formés aux rôles et missions à l’accueil des urgences au cours de 4 sessions. 9 d’entre eux ont répondu au questionnaire post-formation : tous ont attribué 5/5 à la formation et 5/5 à l’actualisation de leurs connaissances. \n Les commentaires soulignent l’intérêt de la formation et suggèrent d’en proposer davantage, avec des simulations de cas concrets. \n Ces évaluations décrivent la satisfaction et les acquis perçus, et non une évolution mesurée des pratiques.",
  indicateurs: [
    { valeur: "15", label: "aides-soignants formés à ce jour" },
    { valeur: "4", label: "sessions organisées" },
    {
      valeur: "5/5",
      label: "Satisfaction déclarée (9 réponses)",
      source: "9 questionnaires post-formation d’apprenants analysés, sur 15 aides-soignants formés ; 2 saisies du concepteur exclues ; toutes les réponses sont à 5/5."
    }
  ],

  date: "Depuis janvier 2024 (formation toujours dispensée)",
  duree: "2 heures",
  publicCible: "Aides-soignants exerçant au sein du service des urgences",
  format: "Formation interne en présentiel : approche participative",

  resume: "Formation conçue et animée avec un médecin du service des urgences pour clarifier les missions de l’aide-soignant à l’accueil, développer ses compétences et renforcer sa collaboration avec l’infirmier organisateur de l’accueil (IOA).",

  presentation: "Cette formation interne accompagne les aides-soignants dans l’appropriation de leur rôle à l’accueil des urgences. Elle clarifie leurs missions, leurs responsabilités et leur complémentarité avec l’IOA, pour favoriser une organisation cohérente et une prise en charge sécurisée des patients.",

  contexte: "L’accueil des urgences repose sur une collaboration étroite entre infirmiers et aides-soignants. \n Le besoin est venu de l’encadrement : structurer et donner un cadre à l’exercice des aides-soignants à l’accueil, dans une volonté de développer leurs compétences. La diversité des situations rencontrées et les spécificités organisationnelles du service ont renforcé le besoin de clarification des rôles et de coordination entre professionnels.",

  problematique: "Comment renforcer la compréhension des missions de l’aide-soignant à l’accueil et favoriser une collaboration efficace avec l’IOA ?",

  objectifs: [
    "Identifier le cadre d’intervention, les rôles et les responsabilités de l’aide-soignant à l’accueil des urgences.",
    "Expliquer l’organisation de l’accueil et la complémentarité des missions de l’aide-soignant et de l’IOA.",
    "Appliquer les principes de communication adaptés aux patients, aux accompagnants et aux professionnels de santé.",
    "Repérer les signes de détresse vitale et alerter l’IOA selon les procédures du service.",
    "Analyser une situation d’accueil complexe afin d’adapter sa posture professionnelle et ses actions.",
    "Proposer des actions contribuant à la fluidité du parcours patient et à l’amélioration de l’organisation de l’accueil."
  ],

  competences: [
    "Analyse des besoins de formation",
    "Ingénierie pédagogique",
    "Conception de supports pédagogiques",
    "Conception d’activités pédagogiques",
    "Animation de formation",
    "Co-animation interprofessionnelle",
    "Accompagnement au développement des compétences"
  ],

  image: "images/presentationasrole.png",

  titreRessources: "Consulter les livrables",

  ressources: [
    {
      label: "Programme pédagogique de la formation",
      url: "documents/formationasrolemissions.pdf",
      apercu: true
    },
    {
      label: "Support pédagogique de la formation",
      url: "documents/asrole.pdf",
      apercu: true
    }
  ]
},

// FORMATION 5 : ANALYSE DE PRATIQUE - IOA - AS

{
  id: "formation-as-analyse-pratiques-accueil",
  categorie: "pro",
  sousCategorie: "formation",

  titre: "Aide-soignant à l’accueil des urgences – Analyse des pratiques professionnelles",
  sousTitre: "Conception et animation d’une formation fondée sur l’expérience des apprenants",
  role: "J’ai conçu et co-animé ce dispositif d’analyse des pratiques destiné aux aides-soignants de l’accueil, avec le médecin des autres formations en co-animateur. J’ai conçu la base du support, que les apprenants, réunis en binômes, complètent avec leur situation avant de la présenter lors d’une table ronde. \n J’ai adopté une posture de facilitation : les apprenants construisent les contenus, et les formateurs accompagnent les échanges.",
  resultats: "À ce jour, 10 aides-soignants ont été formés au cours de 3 sessions, tous ayant suivi au préalable la formation « L’aide-soignant à l’accueil des urgences : rôles et missions ». Les séances associent partage d’expérience, confrontation des points de vue et identification collective de pistes d’action. \n Une situation analysée a conduit à un changement concret, aujourd’hui en place : la mise à disposition d’un brancard à contention dès l’accueil, qui répond à un enjeu de sécurité des patients et permet, comme le brancard réservé aux urgences vitales, d’avoir un brancard immédiatement disponible. Les autres situations présentées relevaient plutôt du registre relationnel.",
  indicateurs: [
    { valeur: "10", label: "aides-soignants formés à ce jour" },
    { valeur: "3", label: "sessions organisées" },
    { valeur: "1", label: "évolution de pratique opérationnelle : brancard à contention disponible dès l’accueil" },
    { valeur: "1 h + 3 h", label: "de préparation en amont, puis de séance" }
  ],

  date: "Depuis juin 2025 (formation toujours dispensée)",
  duree: "1 heure de préparation en amont et 3 heures de séance",
  publicCible: "Aides-soignants exerçant à l’accueil du service des urgences et ayant suivi la formation « L’aide-soignant à l’accueil des urgences : rôles et missions » (prérequis)",
  format: "Formation participative en présentiel : présentations en binômes et table ronde",

  resume: "Formation fondée sur la présentation et l’analyse collective de situations professionnelles vécues par les aides-soignants, pour renforcer leur réflexion sur les pratiques, leur autonomie et leur collaboration avec les autres professionnels de l’accueil. Elle propose aux aides-soignants la même offre de formation que celle destinée aux infirmiers.",

  presentation: "Cette formation repose sur une pédagogie active dans laquelle les apprenants participent à la construction des contenus. En binômes, les aides-soignants choisissent une situation professionnelle, identifient une problématique et recherchent les ressources utiles à son analyse, à partir du support fourni. Les présentations, transmises en amont aux formateurs, sont ensuite discutées collectivement lors d’une table ronde. \n Elle fait suite à la formation « L’aide-soignant à l’accueil des urgences : rôles et missions », dont le suivi est un prérequis, selon une logique de parcours comparable à celle des infirmiers.",

  contexte: "Les aides-soignants exerçant à l’accueil des urgences sont confrontés à des situations variées, parfois complexes sur les plans relationnel, clinique et organisationnel. \n Le besoin est venu à la fois de retours du terrain et d’une demande de l’encadrement, qui souhaitait proposer aux aides-soignants la même offre de formation qu’aux infirmiers. La formation valorise l’expérience des apprenants, favorise les échanges entre pairs et développe une réflexion collective sur leurs pratiques. \n Les situations abordées peuvent concerner la communication avec les patients, les limites d’intervention, la coordination avec l’infirmier organisateur de l’accueil (IOA) ou les difficultés d’orientation et de prise en charge.",

  problematique: "Comment accompagner les aides-soignants dans l’analyse de leurs expériences professionnelles pour renforcer leur capacité à résoudre les difficultés rencontrées et à collaborer efficacement à l’accueil des urgences ?",

    objectifs: [
    "Décrire une situation professionnelle vécue à l’accueil des urgences en identifiant son contexte et ses enjeux.",
    "Identifier les difficultés relationnelles, organisationnelles ou professionnelles rencontrées dans cette situation.",
    "Mobiliser les protocoles, procédures et recommandations en lien avec les missions de l’aide-soignant.",
    "Analyser collectivement les pratiques et les actions mises en œuvre dans les situations présentées.",
    "Évaluer la pertinence des actions réalisées au regard des bonnes pratiques et du champ de compétences de l’aide-soignant.",
    "Proposer des pistes d’amélioration favorisant la qualité de l’accueil, la collaboration avec l’IOA et la fluidité du parcours patient."
  ],

  competences: [
    "Analyse des besoins de formation",
    "Ingénierie pédagogique",
    "Conception de supports pédagogiques",
    "Conception d’une pédagogie active",
    "Accompagnement de l’analyse réflexive",
    "Animation et régulation des échanges",
    "Facilitation de l’apprentissage entre pairs"
  ],

  image: "images/presentationasanalyse.png",

  titreRessources: "Consulter les livrables",

  ressources: [
    {
      label: "Programme pédagogique de la formation",
      url: "documents/formationasanalysepratique.pdf",
      apercu: true
    },
    {
      label: "Support pédagogique de la formation",
      url: "documents/asanalyse.pdf",
      apercu: true
    }
  ]
},

// FORMATION 6 : JUSTE-PRIX

{
  id: "formation-juste-prix",
  categorie: "pro",
  sousCategorie: "formation",

  titre: "Le Juste Prix : développement de la culture économique",
  sousTitre: "Conception et animation d’une activité de sensibilisation ludopédagogique",
  role: "J’ai conçu et animé un atelier ludopédagogique inspiré du « Juste Prix », adapté aux coûts des médicaments et des dispositifs médicaux utilisés aux urgences. J’ai préparé les contenus et le support, puis animé les échanges avec les équipes soignantes.",
  resultats: "Plus de 20 sessions de 30 minutes ont été organisées, à raison d’environ une par mois, avec une dizaine de participants chacune. \n Les ateliers ont accompagné une réduction de la consommation de paracétamol IV, suivie d’une diminution de la dotation du service. Cette baisse du recours à la voie intraveineuse réduit aussi le nombre de perfusions, et donc les risques qui leur sont associés. \n Ce constat est observé en parallèle des ateliers ; il ne prouve pas à lui seul un lien de cause à effet.",
  indicateurs: [
    { valeur: "20+", label: "sessions organisées" },
    { valeur: "≈ 10", label: "participants par session" },
    { valeur: "30 min", label: "par atelier" }
  ],

  date: "Depuis janvier 2023 (formation actuellement suspendue, pouvant être relancée)",
  duree: "30 minutes",
  publicCible: "Professionnels du service des urgences",
  format: "Atelier ludopédagogique en présentiel : jeu collectif",

  resume: "Activité pédagogique inspirée du jeu « Le Juste Prix », conçue pour sensibiliser les professionnels aux coûts des médicaments et du matériel médical utilisés quotidiennement aux urgences.",

  presentation: "Cette activité mobilise les principes de la ludopédagogie pour aborder les enjeux économiques liés aux ressources hospitalières. À travers un jeu d’estimation des prix, elle invite les professionnels à questionner leurs représentations et à prendre conscience du coût des produits utilisés dans leur pratique quotidienne.",

  contexte: "Le besoin est venu de la pharmacie et du chef de service, le budget consacré aux médicaments et dispositifs médicaux étant important. Les professionnels de terrain ne connaissent pas toujours précisément le coût de ce qu’ils utilisent. Une approche ludique et participative a donc été proposée pour favoriser cette prise de conscience. \n Elle vise aussi un enjeu de qualité des soins : privilégier la voie orale à la voie intraveineuse quand c’est possible limite le nombre de perfusions et les risques associés.",

  problematique: "Comment sensibiliser les professionnels aux coûts des ressources hospitalières à travers une activité courte, ludique et participative ?",

  objectifs: [
    "Identifier les médicaments et dispositifs médicaux couramment utilisés dans le service des urgences.",
    "Estimer le coût de ces produits à partir de leurs connaissances et de leurs pratiques quotidiennes.",
    "Comparer les estimations proposées aux coûts réels des médicaments et dispositifs médicaux.",
    "Analyser les écarts de prix et les facteurs pouvant influencer les dépenses du service.",
    "Évaluer l’impact des pratiques professionnelles sur la consommation des ressources.",
    "Proposer des actions simples favorisant une utilisation raisonnée des ressources, sans compromettre la qualité des soins."
  ],

  competences: [
    "Analyse des besoins",
    "Conception d’activités ludopédagogiques",
    "Scénarisation pédagogique",
    "Conception de supports pédagogiques",
    "Animation de groupe",
    "Pédagogie participative"
  ],

  image: "images/justeprix.png",

  titreRessources: "Consulter les livrables",

  ressources: [
    {
      label: "Programme pédagogique de la formation",
      url: "documents/justeprix.pdf",
      apercu: true
    },
    {
      label: "Support pédagogique de la formation",
      url: "documents/supportjusteprix1.mp4",
      apercu: true,
      imageApercu: "images/apercujusteprix.png"
    }
  ]
},

// FORMATION 7 : SITUATIONS SANITAIRES EXCEPTIONNELLES

{
  id: "formation-sse-fondamentaux",
  categorie: "pro",
  sousCategorie: "formation",

  titre: "Situations sanitaires exceptionnelles (SSE) – Fondamentaux",
  sousTitre: "Conception et animation d’une formation de sensibilisation",
  role: "J’ai conçu le support et animé cette formation de sensibilisation aux situations sanitaires exceptionnelles (SSE), destinée aux aides-soignants, infirmiers et agents de service hospitalier. J’ai transmis des repères communs sur les dispositifs et les procédures de réponse de l’établissement.",
  resultats: "Plus de 100 professionnels (AS, IDE et ASH) ont été formés au cours de 15 sessions. La formation a d’abord été organisée chaque semaine pendant deux mois, puis reconduite à raison d’une session par semestre, ce qui inscrit la sensibilisation dans la durée. \n Le questionnaire post-formation, adressé à l’ensemble des professionnels formés, fait ressortir 96 % de satisfaction globale. Les commentaires soulignent une formation de qualité qui aide à comprendre les principes et l’organisation de l’établissement en cas de situation exceptionnelle, et la jugent enrichissante. \n Ces évaluations décrivent la satisfaction déclarée, et non une mesure de l’évolution des pratiques.",
  indicateurs: [
    { valeur: "100+", label: "professionnels formés (AS, IDE, ASH)" },
    { valeur: "15", label: "sessions organisées" },
    {
      valeur: "96 %",
      label: "de satisfaction globale",
      source: "Questionnaire post-formation portant sur plus de 100 professionnels formés."
    },
    { valeur: "1 / semestre", label: "rythme actuel des sessions" }
  ],

  date: "Depuis mai 2024 (formation toujours dispensée)",
  duree: "1 heure",
  publicCible: "Aides-soignants, infirmiers et agents de service hospitalier du service des urgences",
  format: "Formation interne en présentiel : sensibilisation théorique",

  resume: "Formation de sensibilisation destinée aux professionnels des urgences sur les situations sanitaires exceptionnelles (SSE), les dispositifs de réponse et les procédures institutionnelles. Conçue en préparation de l’accueil des Jeux olympiques de Paris, elle a été reconduite depuis.",

  presentation: "Cette formation propose une première approche des SSE et des dispositifs de gestion de crise. Elle transmet aux professionnels les connaissances essentielles pour comprendre l’organisation de la réponse hospitalière et identifier leur place dans le dispositif. \n Elle a nourri mon projet de Master « Conception et gestion d’un projet de formation » sur l’afflux massif de victimes (AMaVi).",

  contexte: "La gestion d’une SSE nécessite une organisation spécifique et une coordination efficace des professionnels. \n Le besoin est venu de l’établissement, et notamment de la directrice des soins du pôle, qui souhaitait former les agents et préparer les soignants à l’accueil des Jeux olympiques de Paris. La diversité des dispositifs de réponse et la complexité des procédures institutionnelles ont conduit à proposer une formation courte, centrée sur les connaissances fondamentales et les repères opérationnels.",

  problematique: "Comment rendre accessibles les dispositifs de gestion de crise et permettre aux professionnels d’identifier leurs missions en situation sanitaire exceptionnelle ?",

  objectifs: [
    "Définir les principes fondamentaux d’une situation sanitaire exceptionnelle et les enjeux de sa gestion.",
    "Identifier les principaux dispositifs de gestion de crise (ORSEC, ORSAN, NOVI, AMAVI) et leurs champs d’application.",
    "Expliquer l’organisation du Plan Blanc et ses modalités de déclenchement au sein de l’établissement.",
    "Distinguer les rôles et responsabilités des différents professionnels et secteurs mobilisés lors d’une SSE.",
    "Analyser une situation de crise afin d’identifier les actions prioritaires et les circuits organisationnels adaptés.",
    "Appliquer les procédures et consignes institutionnelles dans le cadre d’une mise en situation de crise."
  ],

  competences: [
    "Analyse des besoins de formation",
    "Conception pédagogique",
    "Conception de supports pédagogiques",
    "Vulgarisation de contenus complexes",
    "Structuration des connaissances",
    "Animation de formation",
    "Adaptation des contenus au public"
  ],

  image: "images/presentationssefondamentaux.png",

  titreRessources: "Consulter les livrables",

  ressources: [
    {
      label: "Programme pédagogique de la formation",
      url: "documents/ssefondamentaux.pdf",
      apercu: true
    },
    {
      label: "Support pédagogique de la formation",
      url: "documents/supportssefondamentaux.pdf",
      apercu: true
    }
  ]
},

// FORMATION 8 : AMAVI PROFESSIONNELLE - MISE EN SITUATION

{
  id: "formation-amavi-professionnelle",
  categorie: "pro",
  sousCategorie: "formation",

  titre: "Organisation du service en cas d’afflux massif de victimes (AMaVi)",
  sousTitre: "Co-conception et animation d’une formation de préparation à la gestion de crise",
  role: "J’ai co-conçu et co-animé des séances de préparation à l’afflux massif de victimes (AMaVi), autour de la répartition des rôles, de la coordination des équipes et de la gestion des ressources. Chaque mois, un groupe réunissant des cadres, des médecins et moi-même prépare la séance : choix du scénario, nombre de victimes, etc. \n J’ai rédigé les fiches réflexes destinées au personnel paramédical, celles destinées aux médecins ayant été rédigées par deux médecins du service. \n Les exercices de simulation sont réalisés avec des plastrons (fausses victimes).",
  resultats: "Une séance de 30 minutes est organisée chaque premier lundi du mois, et 6 exercices de simulation avec plastrons ont été réalisés. Ces séances s’adressent à l’ensemble de l’équipe du service, soit environ 150 professionnels, tous métiers confondus. \n Elles ont fait évoluer l’organisation du service : \n l’alerte, modifiée à plusieurs reprises (sifflet, puis alarme anti-agression, puis appel d’un numéro unique qui fait sonner tous les téléphones du service) ; \n une décision et une répartition des effectifs dans chaque zone ; \n des registres rassemblés dans une malle dédiée ; \n des chasubles rangées dans une malle accessible immédiatement, après avoir constaté que les roll-conteneurs stockés dans une réserve, accessible uniquement par ascenseur, arrivaient trop lentement. \n Les fiches réflexes ont également été créées et actualisées à partir de ces retours. \n Ces résultats sont des évolutions organisationnelles constatées à la suite des exercices, sans évaluation de satisfaction.",
  indicateurs: [
    { valeur: "≈ 150", label: "professionnels du service concernés, tous métiers confondus" },
    { valeur: "1 / mois", label: "séance (chaque premier lundi du mois)" },
    { valeur: "6", label: "exercices avec plastrons" },
    { valeur: "4", label: "évolutions organisationnelles issues des exercices" },
    { valeur: "30 min", label: "par séance" }
  ],

  date: "Depuis février 2025 (formation toujours dispensée)",
  duree: "30 minutes",
  publicCible: "Professionnels du service des urgences, tous métiers confondus",
  format: "Formation interne en présentiel : sensibilisation opérationnelle par la simulation",

  resume: "Formation de préparation des professionnels des urgences à l’organisation du service en cas d’afflux massif de victimes (AMaVi), fondée sur une séance mensuelle courte et des exercices de simulation avec plastrons, conçus en groupe avec les cadres et les médecins.",

  presentation: "Cette formation courte familiarise les professionnels avec l’organisation spécifique du service des urgences en cas de déclenchement d’un plan AMaVi. Elle présente les circuits, les rôles et les responsabilités de chacun pour faciliter la coordination des équipes en situation de crise. \n Les séances sont construites chaque mois par un groupe de travail pluriprofessionnel, ce qui permet d’adapter les scénarios et de faire évoluer l’organisation à partir de ce que les exercices révèlent.",

  contexte: "Un afflux massif de victimes nécessite une réorganisation rapide du service des urgences, une répartition adaptée des ressources et une coordination efficace entre les professionnels. \n La formation répond à la demande du chef de service, qui souhaitait instaurer un rituel face à ces situations, afin de rendre l’exceptionnel moins exceptionnel pour les équipes.",

  problematique: "Comment permettre aux professionnels des urgences d’identifier rapidement leurs missions et de s’organiser efficacement en cas de déclenchement d’un plan AMaVi ?",

  objectifs: [
    "Identifier les principes fondamentaux de gestion d’un afflux massif de victimes et les dispositifs associés.",
    "Expliquer les modalités de déclenchement et d’organisation du plan AMAVI au sein du service des urgences.",
    "Distinguer les rôles, les responsabilités et les circuits de prise en charge des différents acteurs mobilisés.",
    "Appliquer les consignes et les procédures institutionnelles adaptées à leur fonction lors d’une mise en situation.",
    "Analyser une situation d’afflux massif afin d’identifier les priorités organisationnelles et les difficultés rencontrées.",
    "Proposer des ajustements permettant d’améliorer la coordination des équipes et la fluidité du parcours des victimes."
  ],

  competences: [
    "Analyse des besoins de formation",
    "Conception pédagogique",
    "Scénarisation de situations professionnelles",
    "Animation de formation",
    "Coordination interprofessionnelle",
    "Conception de supports opérationnels",
    "Amélioration continue des procédures à partir de la simulation"
  ],

  image: "images/presentationsseexercice.png",

  titreRessources: "Consulter les livrables",

  ressources: [
    {
      label: "Programme pédagogique de la formation",
      url: "documents/sseexercicepratique.pdf",
      apercu: true
    },
    {
      label: "Diaporama de photos des équipes lors des exercices de mise en pratique",
      url: "documents/diaposseexercice.mp4",
      apercu: true
    }
  ]
},

// FORMATION 9 : DEMANDE ANTICIPEE DE RADIOGRAPHIE

{
  id: "formation-radiographie-anticipee",
  categorie: "pro",
  sousCategorie: "formation",

  titre: "Demande anticipée de bilan radiographique par les IDE à l’accueil",
  sousTitre: "Pilotage et coordination d’un projet de formation",
  role: "J’ai piloté et coordonné le projet de formation accompagnant la mise en œuvre d’un protocole de coopération national pour les demandes anticipées de radiographie par les infirmiers à l’accueil. J’ai géré le projet et mis en relation les experts métiers chargés de concevoir les contenus et d’animer les sessions : une infirmière en pratique avancée (IPA) et la référente manipulatrice en radiologie. J’ai organisé les étapes préparatoires du dispositif et l’accompagnement des professionnels.",
  resultats: "À ce jour, 16 IDE ont été formés au cours de 2 sessions, et la formation est désormais organisée à raison de 4 sessions par an. Elle constitue l’étape préalable à la formation dispensée par un organisme extérieur certifié Qualiopi, et permet aux infirmiers de s’approprier le protocole avant d’aller plus loin dans le dispositif. \n Une amélioration de la prescription des imageries en fonction du protocole a été constatée dans le service. \n Ce constat est qualitatif : il n’y a pas eu de questionnaire de satisfaction ni de mesure chiffrée.",
  indicateurs: [
    { valeur: "16", label: "IDE formés à ce jour" },
    { valeur: "2", label: "sessions réalisées" },
    { valeur: "4 / an", label: "sessions prévues" },
    { valeur: "4 h", label: "de formation" }
  ],

  date: "Depuis mars 2025 (formation toujours dispensée)",
  duree: "4 heures",
  publicCible: "Infirmiers concernés par le protocole de coopération à l’accueil des urgences",
  format: "Formation interne en présentiel : déploiement d’un protocole de coopération",

  resume: "Pilotage de la création et du déploiement d’une formation interne accompagnant la mise en œuvre d’un protocole de coopération national relatif à la demande anticipée de bilan radiographique par les infirmiers à l’accueil, en amont d’une formation externe certifiée Qualiopi.",

  presentation: "Ce projet de formation accompagne l’introduction d’un protocole de coopération permettant aux infirmiers concernés de réaliser des demandes anticipées de bilan radiographique dans un cadre défini. Mon intervention a porté sur l’identification des besoins, la mobilisation des experts métiers et la coordination du dispositif, de sa conception à son déploiement. \n Le protocole, d’envergure nationale, est en place dans le service. La formation interne précède une formation dispensée par un organisme extérieur certifié Qualiopi.",

  contexte: "La mise en place d’un protocole de coopération au sein du service des urgences nécessitait de préparer les professionnels concernés à son application. Le besoin est venu des IDE eux-mêmes. J’ai coordonné la création d’une formation en mobilisant les experts métiers chargés d’en concevoir les contenus, puis accompagné son déploiement dans le service.",

  problematique: "Comment piloter la création et le déploiement d’une formation permettant aux infirmiers de s’approprier un protocole de coopération dans des conditions sécurisées ?",

  objectifs: [
    "Identifier le cadre réglementaire, les conditions d’application et les limites du protocole de coopération.",
    "Expliquer les mécanismes des traumatismes simples et isolés des membres ainsi que les principales indications radiographiques.",
    "Réaliser une évaluation clinique structurée afin de rechercher les signes de gravité et de vérifier les critères d’éligibilité au protocole.",
    "Analyser les données cliniques pour déterminer la pertinence d’une demande anticipée de radiographies.",
    "Formuler une demande radiographique adaptée, conformément aux protocoles et aux principes de radioprotection.",
    "Évaluer la prise en charge du patient afin d’assurer sa sécurité, sa surveillance et la continuité des soins avec les équipes médicales et de radiologie."
  ],

  competences: [
    "Analyse des besoins de formation",
    "Ingénierie de formation",
    "Gestion de projet",
    "Coordination d’experts métiers",
    "Organisation et déploiement de formation",
    "Accompagnement du changement"
  ],

  image: "images/presentationradio.png",

  titreRessources: "Consulter les livrables",

  ressources: [
    {
      label: "Programme pédagogique de la formation",
      url: "documents/demanderadioanticipee.pdf",
      apercu: true
    },
    {
      label: "Support pédagogique de la formation",
      url: "documents/radioanticipee.pdf",
      apercu: true
    }
  ]
},

  /* ===============================================
     B. LIVRETS ET RESSOURCES PÉDAGOGIQUES
     =============================================== */

// COLLECTION DE LIVRETS D'ACCUEIL

{
  id: "collection-livrets-accueil",
  categorie: "pro",
  sousCategorie: "ressource",

  titre: "Collection de livrets d’accueil et de ressources professionnelles",
  sousTitre: "Conception et structuration d’un dispositif documentaire d’accompagnement",
  role: "J’ai rédigé seul et structuré une collection de 9 livrets thématiques (tomes) pour soutenir l’intégration et la pratique quotidienne des professionnels : sélection, hiérarchisation et mise en forme des informations utiles.",
  resultats: "Le projet a abouti à une collection de 9 tomes organisés par thématique. Disponibles à tout moment, ils peuvent être consultés en amont de la prise de poste et servent de supports d’accueil et de référence.",
  indicateurs: [
    { valeur: "9", label: "tomes thématiques" }
  ],

  date: "2025",
  publicCible: "Nouveaux arrivants et professionnels du service des urgences",
  format: "Collection de livrets thématiques : supports documentaires",

  resume: "Collection de livrets thématiques conçue pour structurer l’arrivée des nouveaux collaborateurs, faciliter l’accès aux informations essentielles et soutenir leur autonomie au sein du service des urgences.",

  presentation: "Créée dans le cadre de mes missions d’infirmier référent, cette collection organisée en tomes thématiques rassemble les informations utiles à l’intégration et à la pratique quotidienne des professionnels.",

  contexte: "L’intégration dans un service d’urgences demande de s’approprier un volume important d’informations institutionnelles, organisationnelles et professionnelles. \n Le besoin était de structurer et d’améliorer les conditions d’arrivée d’un nouveau collaborateur, avec des ressources accessibles à tout moment et consultables avant la prise de poste.",

  problematique: "Comment organiser et rendre accessibles les informations essentielles pour faciliter l’intégration des professionnels et favoriser leur autonomie dans un environnement de soins complexe ?",

  objectifs: [
    "Centraliser les informations utiles à l’intégration et à la pratique professionnelle.",
    "Structurer les contenus en ressources thématiques facilement consultables.",
    "Rendre les ressources disponibles à tout moment, y compris avant la prise de poste.",
    "Faciliter l’appropriation de l’organisation, des outils et des procédures du service.",
    "Favoriser l’autonomie grâce à des ressources accessibles en situation de travail."
  ],

  competences: [
    "Analyse des besoins documentaires",
    "Ingénierie documentaire",
    "Conception de ressources pédagogiques",
    "Structuration et hiérarchisation des contenus",
    "Communication écrite et visuelle",
    "Accompagnement à l’intégration professionnelle"
  ],

  image: "images/livretsthematiques.png",

  titreRessources: "Découvrir les livrets",

  ressources: [
    { label: "Tome 1", url: "documents/tome1.pdf", apercu: true },
    { label: "Tome 2", url: "documents/tome2.pdf", apercu: true },
    { label: "Tome 3", url: "documents/tome3.pdf", apercu: true },
    { label: "Tome 4", url: "documents/tome4.pdf", apercu: true },
    { label: "Tome 5", url: "documents/tome5.pdf", apercu: true },
    { label: "Tome 6", url: "documents/tome6.pdf", apercu: true },
    { label: "Tome 7", url: "documents/tome7.pdf", apercu: true },
    { label: "Tome 8", url: "documents/tome8.pdf", apercu: true },
    { label: "Tome 9", url: "documents/tome9.pdf", apercu: true }
  ]
},

// LIVRETS DE STAGE ESI - EAS

{
  id: "livrets-stage-esi-eas",
  categorie: "pro",
  sousCategorie: "ressource",

  titre: "Livrets de stage : étudiants infirmiers et élèves aides-soignants",
  sousTitre: "Co-conception de ressources pédagogiques pour l’accompagnement en stage",
  role: "J’ai co-conçu deux livrets de stage avec d’autres professionnels du service, en organisant les informations d’accueil et les repères nécessaires à l’accompagnement des étudiants infirmiers (ESI) et des élèves aides-soignants (EAS).",
  resultats: "Deux livrets distincts ont été réalisés, adaptés à chacun des deux publics. Remis en amont du stage, ils accompagnent environ 30 étudiants infirmiers et 10 élèves aides-soignants accueillis chaque année.",
  indicateurs: [
    { valeur: "2", label: "livrets de stage (ESI et EAS)" },
    { valeur: "≈ 30", label: "étudiants infirmiers accueillis par an" },
    { valeur: "≈ 10", label: "élèves aides-soignants accueillis par an" }
  ],

  date: "2024",
  publicCible: "Étudiants en soins infirmiers (ESI) et élèves aides-soignants (EAS)",
  format: "Livrets pédagogiques de stage : deux supports adaptés aux publics",

  resume: "Co-conception de deux livrets de stage destinés à faciliter l’accueil, l’intégration et l’accompagnement pédagogique des étudiants infirmiers et des élèves aides-soignants au sein du service des urgences.",

  presentation: "Ces deux livrets sont remis aux étudiants avant leur stage. Ils présentent les prérequis, le service et son organisation, ainsi que les thérapeutiques et les soins qu’ils peuvent rencontrer, selon les spécificités de chaque cursus.",

  contexte: "L’accueil des étudiants dans un service d’urgences nécessite des repères clairs et un accompagnement adapté à leur niveau de formation. \n Le besoin est venu de l’IFSI et de l’IFAS, qui demandaient que chaque étudiant reçoive en amont de son stage un livret réunissant ces informations. Nous avons développé deux livrets différenciés selon les missions, les objectifs et les référentiels de chaque public.",

  problematique: "Comment concevoir des supports pédagogiques adaptés aux étudiants infirmiers et aux élèves aides-soignants pour structurer leur parcours de stage et favoriser le développement progressif de leurs compétences ?",

  objectifs: [
    "Présenter les prérequis du stage et l’organisation du service des urgences.",
    "Clarifier les attentes et les objectifs du stage pour chaque public.",
    "Présenter les thérapeutiques et les soins que l’apprenant peut rencontrer.",
    "Identifier les compétences à développer en lien avec les référentiels de formation.",
    "Favoriser l’autonomie progressive des apprenants tout au long de leur stage."
  ],

  competences: [
    "Analyse des besoins des apprenants",
    "Ingénierie pédagogique",
    "Co-conception de ressources pédagogiques",
    "Différenciation pédagogique",
    "Structuration de parcours d’apprentissage",
    "Accompagnement de la professionnalisation"
  ],

  image: "images/livretsdestage.png",

  titreRessources: "Consulter les livrets de stage",

  ressources: [
    // À ajouter quand les documents seront prêts :
    // { label: "Livret de stage : infirmier", url: "documents/....pdf", apercu: true },
    // { label: "Livret de stage : aide-soignant", url: "documents/....pdf", apercu: true }
  ]
},

// LIVRET D'INTÉGRATION NOUVEAUX IDE

{
  id: "livret-integration-nouveaux-ide",
  categorie: "pro",
  sousCategorie: "ressource",

  titre: "Livret d’intégration : nouveaux infirmiers",
  sousTitre: "Co-conception d’un support d’accompagnement à la prise de poste",
  role: "À la demande de l’encadrement, j’ai repensé l’intégration des infirmiers nouvellement recrutés. J’ai co-conçu un livret qui structure les informations relatives au service, à la prise de poste et aux repères professionnels, et mis en place un suivi par entretiens à 8 jours, 1 mois, 6 mois et 1 an.",
  resultats: "Le projet a abouti à un livret d’intégration réunissant dans un support unique les informations utiles à l’arrivée des nouveaux infirmiers, associé à un parcours de suivi en quatre entretiens : à 8 jours, 1 mois, 6 mois et 1 an.",
  indicateurs: [
    { valeur: "1", label: "livret d’intégration" },
    { valeur: "4", label: "entretiens de suivi (8 j, 1 mois, 6 mois, 1 an)" }
  ],

  date: "2025",
  publicCible: "Infirmiers nouvellement recrutés au service des urgences",
  format: "Livret d’intégration professionnelle",

  resume: "Co-conception d’un livret et d’un dispositif de suivi par entretiens (8 jours, 1 mois, 6 mois, 1 an) pour accompagner les infirmiers nouvellement recrutés dans leur prise de poste et leur appropriation progressive de l’environnement professionnel des urgences.",

  presentation: "Ce livret d’intégration est un support d’accompagnement à la prise de poste. Il rassemble des informations et des repères professionnels pour faciliter l’adaptation des nouveaux infirmiers au fonctionnement du service.",

  contexte: "L’arrivée dans un service d’urgences oblige à s’approprier rapidement une organisation complexe, des procédures spécifiques et de nouveaux outils. \n L’encadrement m’a demandé de revoir l’intégration des nouveaux collaborateurs IDE, en structurant ce parcours et en mettant en place des outils de suivi.",

  problematique: "Comment accompagner les nouveaux infirmiers dans leur prise de poste pour faciliter leur intégration, leur appropriation des pratiques du service et leur autonomie progressive ?",

  objectifs: [
    "Présenter l’organisation et les spécificités du service des urgences.",
    "Faciliter l’identification des missions et des responsabilités infirmières.",
    "Guider l’appropriation des outils, protocoles et procédures du service.",
    "Structurer les étapes du parcours d’intégration et en assurer le suivi.",
    "Accompagner la progression vers une pratique professionnelle autonome."
  ],

  competences: [
    "Analyse des besoins d’intégration",
    "Ingénierie de formation",
    "Co-conception de ressources d’accompagnement",
    "Structuration de parcours d’intégration",
    "Mise en place d’outils de suivi",
    "Accompagnement de la professionnalisation"
  ],

  image: "images/livretintegration.png",

  titreRessources: "Consulter le livret",

  ressources: [
    {
      label: "Livret d’intégration : infirmier",
      url: "documents/integrationide.pdf",
      apercu: true
    }
  ]
},

// MÉMOS ET GUIDES

{
  id: "memos-guides-professionnels",
  categorie: "pro",
  sousCategorie: "ressource",

  titre: "Mémos et guides d’aide à la pratique professionnelle",
  sousTitre: "Conception, diffusion et formation à l’utilisation de ressources professionnelles",
  role: "J’ai rédigé, mis en forme et diffusé trois supports de pratique professionnelle (deux Médi-mémos et un Panse-bête), puis formé les professionnels à leur utilisation et à leur lecture : environ quinze temps individuels ou en petit groupe pour les Médi-mémos, et 8 sessions pour le Panse-bête.",
  resultats: "Trois ressources synthétiques ont été produites et diffusées dans les différentes zones du service, pour rendre les repères professionnels rapidement consultables. \n Les professionnels ont été formés à leur utilisation : environ quinze temps d’échange individuels ou en petit groupe pour les Médi-mémos, et 8 sessions pour le Panse-bête, qui ont permis de former l’ensemble de l’équipe paramédicale (environ 60 personnes).",
  indicateurs: [
    { valeur: "3", label: "mémos et guides" },
    { valeur: "≈ 60", label: "professionnels paramédicaux formés au Panse-bête" },
    { valeur: "8", label: "sessions de formation au Panse-bête" },
    { valeur: "≈ 15", label: "temps d’échange autour des Médi-mémos" }
  ],

  date: "2024–2025",
  publicCible: "Professionnels du service des urgences (IDE et AS)",
  format: "Mémos et guides pratiques : supports d’aide à la pratique",

  resume: "Conception, diffusion et présentation de mémos synthétiques qui facilitent l’accès aux informations cliniques et organisationnelles utiles aux professionnels des urgences.",

  presentation: "Ces ressources accompagnent les professionnels dans leur pratique quotidienne. Elles permettent de retrouver rapidement des informations essentielles grâce à une organisation synthétique, une hiérarchisation visuelle et des formats adaptés à la consultation en situation de travail.",

  contexte: "Dans un service d’urgences, les professionnels doivent accéder rapidement à des informations cliniques et organisationnelles parfois complexes. \n Le besoin est venu des IDE et des AS, qui souhaitaient disposer dans les différentes zones de documents simples reprenant les éléments importants.",

  problematique: "Comment rendre les informations cliniques et organisationnelles plus accessibles grâce à des supports synthétiques, lisibles et adaptés aux contraintes de la pratique aux urgences ?",

  objectifs: [
    "Synthétiser les informations essentielles à la pratique professionnelle.",
    "Structurer les contenus pour faciliter leur consultation rapide.",
    "Améliorer la lisibilité des ressources grâce à une présentation visuelle adaptée.",
    "Rendre les repères disponibles dans les différentes zones du service.",
    "Soutenir l’autonomie des professionnels dans leur recherche d’informations."
  ],

  competences: [
    "Analyse des besoins",
    "Ingénierie documentaire",
    "Synthèse et structuration de l’information",
    "Communication visuelle",
    "Mise en page et hiérarchisation des contenus",
    "Formation des professionnels à l’utilisation d’un outil"
  ],

  image: "images/memoguides.png",

  titreRessources: "Consulter les mémos et guides",

  ressources: [
    {
      label: "Médi-mémo IOA",
      url: "documents/medimemoioa.pdf",
      apercu: true
    },
    {
      label: "Médi-mémo SAUV",
      url: "documents/medimemosauv.pdf",
      apercu: true
    },
    {
      label: "Panse-bête",
      url: "documents/pansebete.pdf",
      apercu: true
    }
  ]
},

  /* ===============================================
     C. GESTION DE PROJET ET OUTILS NUMÉRIQUES
     =============================================== */

{
  id: "projet-ars-personnes-agees",
  categorie: "pro",
  sousCategorie: "projet",

  titre: "Projet ARS : amélioration de la prise en charge des personnes âgées aux urgences",
  resume: "Élaboration d’un dossier de projet pour améliorer le confort et la prise en charge des personnes âgées aux urgences, qui a obtenu un financement de l’Agence régionale de santé (ARS).",
  date: "Novembre 2025",
  contexte: "Dans une démarche d’amélioration de l’accueil et de la qualité des soins, le service a répondu à un appel à projets de l’ARS, à la demande du chef de service. Le projet porte sur un aménagement et un équipement adaptés aux besoins des patients âgés.",
  problematique: "Comment rendre l’environnement des urgences plus adapté aux besoins des personnes âgées tout en améliorant les conditions de travail des soignants ?",
  publicCible: "Patients âgés accueillis aux urgences et professionnels impliqués dans leur prise en charge.",
  objectifs: "Améliorer le confort ; Favoriser la prévention des chutes et de la désorientation ; Soutenir la bientraitance ; Développer le lien social ; Proposer des équipements ergonomiques et sensoriels.",
  demarche: "J’ai formalisé un dossier présentant les besoins, les objectifs, les aménagements envisagés, les solutions techniques et les équipements. Le projet comprend notamment des chambres adaptées et un chariot sensoriel mobile inspiré de l’approche Snoezelen.",
  role: "J’ai rédigé le dossier de candidature à l’appel à projets : identification des besoins d’équipement, recherche de solutions et formalisation du projet.",
  livrables: [
    "Dossier de candidature ARS"
  ],
  resultats: "Le dossier de candidature a obtenu un financement de l’ARS. Les équipements sont en cours d’acheminement, et la mise en place effective (travaux et aménagement des chambres) est prévue en 2027.",
  indicateurs: [
    { valeur: "1", label: "financement ARS obtenu" }
  ],
  bilan: "Ce projet m’a permis de développer des compétences en rédaction de dossier de financement, en formalisation de projet, en argumentation et en recherche de solutions.",

  image: "images/projetars.png",
  ressources: [
    {
      label: "Dossier de projet ARS",
      url: "documents/projetars.pdf",
      apercu: true
    }
  ]
},

{
  id: "tableau-bord-mensuel-urgences",
  categorie: "pro",
  sousCategorie: "projet",

  titre: "Création d’un tableau de bord mensuel des urgences",
  resume: "Conception d’un support de communication interne d’une page, diffusé chaque mois depuis janvier 2024, qui regroupe les principaux indicateurs du service : activité, ressources humaines, qualité, dépenses, vérifications et formations.",
  date: "Depuis janvier 2024 (diffusé chaque mois)",
  contexte: "J’ai eu l’idée de ce tableau pour sensibiliser les équipes et leur proposer un retour mensuel sur l’activité et sur le mois écoulé.",
  problematique: "Comment faciliter la compréhension et la diffusion des indicateurs d’activité et de qualité auprès des professionnels ?",
  publicCible: "Équipes et encadrement du service des urgences.",
  objectifs: "Centraliser les indicateurs ; Améliorer la lisibilité des données ; Faciliter le suivi des objectifs ; Communiquer sur les événements et les formations du service.",
  demarche: "J’ai organisé les informations par rubriques, avec des graphiques, des chiffres clés et des comparaisons aux objectifs. Les données proviennent de PowerBI et des applications internes (pharmacie, biomédical, gestion des ressources humaines). Le document rassemble l’activité du service, les indicateurs qualité, les ressources humaines et le calendrier de formation.",
  role: "J’ai conçu le tableau de bord à partir de mon idée : sélection et structuration des indicateurs, réalisation du support sous Excel, puis diffusion par affichage au poste de soins, par mail professionnel et lors de la réunion mensuelle.",
  livrables: [
    "Modèle de tableau de bord mensuel"
  ],
  resultats: "35 numéros ont été diffusés à ce jour. Chacun regroupe sur une page les principales données du service pour en faciliter la lecture. L’exemple présenté ci-dessous utilise des chiffres fictifs, à titre d’illustration.",
  indicateurs: [
    { valeur: "35", label: "numéros mensuels diffusés" },
    { valeur: "1 page", label: "de synthèse mensuelle" }
  ],
  bilan: "Ce projet m’a permis de développer des compétences en synthèse, en visualisation de données et en communication d’informations professionnelles.",

  image: "images/tableaudebord.png",
  ressources: [
    {
      label: "Exemple de tableau de bord mensuel (données fictives)",
      url: "documents/indicateurmois.pdf",
      apercu: true
    }
  ]
},

{
  id: "checklists-google-forms",
  categorie: "pro",
  sousCategorie: "projet",

  titre: "Digitalisation de check-lists avec Google Forms",
  resume: "Création de 11 formulaires numériques, accessibles par QR code, pour structurer les vérifications quotidiennes réalisées dans le service des urgences.",
  date: "Depuis novembre 2021 (toujours en place)",
  contexte: "Les check-lists papier posaient des problèmes de pertes, d’illisibilité et de suivi difficile. Le passage au numérique a modernisé les pratiques et simplifié le classement, le suivi et l’archivage.",
  problematique: "Comment faciliter les vérifications récurrentes et structurer le recueil des informations à l’aide d’un outil numérique ?",
  publicCible: "Professionnels chargés des vérifications au sein du service des urgences.",
  objectifs: "Standardiser les points de contrôle ; Faciliter la saisie ; Améliorer la structuration des réponses ; Soutenir le suivi, la traçabilité et l’archivage des vérifications.",
  demarche: "J’ai transformé des check-lists papier en formulaires Google Forms, en organisant les questions et en choisissant des formats de réponse adaptés aux usages professionnels. Chaque check-list est accessible par un QR code.",
  role: "J’ai adapté les check-lists papier au format numérique, créé les QR codes, déployé le dispositif dans le service et informé les professionnels de son utilisation.",
  livrables: [
    "Formulaires Google Forms",
    "Check-lists de vérification",
    "QR codes d’accès aux formulaires"
  ],
  resultats: "Le projet a abouti à 11 check-lists numériques, renseignées chaque jour (une fois par l’équipe de jour, une fois par l’équipe de nuit). Elles ont apporté un gain de temps, une meilleure traçabilité et un meilleur suivi.",
  indicateurs: [
    { valeur: "11", label: "check-lists numériques" },
    { valeur: "2 / jour", label: "vérifications (équipe de jour et équipe de nuit)" }
  ],
  bilan: "Ce projet m’a permis de transformer un processus professionnel en outil numérique simple et structuré, utilisé au quotidien depuis plusieurs années.",

  image: "images/checklist.png",
  ressources: [
    {
      label: "Ensemble des QR codes des check-lists",
      url: "documents/qrcodeschecklist.pdf",
      apercu: true
    },
    {
      label: "Exemple de questionnaire d’une check-list",
      url: "documents/exemplechecklist.pdf",
      apercu: true
    }
  ]
},

{
  id: "fiches-reflexes-amavi",
  categorie: "pro",
  sousCategorie: "projet",

  titre: "Conception de fiches réflexes : plan AMaVi",
  resume: "Création de 19 fiches réflexes synthétiques pour faciliter la compréhension des rôles et l’organisation du personnel paramédical en cas d’afflux massif de victimes (AMaVi).",
  date: "Depuis février 2025",
  contexte: "Dans le cadre de la préparation du service aux situations sanitaires exceptionnelles, des fiches réflexes existaient déjà. Les nouvelles fiches, en place depuis février 2025, les remplacent et sont actualisées à partir des retours des exercices de simulation mensuels.",
  problematique: "Comment rendre les consignes essentielles rapidement accessibles dans une situation de crise ?",
  publicCible: "Personnel paramédical mobilisé dans le cadre du plan AMaVi.",
  objectifs: "Clarifier les missions ; Faciliter l’accès aux procédures ; Soutenir la répartition des rôles ; Favoriser la coordination des équipes.",
  demarche: "J’ai synthétisé les procédures et formalisé les missions par fonction ou par zone, pour produire des documents directement consultables lors des exercices ou d’une situation exceptionnelle.",
  role: "J’ai rédigé les fiches réflexes destinées au personnel paramédical ; celles destinées aux médecins ont été rédigées par deux médecins du service. Je les ai structurées et présentées aux équipes.",
  livrables: [
    "Fiches réflexes AMaVi pour le personnel paramédical"
  ],
  resultats: "19 fiches réflexes opérationnelles mettent à disposition du personnel paramédical des repères sur ses rôles et sur les procédures à appliquer en situation de crise. Elles sont actualisées à partir des retours des exercices de simulation.",
  indicateurs: [
    { valeur: "19", label: "fiches réflexes" }
  ],
  bilan: "Ce projet illustre la transformation de procédures complexes en ressources synthétiques adaptées aux contraintes du terrain.",

  image: "images/fichesreflexes.png",
  ressources: [
    {
      label: "Fiches réflexes du personnel paramédical",
      url: "documents/fichereflexeamavi.pdf",
      apercu: true
    }
  ]
},

  /* ===============================================
     D. COMMUNICATION ET LUDOPÉDAGOGIE
     =============================================== */

{
  id: "preparation-certification-has",
  categorie: "pro",
  sousCategorie: "communication",

  titre: "Accompagnement pédagogique à la certification HAS",
  resume: "Dispositif de sensibilisation des professionnels à la certification de la Haute Autorité de santé (HAS) : 13 newsletters, jeux pédagogiques créés avec Ludiz et présentation finale des messages essentiels.",
  date: "Mai à septembre 2026",
  contexte: "La direction souhaitait que les équipes soient préparées en amont aux questions de la certification HAS. Plusieurs supports ont été développés pour accompagner les professionnels dans l’appropriation des critères impératifs.",
  problematique: "Comment favoriser l’appropriation progressive des critères impératifs HAS auprès de professionnels soumis à de fortes contraintes de disponibilité ?",
  publicCible: "Professionnels concernés par la préparation à la certification HAS.",
  objectifs: "Faire connaître les critères impératifs ; Rendre les exigences compréhensibles ; Favoriser la mémorisation ; Renforcer l’engagement ; Synthétiser les informations essentielles avant la certification.",
  demarche: "Chaque newsletter était consacrée à un critère impératif et accompagnée d’un jeu pédagogique créé avec Ludiz. Une présentation finale sous forme de take-home messages a récapitulé les points à retenir avant la certification.",
  role: "J’ai créé et diffusé les newsletters, et créé les jeux Ludiz qui les accompagnaient (11 sur 13, les 2 autres ayant été réalisés par une cadre du service).",
  etapes: [
    {
      titre: "Sélection des contenus",
      description: "Identification des critères impératifs et des messages prioritaires."
    },
    {
      titre: "Communication par newsletters",
      description: "Préparation et diffusion des newsletters."
    },
    {
      titre: "Ludopédagogie",
      description: "Création de jeux interactifs avec Ludiz, un par newsletter."
    },
    {
      titre: "Synthèse finale",
      description: "Préparation d’une présentation reprenant les take-home messages."
    }
  ],
  livrables: [
    "Newsletters HAS",
    "Jeux pédagogiques créés avec Ludiz",
    "Présentation des take-home messages"
  ],
  resultats: "13 newsletters ont été diffusées, et 50 participants ont joué sur Ludiz. Les retours de l’équipe soulignent un format ludique, qui permet de réviser en s’amusant, jugé agréable et moins scolaire que les formations descendantes. \n Le résultat de la certification n’est pas encore diffusé ; il sera disponible sur le site de la HAS.",
  indicateurs: [
    { valeur: "13", label: "newsletters diffusées" },
    { valeur: "50", label: "participants sur Ludiz" }
  ],
  bilan: "Ce projet met en valeur la complémentarité entre communication interne, apprentissage progressif, ludopédagogie et synthèse des connaissances.",

  image: "images/prepacertif.png",
  ressources: [
    {
      label: "Newsletters HAS",
      url: "documents/nlcertification.pdf",
      apercu: true
    },
    {
      label: "Serious game : Objectif Certif, êtes-vous prêts ?",
      url: "https://gsilvetti.ludiz.com/courses/f2b7482b-748d-4f31-a2ae-ab31f8cfb71e",
      apercu: true,
      imageApercu: "images/ludizcertification.png"
    },
    {
      label: "Serious game : Objectif Certif, sécurité transfusionnelle",
      url: "https://gsilvetti.ludiz.com/courses/d446ac70-d909-4dd0-987a-93d4c4338ffb",
      apercu: true,
      imageApercu: "images/ludiztransfusion.png"
    },
    {
      label: "Serious game : Objectif Certif, gestion de crise et procédures dégradées",
      url: "https://gsilvetti.ludiz.com/courses/896460d9-c4d4-4957-8598-b7369b65c24e",
      apercu: true,
      imageApercu: "images/ludizgestioncrise.png"
    },
    {
      label: "Support de présentation : take-home messages",
      url: "documents/takehomemessagecertif.pdf",
      apercu: true
    }
  ]
}
];

PROJETS.push(...PROJETS_PRO);

PROJETS.push({
  id: "module-formation-pokemon",
  categorie: "m2",
  statut: "En cours de réalisation",
  titre: "Conception d'un module de formation autour du jeu de cartes Pokémon",
  resume: "Projet universitaire en cours de réalisation dans le cadre du Master 2 MEEF PIF – IFMN, UE Architecture de l'information. Conception d'un module de formation mobilisant des courants pédagogiques étudiés en cours, avec élaboration d'un cahier des charges.",
  contexte: "",
  objectifs: "",
  demarche: "",
  role: "",
  resultats: "",

  image: "",
  ressources: []
});


/* ==========================================
   MASTER 2 – MÉDIAS INFORMATISÉS
   ET MÉTAMORPHOSES MÉDIATIQUES
   ========================================== */

PROJETS.push({
  id: "m2-semiologie-medias-informatises",
  categorie: "m2",
  statut: "En cours de réalisation",
  titre: "Analyse sémiologique des médias informatisés",
  resume: "Élaboration d'un dossier de sémiologie dans le cadre de l'UE « Médias informatisés et métamorphoses médiatiques » du Master 2 MEEF PIF – IFMN. Ce travail mobilise une approche critique des médias numériques, de leurs représentations et de leurs enjeux socioculturels.",
  contexte: "",
  objectifs: "",
  demarche: "",
  role: "",
  resultats: "",
  image: "",
  ressources: []
});


/* ==========================================
   MASTER 2 – INDUSTRIALISATION DE LA FORMATION
   ========================================== */

PROJETS.push({
  id: "m2-industrialisation-formation",
  categorie: "m2",
  statut: "En cours de réalisation",
  titre: "Industrialisation de la formation : analyse comparée et étude de cas",
  resume: "Projet universitaire en cours de réalisation dans le cadre de l’UE « Industrialisation de la formation » du Master 2 MEEF PIF – IFMN. Il porte sur l’analyse comparée de systèmes de formation, l’étude critique de plateformes éducatives et les enjeux liés à l’industrialisation de la formation.",
  contexte: "",
  objectifs: "",
  demarche: "",
  role: "",
  resultats: "",
  image: "",
  ressources: []
});


/* ==========================================
   MASTER 2 – CONCEVOIR UNE FORMATION HYBRIDE
   ========================================== */

PROJETS.push({
  id: "m2-conception-formation-hybride",
  categorie: "m2",
  statut: "En cours de réalisation",
  titre: "Conception et évaluation d'une formation hybride",
  resume: "Projet universitaire en cours de réalisation dans le cadre de l'UE « Concevoir une formation hybride » du Master 2 MEEF PIF – IFMN. Il porte sur le design pédagogique, l'articulation des modalités synchrones et asynchrones, l'animation à distance et l'évaluation d'un dispositif de formation.",
  contexte: "",
  objectifs: "",
  demarche: "",
  role: "",
  resultats: "",
  image: "",
  ressources: []
});


/* ==========================================
   MASTER 2 – CRÉATIVITÉ ET INNOVATION
   AU SERVICE DE LA FORMATION
   ========================================== */

PROJETS.push({
  id: "m2-creativite-innovation-formation",
  categorie: "m2",
  statut: "En cours de réalisation",
  titre: "Conception d'un module de formation créatif et collaboratif",
  resume: "Projet universitaire en cours de réalisation dans le cadre de l'UE « Créativité et innovation au service de la formation » du Master 2 MEEF PIF – IFMN. Il porte sur la conception d'un module pédagogique mobilisant la créativité individuelle et collective, la collaboration et les outils numériques.",
  contexte: "",
  objectifs: "",
  demarche: "",
  role: "",
  resultats: "",
  image: "",
  ressources: []
});


/* ==========================================
   MASTER 2 – USAGE DES TECHNIQUES
   DANS LA FORMATION
   ========================================== */

PROJETS.push({
  id: "m2-usages-techniques-formation",
  categorie: "m2",
  statut: "En cours de réalisation",
  titre: "Analyse des usages des technologies dans la formation",
  resume: "Projet universitaire en cours de réalisation dans le cadre de l'UE « Usage des techniques dans la formation » du Master 2 MEEF PIF – IFMN. Il porte sur l'analyse critique de textes scientifiques en sociologie des usages, l'étude des innovations techniques dans l'éducation et l'élaboration d'une grille d'analyse adaptée au terrain de stage.",
  contexte: "",
  objectifs: "",
  demarche: "",
  role: "",
  resultats: "",
  image: "",
  ressources: []
});