/* ==========================================================
   Quentin Fauchereau · interactions du site
   - en-tête et menu mobile
   - un seul bouton « Réserver » mis en avant par écran
   - la balade animée (sentier, marcheur, cadran)
   - le test du système nerveux
   - l'agenda Cal.com
   ========================================================== */
(function () {
  "use strict";

  var CONFIG = window.SITE_CONFIG || {};
  var mqReduit = window.matchMedia("(prefers-reduced-motion: reduce)");
  function mouvementReduit() { return mqReduit.matches; }
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  /* ---------------- En-tête ---------------- */
  var header = $(".site-header");
  function majHeader() { header.classList.toggle("is-scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", majHeader, { passive: true });
  majHeader();

  var burger = $(".burger");
  var menu = $("#menu-mobile");
  function fermerMenu() {
    burger.setAttribute("aria-expanded", "false");
    menu.hidden = true;
  }
  burger.addEventListener("click", function () {
    var ouvert = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", String(!ouvert));
    menu.hidden = ouvert;
    if (!ouvert) { var lien = $("a", menu); if (lien) lien.focus(); }
  });
  menu.addEventListener("click", function (e) { if (e.target.closest("a")) fermerMenu(); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !menu.hidden) { fermerMenu(); burger.focus(); }
  });
  window.matchMedia("(min-width: 980px)").addEventListener("change", fermerMenu);

  /* ---------- Magnétisme : le bouton de la saison en cours passe en avant ---------- */
  (function saisons() {
    var mois = new Date().getMonth() + 1;
    var ete = mois >= 5 && mois <= 9;
    $$("[data-saison]").forEach(function (a) {
      var deSaison = (a.getAttribute("data-saison") === "ete") === ete;
      a.classList.toggle("btn--primary", deSaison);
      a.classList.toggle("btn--ghost", !deSaison);
    });
    // Le bouton de la saison en cours passe en premier
    $$(".choix-saison").forEach(function (groupe) {
      var premier = $('[data-saison="' + (ete ? "ete" : "hiver") + '"]', groupe);
      if (premier) groupe.insertBefore(premier, groupe.firstChild);
    });
  })();

  /* ---------- Un seul bouton principal par écran ----------
     Le bouton « Réserver » de l'en-tête passe en contour
     dès qu'un autre bouton flamme (ou l'agenda) est visible. */
  var ctaEntete = $("[data-cta-entete]");
  var visibles = new Set();
  var obsCta = null;
  function majCtaEntete() {
    visibles.forEach(function (el) { if (!el.isConnected) { visibles.delete(el); if (obsCta) obsCta.unobserve(el); } });
    ctaEntete.classList.toggle("is-calme", visibles.size > 0);
  }
  if ("IntersectionObserver" in window) {
    obsCta = new IntersectionObserver(function (entrees) {
      entrees.forEach(function (en) {
        if (en.isIntersecting) visibles.add(en.target); else visibles.delete(en.target);
      });
      majCtaEntete();
    }, { rootMargin: "-68px 0px 0px 0px" });
  }
  function surveillerCta(el) { if (obsCta && el && el !== ctaEntete) obsCta.observe(el); }
  $$(".btn--primary").forEach(surveillerCta);
  surveillerCta($("#agenda"));

  /* ---------- Boutons « data-cal » : lien Cal.com, sinon WhatsApp ---------- */
  (function liensDirects() {
    var wa = String(CONFIG.whatsapp || "").replace(/\D/g, "");
    var MESSAGES = {
      magnetismeNature: "Bonjour Quentin, j'aimerais réserver une séance de magnétisme en pleine nature.",
      magnetismeDistance: "Bonjour Quentin, j'aimerais réserver une séance de magnétisme par téléphone."
    };
    $$("[data-cal]").forEach(function (a) {
      var cle = a.getAttribute("data-cal");
      var lien = String(CONFIG["cal" + cle.charAt(0).toUpperCase() + cle.slice(1)] || "").trim()
        .replace(/^https?:\/\/(app\.)?cal\.com\//i, "").replace(/^\/+|\/+$/g, "");
      if (lien) a.href = "https://cal.com/" + lien;
      else if (wa) a.href = "https://wa.me/" + wa + "?text=" + encodeURIComponent(MESSAGES[cle] || "Bonjour Quentin !");
      else return;
      a.target = "_blank";
      a.rel = "noopener";
    });
  })();

  /* ---------------- Tire ta carte défi ---------------- */
  (function cartesDefi() {
    var zone = $("#carte-defi");
    if (!zone) return;

    var DEFIS = [
      ["Hors cadre", "Écris tes trois peurs sur ton projet. Puis lis-les à voix haute avec une voix de dessin animé."],
      ["Hors cadre", "Crie le nom de ton projet dans ta voiture, fenêtres fermées. Trois fois, de plus en plus fort."],
      ["Hors cadre", "Raconte ton projet à une plante, un chat ou ton miroir. Puis écoute ce qu'il te répond."],
      ["Hors cadre", "Donne un prénom à ton projet. Puis écris-lui une lettre de trois lignes."],
      ["Hors cadre", "Va dans un lieu où tu ne mets jamais les pieds : une quincaillerie, un musée, un skatepark. Reste 10 minutes et note une idée."],
      ["Hors cadre", "Dessine ton projet avec ton autre main. Moche, c'est parfait."],
      ["Jeu", "Présente ton projet en 30 secondes, comme une pub télé des années 90."],
      ["Jeu", "Écris l'article de journal qui parlera de ton projet dans un an. Titre compris."],
      ["Jeu", "Liste 10 façons géniales de rater ton projet. Rigole. Puis évite la pire."],
      ["Jeu", "Écris trois conseils que le toi de dans 10 ans donnerait au toi d'aujourd'hui."],
      ["Audace", "Envoie ton idée à une personne aujourd'hui. Une phrase suffit."],
      ["Audace", "Écris à quelqu'un qui fait déjà ce dont tu rêves. Une question, deux lignes."],
      ["Audace", "Annonce une date à quelqu'un, à voix haute. Le reste suivra."],
      ["Audace", "Fais un compliment sincère à un inconnu aujourd'hui. Le courage, ça s'entraîne."],
      ["Corps", "Marche 10 minutes en pensant à ton projet. Tu ne t'assois pas avant d'avoir une idée concrète."],
      ["Corps", "Pose une main sur ton ventre et dis ton projet à voix haute. Observe ce qui se passe dedans."],
      ["Corps", "Danse une minute sur une chanson qui ressemble à ton projet. Personne ne regarde. Ou si."],
      ["Action", "Fais une version moche de ton projet en 20 minutes. Moche, mais réelle."],
      ["Action", "Bloque 20 minutes dans ton agenda cette semaine. Rien que pour ton projet."],
      ["Action", "Achète un objet à moins de 5 € qui symbolise ton projet. Pose-le là où tu le verras chaque matin."]
    ];

    var inner = $(".carte-defi-inner", zone);
    var carte = $(".carte-defi", zone);
    var cat = $(".defi-cat", zone);
    var num = $(".defi-num", zone);
    var texte = $(".defi-texte", zone);
    var annonce = $("#defi-annonce");
    var ideeEl = $(".defi-idee", zone);
    var idee = "";
    var btnTirer = $('[data-defi="tirer"]', zone);
    var lienRelever = $('[data-defi="relever"]', zone);
    var wa = String(CONFIG.whatsapp || "").replace(/\D/g, "");
    var paquet = [];
    var retournee = false;
    var enCours = false;

    function melanger() {
      paquet = DEFIS.map(function (d, i) { return i; });
      for (var k = paquet.length - 1; k > 0; k--) {
        var h = Math.floor(Math.random() * (k + 1));
        var t = paquet[k]; paquet[k] = paquet[h]; paquet[h] = t;
      }
    }

    function remplir(i) {
      var n = "n°" + String(i + 1).padStart(2, "0");
      cat.textContent = DEFIS[i][0];
      num.textContent = n;
      texte.textContent = DEFIS[i][1];
      ideeEl.hidden = !idee;
      ideeEl.textContent = idee ? "« " + idee + " »" : "";
      annonce.textContent = "Carte défi " + n + ", " + DEFIS[i][0] + " : " + DEFIS[i][1];
      if (wa) {
        lienRelever.href = "https://wa.me/" + wa + "?text=" + encodeURIComponent(
          "Salut Quentin ! " + (idee ? "Mon idée : « " + idee + " ». " : "") + "J'ai tiré la carte défi " + n + " : « " + DEFIS[i][1] + " » Je la relève !");
      }
    }

    function tirer() {
      if (enCours) return;
      enCours = true;
      if (!paquet.length) melanger();
      var i = paquet.pop();
      var attente = retournee && !mouvementReduit() ? 300 : 0;
      if (retournee) inner.classList.remove("est-retournee");
      setTimeout(function () {
        remplir(i);
        inner.classList.add("est-retournee");
        retournee = true;
        btnTirer.textContent = "Tirer une autre carte";
        lienRelever.hidden = false;
        setTimeout(function () { enCours = false; }, mouvementReduit() ? 0 : 450);
      }, attente);
    }

    btnTirer.addEventListener("click", tirer);
    var formIdee = $("#idee-form");
    if (formIdee) formIdee.addEventListener("submit", function (e) {
      e.preventDefault();
      idee = formIdee.idee.value.trim().slice(0, 70);
      zone.scrollIntoView({ behavior: mouvementReduit() ? "auto" : "smooth", block: "start" });
      setTimeout(tirer, mouvementReduit() ? 0 : 500);
    });
    carte.addEventListener("click", tirer);
  })();

  /* ---------------- 4.4 La balade ---------------- */
  (function balade() {
    var sentier = $("#sentier");
    if (!sentier || !sentier.getTotalLength) return;

    var fait = $("#sentier-fait");
    var marcheur = $("#marcheur");
    var groupeReperes = $("#reperes");
    var aiguille = $("#aiguille");
    var arc = $("#arc-progres");
    var cadranValeur = $("#cadran-valeur");
    var label = $("#etape-label");
    var btnPrec = $('[data-balade="precedent"]');
    var btnSuiv = $('[data-balade="suivant"]');
    var etapes = $$("#etapes .etape");
    var minutes = etapes.map(function (li) { return Number(li.getAttribute("data-min")); });
    var titres = etapes.map(function (li) { return $(".etape-btn", li).textContent.trim(); });

    var total = sentier.getTotalLength();
    var ARC = 2 * Math.PI * 33;
    var SVGNS = "http://www.w3.org/2000/svg";

    fait.style.strokeDasharray = total + " " + total;
    fait.style.strokeDashoffset = total;

    // Graduations du cadran : un trait toutes les 5 minutes, un plus long tous les quarts d'heure
    var grad = $("#graduations");
    for (var i = 0; i < 18; i++) {
      var trait = document.createElementNS(SVGNS, "line");
      var majeur = i % 3 === 0;
      trait.setAttribute("x1", "50"); trait.setAttribute("x2", "50");
      trait.setAttribute("y1", "7"); trait.setAttribute("y2", majeur ? "13" : "10.5");
      trait.setAttribute("stroke", "#1E1B3A");
      trait.setAttribute("stroke-width", majeur ? "2.6" : "1.4");
      trait.setAttribute("stroke-linecap", "round");
      trait.setAttribute("transform", "rotate(" + (i * 20) + " 50 50)");
      grad.appendChild(trait);
    }

    // Repères d'étapes sur le sentier (cliquables à la souris ; au clavier on passe par les cartes)
    var reperes = minutes.map(function (m, k) {
      var p = sentier.getPointAtLength(total * m / 90);
      var g = document.createElementNS(SVGNS, "g");
      g.setAttribute("class", "etape-repere");
      var c = document.createElementNS(SVGNS, "circle");
      c.setAttribute("cx", p.x.toFixed(1)); c.setAttribute("cy", p.y.toFixed(1));
      c.setAttribute("r", k === minutes.length - 1 ? "0" : "5.5");
      g.appendChild(c);
      g.addEventListener("click", function () { aller(k, true); });
      groupeReperes.appendChild(g);
      return g;
    });

    var actuel = -1;
    var longueur = 0;
    var raf = null;
    var ignorerObservationJusqua = 0;

    function poser(l) {
      var p = sentier.getPointAtLength(l);
      marcheur.setAttribute("transform", "translate(" + p.x.toFixed(1) + " " + p.y.toFixed(1) + ")");
      fait.style.strokeDashoffset = (total - l).toFixed(1);
      var min = l / total * 90;
      aiguille.setAttribute("transform", "rotate(" + (min / 90 * 360).toFixed(1) + " 50 50)");
      arc.style.strokeDashoffset = (ARC * (1 - min / 90)).toFixed(1);
      cadranValeur.textContent = Math.round(min);
    }

    function animerVers(cible) {
      cancelAnimationFrame(raf);
      if (mouvementReduit()) { longueur = cible; poser(cible); return; }
      var depart = longueur;
      var delta = cible - depart;
      var duree = Math.min(1500, 350 + Math.abs(delta) * 2.6);
      var t0 = null;
      marcheur.classList.add("en-marche");
      function pas(t) {
        if (t0 === null) t0 = t;
        var k = Math.min(1, (t - t0) / duree);
        var e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
        longueur = depart + delta * e;
        poser(longueur);
        if (k < 1) raf = requestAnimationFrame(pas);
        else marcheur.classList.remove("en-marche");
      }
      raf = requestAnimationFrame(pas);
    }

    function aller(index, defiler) {
      index = Math.max(0, Math.min(etapes.length - 1, index));
      if (index === actuel && !defiler) return;
      actuel = index;
      etapes.forEach(function (li, k) {
        li.classList.toggle("est-active", k === index);
        if (k === index) li.setAttribute("aria-current", "step"); else li.removeAttribute("aria-current");
      });
      reperes.forEach(function (r, k) { r.classList.toggle("est-passee", k <= index); });
      var dernier = index === etapes.length - 1;
      label.textContent = dernier
        ? "L'arrivée · 90 min"
        : "Étape " + (index + 1) + "/" + (etapes.length - 1) + " · " + titres[index];
      btnPrec.disabled = index === 0;
      btnSuiv.disabled = dernier;
      animerVers(total * minutes[index] / 90);
      if (defiler) {
        ignorerObservationJusqua = Date.now() + 900;
        etapes[index].scrollIntoView({ behavior: mouvementReduit() ? "auto" : "smooth", block: "center" });
      }
    }

    btnPrec.addEventListener("click", function () { aller(actuel - 1, true); });
    btnSuiv.addEventListener("click", function () { aller(actuel + 1, true); });
    etapes.forEach(function (li, k) {
      li.addEventListener("click", function (e) {
        if (e.target.closest("a")) return;
        aller(k, true);
      });
    });

    // Au défilement : l'étape qui passe au milieu de l'écran devient l'étape active
    if ("IntersectionObserver" in window) {
      var obs = new IntersectionObserver(function (entrees) {
        if (Date.now() < ignorerObservationJusqua) return;
        entrees.forEach(function (en) {
          if (en.isIntersecting) aller(etapes.indexOf(en.target), false);
        });
      }, { rootMargin: "-50% 0px -45% 0px" });
      etapes.forEach(function (li) { obs.observe(li); });
    }

    aller(0, false);
  })();

  /* ---------------- 4.5 Le test ---------------- */
  (function test() {
    var boite = $("#test-boite");
    if (!boite) return;

    var QUESTIONS = [
      { q: "Ces derniers jours, ton sommeil ressemble plutôt à…", r: [
        ["Ça tourne dans ma tête, je mets du temps à m'endormir", "S"],
        ["Je dors, mais je me réveille sans énergie", "V"],
        ["Je dors plutôt bien", "D"] ] },
      { q: "Ton énergie dans la journée ?", r: [
        ["En montagnes russes : des pics, puis des chutes", "S"],
        ["À plat, tout me demande un effort", "V"],
        ["Stable, j'ai du jus", "D"] ] },
      { q: "Dans ta tête, en ce moment, c'est…", r: [
        ["Dix onglets ouverts en même temps", "S"],
        ["Le brouillard, un écran de veille", "V"],
        ["Assez clair", "D"] ] },
      { q: "Quand tu penses à ton projet, ton corps…", r: [
        ["Le cœur s'accélère, le ventre se serre", "S"],
        ["Tout devient lourd, j'ai envie de penser à autre chose", "V"],
        ["Ça pétille, j'ai envie", "D"] ] },
      { q: "Ton envie d'agir ?", r: [
        ["J'ai envie de tout faire, je ne vais au bout de rien", "S"],
        ["Je remets à demain, puis à après-demain", "V"],
        ["J'ai envie de m'y mettre, il me manque le premier pas", "D"] ] },
      { q: "Un imprévu tombe. Ta réaction ?", r: [
        ["Je m'agace vite, ça monte d'un coup", "S"],
        ["Je me ferme et je laisse tomber", "V"],
        ["Je m'adapte sans trop de mal", "D"] ] },
      { q: "Ta respiration, là, maintenant ?", r: [
        ["Courte, dans le haut de la poitrine", "S"],
        ["Je la sens à peine", "V"],
        ["Ample et tranquille", "D"] ] },
      { q: "Quelqu'un te dit : « Lance ton projet demain. » Tu réponds…", r: [
        ["« Demain ? Il y a mille choses à régler avant ! »", "S"],
        ["« Bof… pas maintenant. »", "V"],
        ["« Chiche ! »", "D"] ] }
    ];
    // Ordre des réponses varié d'une question à l'autre, pour ne pas deviner le « bon » profil
    QUESTIONS.forEach(function (q, i) {
      var d = i % 3;
      q.r = q.r.slice(d).concat(q.r.slice(0, d));
    });

    var ILLU = {
      S: '<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="13" fill="#FFC233" stroke="#1E1B3A" stroke-width="3"/><g stroke="#1E1B3A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"><path d="M32 4l-3 5 4 2-2 5"/><path d="M32 60l3-5-4-2 2-5"/><path d="M4 32l5 3 2-4 5 2"/><path d="M60 32l-5-3-2 4-5-2"/></g></svg>',
      V: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M40 12a20 20 0 1 0 12 30A17 17 0 0 1 40 12z" fill="#FFC233" stroke="#1E1B3A" stroke-width="3" stroke-linejoin="round"/><path d="M44 10h8l-8 9h8" fill="none" stroke="#1E1B3A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      D: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M36 6 L40.5 19.5 L54 24 L40.5 28.5 L36 42 L31.5 28.5 L18 24 L31.5 19.5 Z" fill="#FF5A1F"/><g stroke="#1E1B3A" stroke-width="3" stroke-linecap="round"><path d="M14 58l10-10"/><path d="M24 58l6-6"/><path d="M10 48l6-6"/></g></svg>'
    };

    var RESULTATS = {
      S: {
        titre: "En surchauffe",
        court: "Tout s'accélère, la tête déborde.",
        texte: "Ton corps a le pied sur l'accélérateur : la tête déborde et tout va trop vite. Ce n'est pas un défaut, c'est un système qui veut tout gérer en même temps. Avant d'agir, on fait redescendre la pression, pour que ton élan serve enfin ton projet.",
        gestes: [
          "Une seule chose à la fois : écris toutes tes idées, puis entoures-en une. Les autres attendront.",
          "Marche 10 minutes sans téléphone après un repas.",
          "Coupe les écrans 30 minutes avant de dormir."
        ],
        exo: "Le soupir physiologique",
        etapes: [
          "Inspire par le nez.",
          "Sans expirer, ajoute une deuxième petite inspiration par le nez.",
          "Expire longuement par la bouche, comme un grand soupir.",
          "Recommence pendant une minute, sans forcer."
        ]
      },
      V: {
        titre: "En veille",
        court: "L'énergie s'éteint, le projet paraît loin.",
        texte: "Ton corps a mis ton projet en pause pour économiser ton énergie. Ce n'est pas de la paresse, c'est une façon de te protéger. On rallume le moteur en douceur, par le mouvement, avant de te demander d'avancer.",
        gestes: [
          "Bouge avant de réfléchir : 2 minutes le matin à sautiller ou secouer les bras.",
          "Sors 10 minutes à la lumière du jour, dans l'heure qui suit ton réveil.",
          "Fais un micro-pas de 5 minutes sur ton projet, avec un minuteur. Pas plus."
        ],
        exo: "Pousser le mur",
        etapes: [
          "Pose tes deux mains à plat contre un mur ou un arbre.",
          "Pousse fort, comme si tu voulais le déplacer, pendant 20 secondes.",
          "Relâche. Sens ce qui se passe dans tes bras et tes jambes.",
          "Recommence une ou deux fois."
        ]
      },
      D: {
        titre: "Prêt à décoller",
        court: "Le terrain est prêt, il manque le premier pas.",
        texte: "Ton terrain est prêt : il y a de l'énergie et un minimum de clarté. Ce qui te manque n'est pas une préparation de plus, c'est le premier pas. Celui-là, on peut le faire ensemble, dans la semaine.",
        gestes: [
          "Annonce une date à quelqu'un, à voix haute.",
          "Bloque 20 minutes dans ton agenda, rien que pour ton projet.",
          "Fais la version moche : 10 minutes, mais réelle."
        ],
        exo: "Ton premier pas en une phrase",
        etapes: [
          "Prends un papier ou ton téléphone.",
          "Écris ton premier pas en une seule phrase, en commençant par un verbe.",
          "Ajoute un jour : « … avant jeudi ».",
          "Relis-la à voix haute. C'est ta première carte défi."
        ]
      }
    };

    var reponses = [];
    var profil = null;
    // Tant qu'aucun service d'envoi n'est branché, on ne promet pas d'e-mail : le détail s'affiche tout de suite
    var detailDebloque = !String(CONFIG.formulaireTest || "").trim();
    var chronoTimer = null;

    function echapper(t) {
      return String(t).replace(/[&<>"']/g, function (c) {
        return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
      });
    }

    function afficher(html, focusSel) {
      clearInterval(chronoTimer);
      boite.innerHTML = html;
      majCtaEntete();
      $$(".btn--primary", boite).forEach(surveillerCta);
      var cible = focusSel ? $(focusSel, boite) : null;
      if (cible) { cible.setAttribute("tabindex", "-1"); cible.focus({ preventScroll: true }); }
      var haut = boite.getBoundingClientRect().top;
      if (haut < 80 || haut > window.innerHeight * 0.6) {
        boite.scrollIntoView({ behavior: mouvementReduit() ? "auto" : "smooth", block: "start" });
      }
    }

    function ecranQuestion(i) {
      var q = QUESTIONS[i];
      var lettres = ["A", "B", "C"];
      var choix = q.r.map(function (r, k) {
        var presse = reponses[i] === k ? "true" : "false";
        return '<button type="button" data-rep="' + k + '" aria-pressed="' + presse + '"><span class="lettre" aria-hidden="true">' + lettres[k] + "</span>" + echapper(r[0]) + "</button>";
      }).join("");
      var pct = Math.round((i / QUESTIONS.length) * 100);
      afficher(
        '<div class="progression" role="progressbar" aria-label="Progression du test" aria-valuemin="0" aria-valuemax="' + QUESTIONS.length + '" aria-valuenow="' + i + '"><div class="progression-barre" style="width:' + pct + '%"></div></div>' +
        '<p class="progression-texte">Question ' + (i + 1) + " sur " + QUESTIONS.length + "</p>" +
        '<h3 class="question-titre">' + echapper(q.q) + "</h3>" +
        '<div class="choix">' + choix + "</div>" +
        '<button type="button" class="test-retour" data-test="retour">← ' + (i === 0 ? "Revenir au début" : "Question précédente") + "</button>",
        ".question-titre"
      );
      // Petite animation de la barre jusqu'à la question en cours
      requestAnimationFrame(function () {
        var barre = $(".progression-barre", boite);
        if (barre) barre.style.width = Math.round(((i + 0.5) / QUESTIONS.length) * 100) + "%";
      });
      $$(".choix button", boite).forEach(function (b) {
        b.addEventListener("click", function () {
          reponses[i] = Number(b.getAttribute("data-rep"));
          $$(".choix button", boite).forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
          setTimeout(function () {
            if (i + 1 < QUESTIONS.length) ecranQuestion(i + 1);
            else { calculer(); ecranResultat(); }
          }, mouvementReduit() ? 0 : 260);
        });
      });
      $('[data-test="retour"]', boite).addEventListener("click", function () {
        if (i === 0) ecranIntro(); else ecranQuestion(i - 1);
      });
    }

    function calculer() {
      var score = { S: 0, V: 0, D: 0 };
      reponses.forEach(function (k, i) { score[QUESTIONS[i].r[k][1]] += 1; });
      // En cas d'égalité : surchauffe, puis veille, puis décollage
      profil = ["S", "V", "D"].reduce(function (a, b) { return score[b] > score[a] ? b : a; }, "S");
    }

    function htmlDetail(r) {
      var etapes = r.etapes.map(function (e) { return "<li>" + echapper(e) + "</li>"; }).join("");
      return '<div class="detail">' +
        "<p>" + echapper(r.texte) + "</p>" +
        '<div class="bilan-gestes"><h4>Ton bilan : 3 gestes simples cette semaine</h4><ol>' +
        r.gestes.map(function (g) { return "<li>" + echapper(g) + "</li>"; }).join("") + "</ol></div>" +
        '<div class="exercice">' +
          "<h4>Ton exercice d'une minute : " + echapper(r.exo) + "</h4>" +
          "<ol>" + etapes + "</ol>" +
          '<div class="chrono"><button type="button" class="btn btn--ghost" data-test="chrono">Lancer la minute</button>' +
          '<span class="chrono-affichage" aria-hidden="true">1:00</span></div>' +
          '<p class="visually-hidden" aria-live="polite" data-chrono-annonce></p>' +
        "</div></div>";
    }

    function htmlCapture() {
      return '<form class="capture" novalidate>' +
        "<h4>Reçois ton résultat et ton premier défi par e-mail</h4>" +
        '<div class="champ"><label for="test-prenom">Ton prénom</label><input id="test-prenom" name="prenom" type="text" autocomplete="given-name" required></div>' +
        '<div class="champ"><label for="test-email">Ton e-mail</label><input id="test-email" name="email" type="email" autocomplete="email" inputmode="email" required></div>' +
        '<input class="pot-de-miel" type="text" name="_gotcha" tabindex="-1" autocomplete="off" aria-hidden="true">' +
        '<label class="consentement"><input type="checkbox" name="consentement" required> <span>J\'accepte de recevoir mon résultat et quelques e-mails de Quentin pour passer à l\'action. Désinscription en un clic. <a href="confidentialite.html">Ce que je fais de tes données</a>.</span></label>' +
        '<p class="capture-erreur" hidden></p>' +
        '<button class="btn btn--nuit" type="submit">Recevoir mon résultat</button>' +
        "</form>";
    }

    function ecranResultat() {
      var r = RESULTATS[profil];
      afficher(
        '<div class="resultat-tete"><div class="resultat-illu">' + ILLU[profil] + "</div>" +
        '<div><p class="petit" style="margin:0">Ton résultat</p><h3 class="resultat-titre">' + r.titre + "</h3></div></div>" +
        '<p class="resultat-court">' + echapper(r.court) + "</p>" +
        '<div data-zone-detail>' + (detailDebloque ? htmlDetail(r) : htmlCapture()) + "</div>" +
        '<div class="resultat-cta"><a class="lien-geste" href="index.html#carte-defi">Tire aussi ta carte défi</a><a class="btn btn--primary" href="index.html#reserver">Allez, je me lance <span class="fleche" aria-hidden="true">→</span></a>' +
        '<button type="button" class="test-retour" data-test="refaire">↺ Refaire le test</button></div>',
        ".resultat-titre"
      );
      brancherResultat();
    }

    function brancherResultat() {
      $('[data-test="refaire"]', boite).addEventListener("click", function () {
        reponses = []; profil = null; ecranQuestion(0);
      });
      var form = $("form.capture", boite);
      if (form) form.addEventListener("submit", envoyer);
      brancherChrono();
    }

    function brancherChrono() {
      var bouton = $('[data-test="chrono"]', boite);
      if (!bouton) return;
      var affichage = $(".chrono-affichage", boite);
      var annonce = $("[data-chrono-annonce]", boite);
      bouton.addEventListener("click", function () {
        clearInterval(chronoTimer);
        var reste = 60;
        bouton.textContent = "C'est parti…";
        bouton.disabled = true;
        annonce.textContent = "Minute lancée.";
        chronoTimer = setInterval(function () {
          reste -= 1;
          affichage.textContent = "0:" + String(reste).padStart(2, "0");
          if (reste <= 0) {
            clearInterval(chronoTimer);
            affichage.textContent = "✓";
            bouton.textContent = "Encore une minute";
            bouton.disabled = false;
            annonce.textContent = "Minute terminée. Comment tu te sens ?";
          }
        }, 1000);
      });
    }

    function envoyer(e) {
      e.preventDefault();
      var form = e.target;
      var erreur = $(".capture-erreur", form);
      var prenom = form.prenom.value.trim();
      var email = form.email.value.trim();
      if (!prenom || !email || !form.email.checkValidity()) {
        erreur.textContent = "Il me faut ton prénom et un e-mail valide.";
        erreur.hidden = false;
        (prenom ? form.email : form.prenom).focus();
        return;
      }
      if (!form.consentement.checked) {
        erreur.textContent = "Coche la case pour recevoir ton résultat par e-mail.";
        erreur.hidden = false;
        form.consentement.focus();
        return;
      }
      if (form._gotcha.value) return; // robot

      var bouton = $('button[type="submit"]', form);
      bouton.disabled = true;
      bouton.textContent = "Envoi…";

      var r = RESULTATS[profil];
      var donnees = {
        prenom: prenom,
        email: email,
        consentement: "oui",
        resultat: r.titre,
        reponses: reponses.map(function (k, i) { return QUESTIONS[i].q + " → " + QUESTIONS[i].r[k][0]; }).join("\n"),
        date: new Date().toISOString()
      };

      var adresse = (CONFIG.formulaireTest || "").trim();
      var envoi = adresse
        ? fetch(adresse, {
            method: "POST",
            headers: { "Content-Type": "application/json", "Accept": "application/json" },
            body: JSON.stringify(donnees)
          }).then(function (rep) { if (!rep.ok) throw new Error("HTTP " + rep.status); })
        : Promise.resolve();

      envoi.then(function () {
        detailDebloque = true;
        var zone = $("[data-zone-detail]", boite);
        zone.innerHTML = '<p class="surtitre" style="margin-top:20px">' +
          (adresse ? "C'est envoyé, " + echapper(prenom) + " ! Regarde ta boîte mail." : "Voici ton résultat détaillé, " + echapper(prenom) + ".") +
          "</p>" + htmlDetail(r);
        brancherChrono();
        var titre = $(".exercice h4", zone);
        if (titre) { titre.setAttribute("tabindex", "-1"); titre.focus({ preventScroll: false }); }
      }).catch(function () {
        bouton.disabled = false;
        bouton.textContent = "Recevoir mon résultat";
        erreur.textContent = "Oups, l'envoi n'est pas passé. Réessaie dans un instant.";
        erreur.hidden = false;
      });
    }

    var introHTML = boite.innerHTML;
    function ecranIntro() {
      afficher(introHTML, ".question-titre");
      brancherIntro();
    }
    function brancherIntro() {
      var b = $('[data-test="commencer"]', boite);
      if (b) b.addEventListener("click", function () { reponses = []; ecranQuestion(0); });
    }
    brancherIntro();
  })();

  /* ---------------- 4.10 Réserver (Cal.com) ---------------- */
  (function reserver() {
    var agenda = $("#agenda");
    if (!agenda) return;

    function nettoyer(lien) {
      return String(lien || "").trim()
        .replace(/^https?:\/\/(app\.)?cal\.com\//i, "")
        .replace(/^\/+|\/+$/g, "");
    }
    var ORDRE = ["balade", "parcours", "decouverte"];
    var liens = {
      balade: nettoyer(CONFIG.calBalade),
      parcours: nettoyer(CONFIG.calParcours),
      decouverte: nettoyer(CONFIG.calDecouverte)
    };
    var dispo = ORDRE.filter(function (f) { return liens[f]; });

    // Appel découverte : tant qu'il n'a pas son lien Cal.com, le bouton ouvre WhatsApp
    var wa = String(CONFIG.whatsapp || "").replace(/\D/g, "");
    if (!liens.decouverte && wa) {
      $$('[data-formule="decouverte"]').forEach(function (a) {
        a.href = "https://wa.me/" + wa + "?text=" + encodeURIComponent("Bonjour Quentin, j'aimerais réserver un appel découverte de 15 minutes.");
        a.target = "_blank";
        a.rel = "noopener";
        a.removeAttribute("data-formule");
      });
    }
    if (!dispo.length) return; // rien de branché : l'emplacement « à compléter » reste affiché

    var groupe = $(".choix-formule");
    var secours = $("#reserver-secours");
    var lienSecours = $("#lien-secours");
    var formule = dispo[0];
    var charge = false;
    var initialise = {};

    agenda.innerHTML = ORDRE.map(function (f) {
      return '<div class="agenda-cal" id="cal-' + f + '"' + (f === formule ? "" : " hidden") + "></div>";
    }).join("");
    $$("button[data-choix]", groupe).forEach(function (b) {
      b.hidden = !liens[b.getAttribute("data-choix")];
    });
    groupe.hidden = dispo.length < 2;
    secours.hidden = false;

    function majSecours() { lienSecours.href = "https://cal.com/" + liens[formule]; }

    function chargerCal() {
      if (charge) return;
      charge = true;
      /* Code d'intégration officiel de Cal.com */
      (function (C, A, L) { var p = function (a, ar) { a.q.push(ar); }; var d = C.document; C.Cal = C.Cal || function () { var cal = C.Cal; var ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { var api = function () { p(api, arguments); }; var namespace = ar[1]; api.q = api.q || []; if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
      initialiser(formule);
    }

    function initialiser(f) {
      if (initialise[f] || !liens[f]) return;
      initialise[f] = true;
      window.Cal("init", f, { origin: "https://cal.com" });
      window.Cal.ns[f]("inline", {
        elementOrSelector: "#cal-" + f,
        calLink: liens[f],
        config: { layout: "month_view" }
      });
      window.Cal.ns[f]("ui", {
        theme: "light",
        cssVarsPerTheme: { light: { "cal-brand": "#1E1B3A" } },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
      window.Cal.ns[f]("on", { action: "bookingSuccessful", callback: function () { confirmer(f); } });
    }

    function choisir(f) {
      if (!liens[f]) f = dispo[0];
      formule = f;
      $$("button[data-choix]", groupe).forEach(function (b) {
        b.setAttribute("aria-pressed", b.getAttribute("data-choix") === f ? "true" : "false");
      });
      ORDRE.forEach(function (x) { $("#cal-" + x).hidden = x !== f; });
      majSecours();
      if (charge) initialiser(f);
    }

    function confirmer(f) {
      var texte = f === "decouverte"
        ? "On se parle très vite. Viens comme tu es, avec ton envie, même floue."
        : "Prépare de bonnes chaussures. Prêt à jouer&nbsp;?";
      agenda.innerHTML =
        '<div class="confirmation">' +
        '<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="29" cy="35" r="26" fill="#FFC233"/><path d="M17 35l8 8 16-17" fill="none" stroke="#1E1B3A" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M51 2 L54.2 10.3 L62.5 13.5 L54.2 16.7 L51 25 L47.8 16.7 L39.5 13.5 L47.8 10.3 Z" fill="#FF5A1F"/></svg>' +
        '<h3 tabindex="-1">C\'est noté.</h3>' +
        "<p>" + texte + "</p></div>";
      secours.hidden = true;
      groupe.hidden = true;
      $("h3", agenda).focus();
    }

    $$("button[data-choix]", groupe).forEach(function (b) {
      b.addEventListener("click", function () { choisir(b.getAttribute("data-choix")); });
    });
    $$("[data-formule]").forEach(function (a) {
      a.addEventListener("click", function () { choisir(a.getAttribute("data-formule")); chargerCal(); });
    });
    $$('a[href="#reserver"]').forEach(function (a) { a.addEventListener("click", chargerCal); });

    choisir(formule);

    // L'agenda se charge seulement quand on s'en approche : la page reste légère
    if ("IntersectionObserver" in window) {
      var obs = new IntersectionObserver(function (entrees) {
        if (entrees.some(function (en) { return en.isIntersecting; })) { chargerCal(); obs.disconnect(); }
      }, { rootMargin: "800px 0px" });
      obs.observe(agenda);
    } else {
      chargerCal();
    }
  })();
})();
