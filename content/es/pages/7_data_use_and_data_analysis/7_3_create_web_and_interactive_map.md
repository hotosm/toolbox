---
title : 7.3 Web y mapas interactivos
bookShowToC: True
---

***Nota: Esta es una versión desactualizada del material de capacitación; se harán mejoras en el futuro.***

---

Esta sección proporciona:

* Una visión general de las herramientas de mapas interactivos en línea para visualizar datos.
* Instrucciones paso a paso para crear mapas interactivos con dos herramientas: uMap y Overpass Turbo

<br>

## Descripción general
**Los mapas interactivos** se consideran el equivalente moderno de la comunicación visual con mapas. Se trata de la creación y el estudio de la representación visual de datos (mapas). Para comunicar información de forma clara y eficaz, la visualización de datos utiliza gráficos estadísticos, diagramas, gráficos informativos y otras herramientas. El uso de mapas interactivos ofrece a los usuarios la oportunidad de cambiar libremente la visualización del mapa según sus preferencias. 

## Recursos y materiales de formación
En esta sección se presenta una selección de recursos dirigidos a gestores de proyectos, formadores o incluso autodidactas sobre el tema o los temas expuestos anteriormente.

![](/images/learning_icon_wide.PNG)
* La siguiente sección está diseñada como material de autoaprendizaje que puede ser utilizado tanto en cursos de formación como por estudiantes autodidactas.

Esta sección cubre dos herramientas para crear mapas interactivos usando datos OSM: **uMap** y **Overpass Turbo**. **uMap** te permite crear mapas con capas OSM rápidamente. La plataforma presenta mapas de muestra para inspirar tu uso de capas, puntos de interés, diseño y licencias. **Overpass Turbo Query** es una herramienta web de filtrado de datos para OSM. Puede ejecutar consultas y analizar los datos OSM resultantes de forma interactiva en un mapa. Hay un Asistente integrado que facilita la creación de consultas.

### Overpass Turbo
[Overpass Turbo Query](http://overpass-turbo.eu) es una herramienta web de minería de datos para OpenStreetMap. Ejecuta cualquier tipo de consulta de la API de Overpass y muestra los resultados en un mapa interactivo.

**Habilidades y tecnología necesarias**

* Ordenador con 
* Conexión a Internet
* Recomendado: ratón de ordenador

**Nivel de conocimientos necesarios** <br>
Principiante/Intermedio

**Cómo utilizar Overpass Turbo**

1. En su navegador web introduzca https://overpass-turbo.eu/ para cargar Overpass Turbo
2. Haga clic en Asistente en la barra superior para crear una consulta de datos

![](/images/interactivemaps/overpass1.gif)

3. Cree una consulta. Por ejemplo, escriba autopista=* (Esta consulta busca todas las autopistas de la zona de interés) en el cuadro de búsqueda y haga clic en "Crear consulta".


![](/images/interactivemaps/overpass2.gif)

4. En el cuadro de búsqueda de la derecha (Lienzo del mapa), escriba la zona de interés (por ejemplo, Kampala, Uganda) y, a continuación, amplíe la zona.


![](/images/interactivemaps/overpass3.gif)

5. En la barra superior, haz clic en Ejecutar para obtener los datos. (Después de que los puntos de datos se carguen en el lienzo del mapa)


![](/images/interactivemaps/overpass4.gif)

6. Haga clic en Exportar en la barra superior. En la sección Mapa, descárguelo como mapa interactivo y compártalo. 

![](/images/interactivemaps/overpass5.gif)

<br>

### uMap
[uMap](umap.openstreetmap.fr) te permite crear un mapa con capas de OpenStreetMap e incrustarlo en tu web. Todo en unos minutos. Puedes crear mapas personalizados (ver los ejemplos más abajo). Funciona con software de código abierto con licencia WTFPL. 

**Habilidades y tecnología necesarias

* Ordenador con 
* Conexión a Internet
* Recomendado: ratón de ordenador

**Nivel requerido** <br>
Principiante/Intermedio

**Cómo utilizar uMap**

1. En su navegador web introduzca http://umap.openstreetmap.fr/en/ 
2. En la barra superior haz clic en login/signup y elige la aplicación de terceros (OpenStreetMap - Icon) que quieras utilizar. 
3. Utilizando la cuenta OpenStreetMap conceder acceso a Umap y se le redirigirá de nuevo a la interfaz uMap.
4. En la esquina superior derecha, haz clic en la pestaña crear mapa

![](/images/interactivemaps/umap1.gif)

5. En la barra superior, haz clic en Editar, Mapa sin título para proporcionar el título del mapa, la descripción del mapa y configurar los ajustes interactivos y de simbología del mapa.

![](/images/interactivemaps/umap2.gif)

![](/images/interactivemaps/umap3.gif)

6. Haga clic en GUARDAR después de cada acción para evitar perder los cambios realizados.
7. Haga clic en el icono Importar datos en las herramientas de edición (barra derecha) para añadir datos al mapa. Navegue hasta donde están almacenados sus datos e impórtelos.

![](/images/interactivemaps/umap4.gif)

8. Haga clic en el icono Gestionar datos en las herramientas de edición (barra derecha) y, a continuación, haga clic en el botón de edición (lápiz) para editar las propiedades visuales de los datos, como el color y el estilo del icono.

![](/images/interactivemaps/umap5.gif)

9. Haga clic en Guardar en la barra superior para que se guarden los cambios realizados.
10. Actualice la página y en el panel izquierdo, haga clic en el icono de compartir para copiar el enlace que se puede compartir para el mapa interactivo generado o incrustar el mapa en un sitio web personalizado.

![](/images/interactivemaps/umap6.gif)

### Enlazar uMap y Overpass Turbo
Enlazar uMap y Overpass Turbo hace que tu uMap interactivo se actualice a medida que se actualizan los datos de OpenStreetMap.

**Habilidades y tecnología necesarias

* Ordenador con 
* Conexión a Internet
* Recomendado: ratón de ordenador

**Cómo vincular uMap y Overpass Turbo**.

1. Después de crear una consulta en overpass-turbo.eu, haga clic en Exportar, Consulta y, a continuación, en compactar.

![](/images/interactivemaps/linkmaps1.gif)

2. Copie el enlace de la consulta como texto y péguelo en un editor de texto (por ejemplo, el bloc de notas). Si utiliza la función "copiar enlace" de su navegador, es posible que primero tenga que descodificar la URL pegándola aquí y haciendo clic en Descodificar antes de copiarla para enviarla a un editor de texto.


![](/images/interactivemaps/linkmaps2.gif)

3. A continuación, tenemos que tomar este texto y generalizarlo para que funcione en cualquier área del mapa:
4. Añade `http://overpass-api.de/api/interpreter?data=` antes del texto copiado.
5. Sustituya las coordenadas de latitud y longitud por `({sur},{oeste},{norte},{este})`. Esto deberá hacerse tres veces: después de nodo[*x*], camino[*x*] y relación[*x*].
6. El resultado final debería ser como: `http://overpass-api.de/api/interpreter?data=[out:json][timeout:25];(node["source"="HOT-UG"]({south},{west},{north},{east});way["source"="HOT-UG"]({south},{west},{north},{east});relation["source"="HOT-UG"]({south},{west},{north},{east}););out body;>;out skel qt;`
7. Ahora navega a umap.openstreetmap.fr.
8. Haga clic en Crear un mapa y desplácese hasta la zona de interés.
9. Haz clic en el botón de capas y luego en Editar (el símbolo del lápiz).
10. En el panel derecho, haz clic en Datos remotos y pega la URL que construimos en el paso 6 en la casilla Url.

![](/images/interactivemaps/linkmaps3.gif)

11. Selecciona "osm" en la lista desplegable Formato.
12. Marque la casilla de verificación dinámico.
13. Opcional: Si tiene muchos datos, puede limitar la visualización a ciertos niveles de zoom (para no sobrecargar demasiado los servidores de Overpass). Puede hacerlo introduciendo un nivel de zoom mínimo en la casilla Desde Zoom. Aquí he introducido 13 como mi nivel mínimo de zoom.
14. Personaliza utilizando las opciones de la derecha. Aquí he cambiado el fondo del mapa a OSM monocromo y he cambiado el color de los datos superpuestos.
15. Haz clic en Más en la parte izquierda, seguido de Incrustar y compartir este mapa.
16. Copia y pega el iframe incrustable (Puede que tengas que hacer clic en Vista actual en lugar de Vista de mapa predeterminada en el cuadro de opciones de iframe.)