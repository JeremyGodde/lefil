# Wiki de l'éditeur d'article (WEA)

## Balises

### Paragraphe

Chaque saut de ligne délimite un nouveau paragraphe.

### Italique et gras

Italique : `/> texte en italique </`

Gras : `*> texte en gras <*`

Italique et gras : `*/> texte en gras et italique <*/`, `/*> texte en gras et italique </*`, `*/> texte en gras et italique </*` ou `/*> texte en gras et italique <*/`

### Barré

`b> texte barré <b`

### Image (à partir de v.2)

**Attention :** l'URL doit être une url directe, c'est-à-dire qu'elle doit se terminer par une extension d'image comme par exemples `.gif`, `.png` ou `.jpg`

Pleine page : `!> URL <!`

À gauche du texte : `!> left <size URL <!`

À droite du texte : `!> right <size URL <!`

Centrée entre deux textes : `!> center <size URL <!`

#### Balises d'image obsolètes (v.1 surporté en v.2 mais non recommandé)

Petite (maintenant centrée entre deux textes) : `!> small <size URL <!`

Moyenne (maintenant centrée entre deux textes) : `!> medium <size URL <!`

Grande (maintenant pleine page) : `!> big <size URL <!`

### Lien vers un article du Fil avec son aperçu (dispo à partir de la v.2)

Le numéro d'article correspond au numéro présent dans l'url de l'article. Par exemple pour `assos.utc.fr/lefil/article/?paper=195` le numéro est `195`

Insertion entre deux textes : `a> numéro d'article <a`

### Note de bas de page

La balise de note de bas de page suivante s'insère dans le texte à l'emplacement où se trouvera son indice

`texte annoté^> note de bas de page <^ et suite du texte`

### Lien externe

**Attention :** Assurez-vous que l'URL est valide

`l> URL <:> texte affiché <l`

### Chapitre

`t> titre du chapitre <t`

### Citation

**Remarque :** si la balise encadre un paragraphe entier, celui-ci apparaître entant que citation longue.

`'> citation <'`

### Liste non-numérotée

**Remarque :** la liste peut avoir autant d'éléments que vous le désirer.

La liste peut-être écrite sur une même ligne `.> Premier élément <; Deuxième élément <; Troisième élément <.` ou sur plusieurs :

```
.>
Premier élément <;
Deuxième élément <;
Troisième élément
<.
```

### Liste numérotée

Elle fonctionne exactement comme la liste non-numérotée et sa balise est `.1> <; <.1`

## Avancées

### Mode édition (à partir de v.2)

Le mode d'édition permet d'éditer des paramètres d'une partie du texte. Le mode d'édition s'ouvre ainsi `zone non éditable e> zone éditable <e zone non éditable`

Pour accéder aux paramètres, il suffit de placer n'importe où dans la zone éditable une ou plusieurs des instructions suivantes :

`#{couleur paramètre};` applique la couleur nommée paramètre. Les couleurs supportées sont : black, grey, silver, white, theme, titre, fond.

`#{police paramètre};` applique la police nommée paramètre. Les polices supportées sont correspondent aux polices standards supportées par les navigateurs web.

`#{taille paramètre};`applique la taille nommée paramètre. Les tailles supportées sont en pixel `12px`, en relative `1rem`, en pourcentage `100%` et les tailles CSS.

Rien de mieux qu'un exemple :

```
!> left <size https://i.imgur.com/SMfcdYU.png <!
Ex his quidam e> #{couleur titre}; aeternitati se commendari #{police Arial Black}; posse per statuas aestimantes #{taille 80%}; <e eas ardenter adfectant quasi plus praemii de e> figmentis #{taille 1.2rem}; aereis sensu <e carentibus adepturi, quam ex conscientia honeste recteque factorum, easque auro curant inbracteari, quod Acilio Glabrioni delatum est primo, cum consiliis armisque regem superasset Antiochum. quam autem sit pulchrum exigua haec spernentem et minima ad ascensus verae gloriae tendere longos et arduos, ut memorat vates Ascraeus, Censorius Cato monstravit.
```
