# Mettre le nouveau site sur quentinfauchereau.com

Durée : 15 minutes de clics, puis jusqu'à 24 h d'attente (le temps qu'Internet se mette à jour).
L'ancien site n'est pas supprimé : on peut revenir en arrière à tout moment (voir tout en bas).

**Avant de commencer** : envoie à Claude ton e-mail, ton adresse affichable et ton médiateur,
pour qu'aucun trou jaune ne reste visible le jour J.

---

## Étape 1 · Hostinger : noter l'existant (2 min)

1. Connecte-toi sur hostinger.fr → **hPanel**.
2. Menu **Domaines** → clique sur **quentinfauchereau.com**.
3. Ouvre **DNS / Serveurs de noms** → onglet **Enregistrements DNS** (DNS records).
4. **Fais une capture d'écran de toute la liste.** C'est ta roue de secours.

## Étape 2 · GitHub : déclarer ton domaine (2 min)

1. Ouvre https://github.com/fauchereauq-beep/test-site/settings/pages
2. Dans **Custom domain**, écris `quentinfauchereau.com` → **Save**.

À partir de là, l'adresse provisoire renvoie vers ton domaine : enchaîne tout de suite l'étape 3.

## Étape 3 · Hostinger : faire pointer le domaine (5 min)

Dans la liste des enregistrements DNS :

**Supprime** (et seulement ceux-là) :
- les enregistrements de type **A** dont le nom est **@** ;
- les enregistrements de type **AAAA** dont le nom est **@** (s'il y en a) ;
- l'enregistrement de type **CNAME** dont le nom est **www** (s'il y en a).

**Ajoute** ces 5 enregistrements :

| Type | Nom | Pointe vers | TTL |
|---|---|---|---|
| A | @ | `185.199.108.153` | par défaut |
| A | @ | `185.199.109.153` | par défaut |
| A | @ | `185.199.110.153` | par défaut |
| A | @ | `185.199.111.153` | par défaut |
| CNAME | www | `fauchereauq-beep.github.io` | par défaut |

⚠️ **Ne touche à rien d'autre**, surtout pas aux lignes **MX** et **TXT** : ce sont tes e-mails.

Si Hostinger refuse une suppression, ou te dit que le domaine est « connecté à un site »,
envoie une capture à Claude : il faudra d'abord déconnecter le domaine de l'ancien site.

## Étape 4 · GitHub : activer le cadenas HTTPS (après quelques heures)

1. Reviens sur https://github.com/fauchereauq-beep/test-site/settings/pages
2. Quand le message de vérification du domaine est vert, coche **Enforce HTTPS**.
   S'il est grisé, c'est normal les premières heures : réessaie plus tard (jusqu'à 24 h).

## Étape 5 · Vérifier

- Ouvre https://quentinfauchereau.com sur ton téléphone, **en 4G** (pas en wifi) : tu dois voir le nouveau site.
- Teste un ancien lien de ton site : tu dois tomber sur « Cette page a déménagé ».
- Teste chaque bouton de réservation.

## Étape 6 · Prévenir Google (10 min, une fois le site en ligne)

1. Va sur **search.google.com/search-console** → ajoute la propriété `quentinfauchereau.com`
   (type « Domaine ») et suis la vérification : elle te demandera d'ajouter une ligne **TXT** chez Hostinger.
2. Menu **Sitemaps** → entre `sitemap.xml` → **Envoyer**.
3. Ensuite seulement, mets à jour ta fiche Google Business (voir `A-COMPLETER.md`).

---

## Revenir en arrière

Supprime les 4 lignes A et la ligne CNAME ajoutées, remets les lignes de ta capture d'écran,
puis efface le domaine dans les réglages GitHub Pages. L'ancien site revient en quelques heures.
