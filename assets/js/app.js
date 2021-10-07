// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
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


  window.onscroll =  function() {
    var menu = document.querySelector("body>header div.menu");
    if( window.scrollY > 20) {
      menu.classList.add("scrollView");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
        menu.classList.remove("scrollView");
    }
  };