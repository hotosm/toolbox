---
title: 2.5 Overview Data Collection Using ODK Collect
bookShowToC: True
---
<br></br>

## Course Objectives

This section will provide general overview of the ODK Collect. By the end of this section you should be able to:

- Understand the overview of data collection using ODK Collect

<br></br>
***
<br></br>

## Learning Activities

OpenDataKit (ODK) is a free an open-source set of tools which help organizations author, field, and manage mobile data collection solutions. ODK Collect is part of ODK and is an Android app that replaces paper forms used in survey-based data gathering. It supports a wide range of question and answer types, and is designed to work well without network connectivity.

Not sure if OpenDataKit is right for your project? Review [Data Collection Applications](https://toolbox.hotosm.org/pages/2_field_mapping_prep/2_2_data_collection_applications/).

**Set-up Process**

To set-up OpenDataKit for devices, you will need to follow the following steps:

1. [Create ODK forms](https://toolbox.hotosm.org/pages/2_field_mapping_prep/2_6_creating_xlsform_for_odk_collect/)
2. [Download and set up the ODK application](hhttps://toolbox.hotosm.org/pages/4_field-mapping-management/4_3_using_odk_collect/)

<br></br>

### Creating ODK Forms

When using ODK survey applications, you will need to create the files that will serve as the survey forms.

Forms can be created using spreadsheet software (such as Excel or [LibreCalc](https://www.libreoffice.org/discover/calc/)) or using the [ODK Form Builder](https://build.opendatakit.org/). Documentation on how to design a form can be found [here](http://xlsform.org/en/).

- [Create ODK forms](https://toolbox.hotosm.org/pages/2_field_mapping_prep/2_6_creating_xlsform_for_odk_collect/)
- [Example ODK form](https://drive.google.com/file/d/1HY2jsHDYnpjuGemhco_WT9Cl8PSG4b43/view?usp=sharing)
- [Blank ODK form](https://drive.google.com/file/d/1ISEYZo5C_TCfKUJFD8AvbUrlsDHxRPgK/view?usp=sharing)

**Form conversion**

After forms are developed, they need to be converted from .xlsx/.xls to .xml to be used by the ODK application. This can be done by using [XLSform](https://docs.opendatakit.org/xlsform/) [online](https://opendatakit.org/xlsform/) or [offline](https://docs.opendatakit.org/xlsform/). If using KoboToolBox server, you will not need to complete form conversion. The server will complete this process for you.

### Download and set up the ODK application

**Download application**

- The ODK application can be found on Google Play [here](https://play.google.com/store/apps/details?id=org.odk.collect.android&hl=en_US).

- Further information on how to use ODK Collect can be found [here](hhttps://toolbox.hotosm.org/pages/4_field-mapping-management/4_3_using_odk_collect/).

**Setting up application on devices**

1. Find the ODK Collect app icon on your mobile device and tap to open the app.
2. After downloading the ODK app, an odk folder will be automatically created in on the internal memory of the device. Connect your device to a laptop to confirm that this folder is created. If you don’t see this folder on your device’s internal storage, Restart the device.
3. Once the device has been restarted, connect it to your laptop, and navigate to internal storage -> odk folder. You will find for sub-folders inside the openmapkit folder. I.e ‘forms’, ‘instances’, ‘layers’ and ‘metadata’ folders.

![](/images/2_field_mapping_prep/overview_data_collection_using_odk_collect/020301_overview_odk.png)

4. Add your xml forms to the forms folder.
5. In the ODK Collect Main Menu window, select Fill Blank Form. This will display all forms downloaded from the server, which you will be using to field data collection testing.
6. Once you confirm that you have all forms on your device, click on the device back button to exit the ODK Collect App.

<br></br>

## [Quiz] Check Your Knowledge

1. OpenDataKit (ODK) is a free an open-source set of tools which help organizations author, field, and manage mobile data collection solutions.
    
    a. True
    
    b. False

**Answer**: 1. A

## Activity Checklist

By the end of this section, you should be able to:
- Understand the overview of data collection using ODK
