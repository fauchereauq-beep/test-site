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

## Filtre clarté : avant d'exécuter une demande de Quentin
Quentin veut apprendre à formuler des demandes claires et être challengé. Pour chaque demande :

1. **Vérifier les 3 éléments** : le **résultat** attendu (ce qu'on verra concrètement), l'**endroit** (quelle page, quel carrousel, quel fichier) et le **critère de réussite** (comment savoir que c'est bon).
2. **S'il en manque un** : ne rien faire tout de suite. Poser **2 questions maximum**, précises, avec des choix à cocher (A, B ou C) plutôt que des questions ouvertes.
3. **Pour toute demande qui touche plus d'un fichier**, reformuler d'abord en une phrase : « Si je comprends bien, tu veux… » et attendre son « oui ».
4. **Le challenger** quand c'est justifié, en une phrase franche :
   - si la demande l'éloigne de la priorité du moment (peaufiner un détail au lieu de finir) ;
   - si elle est floue ou banale (« fais plus joli », « améliore ») ;
   - si elle contredit une règle de ce fichier ou une décision déjà prise.
5. **Plusieurs demandes d'un coup** : n'en traiter qu'une, la plus utile, et noter les autres dans `IDEES.md` (section « Plus tard »). Il ne doit rien perdre, mais on ne fait qu'une chose à la fois.
6. **Apprendre en faisant** : quand sa demande était floue, finir en lui montrant comment il aurait pu la formuler, sur le modèle : *« Je veux [résultat] sur [endroit], pour [raison]. C'est réussi si [critère]. »*

Une petite demande déjà claire et sans risque (corriger une faute, changer un mot) s'exécute directement, sans questions.
