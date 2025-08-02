Maquetación de Página Principal de Tienda Online (Bootstrap 5)
Este proyecto consiste en la maquetación visual de la página principal de una tienda en línea, utilizando HTML5 y la última versión de Bootstrap 5. El objetivo principal fue crear un diseño limpio y responsivo que simule la interfaz de un e-commerce real, enfocándose en la integración de componentes clave de Bootstrap.

Versión
v1.4

Tecnologías utilizadas
HTML5

Bootstrap 5.3.3

CSS3 (custom)

Características del proyecto
Encabezado principal: Con un carrusel de imágenes dinámico.

Navegación: Ícono de carrito de compras con un contador estático.

Distribución de contenido: Uso del sistema de grid de Bootstrap para un diseño de dos columnas (menú de categorías y productos).

Productos: Visualización de una lista de productos utilizando el componente Card de Bootstrap.

Diseño responsivo: La distribución se adapta automáticamente a diferentes tamaños de pantalla (móviles, tabletas y escritorio).

Pie de página: Información del diseñador.

Desafíos y Soluciones
El desarrollo de esta maquetación presentó varios retos técnicos que nos permitieron profundizar en el uso de las herramientas.

Ajuste del Carrusel y las Imágenes Grandes:

Reto: El mayor desafío fue integrar un carrusel con imágenes de alta resolución. Al inicio, las imágenes eran tan grandes que abarcaban mucho espacio verticalmente, desequilibrando el diseño y haciendo que la página se sintiera "pesada".

Solución: Se implementó CSS para controlar el tamaño de las imágenes del carrusel. Utilizamos las propiedades max-height para limitar la altura y object-fit: contain para que las imágenes se redimensionaran y se vieran completas sin ser recortadas, preservando la coherencia visual.

Personalización del Ícono SVG del Carrito:

Reto: El ícono de carrito de compras, que era un SVG, no era de nuestro agrado. Al reemplazarlo, tuvimos que enfrentar el desafío de posicionar el contador del número de productos de forma precisa sobre el nuevo ícono.

Solución: Se utilizó el nuevo código SVG proporcionado y se aplicó CSS personalizado con position: absolute y ajustes finos en las propiedades top y right del contador. Esto permitió que el contador se viera perfectamente alineado sobre el ícono, logrando el efecto visual deseado.

Aprendizajes clave
A través de este proyecto, se logró una comprensión más profunda de la maquetación web y el uso de frameworks CSS. Algunos de los principales aprendizajes fueron:

Dominio del sistema de Grid de Bootstrap para crear diseños responsivos y adaptables a cualquier dispositivo.

Integración y personalización de componentes de Bootstrap como Carousel, Card y List Group.

Uso de CSS para complementar las clases de Bootstrap y realizar ajustes estéticos específicos.

La importancia de una buena organización de archivos (css/, js/, img/) para mantener un proyecto ordenado y escalable.

Habilidades de resolución de problemas al depurar errores de rutas de archivos (path) y de posicionamiento CSS.

Autor
Diseñado por: Engelber Venceslav Cifuentes Morán

Carné Universitario: 1890-22-15397