# lifesciences-ip.com

Le site est généré automatiquement par GitHub Pages. Les textes sont séparés de la mise en page : on modifie les textes, jamais le HTML.

## Modifier le site : la méthode simple (Pages CMS)

1. Aller sur **app.pagescms.org** et cliquer sur « Sign in with GitHub ».
2. Ouvrir le dépôt `siteweb`.
3. Dans le menu de gauche :
   - **Textes du site** : textes de l'accueil, services, à propos, coordonnées ;
   - **Articles** : bouton **Add an entry** pour écrire un nouvel article. Choisir la **Rubrique** :
     « Analyse de jurisprudence » (affichée en une de l'accueil et sur la page Jurisprudence,
     avec les champs juridiction / date / référence / points à retenir), « Fiche pratique » ou « Actualité » ;
   - **Mentions légales**.
4. Cliquer sur **Save**. Le site est à jour environ 1 minute plus tard.

Les photos s'ajoutent avec le champ Image (elles vont dans le dossier `images/`).

## Où se trouve quoi

| Fichier | Contenu | On y touche ? |
|---|---|---|
| `_data/contenu.yml` | Tous les textes de l'accueil (dont « Pour qui », « Le cabinet », bandeau d'appel) | ✅ Oui |
| `_posts/` | Un fichier par article (`AAAA-MM-JJ-titre.md`) | ✅ Oui |
| `mentions-legales.md` | Mentions légales | ✅ Oui |
| `images/` | Photos | ✅ Oui |
| `_layouts/`, `index.html`, `ressources.html`, `jurisprudence.html` | Mise en page | ❌ Non |
| `_data/fr.yml`, `_data/icones.yml` | Libellés et icônes | ❌ Non |
| `style.css` | Couleurs et styles (variables en haut du fichier) | Rarement |
| `_config.yml`, `.pages.yml`, `CNAME` | Réglages techniques | ❌ Non |

## Écrire un article à la main (sans Pages CMS)

Dans `_posts/`, créer un fichier `2026-11-05-mon-sujet.md` (date + titre en minuscules, avec des tirets et sans accents) :

```
---
title: "Titre de l'article"
rubrique: jurisprudence        # ou fiche, actualite
categorie: Cosmétique · Marques
juridiction: Cour de cassation, ch. com.   # jurisprudence uniquement
date_decision: 12 mars 2026                # jurisprudence uniquement
reference: n° 24-00.000                    # jurisprudence uniquement
a_retenir:                                 # jurisprudence uniquement
  - Premier point
  - Deuxième point
resume: Une phrase de résumé.
lecture: 4
---

Texte de l'article. **gras**, *italique*

## Un intertitre

- une puce
- une autre puce

> Un encadré mis en avant.
```

L'article apparaît automatiquement dans la page Ressources et sur l'accueil.

## En cas d'erreur

Si une modification contient une erreur, le site **n'est pas mis à jour** et l'ancienne version reste en ligne. L'onglet **Actions** du dépôt affiche une croix rouge. Il suffit alors de corriger la modification, ou de revenir en arrière via l'onglet **History** du fichier.
