---
title : 1.3 Selección de hardware
bookShowToC: True
---

***Nota: Esta es una versión desactualizada del material de capacitación; se harán mejoras en el futuro.***

---

En esta sección, los Jefes de Proyecto encontrarán información sobre la selección del hardware adecuado para llevar a cabo un proyecto de cartografía, incluyendo: 

* Determinar qué hardware puede o no ser necesario. 
* Especificaciones y modelos recomendados de dispositivos móviles, tabletas y ordenadores en función de las necesidades del proyecto. 
* Guías sobre el equipo adicional que puede ser necesario, como bancos de energía y discos duros. 


<br>


## Descripción general

El hardware engloba todos los activos físicos relacionados con la tecnología, los ordenadores y los dispositivos electrónicos necesarios para un proyecto. Al diseñar un proyecto de cartografía, los gestores deberán evaluar qué hardware y especificaciones son necesarios para completar el trabajo. Aunque el flujo de trabajo previsto del proyecto influye en la selección del hardware, es importante tener en cuenta que la disponibilidad de tecnología y recursos para la adquisición puede imponer restricciones en la selección del hardware. De este modo, la disponibilidad de hardware también puede influir en el flujo de trabajo, haciendo que la selección de hardware sea una parte importante del proceso de planificación. 
<br> <br>
Preguntas que deben plantearse durante la selección del hardware: 

* ¿Recogerán los cartógrafos datos sobre el terreno? En caso afirmativo, consulte [Recopilación de datos móviles: teléfonos inteligentes y tabletas](https://hotosm.github.io/toolbox/pages/running-a-mapping-project/1.3-hardware/#mobile-data-collection-smartphones-tablets) para determinar qué dispositivos son los mejores para la recopilación de datos sobre el terreno. 
* ¿Los cartógrafos recopilarán datos durante más de: 4 horas al día con OpenMapKit y/o aplicaciones de navegación/seguimiento? ¿6 horas con OpenDataKit o KoboCollect? En caso afirmativo, consulte [Powerbanks y carga](https://hotosm.github.io/toolbox/pages/running-a-mapping-project/1.3-hardware/#power-banks-and-charging).
* ¿Habrá que almacenar o realizar copias de seguridad físicas de los datos? véase [Dispositivos de almacenamiento: POSM y discos duros](https://hotosm.github.io/toolbox/pages/running-a-mapping-project/1.3-hardware/#storage-devices-posm-hard-drives)
* ¿Habrá digitalización y edición de datos? ¿Habrá que hacer mapas y visualizaciones a partir de los datos? Véase [Ordenadores](https://hotosm.github.io/toolbox/pages/running-a-mapping-project/1.3-hardware/#computers) para saber qué especificaciones se necesitan para las distintas actividades. 
* Véase [Drones y vehículos aéreos no tripulados](https://hotosm.github.io/toolbox/pages/running-a-mapping-project/1.3-hardware/#drones-and-uavs) para saber qué máquinas son las más adecuadas en función de las necesidades.  
* Véase [Street view imagery: phones, cameras, and 360 devices](https://hotosm.github.io/toolbox/pages/running-a-mapping-project/1.3-hardware/#street-view-imagery-phones-cameras-and-360-devices).

## Recogida de datos móviles: teléfonos inteligentes y tabletas

**Smartphones frente a tabletas** <br>
A la hora de elegir un tipo de dispositivo para la recopilación móvil de datos, es importante determinar si un smartphone o una tableta son más apropiados para las actividades cartográficas. Cada tipo de dispositivo tiene pros y contras, por lo que es importante entender qué es lo mejor para un proyecto, un mapeador y un entorno en particular. 



**Cuando se planea utilizar OpenDataKit:**

Casi cualquier teléfono inteligente o tableta Android servirá, siempre y cuando tenga una versión de Android relativamente moderna (4.1+).

**Cuando se planea utilizar OpenMapKit:**

Para permitir que OpenMapKit se ejecute con fluidez y sea capaz de manejar mapas de fondo más grandes (en formato 'mbtiles') y datos OSM, por favor asegúrese de que los teléfonos tienen:

* Al menos 1,5, pero preferiblemente 2 GB de RAM
* Preferiblemente 16 GB de almacenamiento
* Una versión moderna de Android (6.0+)

Además, se recomienda lo siguiente

* Una pantalla de 5" para facilitar su uso
* Una batería de tamaño decente. Para un uso prolongado, puede ser necesario tener paquetes de baterías
* Asegúrate de tener suficientes opciones de carga, como cargadores de coche y alargadores.

Se ha comprobado que los siguientes teléfonos/modelos funcionan bien en varios proyectos:

Smartphones:

* Tecno Camon C9 (2 GB RAM)
* Tecno L9 (2 GB RAM, 16 GB de almacenamiento)
* Huawei Y5 (2017) y Huawei Y6 Pro (2 GB RAM, 16 GB almacenamiento)
* Sony Experia L1 (2 GB RAM, 16 GB de almacenamiento)
* Motorola Moto G5 (2 GB RAM, 16 GB de almacenamiento)
* Infinix

Tabletas:

* Samsung Tab A (SM-T285, 7", 2016) (1,5 GB RAM, 8 GB almacenamiento)
* Huawei Mediapad t3 10 AGS-W09

**Proteger los dispositivos móviles** <br>
HOT recomienda la adquisición de fundas para todos los dispositivos móviles de recogida de datos, independientemente de su tipo. Esto ayudará a proteger los dispositivos de las inclemencias del tiempo, las caídas, la exposición al sol y otros peligros. En última instancia, la protección de los dispositivos no sólo reduce los costes asociados a su pérdida o sustitución, sino que también protege la pérdida de los datos almacenados en ellos.

## Bancos de energía y carga

Cuando se utilizan dispositivos móviles para la recogida de datos, es fundamental garantizar que los dispositivos puedan permanecer cargados durante todo el día y ser recargados. HOT recomienda adquirir bancos de alimentación siempre que sea posible para garantizar que los dispositivos estén listos para la cartografía. Cada proyecto (y las aplicaciones utilizadas) tendrá un drenaje diferente en los dispositivos móviles, en general, HOT ha encontrado que la recolección consistente de encuestas con OpenMapKit y la ejecución de una aplicación GPS en segundo plano (es decir, OSMAnd, OSMTracker) agotará la batería de un dispositivo típico en 3-5 horas - lo que requiere la necesidad de bancos de energía para trabajar durante todo el día. A la hora de seleccionar las baterías, se recomienda comprobar su compatibilidad con el dispositivo móvil utilizado. 

Además de mantener los dispositivos cargados durante el día, los jefes de proyecto deben tener en cuenta cómo se cargarán todos los dispositivos (incluidas las baterías) al final de la jornada laboral. ¿Tendrán los cartógrafos acceso a la electricidad por la noche? ¿Dispone su equipo de suficientes enchufes o regletas para cargar eficazmente todos sus dispositivos? ¿Necesitarán los cartógrafos encontrar opciones alternativas para cargar los dispositivos?

## Dispositivos de almacenamiento: Discos duros y copias de seguridad
Cuando se recopilan datos de encuestas sobre el terreno, pueden ocurrir accidentes, como la pérdida, el deterioro o el robo de dispositivos móviles de recopilación de datos u ordenadores portátiles. Por ello, es importante contar con una estrategia de almacenamiento de datos que garantice la existencia de copias de seguridad. Es mucho más fácil recuperar los datos de campo de un día que rehacer por completo todo el trabajo. Varios portátiles con copias de seguridad duplicadas y discos duros son formas eficaces de mantener copias de seguridad, incluso si tu equipo utiliza un servidor en la nube. Los dispositivos de almacenamiento deben tener como mínimo 1 terabyte de almacenamiento. 

## Imágenes de Street view: teléfonos, cámaras y dispositivos 360
Mapillary proporciona una lista actualizada de equipos recomendados para capturar imágenes de Street View [aquí](https://help.mapillary.com/hc/en-us/articles/115001478065-Equipment-for-capturing-and-example-imagery). Además de los dispositivos recomendados, esta lista proporciona recomendaciones de equipos adicionales, incluidos soportes, tarjetas de memoria, carga y fundas. 
<br><br>
Además, HOT ha utilizado los dispositivos móviles proporcionados en la lista OpenMapKit anterior para la captura de imágenes de street view. 

## Ordenadores
La determinación de las especificaciones, la calidad y el tipo de ordenador depende de las necesidades del proyecto o actividad. Como mínimo, los ordenadores utilizados en actividades cartográficas deben tener las siguientes especificaciones:

* Pantalla de 15" o mayor
* Procesador: Core i5, relativamente nuevo
* RAM: preferiblemente al menos 8 GB
* Disco duro: 512 GB o superior
* Sistema operativo: Windows o Linux preferiblemente para la mayoría de las aplicaciones

Se ha comprobado que los siguientes ordenadores funcionan bien en varios proyectos, clasificados según su uso típico:

a) Formación, limpieza de datos y procesamiento básico de SIG/datos

* Lenovo Ideapad 320
* HP 250 G6
* Lenovo ThinkPad X234
* DELL Latitude E6430s
* HP Elitebook 840

b) GIS avanzado y procesamiento de imágenes de drones

* Acer Aspire e5-575
* Lenovo P50

## Drones y vehículos aéreos no tripulados
Cuando no se dispone de imágenes de calidad o se necesitan imágenes actualizadas para un proceso de recopilación de datos, como captar el impacto de una inundación reciente o capturar edificios de nueva construcción, el uso de un dron o de vehículos aéreos no tripulados (UAV) puede satisfacer las necesidades de obtención de imágenes. La selección de un UAV/drone depende de la necesidad del proyecto y de los recursos disponibles. Los drones/UAV se clasifican generalmente en tres tipos en función de su modo de vuelo. En la tabla siguiente se comparan los distintos tipos. *Nota: el coste se basa en la experiencia de HOT y no es necesariamente representativo. 

| Tipo                  | Tiempo de vuelo | Velocidad máxima | Carga útil | Cobertura | Gama de precios | 
|------------------------------------------------|-----|------|-----|-------------|-------------|
| UAV multirrotor        | 25-45 minutos | 45-60 mph | 450g-5.5kg | 2-7 km2 | $3-65k|
| UAV de ala fija            | 45 minutos | 40-110 mph | 1-3 kg | <12 km2 | 25-120k dólares |
| UAV híbrido                 | 60 minutos | 70-120 mph | 1-6 kg | <13 km2 | $30k+|

En resumen, los UAV multirrotor son más adecuados para operaciones a pequeña escala con áreas de cartografía más pequeñas y/o un tiempo de respuesta rápido para el despliegue de vuelos (es decir, para responder a desastres naturales), mientras que los UAV de ala fija son más adecuados para la cartografía aérea de grandes áreas. 

Para los proyectos de HOT, hemos seleccionado y utilizado los siguientes drones: 

* Multirrotor: DJI Phantom 4 Pro
* Ala fija: senseFly eBee

Nota: cualquier persona interesada en volar drones debe conocer las leyes y normativas locales sobre drones/UAV, así como buscar la formación adecuada para su pilotaje. 

## Consideraciones sobre la gestión del hardware

* Crear y hacer que todos los participantes en el mapeo firmen un acuerdo de responsabilidad de los dispositivos 
* Crear un registro de salida del equipo 
