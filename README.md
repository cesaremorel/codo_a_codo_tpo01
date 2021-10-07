[![Netlify Status](https://api.netlify.com/api/v1/badges/1c92411b-3a20-4dc5-ae9d-4949b5152339/deploy-status)](https://app.netlify.com/sites/priceless-swartz-1c4a46/deploys)

# TPO Front Integrador

 HTML, CSS y Javascript

## ¿Cuándo se entrega?

Fecha límite de entrega: semana del 25/10 al 29/10.

## ¿Qué hay que entregar?

El TPO deberá cumplir con los siguientes requisitos:

**1. Poseer al menos 3 páginas html, siendo su temática libre.** 

Se generaron 6 paginas: `index.html`, `pages/contact.html`, `pages/login.html`, `pages/movies.html`, `pages/player.html` y `pages/thanks.html`.

**2. Utilizar etiquetas semánticas para estructurar el sitio de forma correcta.**

 Se intento en cada pagina seguir reglas de semantica apropiadas.

**3. Contener un formulario de contacto con validación realizada mediante Javascript.**

Se realizo un formulario de contacto en `pages/contact.html` y se le incorporó la validacion JS provista como ejemplo por boostrap. El código de validación esta en `assets/js/ap.js`. Se reutilizo esta logica en el formulario de ingreso `pages/login.html`. 
Tambien se sumo una validacion custom al formulario de contacto para forzar al menos un tipo de consulta.

**4. Utilizar iframes, íconos de FontAwesome, y fuentes locales o bien de Google Fonts.**

Se uso un **iframe** para incoporar el video de youtube en `pages/player.html`, los iconos de FontAwesome para los enlaces a redes sociales y para el logo del sitio. Se usaron las fuentes 'Lora' y 'Montserrat' provistas por Google Fonts.

**5. Tener una página totalmente responsive con 3 puntos de corte para 3 tamaños de dispositivos (PC escritorio, Tablet, Celular).**

El sitio se maqueto con cortes a los 400px, 600px y 800px.

**6. Utilizar al menos una animación, transformación o una transición (indicar dónde fue incorporada la animación).**

Se uso una animacion (`img-filter-on-hover`) pequeña en el hover de las caratulas de las peliculas. La configuracion del _keyframe_ se separó al archivo `assets/css/include/animation.css` y se importó luego dentro de `assets/css/site.css`.

**7. Poseer una estructura HTML maquetada con Flexbox y/o Grid.**

Se uso flexbox para estructurar el sitio. Se separo la estructura definida en el archivo archivo `assets/css/include/estructure.css` y se importó luego dentro de `assets/css/site.css`.

**8. Sólo podrá utilizar Bootstrap en la página del formulario del sitio web.**

Se usaron dos formularios (`pages/login.html` y `pages/contact.html`) y sólo en esas páginas se uso bootstrap.
Para adecuar el estilo de los componentes al sitio se sumaron reglas css al archivo `assets/css/include/boostrap-customs.css` y se importó luego dentro de `assets/css/site.css`.

**9. La página deberá subirse a un servidor on-line para poder ser navegada por el Docente. Ejemplo: Netlify o similar.**

El sitio esta disponible en Netlify (https://priceless-swartz-1c4a46.netlify.app/).

**10. Además de los aspectos técnicos ya mencionados, el proyecto deberá contemplar aspectos de diseño los cuales serán evaluados por el Docente. Para eso se recomienda que vean el material disponible en el Aula Virtual. Seminario de Diseño Web: https://youtu.be/fVkGt2tYIj0. Para más información, ver material incluído en el Aula Virtual Metodologías y herramientas I/Diseño.**

El diseño del sitio se trato de basar en una paleta corta de colores: blanco, naranja y marron.

**11. Nota: el TPO es individual pero en caso querer resolver el proyecto de forma grupal, deberán sincronizar el código del TPO en Github (o similar) enviando el link del repositorio al Docente. Este requisito obligatorio sólo aplica para los proyectos que se desarrollen de a 2 personas (cantidad máxima de integrantes posible). Para más información sobre Git, ver material incluído en el Aula Virtual Metodologías y herramientas I/Git.**

Se trabajó de manera individual.

## Condiciones de aprobación

Para aprobar se requiere resolver el trabajo práctico en un 60% de forma correcta.

## ¿Cómo se entrega?

Cada Docente informará la vía para subir el trabajo. Al momento de la entrega deberán informar: link a la web navegable y comentarios que consideren necesarios agregar a la entrega.

Nota: si ya tenés un proyecto comenzado para este curso, podrás usarlo para esta entrega agregándole lo que falte para cumplir con los requisitos.