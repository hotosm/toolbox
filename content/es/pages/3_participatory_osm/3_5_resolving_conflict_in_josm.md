---
title: 3.5 Resolución de conflictos en JOSM
bookShowToC: True
---

***Nota: Esta es una versión desactualizada del material de capacitación; se harán mejoras en el futuro.***

---

Esta sección proporciona:  

* Una visión general de los conflictos de datos en OpenStreetMap
* Instrucciones paso a paso para resolver conflictos de datos en JOSM
* Orientación sobre la prevención y gestión de conflictos de datos.

*Los siguientes materiales están diseñados para ayudar a los gestores de proyectos y a otros responsables de formación y talleres. Sin embargo, este material también es adecuado para personas interesadas en aprender a validar datos OSM en JOSM.

***

## Visión general
Otros colaboradores pueden haber editado las mismas características que usted en JOSM. Alternativamente, diferentes datos pueden haber sido recogidos en el campo para las mismas características. Ambas situaciones provocan conflictos de datos durante el proceso de carga. Por lo tanto, es fundamental que los digitalizadores conozcan los conflictos de datos en OpenStreetMap, los tipos de conflicto y cómo solucionarlos utilizando JOSM.

## Recursos y materiales de formación
Esta sección presenta una selección de recursos dirigidos a gestores de proyectos, formadores o incluso autodidactas sobre los temas mencionados anteriormente.

![](/images/learning_icon_wide.PNG)
*La siguiente sección está diseñada para servir como material autodidáctico que puede ser utilizado tanto durante los cursos de formación como por los autodidactas.

### Resolución de conflictos de datos en JOSM

**Objetivos**

* Los participantes pueden explicar los conflictos de datos en OpenStreetMap.
* Los participantes pueden describir los diferentes tipos de conflictos en JOSM.
* Los participantes pueden solucionar conflictos de datos utilizando JOSM
* Los participantes aprenderán a evitar los conflictos de datos en JOSM.

**1. Conflictos de datos en OpenStreetMap**.

Al cargar tus ediciones en JOSM (más información en **2.4 Editar con iD y JOSM**), puede que hayas recibido un mensaje como este:

![Ejemplo de ventana de detección de conflictos en JOSM](/images/data-conflict/1001_conflict.png)
<p align="center"><i>Ejemplo de la ventana de detección de conflictos en JOSM</i></p>

Esto indica un conflicto de datos en OSM. Se ha producido un conflicto porque has estado editando los mismos datos/objeto(s) que otro colaborador simultáneamente. Por lo tanto, el otro colaborador ha subido sus cambios primero y han sido recibidos por el Servidor OSM. Estás intentando subir los mismos datos/objetos con tus propios cambios. Por lo tanto, tus cambios son automáticamente rechazados por el servidor porque causan confusión.

Te encontrarás con conflictos de datos en JOSM cuando estés editando, añadiendo o borrando objetos en los que está trabajando otro colaborador. El otro colaborador ha cargado sus cambios un poco antes que usted. Por lo tanto, cuando intentas subir tus cambios, esto causa confusión al Servidor OSM porque no sabe qué cambios son correctos. Si esto ocurre, el conflicto de datos debe ser solucionado antes de que subas tus cambios.

![Ejemplo de conflicto en JOSMEjemplo de conflicto en JOSM](/images/data-conflict/1002_ilustrasi_konflik.png)
<p align="center"><i>Ejemplo de por qué se produce un conflicto en JOSM</i></p>

La imagen anterior ilustra un posible conflicto derivado del diferente posicionamiento del objeto rectangular en **_Mi versión_** y **_Su versión_** (que ya ha sido recibida por el servidor). Para resolver este conflicto, debe elegir entre **Mi versión_** o **Su versión_** (véase la sección **3. Solución de conflictos de datos en JOSM**).

**2. Tipos de conflictos de datos en JOSM**

**2.1 Conflicto de propiedades**

Un conflicto de propiedades se produce cuando un objeto ha sido movido o borrado y uno o más de sus nodos se encuentran en una ubicación diferente a la de la otra versión.

![Ventana de conflicto de propiedades](/images/data-conflict/1003_konflik_properti.png)
<p align="center"><i>Ventana de propiedades en conflicto</i></p>

La imagen anterior ilustra un conflicto de propiedades en JOSM. En **_Mi versión_** el objeto es cuadrado y en **_Su versión_** se ha eliminado un nodo de la esquina. Para solucionarlo, tienes que elegir qué versión es la correcta.

**2.2 Conflicto de etiquetas**

Se produce un conflicto de etiquetas cuando varios colaboradores han asignado etiquetas diferentes al mismo objeto. La etiqueta puede borrarse o cambiarse a la otra versión.

![Conflicto de etiquetas en JOSM](/images/data-conflict/1004_konflik_tag.png)
<p align="center"><i>Conflicto de etiquetas en JOSM</i></p>


La imagen anterior ilustra etiquetas variadas para el mismo objeto entre dos versiones en JOSM. **_Mi versión_** tiene Rumah Sakit _tag_ (_amenidad = hospital_) y un valor de nombre de 'Rumah Sakit Tebet Raya'. Mientras que **_su versión_** tiene etiqueta (_amenidad = clínica_) y un valor de nombre de 'RS Tebet Timur'. Hay que elegir qué versión tiene la información correcta antes de subirla al servidor.

**2.3 Conflicto de nodos**

Un conflicto de nodos se produce cuando hay diferencias en la dirección de un camino o si se han eliminado o movido nodos de un camino.

![Conflicto de nodos en JOSM](/images/data-conflict/1005_konflik_node.png)
<p align="center"><i>Conflicto de Nodos en JOSM</i></p>

**3. Arreglar los datos de conflicto en JOSM**

La fijación de datos de conflicto en JOSM es bastante simple, aunque la mayoría de los colaboradores de OSM lo encuentran confuso. Esencialmente, tienes que decidir cuál es la versión correcta y elegir **mantener tu versión** o borrar tu versión y **utilizar la versión de ellos**. Para arreglar datos conflictivos en JOSM:

* Cuando aparezca la ventana de conflicto, es posible que se incline por seleccionar la opción **Sincronizar sólo nodo 5.960.126**. Sin embargo, esta opción sólo arreglará el conflicto en un nodo. En su lugar, seleccione **Sincronizar todo el conjunto de datos** para poder resolver todos los nodos conflictivos de una sola vez.

![Ventana de detección de conflictos en JOSM](/images/data-conflict/1006_kotak_konflik.png)
<p align="center"><i>Ventana de detección de conflictos en JOSM</i></p>

* JOSM mostrará entonces el número de conflictos, seleccione **_OK_**.

![Número de conflicto detectado](/images/data-conflict/1007_conflict_detected.png)
<p align="center"><i>Número de conflicto detectado</i></p>

* En el menú "Ventanas", seleccione **Conflicto** para mostrar la ventana de conflictos. Esto activa una lista de conflictos en el panel **Conflicto** en la esquina inferior derecha de JOSM. Puede elegir qué conflicto desea solucionar y seleccionar **_Resolver_**.

![Panel de conflictos para solucionar el conflicto detectado](/images/data-conflict/1008_panel_conflict.png)
<p align="center"><i>Panel de conflicto para solucionar el conflicto detectado</i></p>

* Cuando seleccionas el botón **_Resolver_**, aparece la ventana de conflicto y muestra detalles sobre el conflicto. Puede parecer complicado, pero en realidad es bastante sencillo. Puede saber qué tipo de conflicto se ha detectado porque aparecerá un símbolo cuadrado rojo en la pestaña correspondiente (ya sea propiedades, etiquetas o nodos). Puede ver una lista de coordenadas cambiadas o movidas como se muestra en la imagen de abajo. 

![Una ventana para resolver conflictos](/images/data-conflict/1010_penyelesaian_konflik.png)
<p align="center"><i>Una ventana para resolver conflictos</i></p>

* Sólo puedes resolver un conflicto a la vez. Si está seguro de que su versión es la correcta (edita / añade el objeto basándose en la cartografía de su estudio de campo o ya conoce el objeto personalmente), elija **Mi versión (conjunto de datos local)**. Sin embargo, si no está seguro de su versión y cree que la otra versión es más convincente, seleccione **Su versión (conjunto de datos del servidor)**. Selecciona: ![flecha azul](/images/data-conflict/1011_tanda_panah.png) en la versión que creas correcta. Si el conflicto se ha solucionado, el símbolo de la pestaña cambiará a: ![marca verde](/images/data-conflict/1012_ikon_konflik_selesai.png)

![Elija una de las versiones para resolver el conflicto de datos](/images/data-conflict/1013_tahap_penyelesaian.png)
<p align="center"><i>Elija una de las versiones para resolver el conflicto de datos</i></p>

* Después de seleccionar la versión correcta, asegúrese de que el color del cuadro de conflicto ha cambiado de rosa a verde. Esto indica que ha solucionado con éxito el conflicto.

![Diferencia de color entre el conflicto original y el conflicto resuelto](/images/data-conflict/1014_perbedaan_warna.png)
<p align="center"><i>Color de diferencia entre el conflicto original y el conflicto resuelto</i></p>

* Seleccione **_Aplicar Resolución_** como se muestra en la imagen anterior. Cuando hayas resuelto todos los conflictos, puedes subir los cambios de OSM.

![Ventana de conflicto resuelto](/images/data-conflict/1015_apply_resolution.png)
<p align="center"><i>Ventana de conflicto resuelto</i></p>

* También puedes resolver conflictos haciendo clic derecho sobre uno en la ventana de conflicto y seleccionando **_Resolver a mis versiones_** o **_Resolver a sus versiones._** También puedes hacer clic derecho y **_Zoom a Conflicto_**. 

![Ventana de conflicto de lista en JOSM_](/images/data-conflict/1017_zoom_conflict.png)
<p align="center"><i>Ventana de conflicto de lista en JOSM_</i></p>

>Nota :
No puedes subir cambios hasta que hayas resuelto todos los conflictos. Ten cuidado al resolver los conflictos y compruébalos uno a -uno.

**4. Evitar conflictos de datos en JOSM**

Para evitar conflictos:

* Cargue sus cambios continuamente.
   
  Para minimizar los conflictos, debe cargar los datos con frecuencia. Sube tus cambios cada 20 edificios o cada 15 minutos. Cuanto más tiempo esperes para subir los datos, mayor será la posibilidad de que otro colaborador haya editado y subido los mismos datos.

  Puedes actualizar tus datos OSM antes de subirlos. Esto te permite recuperar los últimos datos OSM del servidor antes de subirlos. Selecciona **_Fichero → Actualizar datos_** o **_Actualizar Modificado_** y espera hasta que haya terminado de actualizarse. Entonces podrás subir tus cambios.

  ![Opciones de actualización de datos en el menú archivo](/images/data-conflict/1019_update_data.png)
  <p align="center"><i>Opciones de actualización de datos en el menú archivo</i></p>

* **Editar sólo en el área descargada**

  Restringe la edición a tu área descargada para minimizar el riesgo de conflicto en JOSM. El área fuera de su área descargada está marcada por líneas diagonales, no edite esta región.

  ![Área descargada](/images/data-conflict/1020_perbedaan_area_download.png)
  <p align="center"><i>Área descargada (negro) dan Fuera del área descargada (líneas diagonales)</i></p>

* **Usando _Gestor de Tareas_**

  Si desea realizar un mapeo colaborativo, puede utilizar _Tasking Manager_. Divide el área de un proyecto en una cuadrícula de tareas. Una vez seleccionada una tarea, queda bloqueada y no puede ser elegida por otro colaborador. Esto permite que muchas personas trabajen en la misma área al mismo tiempo, limitando la posibilidad de conflictos.
  
  ![Interfaz del gestor de tareas](/images/data-conflict/1021_tasking_manager.png)
  <p align="center"><i>Interfaz del Gestor de Tareas (tasks.openstreetmap.id)</i></p>

**Resumen**

Si has seguido todos los pasos de este capítulo, tendrás una buena comprensión de los conflictos de datos en JOSM, ¡enhorabuena!