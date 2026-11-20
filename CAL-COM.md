# Cal.com : tous les textes à copier-coller

Temps estimé : 30 à 45 minutes. Fais un rendez-vous à la fois, coche, passe au suivant.
Les mots entre crochets `[ ]` sont à compléter par toi.

> Les noms des menus peuvent varier légèrement selon la langue de Cal.com
> (je donne le nom français, puis l'anglais entre parenthèses).

---

## 0. Réglages de base (5 min)

**Paramètres → Général (Settings → General)**
- Langue : Français
- Fuseau horaire : Europe/Paris

**Paramètres → Mon compte → Profil (Settings → Profile)**
- Nom d'utilisateur : `quentinfauchereau` (tes liens seront `cal.com/quentinfauchereau/...`)
- Nom : `Quentin Fauchereau`
- Photo : ton portrait
- À propos (About) :

```
Accompagnateur holistique et magnétiseur, au pied du Salève, près de Genève. Je t'aide à passer de la tête en pagaille au premier pas concret vers ce qui t'anime. Crée ce qui t'anime !
```

**Disponibilités (Availability)** : indique tes jours et heures de balade.

---

## 1. Balade Déclic

| Champ | À mettre |
|---|---|
| Titre (Title) | `Balade Déclic · 1h au pied du Salève` |
| URL | `balade-declic` |
| Durée (Duration) | `60` minutes |
| Lieu (Location) | En personne, adresse de l'organisateur (In Person, Organizer Address) : `Maison du Salève, 775 route de Mikerne, 74160 Présilly` |

**Description :**
```
Une heure de marche à plat, en solo, au pied du Salève. Tu repars avec un prochain pas clair, à faire dans la semaine.

Au programme, en trois temps. On fait le point : pourquoi tu es là, ton système nerveux en 2 minutes, le blocage du jour. On rééquilibre : soin en magnétisme (facultatif) et exercices dans la nature. On relance : je joue ton rôle (on rit souvent), puis tu tires ta carte défi et tu la commences sur place. Une semaine après, on fait le point ensemble (10 à 15 minutes).

Prix : 90 €, en espèces ou par virement, le jour de la séance. Si tu continues avec le Parcours Premier Pas dans les 30 jours, ces 90 € sont déduits.

Garantie premier pas : si tu repars sans élan ni prochain pas clair, la séance suivante est offerte.

Rendez-vous : Maison du Salève, 775 route de Mikerne, 74160 Présilly. Parking une centaine de mètres avant le bâtiment.
À prévoir : de bonnes chaussures et une tenue selon la météo.
S'il pleut : on reporte, on passe à distance, ou on se retrouve dans un lieu à l'abri choisi ensemble à l'avance.
Annulation : gratuite jusqu'à 48 h avant. Après, la séance est due.

Les séances ne sont pas des actes médicaux et ne remplacent pas un avis ou un traitement médical.
```

**Onglet Avancé → Questions de réservation (Advanced → Booking questions)**
Garde « Nom » et « E-mail », puis ajoute :

| Question | Type | Obligatoire ? |
|---|---|---|
| `Qu'est-ce qui t'amène : une idée qui n'avance pas, une fatigue qui ne passe pas, ou les deux ?` | Texte long | Oui |
| `Qu'est-ce qui te freine ou te pèse le plus en ce moment ?` | Texte long | Oui |
| `À la fin de la balade, qu'est-ce qui ferait que tu repartes content ?` | Texte long | Non |
| `Ton numéro WhatsApp (pour te prévenir s'il pleut)` | Téléphone | Oui |

**Onglet Avancé → Rediriger après la réservation (Redirect on booking)**
- Pour l'instant : `https://fauchereauq-beep.github.io/test-site/merci.html`
- Après le lancement : `https://quentinfauchereau.com/merci.html`

**Onglet Limites (Limits)**
- Préavis minimum (Minimum notice) : `24 heures`
- Temps tampon après (After event buffer) : `30 minutes`
- Limite par jour (facultatif) : `3`

---

## 2. Parcours Premier Pas

| Champ | À mettre |
|---|---|
| Titre | `Parcours Premier Pas · 4 séances de 1h30` |
| URL | `parcours-premier-pas` |
| Durée | `90` minutes |
| Lieu | Même adresse que la Balade Déclic |

**Description :**
```
Quatre séances de 1h30, en solo, au pied du Salève, pour trouver le projet qui te ressemble vraiment et le mettre sur les rails. Tu réserves ici ta première séance : on cale les trois suivantes ensemble.

Inclus : quatre séances de 1h30, un vocal récapitulatif après chacune, un suivi sur WhatsApp entre les séances.

La promesse : en quatre séances, tu repars avec la première version concrète de ton projet, déjà montrée à quelqu'un.

Prix : 590 €, en espèces ou par virement. Tu as fait une Balade Déclic dans les 30 derniers jours ? Ses 90 € sont déduits.
Les quatre séances sont à utiliser dans un délai de 2 mois.

Rendez-vous : Maison du Salève, 775 route de Mikerne, 74160 Présilly. Parking une centaine de mètres avant le bâtiment.
S'il pleut : on reporte, ou on se retrouve dans un lieu à l'abri choisi ensemble à l'avance.
Annulation : [TA RÈGLE D'ANNULATION]

Les séances ne sont pas des actes médicaux et ne remplacent pas un avis ou un traitement médical.
```

**Questions de réservation :** les 4 mêmes que la Balade Déclic, plus :

| Question | Type | Obligatoire ? |
|---|---|---|
| `As-tu déjà fait une Balade Déclic avec moi ?` | Choix : Oui / Non | Non |

**Redirection et limites :** comme la Balade Déclic.

---

## 3. Appel découverte

| Champ | À mettre |
|---|---|
| Titre | `Appel découverte · 15 min, gratuit` |
| URL | `appel-decouverte` |
| Durée | `15` minutes |
| Lieu | Numéro de téléphone du participant (Attendee Phone Number) : c'est toi qui appelles |

**Description :**
```
15 minutes au téléphone, gratuites et sans engagement.

Un vrai échange, pas un appel de vente déguisé : tu me parles de ton projet, je te dis franchement si la balade peut t'aider. Et si ce n'est pas le cas, je te le dis aussi.

Je t'appelle à l'heure choisie.
```

**Question de réservation :**

| Question | Type | Obligatoire ? |
|---|---|---|
| `En une phrase : de quoi aimerais-tu qu'on parle ?` | Texte court | Non |

**Limites :** préavis minimum `2 heures`, tampon après `5 minutes`.
**Pas de redirection** : la confirmation de Cal.com suffit (la page « merci » parle de chaussures !).

---

## 4. Magnétisme en pleine nature (mai à septembre)

| Champ | À mettre |
|---|---|
| Titre | `Magnétisme en pleine nature · 1h` |
| URL | `magnetisme-nature` |
| Durée | `60` minutes |
| Lieu | En personne : `Maison du Salève, 775 route de Mikerne, 74160 Présilly` |

**Description :**
```
Une séance de magnétisme d'1h, dehors, sur une table de soin, à la Maison du Salève. De mai à septembre.

Pendant le soin, je parle : je ne reste pas en silence. Tu peux me répondre, ou simplement écouter, c'est toi qui choisis. Le plus souvent, je te confie ensuite une action à réaliser toi-même.

Le magnétisme peut aider à soulager les douleurs, à retrouver un meilleur sommeil et à amener de la clarté mentale.

Prix : 90 €, en espèces ou par virement.
S'il pleut : on reporte, on passe par téléphone, ou on se retrouve dans un lieu à l'abri choisi ensemble à l'avance.
Annulation : [TA RÈGLE D'ANNULATION]

Le magnétisme est un soin complémentaire : il ne remplace pas un médecin ni un traitement.
```

**Questions de réservation :**

| Question | Type | Obligatoire ? |
|---|---|---|
| `Qu'est-ce qui t'amène ?` | Texte long | Non |
| `Ton numéro WhatsApp (pour te prévenir s'il pleut)` | Téléphone | Oui |

**Redirection :** la page merci (comme la Balade Déclic).
**Hors saison :** d'octobre à avril, masque ce rendez-vous (interrupteur « Masqué » / Hidden).

---

## 5. Magnétisme par téléphone (octobre à avril)

| Champ | À mettre |
|---|---|
| Titre | `Magnétisme par téléphone · 1h` |
| URL | `magnetisme-telephone` |
| Durée | `60` minutes |
| Lieu | Numéro de téléphone du participant : c'est toi qui appelles |

**Description :**
```
Une séance de magnétisme d'1h, à distance. Tu restes chez toi, au calme : je t'appelle, et on reste au téléphone pendant tout le soin. D'octobre à avril.

Pendant le soin, je parle : tu peux me répondre, ou simplement écouter, c'est toi qui choisis. Le plus souvent, je te confie ensuite une action à réaliser toi-même.

Le magnétisme peut aider à soulager les douleurs, à retrouver un meilleur sommeil et à amener de la clarté mentale.

Prix : 60 €, en espèces ou par virement.
Annulation : [TA RÈGLE D'ANNULATION]

Le magnétisme est un soin complémentaire : il ne remplace pas un médecin ni un traitement.
```

**Question de réservation :** `Qu'est-ce qui t'amène ?` (texte long, facultatif).
**Pas de redirection.**

---

## 6. Rappel automatique la veille (si ton offre le permet)

**Workflows → Nouveau** : e-mail au participant, 24 h avant, pour la Balade Déclic, le Parcours et le magnétisme en pleine nature.
Utilise le bouton « Ajouter une variable » pour insérer le prénom, la date, l'heure et le lieu.

- Objet :
```
Demain, on y va !
```
- Message :
```
Salut [prénom] !

On se retrouve demain à [heure], à la Maison du Salève (775 route de Mikerne, 74160 Présilly). Le parking est une centaine de mètres avant le bâtiment.

Prépare de bonnes chaussures et une tenue selon la météo. S'il pleut, je te préviens sur WhatsApp.

Un empêchement ? Écris-moi au +33 6 31 79 44 79.

À demain,
Quentin
```

---

## 7. Dernière étape

Envoie-moi les **5 liens**, par exemple `cal.com/quentinfauchereau/balade-declic`.
Je les colle dans le site, et les boutons « Réserver » ouvriront directement ton agenda.
