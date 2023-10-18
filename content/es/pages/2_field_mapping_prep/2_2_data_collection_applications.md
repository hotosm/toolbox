---
title: 2.2 Aplicaciones de recogida de datos
bookShowToC: True
---

***Nota: Esta es una versión desactualizada del material de capacitación; se harán mejoras en el futuro.***

---

Esta sección proporciona:  

* Una visión general de las opciones de aplicaciones de recopilación de datos
* Orientación sobre la selección de una aplicación de recopilación de datos para las necesidades de su proyecto 
* Breves descripciones de OpenDataKit, OpenMapKit, KoboCollect y OSMTracker

<br>

## Visión general 
Existen varias aplicaciones móviles para ayudar en la recogida de datos sobre el terreno. La elección de una aplicación depende de la capacidad del dispositivo móvil, de los distintos requisitos de configuración y de las necesidades de la encuesta. Las opciones incluyen [OpenDataKit](https://opendatakit.org/), [OpenMapKit](http://openmapkit.org/), [KoboCollect](https://www.kobotoolbox.org), [OSMTracker](https://play.google.com/store/apps/details?id=net.osmtracker&hl=en_US), y [Maps.me](https://maps.me/)<br><br>


![](/images/management_icon_wide.PNG) 
## Elegir una aplicación de recogida de datos

**¿Qué aplicación de recogida de datos debo utilizar?
Utilice la siguiente tabla para decidir qué aplicación es la mejor para su proyecto y sus restricciones de recursos. Estas no son las únicas opciones disponibles, sino aplicaciones que HOT ha utilizado y probado sobre el terreno para proyectos cartográficos.


| Quiero recopilar...                            | ODK | Kobo | OMK | Maps.me | OSM Tracker | Mapillary |
|------------------------------------------------|-----|------|-----|---------|-------------|-----------|
| Datos de encuestas cualitativas                    | ✔   | ✔    | ✔   | ×       | ×           | ×         |
| Datos cuantitativos de la encuesta                 | ✔   | ✔    | ✔   | ×       | ×           | ×         |
| Puntos GPS                                      | ✔   | ✔    | ✔   | ✔       | ✔           | ×         |
| Fotos con Puntos GPS                  | ✔   | ✔    | ×   | ×       | ✔           | ×         |
| Pistas GPX                                     | ×   | ×    | ×   | ×       | ✔           | ✔         |
| Photos en primera persona                          | ×   | ×    | ×   | ×       | ×           | ✔         |
| atos adjuntos a puntos de interés OSM     | ×   | ×    | ✔   | ✔       | ×           | ×         |
| Datos adjuntos a polígonos OSM (por ejemplo, edificios) | ×   | ×    | ✔   | ✔       | ×           | ×         |


### Open Data Kit (ODK) 
ODK es un conjunto de herramientas gratuitas y de código abierto que ayudan a las organizaciones a crear, desplegar y gestionar soluciones móviles de recopilación de datos. ODK Collect forma parte de ODK y es una aplicación para Android que sustituye a los formularios en papel utilizados en la recopilación de datos basada en encuestas. Es compatible con una amplia gama de tipos de preguntas y respuestas, y está diseñada para funcionar bien sin conectividad de red.



**Habilidades y tecnología necesarias**

* Ordenador
* Conexión a Internet
* Dispositivos móviles (véanse las especificaciones en [1.3 Hardware](https://hotosm.github.io/toolbox/pages/running-a-mapping-project/1.3-hardware/).) 
* Formularios ODK
* Software de hoja de cálculo (como Excel o [LibreCalc](https://www.libreoffice.org/discover/calc/))

**Utiliza OpenDataKit (ODK) si:**

  * Tienes acceso a dispositivos móviles pero tienen RAM y almacenamiento limitados.
  * No necesitas recolectar datos para edificios en OSM O puedes transferir manualmente los datos recolectados como puntos a polígonos OSM después de la recolección de datos. 
  * Desea o necesita tener una opción de fácil configuración para la recopilación de datos.

**Recursos**

* OpenDataKit: https://opendatakit.org
* Guía ODK: https://docs.opendatakit.org/collect-intro
* ODK Build: https://build.opendatakit.org
* Creación de formularios ODK: http://xlsform.org/en

**Descarga**

* [Descarga directa a través de Google Play](https://play.google.com/store/apps/details?id=org.odk.collect.android&hl=en_US)
* [Descargar APK para compartir e instalar sin conexión](https://github.com/opendatakit/collect/releases/tag/v1.16.1)


**Configuración y uso**

* Para la configuración, consulte [Sección 3.2.1 Configuración de OpenDataKit](https://hotosm.github.io/toolbox/pages/data-collection-and-field-mapping/3.2.2_setting_up_omk/)
* Para su uso, consulte [Sección 4.1 Uso de OpenDataKit](https://hotosm.github.io/toolbox/pages/field-mapping-management/5.1_using_odk_collect/)

<br>

### OpenMapKit (OMK) 

OMK es una extensión que se lanza directamente desde ODK Collect cuando el tipo de pregunta OSM está habilitado en una encuesta estándar. Es lo que le permite navegar por las características de OSM, y crear y editar etiquetas OSM. 



**Habilidades y Tecnología Necesaria

* Computadora
* Conexión a Internet
* Dispositivos móviles (ver [Hardware](https://hotosm.github.io/toolbox/pages/running-a-mapping-project/1.5-hardware/) para especificaciones). 
* [Formularios OMK](https://github.com/hotosm/toolbox/wiki/4.3-Creating-forms-(ODK-OMK))
* Software de hoja de cálculo (como Excel o [LibreCalc](https://www.libreoffice.org/discover/calc/))
* Ficheros adicionales
  * .mbtiles
  * Capa OSM
  * Archivo de restricciones
* Recomendado: Servidor OMK

**Utiliza OpenMapKit (OMK) si:** 

  * Tienes acceso a dispositivos móviles con suficiente RAM y almacenamiento (ver [1.3 Hardware](https://hotosm.github.io/toolbox/pages/running-a-mapping-project/1.3-hardware/) para especificaciones). 
  * Necesitas recopilar datos para edificios en OSM
  * Tienes la capacidad para una configuración más intensiva antes de la recogida de datos.

**Descarga**

* [Descarga directa a través de Google Play](https://play.google.com/store/apps/details?id=org.redcross.openmapkit&hl=en_US)
* [Descargar APK para compartir e instalar sin conexión](https://github.com/posm/OpenMapKitAndroid/releases)

**Configuración y uso**

* Para la configuración, consulte [Sección 3.2.2 Configuración de OpenMapKit](https://hotosm.github.io/toolbox/pages/data-collection-and-field-mapping/3.2.2_setting_up_omk/)
* Para su uso, consulte [Sección 4.2 Uso de OpenMapKit](https://hotosm.github.io/toolbox/pages/field-mapping-management/5.2_using_openmapkit/)

<br>

### KoBoCollect
Kobo es en casi todos los aspectos similar a ODK Collect, y está construido sobre la plataforma ODK. Kobo también tiene herramientas de análisis pre-construidas y es otra opción popular. 

**Habilidades y tecnología necesarias

* Ordenador
* Conexión a Internet
* Cuenta Kobo
* Dispositivos móviles (véase [1.3 Hardware](https://hotosm.github.io/toolbox/pages/running-a-mapping-project/1.3-hardware/) ver especificaciones)

**Descarga**

* Descarga directa a través de Google Play: https://play.google.com/store/apps/details?id=org.koboc.collect.android&hl=en_US

**Configuración y uso

Visite el sitio web de KoBo Collect: https://www.kobotoolbox.org

<br>

### Mapas.me
Maps.me es una aplicación de navegación que utiliza datos de OpenStreetMap y puede utilizarse sin conexión. Es adecuada para recopilar información de puntos de interés (POI), siempre que éstos se ajusten a los tipos de datos que Maps.me te muestra en el mapa.

**Habilidades y tecnología necesarias

* Conexión a Internet (para descargar la aplicación)
* Dispositivos móviles (consulta las especificaciones en [Hardware](https://hotosm.github.io/toolbox/pages/running-a-mapping-project/1.5-hardware/).) 
* Dispositivo Android o iOS

**Descarga

* [Descarga directa a través de Google Play](https://play.google.com/store/apps/details?id=com.mapswithme.maps.pro&hl=en_US)
* [Descargar APK para compartir e instalar sin conexión](https://maps.me/download/)

**Recursos adicionales

* OSM Wiki: https://wiki.openstreetmap.org/wiki/MAPS.ME

<br>

### OSMTracker
OSM Tracker es "un rastreador GPS sin conexión diseñado para recopilar puntos de interés (POI) que se añadirán al mapa y para grabar tracks GPX." OSM Tracker es gratuito y de código abierto.

**Habilidades y tecnología necesarias

* Conexión a Internet (para descargar la aplicación)
* Dispositivos móviles (ver [Hardware](https://hotosm.github.io/toolbox/pages/running-a-mapping-project/1.5-hardware/) para especificaciones). 

**Descarga

* [Descarga directa a través de Google Play](https://play.google.com/store/apps/details?id=net.osmtracker&hl=en_US)

**Instalación y uso** <br>
Consulta la sección [4.3 Uso de OSM Tracker](https://hotosm.github.io/toolbox/pages/field-mapping-management/4.3_using_osm_tracker/)

**Recursos adicionales

* OSMWiki: https://wiki.openstreetmap.org/wiki/OSMTracker_(Android)
* LearnOSM: https://learnosm.org/en/mobile-mapping/osmtracker/

## Recursos y Materiales de Formación
Esta sección presenta una selección de recursos dirigidos a gestores de proyectos, formadores, o incluso autodidactas sobre el tema(s) descrito(s) anteriormente.

![](/images/watch_icon_wide.PNG)

* [Seminario web de la comunidad HOT: Mejores prácticas y herramientas para la recogida de datos móviles](https://www.youtube.com/watch?v=36PXZPyUoLc)