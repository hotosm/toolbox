---
title: 6.1 Outil d'exportation de HOT
bookShowToC: True
---

<br></br>

## Objectifs du cours

Cette section explique comment utiliser l'outil d'exportation de HOT pour télécharger les données OSM dans la région de votre choix. À la fin de cette section, vous serez en mesure de :

* Comprendre la vue d'ensemble de l'outil d'exportation de HOT
* Comprendre comment exporter des données OSM à l'aide de l'outil d'exportation HOT

<br></br>
***
<br></br>

## Activités d’apprentissage

[L d’Exportation de HOT](https://export.hotosm.org/en/v3/) est un service ouvert qui permet de créer des extraits personnalisés de données OSM actualisées dans différents formats de fichiers, tels que ESRI shapefiles (.shapefile), google KML (.kml), GeoPackage (.gpkg) et MBTiles (.mbtiles). On peut sélectionner la zone et les catégories spécifiques dont on a besoin. Télécharger et utiliser les données en citant simplement les contributeurs © OpenStreetMap. Tout le monde peut créer une exportation OpenStreetMap personnalisée avec l'outil d'exportation - il suffit d'ouvrir un compte. Vous pouvez vous enregistrer avec un compte OpenStreetMap à partir de [OpenStreetMap.org](https://openstreetmap.org/) et une adresse électronique valide. Des ressources d'apprentissage et des explications sont disponibles à l'adresse suivante [Page de l’apprentissage de l’outil d’exportation de HOT](https://export.hotosm.org/en/v3/learn).

### Utilisation de l’outil d’exportation de HOT

**Outils et technologies nécessaires**:

* Ordinateur
* Connexion internet
* [Compte OSM](https://hotosm.github.io/toolbox/pages/core-technology/2.1.1-opening-osm-accounts/)

Pour commencer, ouvrez un navigateur Internet et rendez-vous sur le site suivant: [https://export.hotosm.org/](https://export.hotosm.org/en/v3/) Pour utiliser l'outil d'exportation HOT, vous devez vous connecter à l'aide de votre nom d'utilisateur et de votre mot de passe OSM, en cliquant sur le bouton rouge "Connexion" dans le coin supérieur droit.

![](/images/6_open_data_usage/02_6.1_HOT_Export_Tools/6.1_image1.gif)

Sélectionnez "Créer" dans le menu supérieur .

![](/images/6_open_data_usage/02_6.1_HOT_Export_Tools/6.1_image2.gif)

Sélectionnez une zone d'intérêt sur la carte en recherchant un lieu, en téléchargeant un fichier .geojson ou en dessinant une zone sur la carte à droite. Pour dessiner une zone d'intérêt, faites un zoom avant et trouvez le lieu de votre choix (par exemple, Zwedru, Accra). Une fois que vous avez fait un zoom avant sur la zone qui vous intéresse, sélectionnez l'outil boîte dans le menu Outils à droite. Cliquez sur un coin pour commencer à dessiner une boîte, puis sélectionnez le coin opposé pour compléter la boîte. C'est votre ZONE D'INTÉRÊT qui sera téléchargée.

![](/images/6_open_data_usage/02_6.1_HOT_Export_Tools/6.1_image3.gif)

Dans la partie gauche de la fenêtre, remplissez les options "1 Décrire” :

* Nom : “ [VOTRE NOM D'UTILISATEUR OSM] Test Export"
    * Par exemple, "jessbeutler Test Export"
* Description (optionnel)
* Project (optionnel)
    * Par exemple, "Projet d'inclusion gouvernementale”

![](/images/6_open_data_usage/02_6.1_HOT_Export_Tools/6.1_image4.gif)

Sélectionnez le type de fichier souhaité dans l'onglet "Formats". Si vous téléchargez des données à utiliser dans un programme SIG, essayez de télécharger un fichier .shp.

![](/images/6_open_data_usage/02_6.1_HOT_Export_Tools/6.1_image5.gif)

Dans l'onglet "Données", sélectionnez les types de données OSM à exporter. Nous vous recommandons d'essayer les types suivants : 'Education', 'Gouvernement', 'Santé'.

![](/images/6_open_data_usage/02_6.1_HOT_Export_Tools/6.1_image6.gif)

Dans l'onglet "Résumé", sélectionnez "Créer une exportation". Pendant le traitement, l'état "En cours" s'affiche. Le temps de traitement dépend de la taille de l'exportation. Une fois terminé, le fichier pourra être téléchargé et envoyé à votre adresse électronique. Pendant le traitement, l'état "En cours" s'affiche. Le temps de traitement dépend de la taille de l'exportation. Une fois terminé, le fichier pourra être téléchargé et envoyé à votre adresse électronique.

![](/images/6_open_data_usage/02_6.1_HOT_Export_Tools/6.1_image7.gif)

|💡 Le saviez vous? 💡|
|---|
|Ce processus prendra plusieurs minutes en fonction de la taille de la zone téléchargée, du type de données OSM que vous exportez et de la densité des données OSM. Les régions de la taille d'une ville devraient prendre quelques minutes - les régions plus grandes peuvent prendre jusqu'à 20 minutes|

Lorsque le processus d'exportation est terminé, la barre d'état est mise à jour avec la mention "TERMINÉ". Téléchargez le fichier en cliquant sur le lien du fichier, comme indiqué ci-dessous. Pour les fichiers de forme, ouvrez le dossier .zip téléchargé et enregistrez-le dans le dossier de votre choix sur votre ordinateur. Vous pouvez maintenant utiliser le fichier de forme dans un logiciel SIG tel que QGIS.

## [Quiz] Testez vos connaissances

1. Vous trouverez ci-dessous les types de fichiers que vous pouvez télécharger à l'aide de l'outil d'exportation HOT, à l'exception des fichiers suivants :

    a. Shapefile (.shp)

    b. Geopackage (.gpkg)

    c. Google KML (.kml)

    d. MBTiles (.mbtiles)

    e. Image (.jpg .png or .JPEG)

Answer: 1.E

## Liste de contrôle des activités

À la fin de cette section, vous devriez être en mesure de :
- Comprendre ce qu'est l'outil d'exportation HOT
- Utiliser l’outil d’exportation HOT pour télécharger des données OSM

## Ressources complémentaires

**Présentation de la formation**

* [Outil d’exportation des données](https://docs.google.com/presentation/d/1RyHYVPZU5d4xJ1cpWga4QRdfohpEs-t9ylJ_HTJ7wm8/edit#slide=id.g51e1e04424_0_238)
* [d’apprentissage sur l’outil d’exportation](https://export.hotosm.org/en/v3/learn)