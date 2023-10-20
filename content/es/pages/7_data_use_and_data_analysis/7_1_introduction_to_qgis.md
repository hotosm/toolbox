---
title : 7.1 Introducción a QGIS
bookShowToC: True
---

***Nota: Esta es una versión desactualizada del material de capacitación; se harán mejoras en el futuro.***

---

Esta sección cubre las habilidades básicas necesarias para utilizar QGIS. Esto incluye guías paso a paso sobre: 

* Instalación de QGIS
* Navegar por QGIS
* Añadir datos 
* Estilizar capas
* Instalación de plugins, incluyendo QuickOSM y QuickMapServices

<br>

## Visión general
QGIS (o Quantum GIS) es un programa de sistema de información geográfica (SIG) gratuito y de código abierto. Los programas SIG permiten a los usuarios visualizar, gestionar y analizar información geoespacial en el ordenador, y crear productos cartográficos. Los datos geoespaciales que pueden utilizarse en un SIG incluyen imágenes aéreas, datos GPS y conjuntos de datos espaciales.  Después de completar esta sección, un nuevo usuario debe estar preparado para navegar y trabajar con datos en QGIS. 

## Recursos y materiales de formación
Esta sección presenta una selección de recursos dirigidos a gestores de proyectos, formadores o incluso autodidactas sobre los temas descritos anteriormente.

![](/images/training_presentations_wide.PNG)
*La(s) siguiente(s) presentación(es) puede(n) utilizarse para dirigir una formación o un taller.

* [Introducción a QGIS](https://docs.google.com/presentation/d/1EA63n-jEjgEYVGzfdW8dispZpqvkbGDYx7ZtuayxZnQ/edit)

![](/images/learning_icon_wide.PNG)
*La siguiente sección está diseñada para servir como material autodidacta que puede ser utilizado tanto durante formaciones, como por alumnos autodidactas.*

La siguiente guía proporciona instrucciones y capturas de pantalla de QGIS 3.4. Las versiones anteriores o posteriores pueden tener iconos y pasos diferentes.

### Instalación de QGIS

QGIS está disponible para su descarga para los siguientes sistemas operativos:

* Windows
* Mac OS
* Linux

**Habilidades y tecnología necesarias**

* Ordenador con 
  * Sistema operativo Windows, Mac o Linux
  * Suficiente espacio libre en disco (aprox. 10 GB) y derechos de administrador para instalar el software.
* Recomendado: ratón de ordenador


**Para Windows** <br>
Antes de la instalación, debe determinar si su ordenador funciona con un sistema de 32 o 64 bits. <br>

1. Abra el menú Inicio, haga clic con el botón derecho en "Equipo" y seleccione "Propiedades". 
2. En "Sistema", aparecerá el tipo de sistema correcto. 

**Instalación desde archivo compartido** <br>
Si está desconectado, necesitará instalar QGIS desde un archivo compartido. El instalador de QGIS se puede descargar y compartir a través de USB. Este archivo se puede compartir con colegas y otras personas que deseen instalar el programa. 
<br>
Para instalar desde un archivo compartido:

1. Vaya a la carpeta compartida con usted y descargada en su ordenador.
2. Seleccione la carpeta del instalador adecuada en función de su sistema operativo (Windows 32 bits; Windows 64 bits; o Mac). 
3. Abra el instalador para comenzar el proceso de instalación. 



**Instalación desde el sitio web de QGIS** <br>
Si dispone de conexión a Internet, puede descargar directamente desde el sitio web de QGIS. Además, se recomienda encarecidamente descargar el software directamente desde el sitio web de QGIS siempre que sea posible. De este modo se asegura de que dispone de la versión más actualizada del programa. El archivo QGIS ocupa más de 300 MB y puede tardar mucho tiempo en descargarse, dependiendo de su conexión a Internet. 

Para instalarlo

1. Visite [http://www.qgis.org/en/site/forusers/download.html](http://www.qgis.org/en/site/forusers/download.html) 
2. Seleccione su sistema operativo apropiado (es decir, Windows, Mac, Linux). 
3. Para Windows - seleccione su sistema apropiado (32-bit o 64-bit). 
3. Haga clic en el instalador independiente de QGIS para iniciar el proceso de descarga. 
4. Una vez instalado, abra el instalador para comenzar el proceso de instalación. 


![](/images/basic_qgis/qgis_download.gif)


**Consideraciones al instalar QGIS para un gran número de individuos**

* Considere la conectividad a Internet y la capacidad antes de instalar QGIS para un gran número de personas a través de Internet. Es altamente recomendable que antes del entrenamiento/taller, los archivos de instalación sean descargados y cargados en unidades USB para instalación offline. 
* Cuando descargue instaladores offline para un grupo grande, asegúrese de descargar un instalador para todos los sistemas operativos. Nota: será importante descargar el instalador de Windows TANTO para 32 bits como para 64 bits. 
* El proceso de descarga e instalación suele durar más de lo previsto, sobre todo si se tienen en cuenta los conocimientos técnicos y la compatibilidad del hardware. Por lo tanto, se recomienda comenzar el proceso de descarga e instalación al principio de la formación o durante los descansos para garantizar un proceso fluido y el cumplimiento del orden del día. 
* Antes de la formación/taller, pida a los asistentes que se aseguren de que disponen de espacio suficiente en sus ordenadores (más de 10 GB) para la instalación de QGIS. 

<br>

### Navegación por QGIS

Para abrir QGIS, abra la carpeta QGIS en su escritorio. En esta carpeta, busque QGIS Desktop. Haga doble clic para abrir este programa

![](/images/basic_qgis/opening_QGIS.gif)

*¿Tarda mucho? Que no cunda el pánico. QGIS puede tardar unos minutos en cargarse.*


Familiarícese con las distintas partes del navegador QGIS, pase el ratón sobre los iconos para ver los nombres de las distintas herramientas. 
<br> Nota: Su navegador puede tener diferentes herramientas que la imagen de abajo.

1. Panel de capas - Aquí es donde se listan las capas (por ejemplo, imágenes, capas de construcción). El orden de las capas en el panel afecta el orden de las capas en el mapa - en otras palabras, la capa en la parte superior de la lista aparecerá como la capa superior en el mapa. 
1. Barras de herramientas - La mayoría de las herramientas que utilizará regularmente en QGIS aparecerán como iconos en las barras de herramientas de la parte superior, como guardar, zoom, pan. El número de barras de herramientas depende de varias características que haya activado o instalado. 
1. Lienzo del Mapa - Cuando se añaden capas al Panel de Capas, éstas aparecerán en el lienzo del mapa. 
1. Barra de estado - Las coordenadas, la escala y la proyección aparecerán en la Barra de estado. 

![](/images/basic_qgis/qgis_layout.png)

<br>

### Añadir datos 
Pase el ratón por encima de las herramientas hasta que encuentre la herramienta "Añadir capa vectorial". Haga clic en este icono para abrir el cuadro de diálogo Añadir datos vectoriales. 

![](/images/basic_qgis/add_vector_layer.gif)

Haga clic en el botón '...' debajo de Fuente y navegue hasta la ubicación de su ordenador donde tenga una capa vectorial guardada (por ejemplo, .shp, .geojson) Seleccione el archivo y 'ábralo'.

![](/images/basic_qgis/add_vector_layer_select_source.gif)

Para obtener más información sobre la exportación de datos de OSM, consulte las instrucciones en QuickOSM y Herramientas de exportación.  

<br>

### Estilización de capas

Las capas de datos pueden estilizarse de tres maneras: abriendo la pestaña de propiedades, copiando desde otras capas del proyecto e importando un estilo .qml. 
 

<br> **Para seleccionar manualmente un estilo:** 

Haga clic con el botón derecho en la capa de puntos y seleccione 'Propiedades'. *(Alternativa: Doble clic sobre una capa en el Panel de Capas.)*



![](/images/basic_qgis/layer_properties_launch.gif)


Seleccione "Estilo" en el menú de la izquierda. Hay muchos cambios y estilos que se pueden hacer en esta ventana. Para completar un cambio de estilo básico, seleccione 'Relleno Simple' cerca de la parte superior de la ventana. Ahora puede cambiar el Color de Relleno, Estilo de Relleno, Color de Trazo (contorno), Ancho de Trazo (contorno), Estilo de Trazo (contorno) y más a su elección. 


![](/images/basic_qgis/layer_properties_styleselection.gif)


Seleccione 'Ok' para ver sus cambios en el proyecto. 

También puedes seleccionar entre varios estilos preestablecidos en la ventana principal de estilos. 



![](/images/basic_qgis/layer_properties_stylepreset.gif)


<br><br> **Para copiar estilos de otra capa de datos:**

Haga clic con el botón derecho en cualquiera de las otras capas. Seleccione 'Estilo', luego 'Copiar estilo', y 'Todas las categorías de estilo'. 



![](/images/basic_qgis/layer_copystyle.gif)


A continuación, haz clic con el botón derecho del ratón en la capa a la que quieras aplicar el estilo. Seleccione "Estilo", "Pegar estilo" y "Todas las categorías de estilo". Los estilos de capas de puntos sólo pueden copiarse y pegarse a otras capas de puntos, los estilos de capas de polígonos sólo pueden copiarse y pegarse a otras capas de polígonos, etc. 




![](/images/basic_qgis/layer_pastestyle.gif)


<br><br> **Estilizar una capa a partir de un archivo .qml importado**

Un archivo .qml contiene información de estilo, incluidas las etiquetas, exportada desde una capa. Este archivo puede guardarse y compartirse para garantizar el uso coherente de determinados estilos, por ejemplo, si una organización utiliza una combinación de colores y un tipo de letra determinados para todos los mapas. 

Antes de importar un archivo .qml en QGIS, deberá recibir o descargar un archivo .qml. Los archivos .qml y .shp de práctica se pueden encontrar aquí.

1. Haga doble clic en una capa en el Panel de Capas o haga clic con el botón derecho del ratón en la capa de puntos y seleccione "Propiedades". 

2. Seleccione 'Estilo' en el menú de la izquierda.

3. En la esquina inferior izquierda de la ventana Estilo, seleccione el botón 'Estilo'. 2. Haga clic en 'cargar' estilo.

4. Navegue hasta el archivo .qml guardado en su ordenador y selecciónelo. 

5. Haga clic en 'Aceptar'. Su capa asumirá todas las opciones de estilo guardadas en el archivo .qml. 

<br>

## Instalación de Plug-ins

**Herramientas y conocimientos necesarios**



* Conexión a Internet
* QGIS instalado
* Navegación por QGIS
* Para QuickOSM: Etiquetado OSM y Modelos de Datos

**Tiempo estimado:** <5 minutos, dependiendo de la conexión a Internet

Los plugins permiten ampliar la funcionalidad de QGIS. Estos plugins pueden ir desde permitir que los datos se descarguen directamente de OSM a QGIS a herramientas que ayudan con el análisis. 

En este ejercicio instalaremos y utilizaremos dos plugins: **QuickMapServices** & **QuickOSM**

*Nota: La gestión e instalación de plugins requiere una conexión a Internet. Si el Gestor de Plugins no funciona, compruebe su conexión a Internet.*

**Consideraciones para trabajar con grupos grandes y/o en entornos con poca conexión a Internet** <br>
El Gestor de Plugins requiere una conexión a Internet constante para descargar plugins. Se recomienda encarecidamente a los facilitadores de formación y talleres que descarguen previamente las versiones offline para compartirlas. Para obtener instrucciones sobre cómo descargar una versión sin conexión de un plug-in para compartir, consulte la sección 1.8.1 Software y herramientas para compartir.  

Para instalar plugins, haga clic en la opción de menú Plugins ‣ Gestionar e instalar plugins. 

![](/images/basic_qgis/installing_plugins_intro.gif)


**QuickMapServices**

QuickMapServices te permite añadir mapas base online gratuitos a tus mapas QGIS, incluyendo mapas base OSM. 

*Nota: como QuickMapServices proporciona mapas base en línea, el uso de estas capas requiere una conexión a Internet constante.*

En el cuadro de diálogo Administrador de plugins que se abre, busque el plugin QuickMapServices. Para ello, haga clic en la barra de búsqueda y escriba 'QuickMapServices', el plugin aparecerá en la lista. A continuación, haga clic en el botón Instalar plugin.


![](/images/basic_qgis/install_quickmapservices.gif)


Una vez instalado, se puede acceder a QuickMapServices en el menú superior Web ‣ QuickMapServices

En el submenú QuickMapServices, se puede acceder a varios tipos de mapas base incluyendo OSM. 



![](/images/basic_qgis/installing_plugins_quickmapservices_OSMbasemap.gif)


Para las imágenes aéreas, en el submenú QuickMapServices, abre "Configuración". Haz clic en la pestaña "Más servicios". Selecciona "Obtener paquete contribuido". 



![](/images/basic_qgis/installing_plugins_quickmapservices_contributedpack.gif)


Vuelva al submenú QuickMapServices. Ahora habrá una larga lista de opciones para los mapas base, incluido Bing. 


![](/images/basic_qgis/installing_plugins_quickmapservices_bingimagery.gif)


**QuickOSM**

QuickOSM permite seleccionar y descargar datos de OpenStreetMap para utilizarlos en QGIS. QuickOSM funciona extrayendo datos específicos de OSM a partir de etiquetas (pares clave=valor) y un área de interés. 



![](/images/basic_qgis/installing_plugins_quickosm.gif)


Una vez instalado, se puede acceder a QuickOSM en el menú superior Vector ‣ QuickOSM > QuickOSM.

*Nota: Al descargar datos a través de QuickOSM, es mejor tener una capa de mapa base centrada en su área de interés (ver QuickMapServices) y/o al menos una capa shapefile/geojson en el área de interés. Esto guía a QuickOSM en la descarga de datos para el área de interés correcta.*




![](/images/basic_qgis/quickOSM_launch.gif)


Para descargar datos en QuickOSM en QGIS, necesitarás construir consultas para descargar los datos exactos que necesitas. QuickOSM hace que la construcción de consultas sea más fácil, pero todavía tendrá que conocer las etiquetas (es decir, claves y valores) para generar datos. Será más fácil recordar estas etiquetas a medida que adquiera experiencia trabajando con OSM - en JOSM, QGIS y otros programas. 

A continuación se presentan algunos ejemplos de etiquetas comunes utilizadas en las consultas OSM. 


| Key                          | Value |
|------------------------------------------------|-----|
| amenity                             | school   |
|                              | place_of_worship   |
|                              | bar   |
|                             | bank   |
| highway                             | primary   |
|                              | residential   |
|                              | path   |
| office                             | government   |
|                              | ngo   |
| shop                             | clothes   |
|                              | tailor   |


En la ventana emergente QuickOSM, como mínimo, tendrá que rellenar: clave, valor y seleccionar la extensión. Este 

Consejos:

* **Clave:** Para recursos, sobre claves y valores a utilizar, ver OSM Tagging and Data Models. 

* **Valor:** Se pueden encadenar varios valores separándolos con una coma (por ejemplo: amenidad=escuela,hospital). Para descargar todos los valores posibles de una clave (por ejemplo: amenidad=*), deje el campo de valor en blanco. 

* **Extensión:** Al seleccionar la extensión se elige el área en la que QuickOSM buscará y de la que descargará los datos. Hay varias opciones para elegir la extensión:
  * Dentro:
  * Alrededor:
  * Canvas Extent:
  * Layer Extent: 
  * No espacial: 

La extensión del lienzo del mapa es más adecuada cuando no dispone de un shapefile/geojson que cubra su área de interés (es decir, límites administrativos) y/o un área de interés pequeña. Para basar su extensión en una capa, utilice el menú desplegable de la derecha para seleccionar la capa adecuada. 



![](/images/basic_qgis/quickOSM_query.gif)


Una vez introducida la clave y el valor, y seleccionada la extensión, haga clic en "Ejecutar consulta". 

**Si tu consulta no funciona:**



* ¿Ha utilizado mayúsculas en sus claves y valores? Asegúrese de que las claves y los valores están en minúsculas. Por ejemplo: key=amenity value=school NO key=Amenity y value=SCHOOL
* ¿Ha utilizado la ortografía correcta en sus claves y valores? Asegúrese de que las claves y los valores están escritos EXACTAMENTE como aparecen en las guías OSM. De lo contrario QuickOSM buscará la etiqueta equivocada. Por ejemplo: key=amenity NO key=amenities

*Nota: Un área demasiado grande, o demasiados datos para descargar, puede sobrecargar la API o será demasiado para una conexión a Internet lenta. Si tiene dificultades para descargar datos, intente reducir el área o limitar la descarga de datos cambiando sus etiquetas. Por ejemplo, descargar todos los edificios de África, incluso algunas ciudades, es demasiado para QuickOSM. En su lugar, intente descargar un área más pequeña o restrinja a todos building=school.*


## Recursos adicionales

![](/images/reading_icon_wide.PNG)

* Manual de formación de QGIS: https://docs.qgis.org/2.18/en/docs/training_manual/
* Tutoriales de QGIS: https://www.qgistutorials.com/en/docs/learning_resources.html 
* Otras instrucciones de instalación de QGIS: https://docs.qgis.org/testing/en/docs/user_manual/introduction/getting_started.html#installing-qgis