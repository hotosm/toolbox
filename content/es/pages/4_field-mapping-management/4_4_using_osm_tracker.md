---
title: 4.4 Usar OSMTracker
bookShowToC: True
---

***Nota: Esta es una versión desactualizada del material de capacitación; se harán mejoras en el futuro.***

---

Esta sección proporciona **a los topógrafos, cartógrafos y supervisores de campo** las habilidades para:

* Completar la configuración inicial de OSM Tracker
* Utilizar OSM Tracker para registrar tracks, imágenes y notas

<br>

## Descripción general
OSMTracker es una aplicación android que nos permite registrar los datos de nuestros levantamientos. Similar al GPS, OSMTracker es capaz de grabar waypoint y también track. Lo que hace OSMTracker diferente con el dispositivo GPS común es su capacidad para tomar fotos cuando recoja los datos de la encuesta. Con estas imágenes tomadas, que hará que su cartografía más fácil, ya que puede realizar un seguimiento de qué objeto se han tomado y echar un vistazo a sus imágenes para obtener más detalles. Los waypoints y tracks que hayas recogido se pueden convertir en archivos .gpx para que puedas abrir los datos de la encuesta utilizando JOSM o puedes cargar directamente tus datos en OpenStreetMap. 

## Recursos y materiales de formación
Esta sección presenta una selección de recursos dirigidos a gestores de proyectos, formadores o incluso autodidactas sobre los temas descritos anteriormente.

![](/images/learning_icon_wide.PNG)
*La siguiente sección está diseñada para servir de guía autodidacta a los jefes de proyecto, supervisores u otras personas en la configuración de la aplicación.

### Descarga e instalación
Si desea utilizar OSMTracker puede descargar la aplicación en su smartphone. Abra su Google Playstore y busque OSMTracker en el cuadro de búsqueda. 

![Puedes descargar OSMTracker en Google Playstore](/images/using-osmtracker/0401_Aplikasi_OSMTracker_dapat_Anda_download_di_Google_Playstore.png)
<p align="center"><i>Puedes descargar OSMTracker en Google Playstore</i></p>

Una vez finalizada la instalación, abre tu aplicación OSMTracker en tu smartphone. 

![OSMTracker page display](/images/using-osmtracker/0402_Tampilan_awal_aplikasi_OSMTracker.png)
<p align="center"><i>Visualización de la página de OSMTracker</i></p>

<br>

### Configuración inicial de OSMTracker

Antes de que pueda utilizar el OSMTracker, hay pocos ajustes que tiene que hacer. Vaya a

![Configuración](/images/using-osmtracker/0403_Tombol_settings.png) en la esquina superior derecha y luego seleccione **Configuración**.  

![Seleccionar menú Ajustes en OSMTracker](/images/using-osmtracker/0404_Memilih_menu_Settings_di_aplikasi_OSMTracker.png)
<p align="center"><i>Selecciona el menú Configuración en OSMTracker</i></p>

En la página de configuración hay varias cosas que tienes que mirar:

![Varias configuraciones en el menú Ajustes](/images/using-osmtracker/0405_Beberapa_pengaturan_pada_halaman_Settings.png)
<p align="center"><i>Varias configuraciones en el menú Ajustes</i></p>

1. Intervalo de registro GPS

    Esta sección establecerá la frecuencia con la que tu OSMTracker registrará el track. Si establece el número más pequeño, OSMTracker grabará la pista con más frecuencia. El valor por defecto para este ajuste es 0, lo que significa que OSMTracker siempre grabará su track. Esto afectará a la duración de la batería. Puede cambiar el número de acuerdo a su necesidad, por ejemplo 2 segundo.  

2. Directorio de almacenamiento externo (SD)

    Esta sección determina dónde quieres guardar todos los datos de tus encuestas en tu smartphone. Por defecto, OSMTracker creará una nueva carpeta llamada "osmtracker" en el almacenamiento interno de tu smartphone. Si no quieres cambiar esta configuración, puedes ignorar esta sección. 

3. Un directorio por pista

    Si activas esta función, cada pista que guardes creará una nueva carpeta en tu almacenamiento interno. 

4. Nombre de la pista

    En esta sección se establece el etiquetado de los datos de la medición. Por defecto, el etiquetado consiste en el nombre de la pista, la fecha y la hora de la medición. Puede ignorar esta configuración si no desea cambiarla.

5. Pantalla siempre encendida

    Si activas esta opción, dejarás tu smartphone siempre encendido cuando utilices OSMTracker. Si utilizas esta opción, la batería de tu smartphone se agotará rápidamente. Puedes cambiarlo según lo necesites. 

6. Mapa de fondo

    Utiliza este ajuste para mostrar el mapa de fondo en tu track. Active esta opción para poder ver su seguimiento topográfico con un mapa de fondo. 

7. Mapa de fondo

    Puedes cambiar el mapa de fondo utilizando esta opción. 



Después de realizar todos los ajustes, ya estás listo para utilizar tu OSMTracker. Recuerde siempre activar la configuración de GPS en su teléfono inteligente, entonces usted puede abrir su OSMTracker. Si estás usando OSMTracker por primera vez, tu página de inicio estará vacía. Más tarde, todos los datos de tu encuesta aparecerán en tu página de inicio.



### Operaciones básicas de OSMTracker

**1. Grabación del Track de la Encuesta**

 Si quieres iniciar la grabación de tu track, puedes seleccionar el botón **+** en la parte superior derecha de tu pantalla. Verás la página del Registrador de Trazas. 

  ![Utilice el botón para iniciar la grabación](/images/using-osmtracker/0406_Tombol_dengan_icon.png)
  <p align="center"><i>Usa el botón + para empezar a grabar tu track</i></p>

 Recuerda comprobar siempre la precisión de tu GPS. Todas las funciones de OSMTracker no estarán disponibles si no recibes una buena señal GPS. Trate de obtener la mejor precisión GPS que pueda (por debajo de 10 metros) para evitar un error al grabar su posición actual. Puedes ver el indicador de señal GPS en la esquina superior derecha de la pantalla (mira la imagen). El color de la barra de señal cambiará a verde y se llenará cuando reciba una buena señal. Asegúrate de que estás en una buena posición para recibir señal. Sitúese en campo abierto y asegúrese de que no se encuentra bajo un tejado o un árbol. 

  ![Track logger feature](/images/using-osmtracker/0407_Fitur_trck_logger_belum_bisa_diakses_dan_bisa_diakses.png)
  <p align="center"><i>No se puede activar la función de track logger porque la señal GPS no es lo suficientemente buena (izquierda); Track logger se activa si la señal GPS es lo suficientemente buena (derecha)</i></p>

 Cuando la precisión del GPS es lo suficientemente buena, entonces puedes empezar a grabar tu track. Cuando se pulsa el botón + y la precisión del GPS es lo suficientemente bueno, OSMTracker registrará automáticamente su pista. 

**2. Grabando Objeto usando Waypoints e Imagen**

 Cuando abres la página del Track Logger, hay muchos botones a los que acceder, pero si quieres grabar waypoints y también imagen, sólo tienes que usar estos 2 botones:

  ![Track logger page on OSMTracker](/images/using-osmtracker/0408_Halaman_track_logger_pada_OSMTracker.png)
  <p align="center"><i>Página del track logger en OSMTracker</i></p>

   1. Nota de texto

   Utilice **Nota de texto** para marcar su posición actual como un waypoint. Sólo tienes que pulsar este botón y luego rellenar la información. Por ejemplo, puede etiquetar su waypoint con el número y luego el nombre de su objeto. 

![Función de nota de texto para registrar un waypoint en su encuesta](/images/using-osmtracker/0409_Contoh_penggunaan_Text_Note_untuk_merekam_titik_survei.png)
<p align="center"><i>Función de nota de texto para registrar waypoint en su encuesta</i></p>
        

   2. Tomar foto

   Utilice **Tomar foto** para tomar las fotos de sus objetos. Puede utilizar directamente la cámara de su smartphone o seleccionar la foto de su galería. 

![Puede elegir tomar las fotos directamente desde su cámara o seleccionarlas de la galería de su smartphone](/images/using-osmtracker/0410_Anda_dapat_memilih_foto_lansung_atau_galeri.png)
<p align="center"><i>Puedes elegir entre tomar las fotos directamente desde tu cámara o seleccionarlas de la galería de tu smartphone</i></p>


**3. Detener y continuar la grabación de pistas**

Si quieres detener la grabación, puedes seguir estos pasos:

   1. En la página Track Logger, por favor, vuelva a su página de inicio, a continuación, busque una pista de archivo que ha recogido antes. Pulsa sobre ese archivo hasta que aparezca un menú adicional. 

![Opción para detener el seguimiento](/images/using-osmtracker/0411_Pilihan_untuk_menghentikan_perekaman_jalur.png)
<p align="center"><i>Opción para establecer el seguimiento de parada</i></p>

   2. Elija **Detener seguimiento.**
   
   3. También puede pulsar ![Guardar](/images/using-osmtracker/0412_Tombol_save.png) botón en la esquina superior en su página Track Logger para detener la grabación y guardar su registro. 

   Si desea continuar su registro de pista en su archivo anterior, entonces usted tiene que :

   1. Pulse en el archivo anterior hasta que aparezca un menú adicional. 
![Reanudar el seguimiento](/images/using-osmtracker/0413_Pilihan_untuk_melanjutkan_kembali_perekaman_jalur.png )
<p align="center"><i>Selecciona para reanudar el rastreo</i></p>

   1. A continuación, seleccione **Reanudar el seguimiento**


> Nota :
>
> ![Ikon](/images/using-osmtracker/0414_ikon_tanda_jam_oranye.png)
> 
> Si su archivo tiene un icono de reloj de color naranja, significa que su archivo aún está en modo de grabación de pista. Este icono desaparecerá después de detener y guardar el archivo. 
>


**4. Mostrar lista de objetos recogidos**

Puede ver la lista de objetos que ha recogido. En la página del Track Logger, pulsa el botón ![Configuración](/images/using-osmtracker/0403_Tombol_settings.png) en la esquina superior derecha de tu pantalla, luego selecciona **Puntos de ruta**.

 ![Botón para mostrar la lista de waypoints](/images/using-osmtracker/0415_Tombol_untuk_menampilkan_daftar_waypoints_yang_telah_dikumpulkan.png "Tombol untuk menampilkan daftar waypoints yang telah dikumpulkan")
 <p align="center"><i>Botón para mostrar lista de waypoints</i></p>

Verás la lista de objetos y las fotos que has recogido en la lista de Waypoints. 

 ![Lista de waypoints para ver la lista de objetos que has recogido](/images/using-osmtracker/0416_Halaman_waypoint_list_untuk_melihat_daftar_objek_yang_telah_dikumpulkan.png)
 <p align="center"><i>Lista de waypoints para ver la lista de objetos que has recogido</i></p>


**5. Mostrar tracks y waypoints recogidos**

También puedes ver tu track y los waypoints que has recogido. En tu página de Track Logger, elige el menú ![Setting](/images/using-osmtracker/0403_Tombol_settings.png) en la esquina superior derecha de tu pantalla, luego elige **Display Track**.

![Botón Mostrar track para ver tu track y los objetos que has recogido](/images/using-osmtracker/0417_Tombol_untuk_melihat_rute_perjalanan_dan_objek_yang_telah_dikumpulkan.png)
<p align="center"><i>Botón Mostrar track para ver tu track y los objetos que has recogido</i></p>

Cuando elijas mostrar tu track, OSMTracker te pedirá permiso para mostrar el mapa de fondo. Elige **Mostrar mapa de fondo**. 

![Opción para mostrar tu mapa de fondo](/images/using-osmtracker/0418_Pilihan_untuk_menampilkan_latar_belakang_peta.png)
<p align="center"><i>Opción para mostrar tu mapa de fondo</i></p>

Verá el mapa con el icono de línea, estrella y personas en la parte superior del mapa. El icono de la estrella representa los waypoints, la línea representa el track que has recogido, y el icono de la gente muestra dónde está tu posición actual en el mapa. 

![Rastro y objetos recogidos en la inspección de campo](/images/using-osmtracker/0419_Contoh_hasil_rute_perjalanan_dan_titik_survei_yang_sudah_diambil_pada_saat_survei.png)
<p align="center"><i>Rastros y objetos recogidos en la encuesta sobre el terreno</i></p>

**6. Guardar los datos de OSMTracker**

Después de recopilar los datos, puede guardarlos y utilizarlos para su guía de mapeo. Para ello, es necesario guardar los datos de la encuesta como un formato de datos .gpx. Después, puedes subirlos al servidor de OpenStreetMap o puedes mover los datos a tu portátil. 


**7. Guardar el track y los waypoints como datos .gpx**

Puede guardar sus tracks y waypoints en datos .gpx. Puede abrir los datos .gpx con software cartográfico como **QGIS** y **JOSM**. En tu archivo de medición, selecciona y pulsa el archivo durante un rato, después selecciona **Exportar como GPX**. Si el proceso tiene éxito, podrás ver el punto verde a la derecha del nombre del archivo. 

![Menú para guardar los datos de la encuesta en GPX](/images/using-osmtracker/0420_Menu_untuk_menyimpan_data_survei_ke_dalam_file_GPX.png)
<p align="center"><i>Menú para guardar los datos de tu encuesta en GPX</i></p>


**8. Subir el track al servidor de OpenStreetMap**

Puedes subir los datos de tu levantamiento al servidor de OpenStreetMap. En tu archivo de medición, mantén pulsado durante un rato y selecciona **Subir a OpenStreetMap**. 

![Menú para cargar los datos de su encuesta en OpenStreetMap](/images/using-osmtracker/0421_Menu_untuk_mengunggah_hasil_survei_ke_dalam_server_OSM.png)
<p align="center"><i>Menú para subir los datos de tu encuesta a OpenStreetMap</i></p>

En la página de carga de OpenStreetMap, tienes que rellenar el formulario como el nombre y la descripción del archivo. Puedes ignorar la sección Etiquetas. En la sección inferior, puede establecer la pista para :

   1. Privado

   El track no se mostrará al público. Se puede acceder a los trackpoints en la secuencia de tiempo usando GPS API sin marca de tiempo. 

   2. Público

   Track se mostrará al público y estará disponible para descargar para el otro usuario.

   3. Rastreable

   El track se mostrará al público, pero se podrá acceder a los trackpoints mediante la API GPS pública. Otro usuario puede descargar sus datos pero no estará conectado con usted.

   4. Identificable

   El track se mostrará al público. Otro usuario puede descargar tus datos y puede referirse a tu nombre de usuario OSM. 


Para esta opción, puedes elegir Rastreable o Público para que otro usuario pueda descargar tus datos. 

![Los datos de la encuesta están listos para subir al servidor OpenStreetMap](/images/using-osmtracker/0422_Contoh_file_hasil_survei_yang_telah_siap_diungah_ke_dalam_server_OpenStreetMap.png)
<p align="center"><i>Los datos de la encuesta están listos para cargar en el servidor OpenStreetMap</i></p>

**9. Copiar Track y Waypoint al portátil/ordenador**

Todos los datos .gpx almacenados en el almacenamiento interno de tu smartphone. Puedes buscar el archivo usando tu gestor de archivos. Para copiar los datos, puede seguir las siguientes instrucciones:

   1. 1. Conecte su smartphone al ordenador portátil mediante el cable del smartphone y busque la carpeta "osmtracker" en su smartphone. 

![Carpeta OSMTracker en el almacenamiento de su smartphone](/images/using-osmtracker/0423_Folder_OSMTracker_di_media_penyimpanan_smartphone_Anda.png)
<p align="center"><i>Carpeta OSMTracker en el almacenamiento de tu smartphone</i></p>

   2. Dentro de tu carpeta OSMTracker, puedes encontrar una carpeta que contiene datos .gpx y fotos. Copia toda la carpeta en tu portátil. 

![Ejemplo de datos OSMTracker consisten en datos de archivo .gpx y fotos de la encuesta](/images/using-osmtracker/0424_Contoh_data_OSMTracker_yang_berisikan_file_data_gpx_dan_foto_survei.png)
<p align="center"><i>Ejemplo de datos OSMTracker consisten en datos de archivo .gpx y fotos de encuesta</i></p>


   3. Abra su JOSM, y luego abra sus datos gpx. Seleccione el menú **Archivo → Abrir** y luego abra el formato de datos .gpx. 

![Abre tu archivo con datos en formato .GPX en JOSM](/images/using-osmtracker/0425_Silakan_Anda_buka_file_dengan_format_GPX_pada_JOSM.png)
<p align="center"><i>Abre tu archivo con datos en formato .GPX en JOSM</i></p>

   4. Cuando abra su archivo .gpx, JOSM mostrará automáticamente la pista y el waypoint junto con la foto también. 

![Datos de la encuesta de campo al abrirlo en JOSM](/images/using-osmtracker/0426_Contoh_hasil_data_survei_pada_saat_dibuka_menggunakan_JOSM.png)
<p align="center"><i>Coloca los datos de la encuesta cuando la abras en JOSM</i></p>


   Puede utilizar el resultado de su encuesta como guía para su mapeo utilizando JOSM. Las fotos tomadas le ayudarán a identificar qué objeto debe crear en JOSM.