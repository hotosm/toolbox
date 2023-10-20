---
title: 7.3 Create Web & Interactive Map
bookShowToC: True
---

<br></br>

## Course Objectives

This section will provides you on how to visualize OSM data as a web and interactive map. By the end of this section you should be able to:

* Understand on how to use overpass-turbo to visualize OSM data as an interactive map
* Understand how to use uMap to visualize data spatial
* Undesstand how to link overpass-turbo data to uMap

<br></br>
***
<br></br>

## Learning Activities

Interactive maps are viewed as the modern equivalent of visual communication with maps. This involves the creation and study of the visual representation of data (maps). To communicate information clearly and efficiently, data visualization uses statistical graphics, plots, information graphics and other tools. The use of interactive maps gives users an opportunity to change the display of the map to one’s preferences freely.

This section covers two tools for creating interactive maps using OSM data: **uMap** and **Overpass Turbo**. **uMap** lets you create maps with OSM layers quickly. The platform features sample maps to inspire your use of layers, points of interest, design and licensing. **Overpass Turbo Query** is a web-based data filtering tool for OSM. You can run queries and analyse the resulting OSM data interactively on a map. There is an integrated Wizard that makes creating queries easy.

### Building Map with Overpass-turbo

[Overpass Turbo Query](http://overpass-turbo.eu/) is a web-based data mining tool for OpenStreetMap. It runs any kind of Overpass API query and shows the results on an interactive map.

**Skills and Technology Needed**

* Computer with
* Internet connection
* Recommended: computer mouse

**Skill level required:** Beginner/Intermediate

**How to use Overpass Turbo**

1. In your web browser enter [https://overpass-turbo.eu/](https://overpass-turbo.eu/) to load Overpass Turbo
2. Click Wizard on the Top Bar to create a data query

![](/images/7_data_use_analysis/04_7.3_Create_Web_Interactive_Map/image1.gif)

3. Create a query. For example, type highway=* (This query searches for all highways in the area of interest) in the search box and click ‘Build Query’.

![](/images/7_data_use_analysis/04_7.3_Create_Web_Interactive_Map/image2.gif)

4. In the search box on your right (Map Canvas) type the area of interest (such as Kampala, Uganda) after which, zoom in to the area.

![](/images/7_data_use_analysis/04_7.3_Create_Web_Interactive_Map/image3.gif)

5. On the top bar, click Run to get the data. (After data points load on the map canvas)

![](/images/7_data_use_analysis/04_7.3_Create_Web_Interactive_Map/image4.gif)

6. Click on Export in the top bar. Under the **Map** section download as an interactive map and share the url.

### Building Map using uMap

[uMap](https://toolbox.hotosm.org/pages/data-use-and-analysis/7.3_web_and_interactive_maps/umap.openstreetmap.fr) lets you create a map with OpenStreetMap layers and embed it in your site. All within a few minutes. You can create custom maps (see the examples below). It is powered by open-source, WTFPL-licensed software.

**Skills and Technology Needed**
* Computer with
* Internet connection
* Recommended: computer mouse

**Skill level required:** Beginner/Intermediate

**How to use uMap**
1. In your web browser enter [http://umap.openstreetmap.fr/en/](http://umap.openstreetmap.fr/en/)
2. On your top bar click login/signup and choose the third party (OpenStreetMap - Icon) application to use.
3. Using OpenStreetMap account grant access to Umap and you will be redirected back to the uMap interface.
4. On your top right corner, click create map tab
5. On the top bar, Click Editing, Untitled Map to provide title map, map description and configure interactive and symbology settings of the map.

![](/images/7_data_use_analysis/04_7.3_Create_Web_Interactive_Map/image5.gif)

![](/images/7_data_use_analysis/04_7.3_Create_Web_Interactive_Map/image6.gif)

6. Click SAVE after every action to prevent losing changes made.
7. Click Import Data Icon on the editing tools (right bar) to add data to the map. Navigate to where your data is stored and import it.

![](/images/7_data_use_analysis/04_7.3_Create_Web_Interactive_Map/image7.gif)

8. Click Manage Data Icon on the editing tools (right bar), then click the edit (pencil) button to edit the visual properties of the data such as color and icon style.

![](/images/7_data_use_analysis/04_7.3_Create_Web_Interactive_Map/image8.gif)

9. Click Save on the top bar to have changes made saved.
10. Refresh the page and on the left panel, click the sharing icon to copy the link that can be shared for the interactive map generated or embed the map in a custom website.

![](/images/7_data_use_analysis/04_7.3_Create_Web_Interactive_Map/image9.gif)

### Linking uMap and Overpass-turbo

Linking uMap and Overpass Turbo makes your interactive uMap update as OpenStreetMap data is being updated.

**Skills and Technology Needed**
* Computer with
* Internet connection
* Recommended: computer mouse

**How to link uMap and Overpass Turbo**
1. After creating a query in overpass-turbo.eu, click **Export**, **Query**, and then **compact**.
2. Copy the query link as text and paste into a text editor (e.g. notepad). If you use the “copy link” feature of your browser you may first have to decode the URL by pasting in here and clicking Decode before copying to output to a text editor.
3. Next, we need to take this text and generalise it to work on any map area:
4. Add **http://overpass-api.de/api/interpreter?data=** before the copied text.
5. Replace the hard-coded latitude and longitude coordinates with **({south},{west},{north},{east})**. This will need to be done three times; after node[x], way[x], and relation[x].
6. The final result should look like: 

    **http://overpass-api.de/api/interpreter?data=[out:json][timeout:25];(node[“source”=”HOT-UG”]({south},{west},{north},{east});way[“source”=”HOT-UG”]({south},{west},{north},{east});relation[“source”=”HOT-UG”]({south},{west},{north},{east}););out body;>;out skel qt;**

7. Now navigate to umap.openstreetmap.fr.
8. Click Create a map and pan/zoom in to the area of interest.
9. Click the layers button and then click Edit (the pencil symbol).
10. In the right-hand pane click Remote data and paste the URL we constructed in step 6 into the Url box.

![](/images/7_data_use_analysis/04_7.3_Create_Web_Interactive_Map/image10.gif)

11. Select “osm” from the drop-down Format list.
12. Tick the dynamic checkbox.
13. Optional: If you have a lot of data you may want to limit the display to certain zoom levels (so as to not put too much strain on the Overpass servers). You can do this by entering a min zoom level in the From Zoom box. Here I have entered 13 as my minimal zoom level.
14. Customise using the options on the right. Here I’ve changed the map background to OSM monochrome and changed the colour of the overlay data.
15. Click More on the left-hand side, followed by Embed and share this map.
16. Copy and paste the embeddable iframe (You may need to click Current view instead of default map view in the iframe options box).

## [Quiz] Check Your Knowledge

1. uMap will let you to create your own interactive map using OpenStreetMap data and other geospatial dataset

    a. True

    b. False

2. By linking your uMap with Overpass API, your OpenStreetMap data will keep updated according to the data version in the actual OSM server
    
    a. True
    
    b. False

Answer: 1. A| 2. A

## Activity Checklist
By the end of this section, you should be able to:
- Operate Overpass-turbo to visualize OSM data
- Building interactive map using uMap
- Link uMap project with overpass API to keep OSM data update