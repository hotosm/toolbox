---
title: 8.1. Cartographier les POI avec ODK + KoboToolbox Server
bookShowToC: True
---

_Le flux de travail suivant présente les outils et les processus utilisés dans un simple projet de cartographie de terrain au cours duquel HOT a formé des ONG locales à intégrer la cartographie dans des programmes existants en utilisant OpenDataKit et KoboToolBox Server._

<br></br>
***
<br></br>

## Activités d’apprentissage
<br></br>

### Aperçu général du projet

**Combler les lacunes en matière de développement et d'urgence pour la crise des réfugiés en Afrique de l'Est**

L'Afrique de l'Est (et l'Ouganda en particulier) continue d'être au centre de l'une des crises de réfugiés les plus importantes et les plus rapides au monde. La politique progressiste d'ouverture de l'Ouganda a entraîné à elle seule un afflux d'environ 1,4 million de réfugiés dans le pays. La grande mobilité des réfugiés signifie que la distribution et la taille des colonies de réfugiés changent constamment et le besoin d'informations normalisées et accessibles pour prendre des décisions éclairées et opportunes sur l'endroit où les services doivent être planifiés et construits devient plus crucial que jamais. Grâce à l'utilisation d'outils techniques libres combinés à une méthodologie communautaire, HOT a été en mesure de combler le manque critique de données dans ces contextes en augmentant la production de données complètes en temps réel sur les infrastructures et les services où résident les réfugiés et les communautés d'accueil. Pour s'assurer que les gouvernements et les organisations impliquées dans la réponse aux réfugiés sachent, premièrement, que ces données existent et, deuxièmement, comment les utiliser efficacement, HOT a beaucoup travaillé pour soutenir et former les acteurs sur la façon d'incorporer systématiquement les données générées par les citoyens dans leurs programmes pour aborder et combler les lacunes existantes.

**Page du projet:** [Combler les lacunes en matière de données : cartographier le contexte des réfugiés en Afrique de l4est](https://www.hotosm.org/projects/bridging-data-gaps-mapping-refugee-contexts-in-east-africa/)

**Date :** Juin 2018 - Mai 2019

**Statut** : Complet

**Outils utilisés :**

* **Collecte de données sur le terrain et à distance** : OpenDataKit (ODK) Collect, Kobo server, Gestionnaire de tâche de HOT (ID Editor, JOSM)
* **Suivi des données sur le terrain :** OSMand et Maps.me
* **Nettoyage des données :** OpenRefine, Excel, JOSM, Python scripts
* **Extraction et visualisation des données :** HOT Export tool, OSM Analytics, QGIS, Overpass Turbo, Umap, HDX

### Processus de cartographie de terrain

#### 1. Identifier les besoins des partenaires et leur domaine d'intérêt/opération

Grâce à des interactions régulières et à des réunions planifiées avec diverses parties prenantes et partenaires - y compris le HCR, l'OPM, la FLM, etc. - le directeur de projet et/ou le directeur national s'efforceront de comprendre les lacunes techniques et les besoins auxquels les institutions sont confrontées pour renforcer leurs contributions à la réponse nationale aux réfugiés. A partir de là, nous identifierons les lacunes en matière de données et les compétences institutionnelles nécessaires pour combler ces lacunes et élaborerons ensemble un plan de mise en œuvre pour former le groupe/l'organisation sur plusieurs jours afin d'atteindre les résultats escomptés.

Étapes de cette phase:

* [Définition des besoins et exigences](https://docs.google.com/document/d/1nsTC2cbT6N1TCsIYmcu6VGQT6m-mLz6nmf-ZwyExeHo/edit?usp=drive_link)

#### 2. Formations et exercices de renforcement des capacités

Après un processus de consultation approfondi, des formations seraient planifiées et organisées en interne ou dans les locaux d'un partenaire. L'objectif principal de ces formations est d'introduire - et d'essayer d'inculquer - les outils SIG et de soutenir le renforcement des capacités des partenaires de la réponse aux réfugiés par le biais de leçons personnalisées sur un court laps de temps. Ces supports de formation ont tous été spécifiquement conçus pour chaque organisation partenaire afin de s'assurer que les ressources correspondent à leur niveau de compétence/compréhension et leur permettent d'améliorer de manière adéquate leurs connaissances pratiques. Les formations ont généralement duré entre 2 et 5 jours et ont couvert des sujets tels que la collecte, le stockage, l'extraction, l'analyse et la visualisation des données.

Étapes de cette phase:
* [Formations et ateliers](https://docs.google.com/document/d/1l5JmlkTGMUvsbI9CyShysICeAGw55GkTsw_6P4558zI/edit?usp=drive_link)

Les formations proposées aux partenaires sont les suivantes :
* [Introduction à OSM](https://docs.google.com/presentation/d/1QneNbichunhVjyN4RPRyPuYV3Q7QMJctp50_90FpMpc/edit#slide=id.g526e73601c_0_1163)
* [Cartographie avec JOSM](https://docs.google.com/presentation/d/1nLs1JA-nlmqWA2vIr9ZsoDcg8wjsoc5nv1QMK9GT8KI/edit?usp=sharing)
* [Cartographie avec ID editor](https://docs.google.com/presentation/d/1sbTZp5B7sQlEM-RzDU-33JlJnUUUGDkeOchhC6srK20/edit#slide=id.g51d3d58777_0_0)
* [Outils de collecte de données sur le terrain](https://docs.google.com/document/d/1sTU36IIhwzDAdB62pmt4WGE2ZRdB3Ruv2XC5MEYHBZI/edit)
* [Introduction à QGIS](https://docs.google.com/presentation/d/1EA63n-jEjgEYVGzfdW8dispZpqvkbGDYx7ZtuayxZnQ/edit?usp=sharing)
* [Télécharger les données à partir de OSM (Outil d’exportation de HOT et Quick OSM)](https://docs.google.com/presentation/d/1RyHYVPZU5d4xJ1cpWga4QRdfohpEs-t9ylJ_HTJ7wm8/edit?usp=sharing)

#### 3. Collecte de donnée

Les activités de collecte de données étaient de nature consultative et participative, les collecteurs de données étant choisis parmi les communautés locales que nous souhaitions voir générer des données pour soutenir la réponse aux réfugiés. Les collecteurs de données ont utilisé leurs smartphones personnels et ceux qui n'avaient pas de smartphones en état de marche en ont été équipés par HOT. OpenDatakit était le principal outil/application de collecte de données utilisé et 6 formulaires uniques - y compris la santé, l'éducation, l'eau, l'assainissement - seraient mis en œuvre par les enquêteurs et utilisés pour la cartographie dans chaque village visité à la fois dans et autour des colonies de réfugiés.

Steps used in this phase:
* [Choix de l’application de collecte de données: OpenDataKit (ODK)](https://docs.google.com/document/d/1sTU36IIhwzDAdB62pmt4WGE2ZRdB3Ruv2XC5MEYHBZI/edit)
* [Aperçu général sur ODK Collect](https://docs.google.com/document/d/1BcQUE1__qNK6DD0Uq8lcvwDLR3T9HXvljOE1l-LeMlk/edit)
* [Utilisation de ODK Collect](https://docs.google.com/document/d/1lVMcZ6wvcht1IYvEY7j6iYOgi7idLzX0ODZjp403qJ8/edit)

#### 4. Stockage et contrôle des données
Les données provenant du terrain ont été stockées sur le serveur en ligne kobo du HCR. Cela a permis aux différents partenaires de mise en œuvre du HCR et de l'OPM d'accéder facilement et efficacement aux données. Les données ont été téléchargées par le collecteur de données sur le terrain à la fin de chaque journée de travail. Le téléchargement de l'ODK ne nécessite qu'une connexion 2G pour envoyer les fichiers au serveur. Les enquêteurs ont toujours reçu au moins 50 Mo de données pour accomplir ces tâches. Le serveur Kobo a également été utilisé comme outil de contrôle pour déterminer le nombre de points de données collectés et évaluer rapidement toute lacune dans la qualité des données sur le terrain.

Étape de cette phase:
* [ Serveurs de collecte de données](https://hotosm.github.io/toolbox/pages/data-collection-and-field-mapping/3.4-data-collection-servers/)

#### 5. Nettoyage et analyse des données

Après avoir été stockées sur Kobo, les données seront téléchargées, puis nettoyées et téléchargées à l'aide de JOSM.

Steps used in this phase:
* [Nettoyage des données avec  JOSM](https://docs.google.com/document/d/1W5a8I3B-YCd2HrZKd23yFHxMgqQ7tnpjoZWG8E0Y1-w/edit)

#### 6. Visualisation des données

Pour ce projet, HOT a utilisé un certain nombre de méthodes pour visualiser les données ; de l'utilisation de QGIS pour créer des cartes statiques et des atlas à l'utilisation d'outils tels que Overpass turbo, Umap et Mapbox Studio pour créer des produits cartographiques dynamiques et informatifs. Les types de visualisation principalement développés comprenaient des matrices de distance, des identificateurs de lacunes dans les ressources, des cartes de localisation et de navigation et des cartes d'indicateurs de proximité.

Étapes utilisés pour cette phase :
* [Télécharger les données avec l’outil d’exportation de HOT](https://docs.google.com/document/d/1wn31VVQ2eNZQuOst2tyxlDvAy4bbSc2A_MOtxgE-scw/edit)
* [Créer des cartes et Atlas avec QGIS](https://docs.google.com/document/d/1rZ41GBEFQabyJi44SoGz_S7r6YYcrYvPUGqccvtvT1U/edit)
* [Cartes Web et interactives](https://docs.google.com/document/d/1i03eAxiemHSou89TBApcTDekTILrJKnHv3WyozDP834/edit)