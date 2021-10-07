

/***  Código de validacion provisto por boostrap. */

(function () {
  'use strict'

  var forms = document.querySelectorAll('.needs-validation');


  document.querySelector("#contact-form #reason").setCustomValidity("Deberias elegir al menos una opcion");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()


/** 
 * Modifica el estilo del menu cuando el desplazamiento hacia abajo de la
 * la pagina sobrepasa un umbral de pixeles determinados. 
 */

window.onscroll = function () {

  var menuElement = document.querySelector("body>header div.menu");
  var pixelThreshold = 20;

  if (window.scrollY > pixelThreshold) {
    menuElement.classList.add("scrollView");
  } else {
    menuElement.classList.remove("scrollView");
  }
};


/** Validacion para forzar la seleccion de un motivo. 
 * Detectado el error se usa Constraint API para dejar que el flujo continue */

document.querySelector("#contact-form #reason").onchange = function () {
  if (this.value === "none") {
    this.setCustomValidity("error");
    return;
  } else {
    this.setCustomValidity("");
  }
}