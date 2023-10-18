---
title : 7.2 Creación de mapas y atlas en QGIS
---

***Nota: Esta es una versión desactualizada del material de capacitación; se harán mejoras en el futuro.***

---


Esta sección cubre las habilidades necesarias para crear mapas y atlas en QGIS: 

* Preparación de datos de mapas
* Creación de un diseño de mapa
* Navegación y creación de atlas
* Creación de plantillas de mapas y atlas

<br>

## Visión general
La creación de un atlas en QGIS permite a los usuarios crear una serie de mapas para regiones geográficas con una plantilla establecida. Esta plantilla de atlas permite generar un gran número de mapas para áreas de interés, como distritos, barrios y otras áreas administrativas, con el mismo estilo y diseño. 

**Ejemplos de proyectos HOT:**

* [Ciudades abiertas en Monrovia, Liberia](https://drive.google.com/file/d/1yQK8wjZK2mMtGVc3G6srNKHlf0SZTyv1/view?usp=sharing)
* [LEGIT en Liberia](https://drive.google.com/file/d/143pmRsdrJoyzlEisY0vTCQqs8qAM03Dy/view)
* [Ramani Huria en Dar es Salaam, Tanzania](http://ramanihuria.org/data/) (Dar es Salaam, Tanzania)

<br>

## Recursos y materiales de formación
Esta sección presenta una selección de recursos dirigidos a gestores de proyectos, formadores o incluso autodidactas sobre el tema o los temas antes mencionados.

![](/images/learning_icon_wide.PNG)
* La siguiente sección está diseñada como material autodidáctico que puede ser utilizado tanto en cursos de formación como por autodidactas.

La siguiente guía proporciona instrucciones y capturas de pantalla de QGIS 3.4. Las versiones anteriores o posteriores pueden tener iconos y pasos diferentes.

**Habilidades y tecnología necesarias**

* Instalación de QGIS
* Navegación por QGIS y adición de datos
* Archivos de datos GIS (i.e. shapefiles, geojson)
    * Ejemplo de shapefiles [zip](https://drive.google.com/open?id=1eEzawHzEueVOBuRNJwpX_YeynTOnrbDs)

Esta actividad cubre el proceso de generación y configuración de un mapa y atlas en formato de impresión. Para esta actividad se proporcionan shapefiles de ejemplo, pero puede seguirse con shapefiles proporcionados por el usuario. 

### 1. Preparar los datos del mapa

Antes de crear un atlas, necesitará añadir y estilizar capas. Al aplicar el estilo a las capas, deberá tener en cuenta el aspecto que tendrán en el compositor de impresión. Dado que los mapas del atlas pueden tener diferentes escalas, puede ser necesario volver a la estilización después de generar el atlas para realizar ajustes. 

Para seguir los pasos de la práctica, añada los siguientes datos vectoriales a su mapa:
* Dar_sub-wards_EPSG_4326
* Dar_wards_EPSG_4326

Cambia el color de fondo del proyecto. Abra el menú "Proyecto" de la barra de herramientas superior y seleccione "Propiedades". En la configuración general, cambiar el color de fondo a azul.

![](/images/advanced_qgis/atlas_tutorial1.gif)

Estilice la capa del pabellón (Dar_wards_EPSG_4326) haciendo clic con el botón derecho del ratón sobre su nombre en el panel de capas y seleccionando "Propiedades". En la ventana emergente, seleccione "Estilo" en el menú lateral. Estilice como se describe a continuación:
* Seleccione 'Relleno simple' en la ventana superior izquierda. 
* Cambie "Tipo de capa de símbolo" a "Contorno: Línea simple
* Cambie el color a morado. 
* Cambie el "Estilo de pluma" a "Línea de puntos". 
* Seleccione 'Aplicar' y luego 'OK'.

Duplique la capa del pabellón (Dar_wards_EPSG_4326) haciendo clic con el botón derecho del ratón sobre el nombre en el Panel de Capas y seleccionando 'Duplicar'. Haga clic con el botón derecho en la capa copiada y seleccione renombrar. Renombre esta capa como 'Ward_grey_background'.

Modifique el estilo de la capa "Ward_grey_background" haciendo clic con el botón derecho del ratón sobre su nombre en el Panel de Capas y seleccionando "Propiedades". En la ventana emergente, seleccione "Estilo" en el menú lateral. Estilice como se describe a continuación:
   
* Seleccione 'Relleno simple' en la ventana superior izquierda. 
* Cambie el "Tipo de capa de símbolo" a "Relleno simple".
* Cambie el color al código html #edeae2 (o seleccione un color gris claro). 
* Cambie el "Estilo de contorno" a "Sin lápiz".
* Selecciona 'Aplicar' y luego 'OK'.

Modifique el estilo de la capa secundaria (Dar_sub-wards_EPSG_4326) haciendo clic con el botón derecho del ratón sobre su nombre en el Panel de Capas y seleccionando "Propiedades". En la ventana emergente, seleccione "Estilo" en el menú lateral. Estilice como se describe a continuación:

* Seleccione 'Relleno simple' en la ventana superior izquierda. 
* Cambie "Tipo de capa de símbolo" a "Contorno: Línea simple
* Cambie el color a amarillo. 
* Cambie el "Estilo de pluma" a "Punto".
* Seleccione 'Aplicar' y luego 'OK'. 

Después de aplicar el estilo a la capa de subcapa (Dar_sub-wards_EPSG_4326), seleccione "Etiquetas" en el menú lateral de "Propiedades".

* En el menú desplegable superior, cambie la opción de "Sin etiquetas" a "Mostrar etiquetas para esta capa".
* En "Etiqueta con", seleccione la opción "Nombre_de_barrio" del menú desplegable. 
* Cambie las opciones de 'Texto' como fuente, tamaño de fuente, color de fuente, etc. 
* Seleccione "Aplicar" y luego "Aceptar".

Después de dar estilo a todas las capas, asegúrese de que las capas están en el siguiente orden en el panel de capas. (Para ajustar el orden de las capas, mantén pulsado el botón izquierdo del ratón sobre una capa y arrástrala hacia arriba o hacia abajo en la lista).

* Dar_wards_EPSG_4326
* Dar_sub-wards_EPSG_4326
* Ward_grey_background
    



### 2. Creación de un diseño de mapa en Diseño de impresión

Abra el menú "Proyecto" de la barra de herramientas principal y seleccione "Nuevo diseño de impresión". En la ventana emergente, cree un título para su mapa. Puede ser un nombre único que describa el propósito de su mapa, como "Dar Sub-Wards". Se creará una nueva ventana con una página en blanco. Esto muestra cómo se verá su mapa impreso. 

![](/images/advanced_qgis/atlas_tutorial2.gif)

Como mínimo, tendrá que añadir los siguientes elementos comunes de un mapa al lienzo del mapa:

* Mapa
* Título
* Leyenda
* Barra de escala 
* Flecha del norte

Cada uno de estos elementos puede añadirse abriendo el menú "Añadir elemento" de la barra de herramientas superior o utilizando los botones de acceso rápido de la barra de herramientas izquierda. 

Añada su mapa seleccionando "Añadir mapa" en el menú "Añadir elemento" (*alt: utilice la herramienta Añadir mapa de la barra de herramientas de la izquierda*). Tendrás que dibujar el recuadro haciendo clic y arrastrando las esquinas. 

![](/images/advanced_qgis/atlas_tutorial3.gif)

Añade un título al mapa seleccionando "Añadir etiqueta" en el menú "Añadir elemento" (*alt: utiliza la herramienta Añadir etiqueta de la barra de herramientas de la izquierda*). Al igual que en el mapa, tendrás que dibujar el recuadro haciendo clic y arrastrando las esquinas. El texto por defecto es "Lorem ipsum". Puede cambiarlo en el panel "Propiedades del elemento". Cambia la fuente y el tamaño del título. 

![](/images/advanced_qgis/atlas_tutorial4.gif)

Añada una leyenda a su mapa seleccionando "Añadir leyenda" en el menú "Añadir elemento". El tamaño de la Leyenda se generará en función de su contenido. Puedes cambiar el tamaño así como añadir o eliminar elementos de leyenda en el panel 'Propiedades del elemento'.

![](/images/advanced_qgis/atlas_tutorial5.gif)

Añada una barra de escala al mapa seleccionando "Añadir barra de escala" en el menú "Añadir elemento". Al igual que en el mapa, tendrás que dibujar la caja haciendo clic y arrastrando las esquinas.

![](/images/advanced_qgis/atlas_tutorial6.gif)

La flecha del norte puede añadirse seleccionando "Añadir imagen". Al igual que en el mapa, tendrá que dibujar la caja haciendo clic y arrastrando las esquinas. En el panel 'Propiedades del elemento', abra la opción 'Buscar directorios' para seleccionar entre una selección de símbolos.

![](/images/advanced_qgis/atlas_tutorial7.gif)

Mueva estos elementos por el lienzo del mapa hasta que esté satisfecho con la disposición del mapa. Piensa en tu público: ¿comprenderá la información que quieres transmitir?

### 3. Guardar mapas

En esta fase, puede decidir si desea guardar el mapa como un mapa único o pasar a generar un atlas. Si desea guardar el mapa actual como un mapa independiente, abra el menú "Diseño" y seleccione una de las opciones "Exportar como..." en función de sus preferencias de archivo. 

![](/images/advanced_qgis/atlas_tutorial8.gif)

### 4. Generación del Atlas

Después de completar el diseño de su mapa, está listo para generar el atlas. Seleccione la casilla del mapa y, en el panel "Propiedades del elemento", marque la casilla "Controlado por Atlas". 

En el panel de la derecha, seleccione la pestaña "Generación de atlas", cerca de las pestañas "Composición" y "Propiedades de los elementos". Si esta pestaña no aparece, seleccione el menú "Atlas" de la barra de herramientas superior y, a continuación, "Configuración de Atlas".

En el panel "Atlas", marque la casilla "Generar un atlas" para empezar a configurar su atlas.  

![](/images/advanced_qgis/atlas_tutorial9.gif)

### 5. Configuración

Las opciones de configuración del panel de generación de atlas controlan cómo se genera el atlas. 

1. La "Capa de cobertura" es la capa que contiene las áreas geográficas de interés para su atlas. Por ejemplo, para un atlas que muestre mapas de cada distrito deberá seleccionar la capa de su distrito. 
2. 'Nombre de página' le permite nombrar las páginas seleccionando un atributo de la capa de cobertura o construyendo una expresión a partir de los valores de la tabla de atributos.
3. Si no desea mostrar todas las áreas incluidas en su capa de cobertura, "Filtrar con" le permite filtrar las áreas geográficas que desea o no incluir en su atlas. Esta opción requiere que se construya una expresión.
4. "Ordenar por" le permite ordenar su atlas por un atributo de su capa de cobertura. 

![](/images/advanced_qgis/atlas_tutorial10.gif)

Práctica


* Seleccione 'Dar_sub-wards_EPSG_4326' como capa de cobertura. 
* Para el nombre de la página, seleccione "Vil_Mtaa_N". (Este campo es el nombre del subdistrito).
* Marque la casilla "Ordenar por" y seleccione "Vil_Mtaa_N". (Este campo es el nombre del subdistrito).

### 6. Barra de herramientas del atlas y navegación

Una vez generado el atlas, podrá previsualizarlo y navegar por él con la barra de herramientas del atlas. Para navegar, seleccione primero el botón 'Vista previa del atlas'. En el modo de vista previa se pueden realizar cambios en el diseño del atlas.


### 7. Creación de expresiones para texto basado en datos 

Las expresiones permiten que el texto, como las etiquetas y los títulos, se base en datos o se genere a partir de atributos. Cuando se trabaja con un atlas, las expresiones toman atributos de la capa de cobertura. 

1. El texto que no se base en datos debe escribirse entre comillas simples. Ejemplo: "Mapa".
2. Los espacios entre palabras deben indicarse con un espacio entre comillas simples. Ejemplo: "Mapa de '
3. Los valores seleccionados y el texto sin formato deben separarse mediante el operador '||'. Este operador puede teclearse o seleccionarse de la lista 'Operadores'. Ejemplo: 'Mapa de' || 
4. El texto basado en datos o generado a partir de atributos puede seleccionarse en la lista "Campos y valores". Ejemplo: 'Mapa de ' || "Ward_Name".
5. En la parte inferior de la ventana del constructor de expresiones se generará una 'Vista previa de la salida'.

![](/images/advanced_qgis/atlas_tutorial11.gif)

Práctica

* Seleccione o cree su cuadro de título y seleccione "Insertar expresión" en el panel 'Propiedades del elemento'. 
* Utiliza la lista de 'Campos y Valores' para generar la siguiente expresión:  

    "Vil_Mtaa_N" || ', ' | "Ward_Name" 

* Compruebe la vista previa de salida para asegurarse de que la expresión se ha escrito correctamente.


### 7. Capa de polígono inverso

Añadiendo una capa de polígono inverso puede enfocar el mapa sombreando o cubriendo completamente las características fuera de su área de interés. 



1. Vuelva a la ventana principal de QGIS. 
2. Seleccione la capa utilizada como capa de cobertura en el Compositor de impresión. Haga clic con el botón derecho del ratón y seleccione 'Duplicar'
3. Haga clic con el botón derecho en la copia de la capa y seleccione renombrar. Cambie el nombre de la capa. 
4. Haga clic con el botón derecho en la capa y abra las propiedades. Seleccione 'Estilo' en el menú lateral. 
5. En el menú desplegable superior, selecciona 'Polígonos invertidos'. 
6. En 'Sub renderizador:', seleccione 'Basado en reglas' en el menú desplegable. 
7. En la ventana de la lista de reglas, haga doble clic en '(sin filtro)' para abrir la ventana 'Editar regla'. 
8. En la ventana "Editar regla", seleccione el botón "..." para crear un filtro. Se abrirá un generador de expresiones. 9. En la ventana de expresión, escriba o construya a partir de la lista Variable: $id=@atlas_featureid
9. En la ventana 'Editar regla', asegúrese de que el tipo de símbolo es Relleno simple.
10. Cambie la transparencia al 50%. 
11. Cambie el color a gris oscuro. 
12. Haga clic en 'Aceptar' para salir de todas las ventanas de opciones. 

![](/images/advanced_qgis/atlast_inverse_poly0.gif)

Práctica



* Complete todos los pasos anteriores. 
* Para el paso 2, esta será la capa "Dar_sub-wards_EPSG_4326".
* Para el paso 3, cambie el nombre del archivo "inverse_sub-wards".


### 8. Añadir mapas generales

Los mapas generales permiten al público comprender la ubicación focal del mapa en el contexto de una zona más amplia. Por ejemplo, un mapa general puede mostrar la ubicación de un distrito dentro de la ciudad. En QGIS, se puede crear un mapa general que mostrará automáticamente la ubicación del mapa para cada página del atlas.



1. En la ventana principal de QGIS, seleccione las capas que le gustaría tener en el mapa general. Por lo general, deben ser capas que puedan verse fácilmente a pequeña escala (es decir, límites, carreteras, vías fluviales). Se pueden seleccionar varias capas a la vez manteniendo pulsada la tecla Ctrl del teclado mientras se selecciona. 
2. Haga clic con el botón derecho en estas capas y seleccione 'Duplicar'. 
3.Seleccione todas las capas copiadas. 4. Haga clic con el botón derecho y seleccione 'Agrupar seleccionados'. Esto permite una mejor gestión de los datos y facilita la activación y desactivación de grupos de capas en función de las necesidades del mapa. 
4. Haga clic con el botón derecho en este grupo y cámbiele el nombre a 'Mapa general'
5. Active todas las capas agrupadas y desactive todas las demás haciendo clic en las casillas de verificación situadas junto a los nombres de las capas. 
6. Vuelva a su Compositor de impresión.
7. Abra el menú "Diseño" de la barra de herramientas superior y seleccione "Añadir mapa". Dibuja un pequeño recuadro para tu mapa general. 
8. Vaya al panel 'Propiedades del elemento' para el segundo mapa y abra las opciones de 'Perspectivas generales'. 
9. Haga clic en el botón verde '+' para añadir una vista general. 
10. Para 'Marco del mapa', seleccione 'Mapa 0' en el menú desplegable. 
11. 'Estilo del marco' le permitirá cambiar el color, el contorno y la transparencia del marco del mapa. 
12. En el panel "Propiedades de los elementos", abra la opción "Capas" y seleccione "Bloquear capas". Esto mantendrá las capas limitadas mientras permite que el mapa principal muestre todas las capas. 
13. Vuelva a la ventana principal de QGIS. Desactive todas las capas generales agrupadas y active las demás capas. 

Práctica



* Siga todos los pasos anteriores. 
* Para el Paso 1, seleccione las capas 'Dar_wards_EPSG_4326 copy', 'Dar_sub-wards_EPSG_ 4326 copy', y 'Ward_grey_background copy'.'


### 9. Revisión del atlas

Una vez finalizada la maquetación y la generación del atlas, es importante revisar cada página del atlas para comprobar que se ha generado correctamente la expresión (es decir, que todas las páginas están correctamente tituladas) y que el aspecto de las capas y etiquetas de cada mapa es el correcto. Si existe una gran diferencia entre las escalas de los mapas de las distintas páginas, puede ser necesario ajustar los estilos, las etiquetas, las cuadrículas y otros factores para que se adapten mejor a todas las escalas de los mapas. 

Práctica



* Utiliza la "barra de herramientas del atlas" para navegar por las páginas del atlas.
* Compruebe cada página: 
    * Visibilidad de las capas del mapa
    * Visibilidad de las etiquetas
    * Texto basado en expresiones (p. ej., título, cuadros de texto adicionales)
    * Tamaño y colocación de la barra de escala


### 10. Expresión del nombre del archivo de salida

Antes de exportar el atlas, es necesario crear una expresión de nombre de archivo de salida. Esta expresión determinará el nombre de cada página de los archivos del atlas exportados. Consulte "Creación de expresiones" para obtener instrucciones sobre cómo crear expresiones. 

La expresión por defecto es 'output_'||@atlas_featurenumber que producirá un nombre de fichero como "Output 3". Esto puede cambiarse para crear un nombre de archivo más preciso para sus mapas. 

Práctica

* Seleccione el botón de creación de expresiones 
* Construya la expresión: "Distrito_N" || '_' || "Ward_Name" || '_' || "Vil_Mtaa_N"
* Compruebe la vista previa de la salida en la parte inferior del generador de expresiones para asegurarse de que la expresión se ha construido correctamente.


### 11. Exportar el atlas

Para exportar el atlas, seleccione el botón 'Exportar Atlas' en la barra de herramientas Atlas. Seleccione el tipo de archivo apropiado (Exportar como imágenes, Exportar como SVG o Exportar como PDF) y seleccione la carpeta a la que se exportarán los archivos. 


### 12. Plantillas Atlas

Las plantillas Atlas pueden guardarse y añadirse a otros proyectos QGIS. Para guardar una plantilla, abra el menú 'Proyecto' de la barra de herramientas superior y seleccione 'Guardar como Plantilla'. Esto se guardará como un archivo de Plantilla de Compositor (*.qpt *.QPT).

Para añadir la plantilla a otro proyecto, abra un nuevo compositor de impresión. Abra el menú "Proyecto" de la barra de herramientas superior y seleccione "Añadir elementos desde plantilla". Nota: los elementos se ajustarán al tamaño de página del documento original. Puede que sea necesario ajustar el tamaño de los elementos si el nuevo proyecto utiliza un tamaño de página diferente.