# À compléter avant le lancement

Tout ce qui est entre crochets `[ ]` sur le site est surligné en jaune rayé : impossible à rater.
Voici la liste, **dans l'ordre où je te conseille de la faire**.

## 1. Cal.com (réservation) : le plus important
1. Crée un compte sur cal.com.
2. Crée deux types de rendez-vous : « Balade Déclic » (90 min) et « Parcours Premier Pas ».
3. Dans chaque type, onglet **Advanced → Booking questions**, ajoute les trois questions :
   - Quelle idée ou quel projet te trotte dans la tête en ce moment, même flou ?
   - Qu'est-ce qui t'empêche de t'y mettre ?
   - À la fin de la balade, qu'est-ce qui ferait que tu repartes content ?
4. Toujours dans Advanced : **Redirect on booking** → `https://quentinfauchereau.com/merci.html`
   (la page « C'est noté. Prépare de bonnes chaussures. Prêt à jouer ? »).
5. Paiement en ligne (facultatif) : **Apps → Stripe**, puis active le paiement dans le type de rendez-vous.
6. Copie la fin de chaque lien (ex. `quentin-fauchereau/balade-declic`) dans `assets/js/config.js`.

## 2. Formulaire du test
Choisis un service (Formspree est le plus simple à brancher), crée un formulaire,
et colle son adresse d'envoi dans `assets/js/config.js` → `formulaireTest`.
⚠️ Vérifie que ton service sait **envoyer automatiquement un e-mail au visiteur** :
ce n'est pas le cas de toutes les offres gratuites. Sinon, la promesse
« Reçois ton résultat par e-mail » ne sera pas tenue.

## 3. Textes à fournir (dans `index.html`, `cgv.html`, `mentions-legales.html`, `confidentialite.html`)
- [ ] Ton e-mail, ton téléphone, ton compte Instagram
- [ ] Prix en € ou en CHF
- [ ] Mode de paiement
- [ ] Politique d'annulation
- [ ] Politique météo
- [ ] Durée de validité du Parcours (4 balades à utiliser en combien de temps ?)
- [ ] Point de rendez-vous, parking, accès depuis Genève
- [ ] SIRET complet (SIREN 990 221 483 repéré sur Pappers) et activité déclarée
- [ ] Adresse professionnelle ou de domiciliation
- [ ] Médiateur de la consommation (obligatoire en France pour vendre à des particuliers)
- [ ] TVA : franchise en base (article 293 B du CGI) ?

## 4. Photos
- [ ] Hero : toi en mouvement, souriant, lumière naturelle sur le Salève (format portrait)
- [ ] Qui je suis : un portrait
Envoie-les-moi : je les optimise et je les place.

## 5. Le jour du lancement
- [ ] Retirer la ligne `<meta name="robots" content="noindex, nofollow">` de chaque page
- [ ] Activer Plausible (ligne déjà prête, en commentaire, dans `index.html`)
- [ ] Brancher le nom de domaine quentinfauchereau.com
- [ ] Mettre à jour l'hébergeur dans les mentions légales
- [ ] Faire relire les CGV et la politique de confidentialité par un professionnel

## 6. Après les premières balades
- [ ] Trois témoignages réels (prénom, projet, phrase clé), avec l'accord écrit des personnes

## Variantes du titre d'accueil
- Actuel : « Dix idées en tête. Aucune lancée. On y va ? »
- Variante 1 : « Ton projet dort dans un carnet. On le réveille ? »
- Variante 2 : « Assez réfléchi. On marche, on rit, tu passes à l'acte. »
