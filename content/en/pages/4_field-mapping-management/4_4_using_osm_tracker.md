---
title: 4.4. Using OSMTracker
bookShowToC: True
---

<br></br>

## Course Objectives

In this section, you should be able to:
* Understand how to setup OSMTracker for your phone
* Understand basic operation of OSMTracker

<br></br>
***
<br></br>

## Learning Activities

OSMTracker is an android application that allows us to record our survey data. Similar to GPS, OSMTracker is able to record waypoints and also track. What makes OSMTracker different with common GPS device is its capability to take pictures when you collect the survey data. With these images taken, it will make your mapping more easier because you can track back what object you have been taken and take a look into your pictures for more detail. Waypoint and track that you have collected can be converted into .gpx file so you can open your survey data using JOSM or you can directly upload your data into OpenStreetMap.

### Downloading and installing

If you want to use OSMTracker you can download the application on your smartphone. Open your Google Playstore and search OSMTracker in search box.

![](/images/4_field_mapping_management/4_using_osmtracker/040401_osmtracker_playstore.png)

After the installation finished, open your OSMTracker application on your smartphone.

![](/images/4_field_mapping_management/4_using_osmtracker/040402_osmtracker_next.png)

### Initial Setup for OSMTracker

Before you can use the OSMTracker, there are few setting you have to do. Go to

![](/images/4_field_mapping_management/4_using_osmtracker/040403_button.png)

button on the top right corner and then select **Settings**.

![](/images/4_field_mapping_management/4_using_osmtracker/040404_osmtracker_setting.png)

On the settings page there are several things you have to look:

![](/images/4_field_mapping_management/4_using_osmtracker/040405_osmtracker_allsetting.png)

1. **GPS logging interval** - This section will set how often your OSMTracker record the track. If you set the number smaller, OSMTracker will record the track more often. The default value for this setting is 0, which means that OSMTracker will always record your track. This will affect your battery life. You can change the number according to your need, for example 2 second.
2. **External storage (SD) directory** - This section determine where you want to save all your survey data on your smartphone. By default, OSMTracker will create a new folder called “osmtracker” on your smartphone’s internal storage. If you don’t want to change this setting, you can ignore this section.
3. **One directory per track** - If you activate this feature, each track you save will create a new folder in your internal storage.
4. **Filename for named track** - This section will set the labelling of you survey data. By default, the labelling consists of track name, survey date, and survey time. You can ignore this setting if you don’t want to change it.
5. **Screen always on** - If you activate this feature, you will let your smartphone always turn on when you use OSMTracker. When you using this setting, it will drain your smartphone’s battery fast. You can change it as you needed.
6. **Background map** - Use this setting to show the background map on your track. Activate this setting so you can see your survey track with map as it’s background.
7. **Map tile provider** - You can change your background map using this feature.

After all the setting is done, then you are ready to use your OSMTracker. Always remember to activate your GPS setting on your smartphone, then you can open your OSMTracker. If you are using OSMTracker for the first time, your home page will be empty. Later, all your survey data will show up on your home page.

### OSMTracker Basic Operations

#### 1. Recording Survey Track

If you want to start your track recording, you can select the button + on your top right of your screen. You will see the Track Logger page.

![](/images/4_field_mapping_management/4_using_osmtracker/040406_track_logger.png)

Remember to always check your GPS accuracy. All feature on OSMTracker will not available if you are not receiving a good GPS signal. Try to get GPS accuracy as best as you can (below 10 meter) to prevent a mistake when recording your current position. You can see your GPS signal indicator on your top right corner of your screen (look at the picture). The signal bar color will change to green and become full when you receive a good signal. Make sure you are in a good position to receive signal. Locate yourself on the open field and make sure you are not under the roof or tree.

![](/images/4_field_mapping_management/4_using_osmtracker/040407_gps_accuracy.png)

When the GPS accuracy is good enough, then you can start to record your track. When you press the + button and the GPS accuracy is good enough, OSMTracker will automatically record your track.

#### 2. Recording Object using Waypoints and Picture

When you open your Track Logger page, there are many buttons to access, but if you want to record waypoints and also picture, you only have to use this 2 button:

![](/images/4_field_mapping_management/4_using_osmtracker/040408_record_object.png)

1. **Text Note** - Use **Text note** to mark your current position as a waypoint. Just press this button and then fill the information. For example, you can label your waypoint with number and then the name of your object.

![](/images/4_field_mapping_management/4_using_osmtracker/040409_text_note.png)

2. **Take Photo** - Use **Take Photo** to take your object photos. You can straight use your smartphone camera or you can select the photo from your gallery.

![](/images/4_field_mapping_management/4_using_osmtracker/040410_take_photo.png)

#### 3. Stop and Continue Track Recording

If you want to stop your recording, you can follow these steps:

1. On the Track Logger page, please go back to your home page, then find one file track you have collected before. Press on that file for a while until additional menu is shows up.

![](/images/4_field_mapping_management/4_using_osmtracker/040411_stop_tracking.png)

2. Choose **Stop tracking**.
3. You can also press

![](/images/4_field_mapping_management/4_using_osmtracker/040412_press_button.png)

button on the top corner on your Track Logger page to stop the recording and save your record.

If you want to continue your track record on your previous file, then you have to :
1. Press on your previous file until additional menu is shows up.
2. Then choose Resume Tracking

![](/images/4_field_mapping_management/4_using_osmtracker/040413_resume_track.png)

| Tips:                                                                                                                                                           |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| If your file has an orange color clock icon, it means that your file still on track recording mode. This icon will disappear after you stop and save your file. |


#### 4. Showing List of Objects Collected

You can see list of objects you have collected. On Track Logger page, press the
![](/images/4_field_mapping_management/4_using_osmtracker/040403_button.png)

button on the top right corner of your screen, then select Waypoints.

![](/images/4_field_mapping_management/4_using_osmtracker/040414_list_waypoints.png)

You will see the list of objects and the photos you have collected on the Waypoint list.

![](/images/4_field_mapping_management/4_using_osmtracker/040415_objects.png)

#### 5. Showing Tracks and Waypoints Collected

You can also see your track and waypoints you have collected. On your Track Logger page, choose menu
![](/images/4_field_mapping_management/4_using_osmtracker/040403_button.png)

on the top right corner of your screen, then choose Display Track.

![](/images/4_field_mapping_management/4_using_osmtracker/040416_display_track.png)

When you choose to display your track, OSMTracker will ask your permission to show the background map. Choose **Display Background Map**.

![](/images/4_field_mapping_management/4_using_osmtracker/040417_background_map.png)

You will see the map with line, star, and people icon on the top of the map. The star icon represent the waypoints, the line represents the track you have collected, and the people icon shows where is your current position on the map.

![](/images/4_field_mapping_management/4_using_osmtracker/040418_track_display.png)

#### 6. Saving the OSMTracker Data

After you collecting the data, you can save your data and use it for your mapping guide. In order to do that, you need to save your survey data as a .gpx data format. After that, you can upload it to OpenStreetMap server or you can move the data to your laptop.

#### 7. Saving Track and Waypoints as .gpx Data

You can save your track and waypoint into .gpx data. You can open .gpx data with mapping software like QGIS and JOSM. On your survey file, select and press the file for a while, then select Export as GPX. If the process is successful, you can see the green dot on the right side of the file name.

![](/images/4_field_mapping_management/4_using_osmtracker/040419_export_gpx.png)

#### 8. Uploading Track to OpenStreetMap Server

You can upload your survey data to OpenStreetMap server. On your survey file, press and hold it for a while, then select **Upload to OpenStreetMap**.

![](/images/4_field_mapping_management/4_using_osmtracker/040420_upload_OSM.png)

On OpenStreetMap Upload page, you need to fill the form like name and file description. You can ignore on Tags section. On the bottom section, you can set the track for :

1. **Private** - Track will not shown up to the public. Trackpoints can be accessed on the time sequence using GPS API without time stamp.
2. **Public** - Track will be shown to the public and available for download to the other user.
3. **Trackable** - Track will be shown to the public, but trackpoints still can be accessed by public GPS API. Other user can download your data but it will not connected with you.
4. **Identifiable** - Track will be shown to the public. Other user can download your data and can refer your OSM username.

For this option, you can choose Trackable or Public so another user can download your data.

![](/images/4_field_mapping_management/4_using_osmtracker/040421_identifiable.png)


#### 9. Copying Track and Waypoint to Laptop/Computer

All the .gpx data stored in your internal storage of your smartphone. You can search the file using your file manager. To copy the data, you can follow the instruction:

1. Connect your smartphone to your laptop using your smartphone cable and then find folder called “osmtracker” in your smartphone.

![](/images/4_field_mapping_management/4_using_osmtracker/040422_osmtracker_folder.png)


2. Inside of your OSMTracker folder, you can find a folder containing a .gpx data and photos. Copy the entire folder into your laptop.

![](/images/4_field_mapping_management/4_using_osmtracker/040423_copy_folder.png)

3. Open your JOSM, and then open your gpx data. Select menu **File → Open** and then open the .gpx data format.

![](/images/4_field_mapping_management/4_using_osmtracker/040424_open_josm.png)

4. When you open your .gpx file, JOSM will automatically shows track and waypoint along with the photo as well.

![](/images/4_field_mapping_management/4_using_osmtracker/040425_show_track.png)

You can use your survey result as a guidance for your mapping using JOSM. The photos taken will help you identify what object you should create in JOSM.

## [Quiz] Check Your Knowledge

1. To start using OSMTracker, you need to enable the GPS first and then open the OSM Tracker. 

    a. True

    b. False

2. Which one of the following option that we need to choose if we want to upload our track to OSM server that will shown to the public and other user can download your track data and refer to your username?

    a. Private

    b. Public

    c. Trackable

    d. Identifiable

3. If you start tracking with OSMTracker and you want to stop it suddenly due to several reasons. The OSMTracker cannot resume your track and you need to press Start tracking again later.

    a. True
    b. False

4. The OSMTracker cannot load pictures in JOSM to help you identify the object.

    a. True

    b. False

**Answer**: 1. B | 2. D | 3. B | 4. B

## Activity Checklist

By the end of this section you should be able to use OSMTracker efficiently, to ensure this, please check if all of the following knowledges applies:
- Able to setup OSMTracker for the first time
- Able to run basic operation in the OSMTracker such as recording a track, record object, stop and continue track, saving track and waypoint, and opening the data in JOSM