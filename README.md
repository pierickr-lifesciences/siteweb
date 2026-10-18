# lifescience-ip.com

Site statique en HTML/CSS, sans outil à installer. Il est hébergé gratuitement sur GitHub Pages.

## Où se trouve quoi

| Fichier | Contenu |
|---|---|
| `index.html` | Page d'accueil : expertise, secteurs, à propos, contact |
| `ressources.html` | Liste des articles |
| `articles/` | Un fichier par article, avec `_modele-article.html` comme modèle |
| `mentions-legales.html` | Mentions légales (obligatoires) |
| `css/style.css` | Le style. Les couleurs se changent tout en haut du fichier |
| `images/` | Photos (ex. `portrait.jpg`) |

## Modifier un texte (2 minutes, depuis le navigateur)

1. Se connecter sur github.com et ouvrir le dépôt du site.
2. Cliquer sur le fichier (ex. `index.html`), puis sur l'icône **crayon** (Edit).
3. Modifier le texte **entre** les balises. Par exemple, dans `<p>texte</p>`, on ne touche qu'à « texte ».
4. Cliquer sur **Commit changes…** puis **Commit changes**.
5. Le site est à jour environ 1 minute plus tard.

En cas d'erreur : l'onglet **History** du fichier permet de revenir à une version précédente.

## Publier un article

1. Ouvrir `articles/_modele-article.html` et copier tout son contenu.
2. Dans le dossier `articles/`, faire **Add file → Create new file**. Le nommer par ex. `brevet-ou-secret.html` (minuscules, tirets, sans accents), puis coller le contenu.
3. Remplacer tout ce qui est entre [crochets], puis faire Commit.
4. Dans `ressources.html`, dupliquer un bloc `<a class="post" …> … </a>` et mettre à jour le lien, le titre et le résumé.
5. (Optionnel) Ajouter l'URL dans `sitemap.xml`.

## Ajouter une photo

Dans le dossier `images/`, faire **Add file → Upload files**. Ensuite, dans le HTML : `<img src="images/nom-du-fichier.jpg" alt="description">`.
