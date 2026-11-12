# À compléter avant le lancement

Tout ce qui est entre crochets `[ ]` sur le site est surligné en jaune rayé : impossible à rater.
Voici la liste, **dans l'ordre où je te conseille de la faire**.

## ✅ Déjà fait
- Prix : Balade Déclic 140 €, Parcours 490 € (4 × 1h30, suivi WhatsApp), en euros
- Appel découverte de 15 min (en attendant son lien Cal.com, le bouton ouvre WhatsApp)
- WhatsApp +33 6 31 79 44 79, Instagram @quentinfauchereau
- Lieu : Maison du Salève, 775 route de Mikerne, 74160 Présilly (parking à 100 m)
- Marche à plat, au pied du Salève (et non plus « sur » le Salève)

## 1. Cal.com : créer les 3 types de rendez-vous
| Nom | Durée | Prix |
|---|---|---|
| Balade Déclic | 90 min | 140 € |
| Parcours Premier Pas | 90 min (première séance) | 490 € |
| Appel découverte | 15 min | gratuit |

Pour la Balade et le Parcours, onglet **Advanced** :
- **Booking questions**, ajoute les trois questions :
  - Quelle idée ou quel projet te trotte dans la tête en ce moment, même flou ?
  - Qu'est-ce qui t'empêche de t'y mettre ?
  - À la fin de la balade, qu'est-ce qui ferait que tu repartes content ?
- **Redirect on booking** → `https://quentinfauchereau.com/merci.html`
- **Lieu** : Maison du Salève, 775 route de Mikerne, 74160 Présilly

Paiement en ligne (facultatif) : **Apps → Stripe**, puis active-le dans chaque type de rendez-vous.

Envoie-moi ensuite les 3 liens (ex. `https://cal.com/ton-nom/balade-declic`).

## 2. Témoignages
- [x] Paulinette et Martyna L. (avis Google, extraits mot pour mot)
- [ ] Mois et année de l'avis de Paulinette
- [ ] Prévenir Paulinette et Martyna que leur avis est repris sur le site
- [ ] Un avis après ta première Balade Déclic
Les avis qui parlent de douleurs, de tendinite ou de chimio ne sont **volontairement pas repris** :
sur ton site, ils deviendraient des promesses de guérison.

## 3. Formulaire du test
Choisis un service (Formspree est le plus simple à brancher) et colle son adresse dans `assets/js/config.js`.
⚠️ Vérifie qu'il sait **envoyer automatiquement un e-mail au visiteur**, sinon la promesse
« Reçois ton résultat par e-mail » ne sera pas tenue.

## 4. Textes encore manquants
- [ ] Ton e-mail
- [ ] Mode de paiement
- [ ] Politique d'annulation
- [ ] Politique météo
- [ ] Durée de validité du Parcours (4 séances à utiliser en combien de temps ?)
- [ ] Accès depuis Genève (itinéraire, temps de trajet)
- [ ] SIRET complet (SIREN 990 221 483 repéré sur Pappers) et activité déclarée
- [ ] Adresse professionnelle ou de domiciliation
- [ ] Médiateur de la consommation (obligatoire en France pour vendre à des particuliers)
- [ ] TVA : franchise en base (article 293 B du CGI) ?

## 5. Photos
- [x] Provisoire : ta photo en chemise blanche (accueil) et ton portrait (qui je suis)
- [ ] **Prioritaire** : toi dehors, en mouvement, au pied du Salève (format portrait).
      La photo actuelle est prise en cabinet : elle contredit « magnétiseur hors cabinet ».
- [ ] Les originaux en haute définition (pas des captures d'écran)

## 6. Le jour du lancement
- [ ] Retirer la ligne `<meta name="robots" content="noindex, nofollow">` de chaque page
      (tant qu'elle est là, **ni Google ni les IA ne verront le site**)
- [ ] Brancher le nom de domaine quentinfauchereau.com
- [ ] Activer Plausible (ligne déjà prête, en commentaire, dans `index.html`)
- [ ] Mettre à jour l'hébergeur dans les mentions légales
- [ ] Faire relire les CGV et la politique de confidentialité par un professionnel

## 7. Référencement local : les 3 gestes qui pèsent le plus
1. **Fiche Google Business Profile** : ajoute le lien du site, les mêmes horaires,
   le même téléphone et les mêmes mots (magnétiseur, Salève, Genève, Saint-Julien).
2. **Avis Google** : demande un avis après chaque balade. C'est le premier critère local.
3. **Mêmes informations partout** (Resalib, Instagram, Google, site) : même nom,
   même téléphone, même lieu. Google et les IA recoupent ces sources.

## Variantes du titre d'accueil
- Actuel : « Dix idées en tête. Aucune lancée. On y va ? »
- Variante 1 : « Ton projet dort dans un carnet. On le réveille ? »
- Variante 2 : « Assez réfléchi. On marche, on rit, tu passes à l'acte. »
