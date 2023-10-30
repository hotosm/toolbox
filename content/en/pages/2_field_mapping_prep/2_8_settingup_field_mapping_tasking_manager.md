---
title: 2.8 Setting Up Field Mapping Tasking Manager
bookShowToC: True
---

<br></br>

## Course Objectives

This section will provide you general information about Field Maping Tasking Manager, by the end of this section you should be able to:

- Understand what is Field Mapping Tasking Manager
- Able to setup Field Mapping Tasking Manager project

<br></br>
***
<br></br>

## Learning Activities

<br></br>

### FMTM Overview

Field Mapping Tasking Manager (FMTM) is a platform that helps project managers to organize and manage mapping tasks. It assigns those tasks to volunteers and tracks their progress. The tool includes features for collaborative editing, data validation, and error detection. This ensures that the data collected by volunteers is accurate and reliable.

FMTM works much like a tasking manager (TM), a platform that works to manage and coordinate remote mapping project. FMTM and TM divide area of interest into smaller tasks/grids that can be completed rapidly with many people working at the same time.

![](/images/2_field_mapping_prep/settingup_field_mapping_tasking_manager/020701_tasking_prep.png)

FMTM is designed to be used in conjunction with Open Data Kit (ODK). ODK is a free and open-source set of tools that allows users to create, collect, and manage data with mobile devices. The ODK provides a set of open-source tools that allow users to build forms, collect data in the field, and aggregate data on a central server. It is commonly used for data collection in research, monitoring and evaluation, and other development projects.

Project managers use FMTM to manage tasks and assign them to volunteers. The data collected by the volunteer via ODK is typically uploaded to OpenStreetMap (OSM) where it is used to create more detailed and accurate maps of the affected area. OSM is a free and open-source map of the world that is created and maintained by volunteers.

![](/images/2_field_mapping_prep/settingup_field_mapping_tasking_manager/020702_fmtm.png)

Overall, the FMTM tool is an important component of HOT's efforts to support disaster response and humanitarian efforts around the world. By coordinating mapping activities and ensuring the accuracy and reliability of the data collected by volunteers, FMTM helps to provide critical information that can be used to support decision-making and improve the effectiveness of humanitarian efforts.

**Skills and technology needed**

- Stable Internet connection
- Knowledge of field mapping especially related to building XLSForm for ODK. Please read this [Creating XLSForm for ODK](https://toolbox.hotosm.org/pages/2_field_mapping_prep/2_6_creating_xlsform_for_odk_collect/) to learn more.
- Account on **ODK Central Server**. [Here are the instructions for setting up an ODK Central server on Digital Ocean](https://docs.getodk.org/central-install-digital-ocean/) (it's very similar on AWS or whatever)

| Tips:                                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| FMTM uses ODK Central server as their back-end. It is important for you to build ODK Central first or have access to ODK Central server, especially in the following information:<br/><ul><li>ODK Central URL</li><li>ODK Central Email</li><li>ODK Central Password</li></ul> |

### Creating Field Mapping Project for FMTM

_Note: this guide assumes that you already have access to ODK Central_

1. Go to [fmtm.hotosm.org](https://fmtm.hotosm.org/)
2. Click on **Sign-up** to create a new account with your email address. If you already have an account, click **Sign-in**

![](/images/2_field_mapping_prep/settingup_field_mapping_tasking_manager/020703_tasking_lists.png)

3. Click on **Create New Project**
4. In the **project detail** tab, enter all required information.

   _Note: you can put your own ODK Central, Username, and Password in this section_

![](/images/2_field_mapping_prep/settingup_field_mapping_tasking_manager/020704_project_details.png)

5. Click **Next** after you filled out all the information
6. In the **Upload Area** tab, you will need to upload your area of interest in .geojson format. If you want to create a geojson, you can use https://geojson.io/.

![](/images/2_field_mapping_prep/settingup_field_mapping_tasking_manager/020705_new_project.png)

7. Click **Next** after you uploaded the AoI.
8. In the **Define Tasks**, you will need to choose how FMTM split your AOI (whether Divide on Square, Choose Area as Tasks, or Task Splitting Algorithm). Click **Next** after you are good with the tasks size.

![](/images/2_field_mapping_prep/settingup_field_mapping_tasking_manager/020706_total_tasks.png)

9. In the **Data Extract** tab, you need to select your form category, as well as the Data Extract. FMTM will try to extract OSM data to be used in ODK.
10. If you choose **Data Extract Ways**, you will use the FMTM data extract feature. You need to choose whether you want to extract OSM data as a centroid or as a polygon.

![](/images/2_field_mapping_prep/settingup_field_mapping_tasking_manager/020707_project_grids.png)

11. Click **Next** after you define the data extract type.
12. In the **Select Form** tab, you need to upload your XLSForm. Upload your XLSForm as .xls/ .xlsx/ .xml

![](/images/2_field_mapping_prep/settingup_field_mapping_tasking_manager/020708_submit_project.png)

13. Click **Submit** to start uploading your form and create the project. There will be a notification from FMTM if your project is already finished.

![](/images/2_field_mapping_prep/settingup_field_mapping_tasking_manager/020709_tasking_progress.png)

## [Quiz] Check Your Knowledge

1. HOT developed Tasking Manager to support remote mapping activities, while the Field Mapping Tasking Manager is focused on supporting the field mapping activities. Both platforms work by splitting the AoI into smaller tasks/grids.

   a. True

   b. False

2. To set up a field mapping tasking manager project, you need to provide a geojson AoI file and XLSForm.
   
   a. True
   
   b. False

Answer: 1.A | 2. A

## Activity Checklist

Field Mapping Tasking Manager (FMTM) is a new platform that currently develops by HOT to support field mapping activities. At the end of this section, you should be able to:
- Understand the concept of FMTM
- Learn how to create a project in FMTM

## Additional resources

- [FMTM presentation](https://docs.google.com/presentation/d/1nd5ovXYwvJJv_q_U_EoXwRymAeQjhoM-GNADEM_GpVw/edit#slide=id.g25889d3b852_0_88)
- [Github: FMTM User Manual for Project Manager](https://github.com/hotosm/fmtm/wiki/User-Manual-For-Project-Managers)
