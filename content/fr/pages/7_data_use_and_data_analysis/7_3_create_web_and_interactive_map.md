---
title: 7.3 Créer une carte Web et interactive
bookShowToC: True
---

<br></br>

## Objectifs du cours

Cette section vous explique comment visualiser les données OSM sous la forme d'une carte web et interactive. À la fin de cette section, vous devriez être en mesure de :

* Comprendre comment utiliser overpass-turbo pour visualiser les données OSM sous forme de carte interactive.
* Comprendre comment utiliser uMap pour visualiser des données spatiales.
* Comprendre comment relier les données de overpass-turbo à uMap

<br></br>
***
<br></br>

## Activités d’apprentissage

Les cartes interactives sont considérées comme l'équivalent moderne de la communication visuelle avec des cartes. Il s'agit de la création et de l'étude de la représentation visuelle des données (cartes). Pour communiquer l'information de manière claire et efficace, la visualisation des données utilise des graphiques statistiques, des tracés, des graphiques d'information et d'autres outils. L'utilisation de cartes interactives permet aux utilisateurs de modifier librement l'affichage de la carte en fonction de leurs préférences.

Cette section présente deux outils permettant de créer des cartes interactives à partir de données OSM : **uMap** et **Overpass Turbo**. **uMap** vous permet de créer rapidement des cartes avec des couches OSM. La plateforme propose des exemples de cartes pour vous inspirer dans l'utilisation des couches, des points d'intérêt, de la conception et des licences. **Overpass Turbo Query** est un outil de filtrage de données basé sur le web pour OSM. Vous pouvez exécuter des requêtes et analyser les données OSM résultantes de manière interactive sur une carte. Un assistant intégré facilite la création de requêtes.

### Construire une carte avec Overpass-turbo

[Overpass Turbo Query](http://overpass-turbo.eu/) est un outil d'exploration de données basé sur le web pour OpenStreetMap. Il exécute n'importe quel type de requête de l'API Overpass et affiche les résultats sur une carte interactive.

**Compétences et technologies nécessaires**

* Ordinateur avec
* Connexion Internet
* Recommendé: souris d’ordinateur

**Niveau de compétence requis :** Débutant/Intermédiaire

**Comment utiliser Overpass Turbo**

1. Dans votre navigateur enter [https://overpass-turbo.eu/](https://overpass-turbo.eu/) pour charger Overpass Turbo
2. Cliquez sur Assistant dans la barre supérieure pour créer une requête de données

![](/images/7_data_use_analysis/04_7.3_Create_Web_Interactive_Map/image1.gif)

3. Créez une requête. Par exemple, tapez highway=* (Cette requête recherche toutes les autoroutes dans la zone d'intérêt) dans le champ de recherche et cliquez sur ‘Créer une requête’.

![](/images/7_data_use_analysis/04_7.3_Create_Web_Interactive_Map/image2.gif)

4. Dans le champ de recherche situé à votre droite (Map Canvas), tapez la zone qui vous intéresse (par exemple Kampala, Ouganda), puis zoomez sur la zone.

![](/images/7_data_use_analysis/04_7.3_Create_Web_Interactive_Map/image3.gif)

5. Dans la barre supérieure, cliquez sur Exécuter pour obtenir les données. (Après le chargement des points de données sur le canevas de la carte)

![](/images/7_data_use_analysis/04_7.3_Create_Web_Interactive_Map/image4.gif)

6. Cliquez sur Exporter dans la barre supérieure. Dans la section Carte, téléchargez la carte interactive et partagez l'adresse URL.

### Construire une carte avec uMap

[uMap](https://toolbox.hotosm.org/pages/data-use-and-analysis/7.3_web_and_interactive_maps/umap.openstreetmap.fr) vous permet de créer une carte avec des couches OpenStreetMap et de l'intégrer à votre site. Le tout en quelques minutes. Vous pouvez créer des cartes personnalisées (voir les exemples ci-dessous). Il est alimenté par des logiciels libres, sous licence WTFPL.

**Compétences et technologies nécessairres**
* Ordinateur avvec
* Connexion internet
* Recommendé: Souris d’ordinateur

**Niveau de compétence requis:** Débutant/intermédiaire

**Comment utiliser umap?**
1. Dans votre navigateur web, entrez [http://umap.openstreetmap.fr/en/](http://umap.openstreetmap.fr/en/)
2. Dans la barre supérieure, cliquez sur login/signup et choisissez l'application tierce (OpenStreetMap - Icon) à utiliser.
3. En utilisant le compte OpenStreetMap, accordez l'accès à l'Umap et vous serez redirigé vers l'interface uMap.
4. Dans le coin supérieur droit, cliquez sur l'onglet "Créer une carte"
5. Dans la barre supérieure, cliquez sur Édition, Carte sans titre pour fournir le titre de la carte, la description de la carte et configurer les paramètres interactifs et de symbologie de la carte.

![](/images/7_data_use_analysis/04_7.3_Create_Web_Interactive_Map/image5.gif)

![](/images/7_data_use_analysis/04_7.3_Create_Web_Interactive_Map/image6.gif)

6. Cliquez sur SAUVEGARDER après chaque action pour éviter de perdre les modifications apportées.
7. Cliquez sur l'icône d'importation de données dans les outils d'édition (barre de droite) pour ajouter des données à la carte. Naviguez jusqu'à l'endroit où vos données sont stockées et importez-les.

![](/images/7_data_use_analysis/04_7.3_Create_Web_Interactive_Map/image7.gif)

8. Cliquez sur l'icône Gérer les données dans les outils d'édition (barre de droite), puis cliquez sur le bouton Modifier (crayon) pour modifier les propriétés visuelles des données, telles que la couleur et le style de l'icône.

![](/images/7_data_use_analysis/04_7.3_Create_Web_Interactive_Map/image8.gif)

9. Cliquez sur Enregistrer dans la barre supérieure pour que les modifications apportées soient enregistrées.
10. Rafraîchissez la page et, dans le panneau de gauche, cliquez sur l'icône de partage pour copier le lien qui peut être partagé pour la carte interactive générée ou intégrer la carte dans un site web personnalisé.

![](/images/7_data_use_analysis/04_7.3_Create_Web_Interactive_Map/image9.gif)

### Lier uMap et Overpass-turbo

La liaison entre uMap et Overpass Turbo permet de mettre à jour votre uMap interactive au fur et à mesure de la mise à jour des données OpenStreetMap.

**Compétences et technologies nécessaires**
* Ordinateur avecc
* Internet connexion
* Recommendé: Souris d’ordinateur

**Comment lier uMap et Overpass Turbo**
1. Après avoir créé une requête dans overpass-turbo.eu, cliquez sur Export, Query, puis sur compact.
2. Copiez le lien de la requête sous forme de texte et collez-le dans un éditeur de texte (par exemple, notepad). Si vous utilisez la fonction "copier le lien" de votre navigateur, vous devrez peut-être d'abord décoder l'URL en la collant ici et en cliquant sur Décoder avant de la copier pour l'éditer dans un éditeur de texte.
3. Ensuite, nous devons prendre ce texte et le généraliser pour qu'il fonctionne sur n'importe quelle zone cartographique :
4. Add **http://overpass-api.de/api/interpreter?data=** avant le texte copié.
5. Remplacer les coordonnées de latitude et de longitude codées en dur par **({south},{west},{north},{east})**. Cette opération devra être effectuée à trois reprises ; après noeud[x], chemin[x], et relation[x].
6. Le résultat final devrait ressembler à: 

    **http://overpass-api.de/api/interpreter?data=[out:json][timeout:25];(node[“source”=”HOT-UG”]({south},{west},{north},{east});way[“source”=”HOT-UG”]({south},{west},{north},{east});relation[“source”=”HOT-UG”]({south},{west},{north},{east}););out body;>;out skel qt;**

7. Naviguez maintenant vers umap.openstreetmap.fr.
8. Cliquez sur Créer une carte et effectuez un panoramique/zoom sur la zone qui vous intéresse.
9. Cliquez sur le bouton des calques, puis sur Modifier (le symbole du crayon).
10. Dans le volet de droite, cliquez sur Données distantes et collez l'URL que nous avons construite à l'étape 6 dans la case Url.

![](/images/7_data_use_analysis/04_7.3_Create_Web_Interactive_Map/image10.gif)

11. Sélectionnez "osm" dans la liste déroulante Format.
12. Cochez la case dynamique.
13. Facultatif : Si vous avez beaucoup de données, vous pouvez limiter l'affichage à certains niveaux de zoom (afin de ne pas trop solliciter les serveurs Overpass). Vous pouvez le faire en entrant un niveau de zoom minimum dans la case From Zoom. Ici, j'ai saisi 13 comme niveau de zoom minima.
14. Customize using the options on the right. Here, I've changed the map background to OSM monochrome and I've changed the color of the overlay data.
15. Cliquez sur Plus à gauche, puis sur Intégrer et partager cette carte.
16. Copiez et collez l'iframe intégrable (il se peut que vous deviez cliquer sur Affichage actuel au lieu de l'affichage de la carte par défaut dans la boîte d'options de l'iframe).

## [Quiz] Testez vos connaissances

1. uMap vous permettra de créer votre propre carte interactive en utilisant des données OpenStreetMap et d'autres jeux de données géospatiales

    a.Vrai


    b.Faux

2. En reliant votre uMap à Overpass API, vos données OpenStreetMap seront mises à jour en fonction de la version des données sur le serveur OSM actuel

    a.Vrai


    b.Faux

Answer: 1. A| 2. A

## Liste de contrôle des activités

À la fin de cette section, vous devriez être en mesure de :
- Faire fonctionner Overpass-turbo pour visualiser les données OSM.
- Construire une carte interactive à l'aide de uMap
- Lier le projet uMap à l’API Overpass pour maintenir les données OSM à jour