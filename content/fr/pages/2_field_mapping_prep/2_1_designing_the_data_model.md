---
title: 2.1 Concevoir un modèle de donnée
bookShowToC: True
---

<br></br>

## Objectifs du cours

Dans cette section, vous devriez être en mesure de :

- Comprendre le concept de structure de données dans OSM.
- Apprendre à utiliser OSM wiki
- Apprendre à utiliser TagInfo
- Comprendre le cheminement du modèle de données
- Comprendre la création du modèle de données
- Apprendre à utiliser les modèles de données de HOT

<br></br>
***
<br></br>

## Activités d’apprentissage

Au début d'un projet de cartographie, un modèle de données doit être créé afin de déterminer les entités à cartographier et les détails collectés pour chacune d'entre elles. Un modèle de données définit les caractéristiques qui sont étudiées ou cartographiées et les attributs qui sont collectés pour chacune d'entre elles. Si un projet doit télécharger des données sur OpenStreetMap, le modèle de données doit être conçu pour correspondre au balisage (tags) d’OSM.

### Introduction à la structure de données d’OSM

OSM ne fonctionne pas avec des couches ou des tables d'attributs, mais avec des **tags**. Lorsque vous dessinez un élément (point, ligne, polygone) dans OSM, vous devez ajouter des informations sur l'objet, telles que son nom, son adresse et d'autres informations complémentaires. Ces informations sont utiles aux autres utilisateurs lorsqu'ils utilisent les données OSM à diverses fins. 

Un attribut/tag est comme une étiquette que vous pouvez placer sur un objet. Par exemple, si vous dessinez un carré, ce n'est qu'un carré sans aucune information sur l'objet. Mais vous pouvez ajouter des attributs pour décrire cet objet. Par exemple, vous dessinez un carré que vous savez être un immeuble d'appartements de 40 étages nommé ‘Luna Gardens’.

![](/images/2_field_mapping_prep/designing_the_data_model/020101_tags.png)

Les balises sont utilisées dans OSM pour classer les éléments et pour ajouter des informations utiles à la compréhension de la carte, à la planification, au routage et à l'interrogation. Chaque balise se compose d'une **clé** et d'une **valeur**. 

**La clé** est l'information générale qui explique la fonction d'un objet. Une clé peut être composée de plusieurs valeurs. Par exemple, les écoles, les mosquées et les hôpitaux ont tous la même clé, à savoir les équipements (installations importantes). Bien que ces trois objets aient différents types de fonctions (ou valeurs), ils ont tous les trois la même clé parce qu'ils sont tous des équipements. 

Alors que **la valeur** est une information qui explique plus spécifiquement le type d'un objet. Comme cette valeur décrit des informations spécifiques sur un objet, il ne peut y avoir qu'une seule valeur pour une clé spécifique afin de décrire l'objet. Dans OpenStreetMap, un attribut est ajouté en formant une paire clé-valeur qui représente des caractéristiques physiques sur le terrain.

Chaque élément de la carte doit avoir une ou plusieurs étiquettes telles que :

- building=residential (bâtiment = résidentiel)
- highway=primary (autoroute = primaire)
- amenity=school (aménité = école) 

***Veuillez noter que les étiquettes OSM sont en anglais.***

En outre, chacune de ces caractéristiques peut avoir un nombre illimité d'attributs connexes ajoutés dans OSM sous forme de balises. Par exemple, un bâtiment peut avoir les étiquettes suivantes :

- building=commercial
- building:material=brick
- roof:material=metal
- shop=tailor

La création d'un modèle de données doit se faire en collaboration avec toutes les parties prenantes afin de s'assurer que toutes les informations nécessaires sont collectées - il est beaucoup plus difficile de revenir sur un site pour le cartographier afin de collecter des informations supplémentaires. En même temps, lors de la conception d'un modèle de données, il faut tenir compte du temps qu'il faudra à un enquêteur pour compléter la collecte des données - chaque type de caractéristique, attribut ou question ajoutera du temps supplémentaire.

### Les outils pour créer un Modèle de Données

| Astuces:                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| HOT recommande d'utiliser **TagInfo** et le **Wiki OSM** pour rechercher les fonctionnalités OSM existantes lors de l'élaboration de votre modèle de données. Les étapes suivantes constituent une introduction à l'utilisation de ces outils. |

**Compétences et technologies nécessaires**

- Ordinateur avec
- Une connexion Internet
- Recommandé : souris d'ordinateur

#### Comment utiliser OSM Wiki

1. Naviguez vers [https://wiki.openstreetmap.org/wiki/Map_Features](https://wiki.openstreetmap.org/wiki/Map_Features) dans un navigateur Google Chrome ou Mozilla Firefox internet.
2. Cette page fournit  la documentation sur les fonctionnalités OSM courantes et existantes, classées par type. Ces tableaux contiennent des clés et des valeurs, ainsi que des commentaires et parfois des images pour aider à définir la balise. Faites défiler les tableaux pour découvrir les balises décrites.
3. Recherchez une balise particulière en utilisant les touches "Ctrl+F" de votre clavier. Par exemple, recherchez la balise à utiliser pour les hôpitaux. Pour ce faire, appuyez sur la touche "Ctrl+F" de votre clavier, tapez "hôpital" dans la barre de recherche et appuyez sur "Entrée". Vous accéderez ainsi à la balise appropriée pour les hôpitaux. Remarque : il se peut qu'il y ait plus d'une balise appropriée pour un élément de recherche. Faites défiler les résultats jusqu'à ce que vous trouviez la balise appropriée.
4. Les clés et les valeurs figurant dans les tableaux renvoient également aux pages wiki consacrées à ces caractéristiques. Par exemple, en cliquant sur "hospital" dans la rubrique amenity,  vous serez redirigé vers [https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dhospital](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dhospital). Cette page fournit des informations détaillées sur la balise, ainsi que sur les balises associées et des conseils sur la manière de cartographier un élément particulier.
5. Pour vous entraîner, recherchez d'autres mots clés relatifs aux caractéristiques que vous souhaitez cartographier afin de découvrir les clés et les valeurs liées à ces caractéristiques.

![](/images/2_field_mapping_prep/designing_the_data_model/020102_osm_wiki.gif)

#### Comment utilisez TagInfo

**Taginfo** est un système permettant de trouver et d'agréger des informations sur les balises OSM et de les rendre consultables.

1. Naviguez vers [https://taginfo.openstreetmap.org](https://taginfo.openstreetmap.org/) dans un navigateur internet  Google Chrome ou Mozilla Firefox.
2. Dans le coin supérieur gauche, utilisez la barre de recherche pour trouver une étiquette. Pour cette activité, recherchez "roof"
3. La fenêtre suivante vous permet de sélectionner des clés, des valeurs et des relations existantes contenant le mot "roof”.
4. En sélectionnant l'une de ces options, vous accéderez à une page d'information sur la clé, la valeur ou la relation en question. Pour cette activité, recherchez et cliquez sur "roof:material”.
5. Vous verrez maintenant une page d'information sur l'étiquette "roof:material" comprenant les valeurs qui ont été utilisées avec la clé "roof:material", les combinaisons d'autres étiquettes qui ont été utilisées avec la clé, une carte de la distribution globale de l'utilisation de la clé s'il y a suffisamment de cas d'utilisation, et des liens vers toutes les pages Wiki OSM existantes qui y sont liées.
6. Pour vous entraîner, recherchez d'autres mots clés relatifs aux caractéristiques que vous souhaitez cartographier afin de découvrir les clés et les valeurs liées à ces caractéristiques.

![](/images/2_field_mapping_prep/designing_the_data_model/020103_taginfo.gif)

<br></br>

### Fonctionnement du modèle de données

La conception d'un modèle de données basée sur le marquage OSM est généralement définie par les questions et stratégies suivantes :

| Questions                                                                    | Stratégies suggérées                                                                                                                                                                                                                                               |
|------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Quel est l'objectif de la collecte de données?                               | Réfléchir à l’utilisation des données                                                                                                                                                                                                                              |
| Quelle entité souhaitez-vous collectez?                                      | Identifier l’objet de la collecte de donnée                                                                                                                                                                                                                        |
| Ou collectez-vous les données?                                               | Les modèles de données peuvent différer en fonction de leur emplacement                                                                                                                                                                                            |
| Qu’est ce qui a été fait auparavant ?                                        | Élaborer un modèle de données en s'inspirant de modèles similaires                                                                                                                                                                                                 |
| Quelles sont les balises existantes pour les entités ?                       | 1. Vérifier le statut du Tag à partir de OSM Wiki; 2.Vérifiez l’utilisation du Tag sur TagInfo                                                                                                                                                                           |
| Quelle est l'étiquette correcte pour les entités ?                           | Utiliser des balises approuvées dans la mesure du possible dans le modèle de données                                                                                                                                                                               |
| Toutes les parties prenantes sont-elles d'accord sur le modèle de données ?  | Réviser le modèle de données et intégrer les commentaires des partenaires du projet (l'ajout, la suppression ou la modification de caractéristiques du modèle de données peut retarder la collecte de données sur le terrain et diminuer la qualité des données !) |

### Création de votre Modèle de Données

L'activité suivante vous guidera dans le processus de création d'un modèle de données. Bien que ce processus puisse être réalisé à la main ou à l'aide d'un logiciel de documentation (tel que Google Docs ou Microsoft Word), il est recommandé d'utiliser un tableur pour documenter votre modèle de données.

1. Dressez une liste de toutes les caractéristiques que vous souhaitez collecter. Par exemple : bâtiments, points d'eau, routes. Remplissez la première colonne de votre feuille de calcul.

| **Entités**  | **Clé** | **Valeurs possibles** |
| ------------ | ------- | ------------------- |
| Buildings    |         |                     |
| Water Points |         |                     |
| Roads        |         |                     |

2. Allez sur[ OpenStreetMap wiki](https://wiki.openstreetmap.org/wiki/Map_Features) pour rechercher la clé appropriée pour chaque caractéristique, et la valeur s'il n'y a qu'une seule option de valeur

| **Entités**  | **Clé**  | **valeur**   |
| ------------ | -------- | ----------- |
| Buildings    | building |             |
| Water Points | amenity  | water_point |
| Roads        | highway  |             |

3. Pour les éléments à valeurs multiples, tels que les bâtiments, utilisez la page OSM Wiki pour cette clé ainsi que [TagInfo ](https://taginfo.openstreetmap.org/) pour trouver les valeurs appropriées. Ces valeurs doivent être raisonnables pour votre collecte de données. 

| Astuces: |
|----------|
| Les valeurs de votre modèle de données doivent être adaptées au contexte géographique. Alors qu'il serait idéal de collecter tous les types de bâtiments d'une ville, votre projet ne pourra peut-être collecter que les bâtiments scolaires et hospitaliers. |
|Autre exemple, vous devez collecter les établissements d'enseignement pour votre zone de projet et vous savez déjà qu'il n'y a pas d'université ou d'établissement d'enseignement supérieur dans votre zone de projet. Dans ce cas, vous ne devez pas inclure d'université ou d'école supérieure dans votre modèle de données. |

| **Entités**  | **clé**  | **valeur**                       |
| ------------ | -------- | ------------------------------- |
| Buildings    | building | residential, school, civic      |
| Water Points | amenity  | water_point                     |
| Roads        | highway  | primary, secondary, residential |

4. Une fois que vous avez les étiquettes de base pour vos caractéristiques, vous pouvez décider des attributs que vous voulez ou pouvez collecter pour chaque caractéristique.

| **Entités**  | **clé**           | **valeur**                       |
| ------------ | ----------------- | ------------------------------- |
| Buildings    | building          | residential, school, civic      |
|              | building:material |                                 |
|              | building:levels   |                                 |
|              | roof:material     |                                 |
| Water Points | amenity           | water_point                     |
|              | status            |                                 |
| Roads        | highway           | primary, secondary, residential |
|              | name              |                                 |
|              | condition         |                                 |
|              | surface           |                                 |
|              | width             |                                 |

5. Ensuite, des valeurs peuvent également être déterminées pour chaque clé d'attribut. Ces options peuvent être déterminées à l'aide du Wiki OSM et de TagInfo, ou, dans certains cas, être définies par le mappeur - par exemple pour les réponses numériques ou les noms.

| **Entités**  | **clé**           | **valeur**                              |
| ------------ | ----------------- | -------------------------------------- |
| Buildings    | building          | residential, school, civic             |
|              | building:material | cement_block, brick, wood, mud         |
|              | building:levels   | numeric                                |
|              | roof:material     | thatch, metal, concrete, plastic, tile |
| Water Points | amenity           | water_point                            |
|              | drinking_water    | yes, no                                |
| Roads        | highway           | primary, secondary, residential        |
|              | name              | user defined                           |
|              | condition         | excellent, good, poor                  |
|              | surface           | gravel, paved, dirt                    |
|              | width             | numeric                                |

6. Une fois le modèle de données achevé, il doit être vérifié par les parties prenantes afin de détecter d'éventuelles lacunes. En outre, **votre plan de projet doit être suffisamment souple pour que ce modèle de données puisse être adapté grâce à des essais sur le terrain et à la consultation de vos cartographes**.

|💡 **Le saviez-vous ?** 💡         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "Les données privées ne doivent jamais être téléchargées sur OSM.". Cependant, certains projets nécessitent la collecte d'informations personnelles. Dans ce cas, le modèle de données peut inclure des balises uniques non OSM pour les données privées qui doivent être collectées. Lors du nettoyage des données après leur collecte, ces données privées peuvent être conservées dans un ensemble de données complet avant d'être supprimées. Une fois les données privées supprimées, le jeu de données peut être téléchargé sur OSM. |

### Modèle de Données de HOT

Pour soutenir le projet de HOT et de la communauté, HOT a développé une référence pour le modèle de données qui peut être utilisé par le public. Ce modèle a déjà été vérifié par le biais de Wiki OSM, de TagInfo et des projets précédents de HOT. Vous pouvez essayer d'y accéder en cliquant sur le lien suivant: [Impact Areas - Data Models V.1.1](https://docs.google.com/spreadsheets/d/1BC9OIk_dDwoST5Kck8MNKRt7mFBtbscMjjWh9S_Ukp4/edit#gid=1192360458).

![](/images/2_field_mapping_prep/designing_the_data_model/020104_data_model.png)

Vous pouvez vérifier le document et le filtrer en utilisant la fonction "Filter View" de Google Spreadsheets pour filtrer les modèles de données dans différentes catégories, telles que la résilience aux catastrophes et au climat, l'égalité entre les hommes et les femmes, la santé publique, les villes et communautés durables, et les déplacements et migrations sûres.

## [Quiz] Testez vos connaissances

1. **…** est l'information générale qui explique la fonction d'un objet.

    a. Attributs

    b. étiquette
    
    c. Clé
    
    d. Valeur

2. ...​​ est une information qui explique plus spécifiquement le type d'un objet.

    a. Attributs
    
    b. étiquette
    
    c. Clé
    
    d. Valeur

3. Si vous souhaitez construire un modèle de données pour votre projet, vous pouvez essayer d'utiliser les sites suivants :

    a. Wiki et Google
    
    b. OpenStreetMap Wiki et Github
    
    c. OpenStreetMap Wiki et TagInfo de OSM
    
    d. Wiki et TagInfo de OSM

4. Un site qui permet de trouver et d'agréger des informations sur les balises OSM dans un format permettant la navigation et la recherche.

    a. OSM Wiki
    
    b. TagInfo de OSM
    
    c. Google
    
    d. Github

5. Vous avez un projet de collaboration avec une organisation redcross locale. Pendant la phase de création du modèle de données, vous comprenez qu'il y a eu un projet similaire dans un autre pays qui a collecté un objet similaire dans OSM et a déjà créé un modèle de données pour lui. Veuillez identifier l'action suivante que vous devez entreprendre :

    a. Identifier l'objectif du projet → Exploiter un modèle de données similaire → Vérifier le modèle de données grâce à OSM Wiki et TagInfo → Réviser le modèle de données et intégrer les commentaires des partenaires
    
    b. Identifier l'objet du projet → examiner un modèle de données similaire
    
    c. Identifier l'objectif du projet → créer un nouveau modèle de données pour
    
    d. Tous correcte

**Answer**: 1. C |2. D| 3. C| 4. B| 5. A

## Liste de contrôle des activités

Dans cette section, vous avez déjà compris le concept des données OSM et comment créer un modèle de données pour soutenir votre projet. À la fin de cette section, vous devriez être en mesure de :

- Trouver des balises existantes dans OSM Wiki et TagInfo.
- Comprendre les étapes de la création d'un modèle de données.
- Utiliser les modèles de données HOT pour trouver un modèle de données approuvé.
- Construire son propre modèle de données

## Additional resources

**Exemple de modèle de données :**

- [Uganda Refugee Crisis](https://wiki.openstreetmap.org/wiki/WikiProject_Uganda/Uganda_Crowdsourcing_Non-Camp_Refugee_Data)
- [Ramani Huria](https://wiki.openstreetmap.org/wiki/Dar_es_Salaam/Ramani_Huria)

**Présentation:**

- [Modèle de données et étiquettage](https://docs.google.com/presentation/d/1CU6cBtu9ZAeCWKIz6xLVN4fBrdsN7R5tFELPXbepilI/edit#slide=id.g5c7d19429e_0_225)