# Projet : site vitrine de Quentin Fauchereau

Site vitrine avec réservation en ligne pour l'accompagnement de Quentin.
Signature de marque : **« Crée ce qui t'anime ! »**. Énergie : audacieux, joueur, tourné vers l'action.

## À lire avant de travailler
- `BRIEF.md` : qui est Quentin, à qui parle le site, ce qu'on y réserve, et les **décisions encore à trancher**.
- Dépôt `fauchereauq-beep/Instagram` (`BIBLE.md`, `QUENTIN.md`) : univers de marque, ton, histoire de Quentin. Le site et Instagram doivent former une seule et même marque.

## Choix techniques (simples, par principe)
- Site **statique** : HTML + CSS, un peu de JavaScript seulement si nécessaire. Pas de framework, pas de base de données.
- Mise en ligne : **Vercel**, branché sur ce dépôt. Chaque push sur `main` met le site en ligne.
- Réservation : **outil externe intégré** (Cal.com ou Calendly). On ne recode jamais un agenda ni un paiement.
- Structure visée : `index.html` à la racine, `css/`, `img/`, une page par fichier.

## Règles non négociables
- **Pas de construction tant que `BRIEF.md` n'a pas ses réponses** : cible, offre réservable, promesse. Si une réponse manque, poser la question à Quentin au lieu d'inventer.
- **Aucun texte inventé sur Quentin** : pas de faux témoignage, pas de faux chiffre, pas de diplôme ou d'expérience qu'il n'a pas donnés.
- Le magnétisme et l'énergétique sont présentés comme **son vécu et sa pratique**, jamais comme de la science ou un soin médical. Aucune promesse de guérison.
- Ne pas mentionner le TDAH ni le mot « multipotentiel » dans les textes du site.
- **Aucune clé, aucun mot de passe** dans le code : tout passe par les variables d'environnement de Vercel.
- Mobile d'abord : la plupart des visiteurs viendront d'Instagram, donc d'un téléphone.
- Avant de pousser : vérifier le rendu sur mobile et sur ordinateur, et que le bouton de réservation fonctionne.

## Façon de travailler avec Quentin
Il ne code pas. Il faut lui expliquer chaque étape en une phrase simple, sans jargon.
Français, direct, exigeant : le challenger, pas le flatter. Il a un TDAH et procrastine : réponses claires, l'essentiel d'abord, **une seule action concrète** à la fin.
Une page à la fois, validée par Quentin avant de passer à la suivante.
