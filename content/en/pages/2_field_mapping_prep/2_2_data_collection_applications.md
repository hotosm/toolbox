---
title: 2.2 Data Collection Applications
bookShowToC: True
---

<br></br>

## Course Objectives

In this section, you will learn and find information on selecting the appropriate application to support the mapping project. By the end of this, you should be able to:
- Understanding data collection application options
- Able to determine on selecting a data collection application for your project needs
- Understand brief overviews of [ODK Collect](https://opendatakit.org/), [KoboCollect](https://www.kobotoolbox.org/), [OSMTracker](https://play.google.com/store/apps/details?id=net.osmtracker&hl=en_US), and Mapillary


<br></br>
***
<br></br>

## Learning Activities

<br></br>

### Choosing a Data Collection Application

Several mobile applications exist to assist with field data collection. Choosing an application to use depends on mobile device capability, varying set-up requirements, and survey needs. Options include [ODK Collect](https://opendatakit.org/), [KoboCollect](https://www.kobotoolbox.org/), [OSMTracker](https://play.google.com/store/apps/details?id=net.osmtracker&hl=en_US), and Mapillary. If you feels confused about figuring out which data collection application should be used, you can use the following table to decide. These are not the only options available, but instead, applications that **HOT has used and tested** in the field for mapping projects.

| I want to collect…                            |        ODK         |        Kobo        | OSM Tracker | Mapillary |
| --------------------------------------------- | :----------------: | :----------------: | :---------: | :-------: |
| Qualitative Survey Data                       |         ✅         |         ✅         |     🔴      |    🔴     |
| Quantitative Survey Data                      |         ✅         |         ✅         |     🔴      |    🔴     |
| GPS Points                                    |         ✅         |         ✅         |     ✅      |    🔴     |
| Photos attached to GPS Point                  |         ✅         |         ✅         |     ✅      |    🔴     |
| GPX Tracks                                    |         🔴         |         🔴         |     ✅      |    ✅     |
| Streetview Imagery                            |         🔴         |         🔴         |     🔴      |    ✅     |
| Data attached to OSM Point of Interest        | ✅<br/>(with FMTM) | ✅<br/>(with FMTM) |     ✅      |    🔴     |
| Data Attached to OSM Polygon (i.e. buildings) | ✅<br/>(with FMTM) | ✅<br/>(with FMTM) |     ✅      |    🔴     |


#### ODK Collect

ODK is a free open-source set of tools that help organizations author, field, and manage mobile data collection solutions. ODK Collect is an Android app that replaces paper forms used in survey-based data gathering. It supports a wide range of question-and-answer types and is designed to work well without network connectivity. Use ODK Collect if:

- You want or need to have an easy setup for data collection
- You want to replace the paper-based survey form
- You want to collect data in remote locations which have limited connectivity

To download ODK Collect, you can go to [Google Playstore](https://play.google.com/store/apps/details?id=org.odk.collect.android&hl=en_US) or download the latest version release directly from [Github](https://github.com/getodk/collect/releases)

![](/images/2_field_mapping_prep/data_collection_applications/020201_odk.png)

**Setup and use**

- For set-up, see Section[ Overview Data Collection using ODK Collect](https://docs.google.com/document/d/1BcQUE1__qNK6DD0Uq8lcvwDLR3T9HXvljOE1l-LeMlk/edit).
- For use, see Section [Using ODK Collect](https://docs.google.com/document/d/1lVMcZ6wvcht1IYvEY7j6iYOgi7idLzX0ODZjp403qJ8/edit).

#### KoboCollect

KoboCollect is in almost all ways similar to ODK Collect and is built on top of the ODK platform under the name [Kobo Organization](https://www.kobotoolbox.org/). Kobo also has prebuilt analysis tools and is another popular option for humanitarian organizations. It has its own server as well with the name [KoboToolbox Server](https://kf.kobotoolbox.org/accounts/login/) that everyone could use for free. However, you could also register an account using a server hosted by UN OCHA for humanitarian purposes here: [https://kobo.humanitarianresponse.info/](https://kobo.humanitarianresponse.info/).

![](/images/2_field_mapping_prep/data_collection_applications/020202_kobo.png)

#### OSMTrackers

OSMTracker is an Android application that allows us to record our survey data. Similar to GPS, OSMTracker is able to record waypoints and also track. What makes OSMTracker different from common GPS devices is its capability to take pictures when you collect survey data. With these images taken, it will make your mapping easier because you can track back what object you have taken and take a look at your pictures for more detail. Waypoint and track that you have collected can be converted into a .gpx file so you can open your survey data using JOSM or you can directly upload your data into OpenStreetMap.

If you want to use OSMTracker you can download the application on your smartphone. Open your Google Play store and search OSMTracker in the search box. **Please keep in mind that the latest version of OSMTrackers was published on 8 Mar 2021**.

![](/images/2_field_mapping_prep/data_collection_applications/020203_osmtracker.png)

#### Mapillary

Mapillary is the platform that collects street-level imagery data and provides its data accessible to the OSM community. They offer a technology that is able to turn images into connected street-level views and extract map data from them. Mapillary uses technology designed to blur any faces or license plates to help protect privacy. They also have image segmentation and traffic sign recognition. The street-imagery data can be acquired by using the Mapillary mobile app (android and ios) or using an action cam (i.e. GoPro).

![](/images/2_field_mapping_prep/data_collection_applications/020204_mapillary.png)

Mapillary could help you for generating new data or conducting quality assurance for OSM. It's available in both iD and JOSM as additional map data/plugins that needs to be enabled first. One of our use-case for using Mapillary was during the Meta Road Mapping project in Indonesia. We conducted street-imagery data collection to validate the road tagging type in Kalimantan.

Please keep in mind that not every countries or place have street-level imagery data available in Mapillary. You need to check the coverage at [https://www.mapillary.com/app/](https://www.mapillary.com/app/). If you think your project area is not covered by Mapillary, you can consider collecting the data using the app.

## [Quiz] Check Your Knowledge

1. Mapillary can help us to collect street-level imagery data for quality assurance purposes.

    a. True

    b. False

2. We use OSMTracker to collect quantitative and qualitative survey data.

    a. True

    b. False

3. ODK Collect is a free and open-source app to collect qualitative data. Meanwhile, Kobo Collect is paid app to collect quantitative data.

    a. True

    b. False

4. We need to consider the type of data that we want to collect to ensure we choose the right app and right platform to use during our field project.

    a. True

    b. False

**Answer**: 1. A | 2. B | 3. B | 4. A

## Activity Checklist

By the end of this section, you should be able to understand:
- Application/platform to consider using depending on the type of data that you want to collect
- Difference between applications that HOT already uses until now for field projects.

## Additional resources

- OpenDataKit: https://opendatakit.org
- ODK Guide: https://docs.opendatakit.org/collect-intro
- ODK Build: https://build.opendatakit.org
- Building ODK Forms: [http://xlsform.org/en](http://xlsform.org/en)
- OSMTracker LearnOSM: [https://learnosm.org/en/mobile-mapping/osmtracker/](https://learnosm.org/en/mobile-mapping/osmtracker/)
- Intro to Mapillary: [https://help.mapillary.com/hc/en-us/articles/115001881105-Introduction-to-Mapillary](https://help.mapillary.com/hc/en-us/articles/115001881105-Introduction-to-Mapillary)
