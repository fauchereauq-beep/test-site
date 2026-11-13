# Mettre le nouveau site sur quentinfauchereau.com (Vercel)

Le site est déjà en ligne sur Vercel : https://quentin-fauchereau.vercel.app
Ton domaine est déjà rattaché au projet Vercel. Il reste à le faire pointer, chez Hostinger.
L'ancien site n'est pas supprimé : on peut revenir en arrière à tout moment.

## Étape 1 · Hostinger : noter l'existant (2 min)
1. hostinger.fr → **hPanel** → **Domaines** → **quentinfauchereau.com**.
2. **DNS / Serveurs de noms** → onglet **Enregistrements DNS**.
3. **Fais une capture d'écran de toute la liste.** C'est ta roue de secours.

## Étape 2 · Hostinger : faire pointer le domaine (5 min)

**Supprime** (et seulement ceux-là) :
- les enregistrements **A** dont le nom est **@** ;
- les enregistrements **AAAA** dont le nom est **@** (s'il y en a) ;
- l'enregistrement **CNAME** dont le nom est **www** (s'il y en a).

**Ajoute** ces 2 enregistrements :

| Type | Nom | Pointe vers | TTL |
|---|---|---|---|
| A | @ | `64.29.17.1` | par défaut |
| CNAME | www | `10d67ac91c789678.vercel-dns-017.com` | par défaut |

⚠️ **Ne touche à rien d'autre**, surtout pas aux lignes **MX** et **TXT** : ce sont tes e-mails.
Ne change pas non plus les serveurs de noms.

Si Hostinger refuse une suppression ou dit que le domaine est « connecté à un site »,
envoie une capture à Claude.

## Étape 3 · Attendre et vérifier (quelques minutes à 24 h)
- Vercel détecte le changement tout seul et installe le cadenas HTTPS.
- Ouvre https://quentinfauchereau.com sur ton téléphone **en 4G** : tu dois voir le nouveau site.
- Teste un ancien lien de ton site : tu dois tomber sur « Cette page a déménagé ».
- Teste chaque bouton de réservation.

## Étape 4 · Prévenir Google (10 min)
1. **search.google.com/search-console** → ajoute `quentinfauchereau.com` (type « Domaine »)
   et suis la vérification (une ligne **TXT** à ajouter chez Hostinger).
2. Menu **Sitemaps** → `sitemap.xml` → **Envoyer**.
3. Ensuite seulement, ta fiche Google Business (voir `A-COMPLETER.md`).

## Revenir en arrière
Supprime les 2 lignes ajoutées et remets celles de ta capture d'écran.
