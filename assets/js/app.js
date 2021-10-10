
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
