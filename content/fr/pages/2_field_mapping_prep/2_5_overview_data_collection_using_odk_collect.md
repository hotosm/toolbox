---
title: 2.5 Aperçu sur la collecte de données à l'aide de ODK
bookShowToC: True
---
<br></br>

## Objectifs du cours

Cette section présente une vue d'ensemble de ODK Collect. À la fin de cette section, vous devriez être apte à :

- Comprendre la structure générale de la collecte de données à l’aide de ODK

<br></br>
***
<br></br>

## Activités d’apprentissage

OpenDataKit (ODK) est un ensemble d'outils gratuits et open-source qui aident les organisations à créer, mettre en œuvre et gérer des solutions de collecte de données mobiles. ODK Collect fait partie de ODK et est une application Android qui remplace les formulaires papier utilisés dans les enquêtes de collecte de données. Elle prend en charge un large éventail de types de questions et de réponses et est conçue pour fonctionner sans connectivité réseau.

Vous ne savez pas si OpenDataKit est adapté à votre projet ? Réviser [Les applications de collecte de données](https://toolbox.hotosm.org/fr/pages/2_field_mapping_prep/2_2_data_collection_applications/).

**Processus de configuration**

Pour configurer OpenDataKit pour les appareils, vous devez suivre les étapes suivantes :

1. [Créer des formulaires ODK](https://toolbox.hotosm.org/fr/pages/2_field_mapping_prep/2_6_creating_xlsform_for_odk_collect/)
2. [Télécharger et configurer l’application ODK](https://toolbox.hotosm.org/fr/pages/4_field-mapping-management/4_3_using_odk_collect/)

<br></br>

### Création des formulaires ODK

Lorsque vous utilisez les applications d'enquête ODK, vous devez créer les fichiers qui serviront de formulaires d'enquête.

Les formulaires peuvent être créés à l'aide d'un tableur (tels que Excel ou [LibreCalc](https://www.libreoffice.org/discover/calc/)) ou en utilisant  le [générateur de formulaire ODK](https://build.opendatakit.org/). La documentation sur la conception d’un formulaire est disponible [ici](http://xlsform.org/en/).

- [Créer les formulaires ODK](https://toolbox.hotosm.org/fr/pages/2_field_mapping_prep/2_6_creating_xlsform_for_odk_collect/)
- [Exemple de formulaire ODK](https://drive.google.com/file/d/1HY2jsHDYnpjuGemhco_WT9Cl8PSG4b43/view?usp=sharing)
- [Formulaire ODK vide](https://drive.google.com/file/d/1ISEYZo5C_TCfKUJFD8AvbUrlsDHxRPgK/view?usp=sharing)

**Conversion des formulaires**

Une fois les formulaires développés, ils doivent être convertis en .xlsx/.xls en .xml pour être utilisés par l'application ODK. Celà peut se faire en utilisant  [XLSform](https://docs.opendatakit.org/xlsform/) [en ligne](https://opendatakit.org/xlsform/)<span style="text-decoration:underline;"> </span>ou [hors ligne](https://docs.opendatakit.org/xlsform/). Si vous utilisez le serveur OpenMapKit ou le serveur KoboToolBox, vous n'aurez pas besoin de procéder à la conversion du formulaire. Le serveur se chargera de cette opération pour vous.

### Télécharger et configurer l’application ODK

**Télécharger l’application**

L’application ODK est disponible sur Google Play [ici](https://play.google.com/store/apps/details?id=org.odk.collect.android&hl=en_US).

De plus amples informations sur l'utilisation de ODK Collect sont disponibles [ici](https://toolbox.hotosm.org/fr/pages/4_field-mapping-management/4_3_using_odk_collect/).

**Configuration de l’application sur les appareils**

1. Trouvez l'icône de l'application ODK Collect sur votre appareil mobile et appuyez dessus pour ouvrir l'application.
2. Après avoir téléchargé l'application ODK, un dossier ODK sera automatiquement créé dans la mémoire interne de l'appareil. Connectez votre appareil à un ordinateur portable pour confirmer la création de ce dossier. Si vous ne voyez pas ce dossier dans la mémoire interne de votre appareil, redémarrez l'appareil.
3. Une fois l'appareil redémarré, connectez-le à votre ordinateur portable et naviguez jusqu'au stockage interne -> dossier odk. Vous trouverez quatre sous-dossiers dans le dossier openmapkit. Il s'agit des dossiers ‘forms’, ‘instances’, ‘layers’ et ‘metadata’. 

![](/images/2_field_mapping_prep/overview_data_collection_using_odk_collect/020301_overview_odk.png)

4. Ajoutez vos formulaires xml au dossier forms.
5. Dans la fenêtre du menu principal de ODK Collect, sélectionnez Fill Blank Form. Cela permet d'afficher tous les formulaires téléchargés depuis le serveur, que vous utiliserez pour les tests de collecte de données sur le terrain.
6. Une fois que vous avez confirmé que vous avez tous les formulaires sur votre appareil, cliquez sur le bouton de retour de l'appareil pour quitter l'application ODK Collect.

<br></br>

## [Quiz] Testez vos connaissances

1. OpenDataKit (ODK) est un ensemble d'outils gratuits et open-source qui aident les organisations à créer, mettre en place et gérer des solutions de collecte de données mobiles. 

    a. Vrai

    b. Faux

**Answer**: 1. A

## Liste de contrôle des activités

À la fin de cette section, vous devriez être en mesure de :
- Comprendre le processus de collecte de données à l’aide de ODK