/***  Código de validacion provisto por boostrap. */

(function () {
  'use strict'

  var forms = document.querySelectorAll('.needs-validation');
  var contactFormReason = document.querySelector("#contact-form #reason");
  if ( contactFormReason ){
    contactFormReason.setCustomValidity("No olvides el motivo de tu consulta!");
  }  

  /** Validacion para forzar la seleccion de un motivo. 
 * Detectado el error se usa Constraint API para dejar que el flujo continue */
  if (contactFormReason ){
    contactFormReason.onchange = function () {
        if (this.value === "none") {
          this.setCustomValidity("error");
          return;
        } else {
          this.setCustomValidity("");
        }
      }}

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
