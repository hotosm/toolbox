---
title: 4.1 Création des sections cartographiques en utilisant QGIS
bookShowToC: True
---
<br></br>

## Objectifs du cours

Dans cette section, vous devriez être en mesure de :

* Comprendre comment créer une section de cartographie à l'aide de QGIS.
* Comprendre comment charger une section cartographique dans OSMAnd

<br></br>
***
<br></br>

## Activités d’apprentissage

Pour que la collecte de données sur le terrain soit efficace et réussie, il est **essentiel de disposer d'un plan de collecte de données sur le terrain** bien conçu. Ce plan permettra aux équipes de terrain de faire face à un minimum de difficultés sur le terrain, ce qui réduira le nombre d'appels au superviseur pour une assistance sur le terrain.

Lorsqu'il planifie le déploiement d'une équipe, il est important que le superviseur ait une bonne idée du nombre de jours de travail dont il dispose par rapport à la main-d'œuvre disponible pour effectuer le travail. Une fois que cela est fait, il peut créer de petites sections de la zone de cartographie, qui peuvent être couvertes en une journée par une équipe de deux cartographes ou un seul cartographe, en fonction de l'organisation de l'équipe.

À l'instar de la grille du gestionnaire de tâches, la création de sections pour la cartographie permet aux superviseurs de diviser les tâches, de suivre les progrès et d'évaluer les lacunes ou les problèmes de qualité. Nous avons déjà compris comment créer une section de cartographie à l'aide du [Gestionnaire de Tâches pour la cartographie de terrain](https://toolbox.hotosm.org/fr/pages/2_field_mapping_prep/2_8_settingup_field_mapping_tasking_manager/) précédent. Cette section explique comment créer une section cartographique manuelle à l'aide de QGIS et la charger avec OSMAnd.

### Création de sections cartographiques dans QGIS pour les cartes imprimées

L'activité suivante couvre le processus de génération de sections cartographiques dans QGIS pour l'impression. Cette activité utilise l'exemple d'une équipe de 8 volontaires pour cartographier la ville de Grootfontein, dans le nord de la Namibie, dans le cadre d'un projet d'élimination de la malaria. Des fichiers d'exemple sont fournis pour cette activité, mais ils peuvent être suivis de fichiers fournis par l'utilisateur.

Pour commencer, ouvrez QGIS sur votre ordinateur et démarrez un nouveau projet. En utilisant [QuickMapServices](https://toolbox.hotosm.org/fr/pages/7_data_use_and_data_analysis/7_1_introduction_to_qgis/) comme carte de base, naviguez jusqu'à la ville de Grootfontein, dans le nord de la Namibie.

![](/images/4_field_mapping_management/1_creating_mapping_section_using_qgis/040101_quickmapservices.gif)

Créez un fichier de forme vide en sélectionnant 'Couche' > 'Créer une Couche ' > 'Nouvelle couche Shapefile '. Après avoir sélectionné l'emplacement et le nom du fichier, veillez à attribuer au fichier le statut de ‘Polygone’.

![](/images/4_field_mapping_management/1_creating_mapping_section_using_qgis/040102_new_shapefile_layer.gif)

Activez l'édition, sélectionnez également l'option "Nouvelle fonctionnalité". Créez des sections de la ville, en leur attribuant des numéros. Ces sections doivent suivre les caractéristiques naturelles ou les points de repère importants tels que les marécages ou les routes. Ceci afin de faciliter la localisation de ces sections par les cartographes.

![](/images/4_field_mapping_management/1_creating_mapping_section_using_qgis/040103_newfeature.gif)

Une fois que toutes les sections ont été créées, il convient de les styliser pour qu'elles soient visibles.

![](/images/4_field_mapping_management/1_creating_mapping_section_using_qgis/040104_tracingarea.png)

Établissez des cartes montrant ces sections. Ces cartes peuvent être imprimées pour être partagées avec les bénévoles chargés de la cartographie. Les équipes peuvent maintenant se rendre dans les sections qui leur ont été attribuées pour effectuer la cartographie sur le terrain.

### Création et importation de sections cartographiques dans OSMAnd

L'activité suivante couvre le processus d'importation de fichiers dans OSMAnd sur la base de l'activité précédente (génération de sections cartographiques dans QGIS). Cette activité utilise l'exemple de la direction d'une équipe de 8 volontaires pour cartographier la ville de Grootfontein, dans le nord de la Namibie, dans le cadre d'un projet d'élimination de la malaria.

![](/images/4_field_mapping_management/1_creating_mapping_section_using_qgis/040105_osmand.jpg)

OSMAnd offre une excellente alternative à l'impression de ces cartes de section. Avec OSMAnd, le superviseur peut utiliser les étapes suivantes pour donner des sections aux membres de l'équipe afin qu'ils puissent les utiliser sur le terrain directement sur leurs appareils mobiles.

1. Créez les centroïdes des sections à partir du fichier grootfontein_sections.shp, ce qui vous donnera grootfontein_sections_centroïdes.shp. Créez les centroïdes en sélectionnant le menu "Vecteur" > "Outils de géométrie" > "Centroïdes". Dans le sous-menu, sélectionnez le fichier grootfontein_sections.shp comme couche d'entrée, cliquez sur "Exécuter".’
2. Exportez les fichiers de forme des sections (grootfontein_sections.shp) et des centroïdes (grootfontein_sections_centroïdes.shp) sous forme de fichiers .gpx, ce qui vous donne grootfontein_sections.gpx et grootfontein_sections_centroïdes.gpx..
3. Transférez ces deux fichiers .gpx de votre ordinateur vers le dossier _/Phone/Android/data/net.osmand/files/tracks _.
4. Ouvrez l'application OSMAnd et chargez ces deux fichiers via le bouton Menu > My Places > Tracks > Browse to where the files are located.

Le fichier gpx des sections indique les limites des sections et le fichier gpx des centroïdes indique les numéros de section une fois qu'un point centroïde est sélectionné. Avec ces deux fichiers, les volontaires peuvent se déplacer sur le terrain à l'aide de l'application OSMAnd, en localisant leur position à chaque fois ainsi que les sections dans lesquelles ils se trouvent.

## [Quiz] Testez vos connaissances

1. Lors de la planification, il est important que le superviseur ait une bonne idée du nombre de jours de travail dont il dispose par rapport à la main-d'œuvre disponible pour effectuer le travail.


    a. Vrai

    b. Faux

2. OSMAnd peut charger des fichiers .gpx pour afficher la grille cartographique et les marqueurs de carte


    a. True

    b. False

Answer: 1. A | 2. A

## Liste de contrôle des activités

Vous savez maintenant comment créer manuellement une grille de cartographie pour faciliter votre projet de collecte de données. À la fin de cette section, vous devriez être en mesure de :

- Créer une grille de cartographie à l'aide de QGIS
- Charger la grille de cartographie dans OSMAnd