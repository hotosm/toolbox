---
title: 7.2 Concevoir une carte et un atlas sur QGIS
bookShowToC: True
---

<br></br>

## Objectifs du cours

Dans cette section, vous devriez être en mesure de :

* Comprendre comment charger l'ensemble de données.
* Comprendre comment symboliser le jeu de données
* Comprendre comment créer une carte
* Comprendre comment créer un atlas

<br></br>
***
<br></br>

## Activités d’apprentissage

La création d'un atlas dans QGIS permet aux utilisateurs de créer une série de cartes pour des régions géographiques à l'aide d'un modèle défini. Ce modèle d'atlas permet de générer un grand nombre de cartes pour des zones d'intérêt, telles que des districts, des quartiers et d'autres zones administratives, avec le même style et la même mise en page.

**Exemples de projets de HOT:**

* [Open Cities à Monrovia, Liberia](https://drive.google.com/file/d/1yQK8wjZK2mMtGVc3G6srNKHlf0SZTyv1/view?usp=sharing)
* [LEGIT au Liberia](https://drive.google.com/file/d/143pmRsdrJoyzlEisY0vTCQqs8qAM03Dy/view)
* [eRamani Huria à Dar es Salaam, Tanzania](http://ramanihuria.org/data/) (Dar es Salaam, Tanzania)

_Le guide suivant fournit des instructions et des captures d'écran de QGIS 3.30. Les versions antérieures et postérieures peuvent avoir des icônes et des étapes différentes_

**Compétences et technologies nécessaires**:

* Installation de QGIS
* Navigué sur QGIS et ajouter les données
* Fichiers de données SIG (c’est à dire. shapefiles, geojson)
    * Exemple shapefiles [zip](https://drive.google.com/open?id=1eEzawHzEueVOBuRNJwpX_YeynTOnrbDs)

Cette activité couvre le processus de génération et de configuration d'une carte et d'un atlas dans une mise en page imprimée. Des exemples de fichiers de forme sont fournis pour cette activité mais peuvent être suivis de fichiers de forme fournis par l'utilisateur.

### 1. Préparation des données cartographiques

Avant de créer un atlas, vous devrez ajouter et styliser des calques. Lors du stylisme des calques, vous devrez tenir compte de l'aspect des calques dans le compositeur d'impression. Comme les cartes de l'atlas peuvent être à différentes échelles, il peut être nécessaire de revenir au style après avoir généré l'atlas pour faire des ajustements.

Pour suivre les étapes pratiques, ajoutez les données vectorielles suivantes à votre carte :

* Dar_sub-wards_EPSG_4326
* Dar_wards_EPSG_4326

Modifier la couleur d'arrière-plan du projet. Ouvrez le menu "Projet" dans la barre d'outils supérieure et sélectionnez "Propriétés". Dans les paramètres généraux, changez la couleur d'arrière-plan en bleu.

![](/images/7_data_use_analysis/03_7.2_Creating_Map_and_Atlasses_in_QGIS/image1.gif)

Donnez un style au calque de la salle (Dar_wards_EPSG_4326) en cliquant avec le bouton droit de la souris sur son nom dans le panneau des calques et en sélectionnant "Propriétés". Dans la fenêtre contextuelle, sélectionnez **Symbologie** dans le menu latéral. Modifiez le style comme décrit ci-dessous:

* Sélectionnez "**Remplissage simple**" dans la fenêtre supérieure droite.
* Modifiez le "Type de calque de symbole" en "Contour : Ligne simple'
* Changez la couleur en violet.
* Modifiez le 'Style de stylo' en 'Trait en pointillé'
* Sélectionnez "Appliquer", puis "OK".

Dupliquez le calque de la garde (Dar_wards_EPSG_4326) en cliquant avec le bouton droit de la souris sur son nom dans le panneau des calques et en sélectionnant "Dupliquer". Cliquez avec le bouton droit de la souris sur le calque copié et sélectionnez Renommer. Renommez ce calque en "Ward_grey_background".

Donnez un style au calque "Ward_grey_background" en cliquant avec le bouton droit de la souris sur son nom dans le panneau des calques et en sélectionnant "Properties" (Propriétés). Dans la fenêtre contextuelle, sélectionnez "**Symbologie**" dans le menu latéral. Appliquez le style décrit ci-dessous :

* Sélectionnez " Remplissage simple " dans la fenêtre supérieure gauche.
* Modifiez le "Type de calque de symbole" en "Remplissage simple".
* Remplacez la couleur par le code html #edeae2 (ou sélectionnez une couleur gris clair).
* Changez le 'Style de contour' en 'Pas de stylo'.
* Sélectionnez "Appliquer", puis "OK".

Donnez un style à la couche des sous-dirigeants (Dar_sub-wards_EPSG_4326) en cliquant avec le bouton droit de la souris sur son nom dans le panneau des couches et en sélectionnant "**Propriétés**". Dans la fenêtre pop-up, sélectionnez **Symbologie **dans le menu latéral. Modifiez le style comme décrit ci-dessous :

* Sélectionnez "Remplissage simple" dans la fenêtre supérieure droite.
* Modifiez le "Type de calque de symbole" en "Contour : Ligne simple'
* Changez la couleur en jaune.
* Changez le 'style de stylo' en 'point'.
* Sélectionnez 'Appliquer', puis 'OK'.

Après avoir stylisé le calque des sous-divisions (Dar_sub-wards_EPSG_4326), sélectionnez **"étiquettes"** dans le menu latéral **"Propriétés".**

* Dans le menu déroulant supérieur, remplacez l'option "Pas d'étiquettes" par "Étiquettes simples".
* Pour la "Valeur", sélectionnez l'option "Nom_du_quartier" dans le menu déroulant.
* Modifiez vos options 'Texte' telles que la police, la taille de la police, la couleur de la police, etc.
* Sélectionnez "Appliquer", puis "OK".

Après avoir stylisé tous les calques, assurez-vous que vos calques sont dans l'ordre suivant dans le panneau des calques. (Pour modifier l'ordre des calques, cliquez avec le bouton gauche de la souris sur un calque et maintenez-le enfoncé, puis faites-le glisser vers le haut ou vers le bas dans la liste)

* Dar_wards_EPSG_4326
* Dar_sub-wards_EPSG_4326
* Ward_grey_background

![](/images/7_data_use_analysis/03_7.2_Creating_Map_and_Atlasses_in_QGIS/image2.png)

### 2. Création d'une mise en page de carte dans la mise en page d'impression

Ouvrez le menu "**Projet**" dans la barre d'outils principale et sélectionnez "**Gestionnaire de mise en page**". Une fenêtre de gestion de la mise en page apparaît. Sélectionnez **Mise en page vide** et cliquez sur **Créer**.

![](/images/7_data_use_analysis/03_7.2_Creating_Map_and_Atlasses_in_QGIS/image3.gif)

Dans la fenêtre contextuelle, créez un titre pour votre carte. Il peut s'agir d'un nom unique décrivant l'objectif de votre carte, tel que "Dar Sub-Wards". Une nouvelle fenêtre est créée avec une page blanche. Elle montre l'aspect de votre carte à l'impression.		

Au minimum, vous devrez ajouter les éléments suivants d'une carte au canevas de la carte :

* Carte
* Titre
* Légende
* Barre d’échelle
* Flèche du Nord

Chacun de ces éléments peut être ajouté en ouvrant le menu "Ajouter un élément" dans la barre d'outils supérieure ou en utilisant les boutons d'accès rapide dans la barre d'outils gauche.

Ajoutez votre carte en sélectionnant "Ajouter une carte" dans le menu "Ajouter un élément" (alt : utilisez l'outil Ajouter une carte dans la barre d'outils de gauche). Vous devrez dessiner la boîte en cliquant sur les coins et en les faisant glisser.

![](/images/7_data_use_analysis/03_7.2_Creating_Map_and_Atlasses_in_QGIS/image4.gif)

Ajoutez un titre à votre carte en sélectionnant "Ajouter une étiquette" dans le menu "Ajouter un élément" (alt : utilisez l'outil Ajouter une étiquette dans la barre d'outils de gauche). Comme pour la carte, vous devez dessiner la boîte en cliquant sur les coins et en les faisant glisser. Le texte par défaut est "Lorem ipsum". Il peut être modifié dans le panneau "Propriétés de l'élément". Modifier la police et la taille de votre titre.

![](/images/7_data_use_analysis/03_7.2_Creating_Map_and_Atlasses_in_QGIS/image5.gif)

Ajoutez une légende à votre carte en sélectionnant "Ajouter une légende" dans le menu "Ajouter un élément". La taille de la légende sera générée en fonction de son contenu. Vous pouvez modifier la taille ainsi qu'ajouter ou supprimer des éléments de légende dans le panneau "Propriétés de l'élément".

![](/images/7_data_use_analysis/03_7.2_Creating_Map_and_Atlasses_in_QGIS/image6.gif)

Ajoutez une barre d'échelle à votre carte en sélectionnant "Ajouter une barre d'échelle" dans le menu "Ajouter un élément". Comme pour la carte, vous devez dessiner la boîte en cliquant sur les coins et en les faisant glisser.

![](/images/7_data_use_analysis/03_7.2_Creating_Map_and_Atlasses_in_QGIS/image7.gif)

La flèche du nord peut être ajoutée en sélectionnant "Ajouter une image". Comme pour la carte, vous devrez dessiner la boîte en cliquant sur les coins et en les faisant glisser. Dans le panneau "Propriétés de l'élément", ouvrez l'option "Recherche dans les répertoires" pour sélectionner un choix de symboles.

![](/images/7_data_use_analysis/03_7.2_Creating_Map_and_Atlasses_in_QGIS/image8.gif)

Déplacez ces éléments sur le canevas de la carte jusqu'à ce que vous soyez satisfait de la présentation de votre carte. Pensez à votre public : comprendra-t-il les informations que vous souhaitez transmettre ?

### 3. Sauvegarder les cartes

À ce stade, vous pouvez décider d'enregistrer la carte en tant que carte unique ou de passer à la création d'un atlas. Si vous souhaitez enregistrer la carte actuelle en tant que carte autonome, ouvrez le menu "Mise en page" et sélectionnez l'une des options "Exporter sous..." en fonction de votre préférence de fichier.

![](/images/7_data_use_analysis/03_7.2_Creating_Map_and_Atlasses_in_QGIS/image9.gif)

### 4. Génération de cartes multiples à l'aide de la génération d'atlas

Après avoir terminé la mise en page de votre carte, vous êtes prêt à générer l'atlas. Sélectionnez la boîte de la carte et dans le panneau "Propriétés de l'élément", cochez la case "Contrôlé par l'atlas.

Dans le panneau de droite, sélectionnez l'onglet "Génération de l'atlas", près des onglets "Composition" et "Propriétés de l'élément". Si cet onglet n'apparaît pas, sélectionnez le menu "Atlas" dans la barre d'outils supérieure, puis "Paramètres de l'atlas.

Dans le panneau "Atlas", cochez la case "Générer un atlas" pour commencer à configurer votre a.

![](/images/7_data_use_analysis/03_7.2_Creating_Map_and_Atlasses_in_QGIS/image10.gif)

#### 4.1. Configuration

Les options de configuration du panneau de génération de l'atlas contrôlent la manière dont l'atlas est généré.

1. La "couche de couverture" est la couche qui contient les zones géographiques d'intérêt pour votre atlas. Par exemple, pour un atlas présentant des cartes de chaque district, vous devrez sélectionner la couche du district.
2. L'option "Nom de la page" permet de nommer les pages en sélectionnant un attribut dans la couche de couverture ou en construisant une expression à partir des valeurs de la table d'attributs.
3. Si vous ne souhaitez pas afficher toutes les zones incluses dans votre couche de couverture, l'option "Filtrer avec" vous permet de filtrer les zones géographiques que vous souhaitez ou non inclure dans votre atlas. Cette option nécessite la construction d'une expression.
4. L'option "Trier par" vous permet d'ordonner votre atlas en fonction d'un attribut de votre couche de couverture.

![](/images/7_data_use_analysis/03_7.2_Creating_Map_and_Atlasses_in_QGIS/image11.gif)

**<span style="text-decoration:underline;">Pratique</span>**
* Sélectionnez "Dar_sub-wards_EPSG_4326" comme couche de couverture.
* Pour le nom de la page, sélectionnez "Vil_Mtaa_N". (Ce champ correspond au nom de la sous-direction)
* Cochez la case "Trier par" et sélectionnez "Vil_Mtaa_N". (Ce champ correspond au nom du sous-district)

#### 4.2. Barre d'outils et navigation de l'Atlas

Une fois l'atlas généré, vous pourrez le prévisualiser et y naviguer à l'aide de la barre d'outils de l'atlas. Pour naviguer, sélectionnez d'abord le bouton "Prévisualiser l'atlas". Des modifications peuvent être apportées à la présentation de l'atlas en mode prévisualisation.


#### 4.3. Construction d'une expression pour un texte basé sur des données

Les expressions permettent au texte, tel que les étiquettes et les titres, d'être piloté par des données ou généré à partir d'attributs. Lorsqu'on travaille avec un atlas, les expressions prennent des attributs de la couche de couverture.

1. T Le texte qui n'est pas basé sur des données doit être écrit entre guillemets simples. Exemple: "Carte"
2. Les espaces entre les mots doivent être indiqués par un espace entre guillemets simples. Exemple: ‘Carte de’
3. Les valeurs sélectionnées et le texte brut doivent être séparés par l'opérateur '||'. Cet opérateur peut être saisi ou sélectionné dans la liste des "Opérateurs". Exemple: "Carte de" ||
4. Le texte piloté par les données, ou le texte généré à partir des attributs, peut être sélectionné dans la liste "Champs et valeurs". Exemple: "Carte de ' || "Nom_du_quartier"
5. Un "aperçu de la sortie" apparaît en bas de la fenêtre du générateur d'expression.

![](/images/7_data_use_analysis/03_7.2_Creating_Map_and_Atlasses_in_QGIS/image12.gif)

**<span style="text-decoration:underline;">Pratique</span>**
* Sélectionnez ou créez votre boîte de titre et sélectionnez "Insérer une expression" dans le panneau "Propriétés de l'élément".
* Utilisez la liste "Champs et valeurs" pour générer l'expression suivante :
* "Vil_Mtaa_N" || ', ' || "Nom_du_quartier"
* Vérifier l'aperçu de la sortie pour s'assurer que l'expression a été tapée correctement.

#### 4.4. Couche de polygones inversés

L'ajout d'une couche de polygones inversés permet de focaliser la carte en ombrant ou en couvrant complètement les éléments situés en dehors de la zone d'intérêt.

1. Retourner à la fenêtre principale de QGIS.
2. Sélectionnez le calque utilisé comme calque de couverture dans l’impression Composée. Cliquez avec le bouton droit de la souris et sélectionnez ‘Dupliquer’
3. Cliquez avec le bouton droit de la souris sur la copie du calque et sélectionnez Renommer. Renommer le calque.
4. Cliquez avec le bouton droit de la souris sur le calque et ouvrez les propriétés. Sélectionnez "Style" dans le menu latéral.
5. Dans le menu déroulant supérieur, sélectionnez "Polygones inversés.
6. Sous "Sub renderer :", sélectionnez "Rule-based" dans le menu déroulant.
7. Dans la fenêtre de la liste des règles, double-cliquez sur “ (pas de filtre)" pour ouvrir la fenêtre "Modifier la règle".
8. Dans la fenêtre "Edit rule", sélectionnez le bouton "..." pour créer un filtre. Un générateur d'expression s'ouvre. Dans la fenêtre d'expression, tapez ou construisez à partir de la liste Variable : $id=@atlas_featureid
9. Dans la fenêtre "Edit rule", assurez-vous que le type de symbole est Remplissage simple.
10. Modifiez la transparence à 50 %
11. Changer la couleur en gris foncé.
12. Cliquez sur "Ok" pour quitter toutes les fenêtres d'options.

![](/images/7_data_use_analysis/03_7.2_Creating_Map_and_Atlasses_in_QGIS/image13.gif)

**<span style="text-decoration:underline;">Pratique</span>** :
* Effectuez toutes les étapes ci-dessus.
* Pour l'étape 2, il s'agira du calque " Dar_sub-wards_EPSG_4326 ".
* Pour l'étape 3, renommez le fichier " inverse_sub-wards "

#### 4.5. Ajout de cartes de synthèse

Les cartes d'ensemble permettent au public de comprendre la position centrale de la carte dans le contexte d'une zone plus large. Par exemple, une carte d'ensemble peut montrer l'emplacement d'un quartier dans la ville. Dans QGIS, il est possible de créer une carte d'ensemble qui indiquera automatiquement l'emplacement de la carte pour chaque page de l'atlas.

1. Dans la fenêtre principale de QGIS, sélectionnez les couches que vous souhaitez voir figurer sur la carte d'ensemble. Il s'agit généralement de couches qui peuvent être visualisées facilement à petite échelle (par exemple, les frontières, les autoroutes, les voies navigables). Il est possible de sélectionner plusieurs couches à la fois en maintenant la touche Ctrl de votre clavier tout en sélectionnant.
2. Cliquez avec le bouton droit de la souris sur ces calques et sélectionnez ‘Dupliquer’.
3. Sélectionnez tous les calques copiés. Cliquez avec le bouton droit de la souris et sélectionnez "Grouper la sélection". Cela permet une meilleure gestion des données et facilite l'activation et la désactivation des groupes de couches en fonction des besoins de la carte.
4. Cliquez avec le bouton droit de la souris sur ce groupe et renommez-le ‘Aperçu de la carte’
5. Activez tous les calques groupés et désactivez tous les autres en cliquant sur les cases à cocher situées à côté des noms de calques.
6. Retournez à votre Print Compositeur.
7. Ouvrez le menu "Mise en page" dans la barre d'outils supérieure et sélectionnez "Ajouter une carte". Dessinez un petit cadre pour votre carte d’ensemble.
8. Allez dans le panneau "Propriétés de l'élément" pour la deuxième carte et ouvrez les options "Aperçus".
9. Cliquez sur le bouton vert "+" pour ajouter une vue d'ensemble.
10. Pour "Cadre de la carte", sélectionnez "Carte 0" dans le menu déroulant.
11. L'option "Style de cadre" vous permet de modifier la couleur, le contour et la transparence du cadre de la carte.
12. Dans le panneau "Propriétés des éléments", ouvrez l'option "Couches" et sélectionnez "Verrouiller les couches". Cela permet de conserver les couches limitées tout en permettant à la carte principale d'afficher toutes les couches.
13. Retournez à la fenêtre principale de QGIS. Désactivez toutes les couches de vue d'ensemble groupées et activez les autres couches.

**<span style="text-decoration:underline;">Pratique</span>**

* Suivez toutes les étapes ci-dessus.
* Pour l'étape 1, sélectionnez les calques "Dar_wards_EPSG_4326 copy", "Dar_sub-wards_EPSG_ 4326 copy" et "Ward_grey_background copy"

#### 4.6. Revue de l’atlas

Après avoir terminé la mise en page et la génération de l'atlas, il est important de vérifier chaque page de l'atlas pour s'assurer que l'expression est correcte (c'est-à-dire que toutes les pages sont correctement titrées) et que l'apparence des couches et des étiquettes dans chaque carte est correcte. S'il existe une grande différence entre les échelles cartographiques des différentes pages, les styles, les étiquettes, les grilles et d'autres facteurs peuvent devoir être ajustés pour s'adapter au mieux à toutes les échelles cartographiques.

**<span style="text-decoration:underline;">Pratique</span>**:

* Utilisez la "barre d'outils de l'atlas" pour naviguer dans les pages de votre atlas.
* Pour chaque page, vérifier:
    * Visibilité de la couche de carte
    * Visibilité de l'étiquette
    * Texte basé sur l'expression (par exemple, titre, zones de texte supplémentaires)
    * Taille et emplacement de la barre d'échelle

#### 4.7. Expression du nom de fichier de sortie

Avant d'exporter l'atlas, une expression de nom de fichier de sortie doit être construite. Cette expression déterminera le nom de chaque page des fichiers exportés de l'atlas. Voir 'Construction d'expressions' pour des instructions sur la construction d'expressions.

L'expression par défaut est 'output_'||@atlas_featurenumber qui produira un nom de fichier tel que "Output 3". Cette expression peut être modifiée pour créer un nom de fichier plus précis pour vos cartes.

**<span style="text-decoration:underline;">Practice</span>**:

* Sélectionnez le bouton de construction de l'expression.
* Construisez l'expression : "District_N" || '' || "Nom_de_quartier" || '' || "Vil_Mtaa_N".
* Vérifiez l'aperçu de la sortie en bas du constructeur d'expression pour vous assurer que l'expression a été construite correctement.

#### 4.8. Exportation de l’atlas

Pour exporter l'atlas, sélectionnez le bouton "Exporter l'atlas" dans la barre d'outils de l'atlas. Sélectionnez le type de fichier approprié (Exporter sous forme d'images, Exporter sous forme de SVG ou Exporter sous forme de PDF) et sélectionnez le dossier dans lequel les fichiers seront exportés.

#### 4.9. Modèles d’atlas

Les modèles d'atlas peuvent être enregistrés et ajoutés à d'autres projets QGIS. Pour enregistrer un modèle, ouvrez le menu "Projet" dans la barre d'outils supérieure et sélectionnez "Enregistrer comme modèle". Le modèle est alors sauvegardé en tant que fichier Composer Template (*.qpt *.QPT).

Pour ajouter le modèle à un autre projet, ouvrez un nouveau compositeur d'impression. Ouvrez le menu "Projet" dans la barre d'outils supérieure et sélectionnez "Ajouter des éléments à partir du modèle". Remarque : les éléments seront dimensionnés en fonction de la taille de la page du document original. Il peut être nécessaire d'ajuster la taille des éléments si le nouveau projet utilise une taille de page différente.

## [Quiz] Testez vos connaissances

1. Si nous voulons créer plusieurs cartes en même temps, quelle fonction de QGIS devons-nous utiliser ?

    a.Créateur de lots de carte


    b.Atlas Generation


    c.QuickMapService


    d.Gestionnaire de mise en page

2. Une fois l'atlas généré, vous pourrez le prévisualiser et y naviguer à l'aide de la barre d'outils de l'atlas en sélectionnant …

    a.Prévisualiser l’atlas


    b.Prévisualiser le document


    c.Prévisualiser le gestionnaire


    d.Prévisualiser la page

3. Les modèles d'atlas peuvent être créés et ajoutés à un autre projet QGIS sous la forme d'un fichier *.qpt ou *.QPT.

    a.Vrai


    b.Faux

**Answer**: 1. B | 2.A | 3.A

# Liste de contrôle des activités

Vous avez déjà compris comment créer une carte à l'aide de QGIS. À la fin de cette section, vous devriez être en mesure de :

- Préparer les données
- Styliser le jeu de données à l'aide d'une symbologie et d'une étiquette.
- Construire la mise en page de la carte à l'aide de map composer et exporter la carte.
- Créer un atlas à l’aide de la fonction de génération d’atlas