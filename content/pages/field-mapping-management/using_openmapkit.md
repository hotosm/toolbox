---
title: Using the OpenMapKit Application
weight: 3
bookShowToC: True
---

**Objectives:**


*   Able to explain _OpenMapkit_ as one of the tools for collecting infrastructure data
*   Able to operate the initial setup for _OpenMapKit_
*   Able to operate how to enter offline basemap for _OpenMapKit_
*   Able to operate _OpenMapKit_

Previously you already learn the _ODK (OpenDataKit) Collect,_ an android-based application to replace paper form for surveys. _ODK Collect_ has extension called _OpenMapKit (OMK)_. This extension is used to add information on the position or location of the object surveyed.

### **I. What is _OpenMapKit_**

_(OMK) OpenMapKit_ is an additional application that is used to support _ODK Collect_ in determining the position of objects found during precise and precise field surveys. _OpenMapKit_ can be run through _ODK Collect_, after you open and select one of the available forms. In determining the location of an object, _OpenMapKit_ requires a map background in the form of a satellite imagery or OSM map. If you use the OSM as the map background, the thing to note is that the data must be available on the OSM server. Currently _OpenMapKit_ only available on Android. You can download _OpenMapKit_ for free through the _Play Store_.

![OpenMapKit Application in Play Store](/images/using-omk/0301_app_omk.png)
<p align="center"><i>_OpenMapKit application on the Play Store_
</i></p>


>
> Note:
> To be able to use OpenMapKit You have to install latest version of ODK (OpenDataKit) Collect, because the form filled in OpenMapKit is sourced from ODK Collect.
>


### **II.Initial settings _OpenMapKit_**

Before you use _OpenMapKit_, you must first make initial setup. The following are step by steps of the initial _OpenMapKit setup_:



*   On the home page of _OpenMapKit_, press **the settings button** located in the upper right corner.
  
*   Select **OSM _User name_** OSM and enter your _User Name_

![Display settings menu OpenMapKit](/images/using-omk/0302_setting_omk.png)
<p align="center"><i>Display settings menu OpenMapKit</i></p>

*   By default, _OpenMapKit_ will display the _Online Humanitarian OpenStreetMap_.

### **III. Import the offline _basemap_ for _OpenMapKit_**

_OpenMapKit_ provides an OSM map as a _basemap_ that must be accessed using an internet connection. But don't worry, you can also enter offline basemap into _OpenMapKit_ which is a map that can be opened without an internet connection. An offline basemap can make it easier for you to add information right at the location you are surveying. Here's how to add offline basemap:



*   The format of the data used as a offline basemap in the application _OpenMapKit_ should be formatted as .mbtiles. To create _.mbtiles_ can be seen in the module **Make Mbtiles for OMK (_OpenMapKit_).** After you have the _.mbtiles_ file, connect your _smartphone_ to your computer / laptop. Open the folder containing _the .mbtiles _file that will be copied to your smartphone. Select the _.mbtiles_ file then copy it to **openmapkit** → **mbtiles** folder your internal storage.

![The process of adding mbtiles files to OpenMapKit](/images/using-omk/0303_omk_mbtiles.png)
<p align="center"><i>Process of adding .mbtiles files to OpenMapKit</i></p>

*   If you have successfully copied _.mbtiles_, you can change the _OpenMapKit basemap_ by pressing **the settings button** located in the top right corner and pressing **_Basemap_** then select the _.mbtiles_ that you just entered. Then press **_OK_**.

![Display basemap settings in OpenMapKit](/images/using-omk/0304_omk_basemap.png)
<p align="center"><i>Display basemap settings in OpenMapKit</i></p>

### **IV. Basic Operation _OpenMapKit_**



#### 1. **Download OSM data in _OpenMapKit_**

    Existing OSM data can be easier for you to add information about the building because you can choose the building directly and start adding an information based on the field. Therefore, you should download OSM first data before adding new information. Here’s how to download OSM data in _OpenMapKit_:

   *   Navigate the map to your current location (for example, you are already on the survey location) by pressing **the round button** in the lower right corner of the screen until the round button is colored blue. A black dot will appear at your current location.

    ![Navigate to the current location in OpenMapKit](/images/using-omk/0305_omk_location.png)
    <p align="center"><i>Navigate to the current location in OpenMapKit</i></p>

   *   Press the **settings button** in the top right corner

   *   Select **_OSM XML Downloader_** to start download OSM data according to the view on the screen of your smartphone (the duration depends on the size of the area). Make sure you are connected to an internet connection when downloading OSM data. Note the color of the building, the building on the OSM _basemap _have brown color and the building from **_OSM XML Downloader _** is purple.


    ![Building colors](/images/using-omk/0306_warna_bangunan.png)
    <p align="center"><i>Building color on the OSM basemap (left) and downloaded building color (right)</i></p>

   *   Your new downloaded OSM data will be saved in the format _.osm_ which can be activated or deactivated via **the settings button** **→ _OSM XML Layer_**.

    ![OSM XML Downloader menu and OSM XML Layers menu](/images/using-omk/0307_xml_layer.png)
    <p align="center"><i>OSM XML Downloader menu and OSM XML Layers menu</i></p>
    

#### 2. **Add building information in _OpenMapKit_**

    If you have successfully downloaded building data from OSM, you can add the building information by:

   *   Select the building to which the information will be added. Make sure the building is purple which indicates that the building has been downloaded from OSM. If the building is selected, the color will change to orange.
  
   *   You can fill the building information in accordance with the form you have chosen before in the _ODK Collect_ application, with press the information tag in the first row located below.

    ![Fill out building information using a form from ODK Collect](/images/using-omk/0308_mengisi_form_omk.png)
    <p align="center"><i>Fill out building information using a form from ODK Collect.</i></p>

   *   When done, at the end of the page select **_Save_** to save the form to _ODK Collect_. If you have completed filling in the form, the building that you fill in the information will look like this:

    ![The building that has been filled in the information](/images/using-omk/0309_tag_bangunan_omk.png)
    <p align="center"><i>Building that has been filled in the information</i></p>  


    If the building data for location of your survey is not yet available in the OSM, you can map the building before conducting the survey. If you don’t have time to do the mapping, you can use points to mark the object in the _OpenMapKit_ by:

   *   Use _.mbtiles_ you have entered previously to help mark the object accurately click **Settings** **→ _Basemap_**
  
   *   Press **the plus (+) icon** in the lower right corner of your screen until it turns green. It will appear green marker with the words _Add Node_ on it. Slide the map until the location of the marker is accurate with the object in the field.

    ![Add marker using plus icon](/images/using-omk/0310_add_node_omk.png)
    <p align="center"><i>Add markers using the plus (+) icon</i></p>

   *   Press **_Add Node_** if the point is accurate

    ![Add node button when adding a point](/images/using-omk/0311_tombol_add_node.png)
    <p align="center"><i>Add note button when add point</i></p>

   *   If the point you add turns out to be in a position that is not in represent with the object in the field, you can move the point that has been added by clicking on the point to move then press the two arrow icon in the top right corner. The color of the point will turn orange and above it will be appear _Place Node_.
     
     ![Swipe points that have been added](/images/using-omk/0312_menggeser_node.png)
    <p align="center"><i>Swipe points that have been added</i></p>

   *   Slide the map to the accurate point position, then press **_Place Node_**.

    ![Place node button when shifting a point](/images/using-omk/0313_place_node.png)
    <p align="center"><i>Place node button when shifting a point</i></p>
    
   *   After the position is accurate as the object in the field, you can fill out the form the same as the previous step.
  
   *   Enter information that matches the conditions in the field. Swipe the screen right or left to change thepage questionon the form.

   *   At the end of the page, select **_Save_** to save the form to _ODK Collect_. If you finished to fill in forms, the marker that you fill in the information will look like this:

    ![the point of objects already loaded with informations](/images/using-omk/0314_finished_tag.png)
    <p align="center"><i>Point of objects already loaded with informations</i></p>

   *   Now you can see the form has been successfully saved on the _ODK Collect_.

### **SUMMARY**

If you can follow and pay attention to all the stages in this chapter, you have successfully understood _OpenMapKit_ as one of the field survey tools for collect infrastructure data. In addition, you have also successfully implemented the initial setup of _OpenMapKit_, how to enter offline _basemap_ for _OpenMapKit_ and how to use _OpenMapKit_ to retrieve infrastructure data.
