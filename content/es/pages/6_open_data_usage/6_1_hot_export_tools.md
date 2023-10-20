---
title : 6.1 Herramienta de exportación HOT
---

***Nota: Esta es una versión desactualizada del material de capacitación; se harán mejoras en el futuro.***

---

Esta sección proporciona:  

* Una visión general de la Herramienta de Exportación HOT
* Instrucciones paso a paso para descargar datos (como shapefiles) de OpenStreetMap utilizando la Herramienta de Exportación.

<br>

## Visión general
La [Herramienta de Exportación HOT](https://export.hotosm.org/en/v3/) permite a los usuarios descargar datos OSM especificando etiquetas, área de interés y tipo de archivo. Se pueden encontrar recursos de aprendizaje y guías en la página [HOT Export Tool Learn page](https://export.hotosm.org/en/v3/learn). 

<br>

## Recursos y materiales de formación
Esta sección presenta una selección de recursos dirigidos a gestores de proyectos, formadores o incluso autodidactas sobre los temas descritos anteriormente.

![](/images/training_presentations_wide.PNG)
*Las siguientes presentaciones pueden utilizarse para impartir formación o talleres.

* [Herramientas de exportación de datos](https://docs.google.com/presentation/d/1RyHYVPZU5d4xJ1cpWga4QRdfohpEs-t9ylJ_HTJ7wm8/edit#slide=id.g51e1e04424_0_238) <br>

![](/images/learning_icon_wide.PNG)
*La siguiente sección está diseñada para servir como material de autoaprendizaje que puede ser utilizado tanto durante formaciones, como por alumnos autoguiados.*

<br>

### Uso de la herramienta de exportación HOT

**Herramientas y tecnología necesarias**

* Ordenador
* Conexión a Internet
* [Cuenta OSM](https://hotosm.github.io/toolbox/pages/core-technology/2.1.1-opening-osm-accounts/)

Para empezar, abra un navegador de Internet y vaya a: [https://export.hotosm.org/](https://export.hotosm.org/en/v3/) Para utilizar la Herramienta de Exportación HOT, tendrás que iniciar sesión con tu nombre de usuario y contraseña OSM, haciendo clic en el botón rojo "Iniciar sesión" en la esquina superior derecha. 

![](/images/data-export/HOTExport1.gif)

Selecciona "Crear" en el menú superior. 

![](/images/data-export/HOTExport2.gif)

Seleccione un AOI en el mapa buscando un lugar, cargando un .geojson o dibujando un área en el mapa de la derecha. 
<br><br>
Para dibujar un área de interés, acerque el zoom y busque un lugar de su elección (por ejemplo, Zwedru, Accra). Una vez que hayas acercado el zoom a tu área de interés, selecciona la herramienta de recuadro en el menú Herramientas de la derecha. Haga clic en una esquina para empezar a dibujar un recuadro y, a continuación, seleccione la esquina opuesta para completar el recuadro. Esta es su ÁREA DE INTERÉS que será descargada. 

![](/images/data-export/HOTExport4.gif)

En la parte izquierda de la ventana, rellene las opciones "1 Describir":

* Nombre: "[TU USUARIO OSM] Exportación de prueba".
    * Por ejemplo, "jessbeutler Test Export".
* Descripción (opcional)
   * Proyecto (opcional)
        * Por ejemplo, "Proyecto de inclusión gubernamental".

![](/images/data-export/HOTExport6.gif)

Seleccione el tipo de archivo preferido en la pestaña "Formatos". *Si está descargando datos para utilizarlos en un programa SIG, intente descargar un archivo .shp.

![](/images/data-export/HOTExport7.gif)

En la pestaña 'Datos', selecciona los tipos de datos OSM a exportar. Se recomiendan los siguientes tipos: 'Educación', 'Gobierno', 'Salud'. 

![](/images/data-export/HOTExport8.gif)

En la pestaña "Resumen", seleccione "Crear exportación". Durante el procesamiento, se mostrará el estado "En ejecución". El tiempo de procesamiento depende del tamaño de la exportación. Una vez completado, el archivo estará disponible para su descarga y se enviará a su correo electrónico.

![](/images/data-export/HOTExport9.gif)

*Este proceso tardará varios minutos.*

Cuando finalice el proceso de exportación, la barra de "Estado" se actualizará a "COMPLETADO". Descargue el archivo haciendo clic en el enlace del archivo, como se indica a continuación. Para los archivos shapefile, abra la carpeta .zip descargada y guárdela en la carpeta que desee de su ordenador. Ahora puede utilizar el shapefile en un software SIG como QGIS.