---
title: 6.1 Hot Export Tools
bookShowToC: True
---

<br></br>

## Course Objectives

This section will explain on how to use HOT Export Tool to download OSM data in your preferred area. By the end of this, you will be able to:

* Understand overview of HOT Export Tool
* Understand how to export OSM data using HOT Export Tool

<br></br>
***
<br></br>

## Learning Activities

The [HOT Export Tool](https://export.hotosm.org/en/v3/) is an open service that creates customized extracts of up-to-date OSM data in various file formats, such as ESRI shapefiles (.shapefile), google KML (.kml), GeoPackage (.gpkg) dan MBTiles (.mbtiles). We can select the area and specific categories that we necessary. Download and use the data simply by crediting the © OpenStreetMap contributors. Anyone can create a custom OpenStreetMap export with the Export Tool - just register an account. You can register with an OpenStreetMap account from [OpenStreetMap.org](https://openstreetmap.org/) and a valid email address. Learning resources and walkthroughs can be found at the [HOT Export Tool Learn page](https://export.hotosm.org/en/v3/learn).

### Using the HOT Export Tool

**Tools and Technology Needed**:

* Computer
* Internet Connection
* [OSM Account](https://hotosm.github.io/toolbox/pages/core-technology/2.1.1-opening-osm-accounts/)

To get started, open an internet browser and go to: [https://export.hotosm.org/](https://export.hotosm.org/en/v3/) To use the HOT Export Tool, you will need to log in using your OSM username and password, by clicking the red “Log In” button in the top right-hand corner.

![](/images/6_open_data_usage/02_6.1_HOT_Export_Tools/6.1_image1.gif)

Select ‘Create’ in the top menu.

![](/images/6_open_data_usage/02_6.1_HOT_Export_Tools/6.1_image2.gif)

Select an AOI on the map by searching a place, uploading a .geojson, or drawing an area in the map to the right. To draw an area of interest, zoom in and find a location of your choice (i.e. Zwedru, Accra). Once you have zoomed in to your area of interest, select the box tool from the Tools Menu on the right. Click one corner to start drawing a box, then select the opposite corner to complete the box. This is your AREA OF INTEREST that will be downloaded.

![](/images/6_open_data_usage/02_6.1_HOT_Export_Tools/6.1_image3.gif)

On the left hand side of the window, fill out the “1 Describe” options:

* Name: “[YOUR OSM USERNAME] Test Export”
    * For example, “jessbeutler Test Export”
* Description (optional)
* Project (optional)
    * For example, “Government Inclusion Project”

![](/images/6_open_data_usage/02_6.1_HOT_Export_Tools/6.1_image4.gif)

Select preferred file type in the ‘Formats’ tab. If downloading data to use in a GIS program, try downloading a .shp file.

![](/images/6_open_data_usage/02_6.1_HOT_Export_Tools/6.1_image5.gif)

In the ‘Data’ tab, select the types of OSM data to export. Recommend types to try: ‘Education’, ‘Government’, ‘Healthcare’.

![](/images/6_open_data_usage/02_6.1_HOT_Export_Tools/6.1_image6.gif)

In the ‘Summary’ tab, select ‘Create Export’. While processing, a “Running” status will show. Processing time depends on export size. Once completed, the file will be available for download & sent to your email.

![](/images/6_open_data_usage/02_6.1_HOT_Export_Tools/6.1_image7.gif)

|💡 Did you know? 💡|
|---|
|This process will take several minutes to process depending on how large your downloaded area, type of OSM data you export, and the density of OSM data. City-sized regions should be a few minutes - larger regions can take upwards of 20 minutes|

When the export process is completed, the ‘Status’ bar will be updated to ‘COMPLETED’. Download the file by clicking on the file link, as highlighted below. For shapefiles, open the downloaded .zip folder and save it to a folder of your choice on your computer. You can now use the shapefile in a GIS software such as QGIS.

## [Quiz] Check Your Knowledge

1. Below are the file types that you can download in the HOT Export Tool, except:

    
    a. Shapefile (.shp)
    
    b. Geopackage (.gpkg)
    
    c. Google KML (.kml)
    
    d. MBTiles (.mbtiles)
    
    e. Image (.jpg .png or .JPEG)

Answer: 1.E

## Activity Checklist

By the end of this section, you should be able to:
- Understand what is HOT Export Tool
- Using HOT Export Tool to download OSM data

## Additional resources

**Training presentation**

* [Data Export Tool](https://docs.google.com/presentation/d/1RyHYVPZU5d4xJ1cpWga4QRdfohpEs-t9ylJ_HTJ7wm8/edit#slide=id.g51e1e04424_0_238) 
* [Export Tool Learn Page](https://export.hotosm.org/en/v3/learn)