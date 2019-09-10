---
title : Setting up phones and servers
---
## Setting up phones for data collection

Device set-up and testing instructions for OpenDataKit (ODK), OpenMapKit (OMK), and OSMTracker can be found [here]( https://docs.google.com/document/d/1OHcK42F8HuO5F0eJMtI-kyX6VwMCtNQORQi5dc4xGjk/edit?usp=sharing).

### Open Data Kit (ODK)

#### Download application

For information on downloading and installing ODK, go to [Data Collection Applications](https://github.com/hotosm/toolbox/wiki/4.2-Data-collection-applications#open-data-kit-odk).
#### Tool set-up

1. Find the ODK Collect app icon on your mobile device and tap to open the app.
2. After downloading the ODK app, an odk folder will be automatically created in on the internal memory of the device. Connect your device to a laptop to confirm that this folder is created. If you don’t see this folder on your device’s internal storage, Restart the device.
3. Once the device has been restarted, connect it to your laptop, and navigate to internal storage -> odk folder. You will find for sub-folders inside the openmapkit folder. I.e ‘forms’, ‘instances’, ‘layers’ and ‘metadata’ folders.
4. Add your xml forms to the forms folder.
5. In the ODK Collect Main Menu window, select Fill Blank Form. This will display all forms downloaded from the server, which you will be using to field data collection testing.
6. Once you confirm that you have all forms on your device, click on the device back button to exit the ODK Collect App.

### Open Map Kit (OMK)

_Note: You will need ODK to run OMK. We advise installing ODK first to allow for proper set-up and testing._
#### Download application

For information on downloading and installing ODK, go to [Data Collection Applications](https://github.com/hotosm/toolbox/wiki/4.2-Data-collection-applications#open-map-kit-omk).

#### Tool set-up

1. After downloading the OMK app, a openmapkit folder will be automatically created in on the internal memory of the device. Connect your device to a laptop to confirm that this folder is created. If you don’t see this folder on your device’s internal storage, Restart the device.
2. Once the device has been restarted, connect it to your laptop, and navigate to internal storage -> openmapkit folder. You will find for sub-folders inside the openmapkit folder. I.e ‘constraints’, ‘deployments’, ‘mbtiles’ and ‘osm’ folders.
3. If you have a customized constraints file, in the constraints folder, delete the Buildings.json and default.json files. Add your custom the default.json file to the constraints folder.
4. Add your .mbtiles file to the mbtiles folder.
5. Add your .osm file to the osm folder.
6. Now you are set to start working with OMK. Exit the file manager window.
7. Open OMK application. 
8. Tap on the Settings button in the top right corner. Under "basemap", select the appropriate .mbtile. Under "OSM XML Layer" select the .osm layer to use for your mapping. Exit settings. 
9. Tap on the GPS button, your location will be displayed on the screen.
10. To begin mapping, exit OMK and open the ODK application. You will notice that OMK works within the ODK application.

