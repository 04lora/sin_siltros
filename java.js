function cambiarIntegrante(evt, nombreId) {
  // 1. Ocultar todos los contenidos
  var contenidos = document.querySelectorAll('.tab-content');
  for (var i = 0; i < contenidos.length; i++) {
    contenidos[i].classList.remove('active');
  }

  // 2. Quitar el estado activo a todos los botones
  var botones = document.querySelectorAll('.tab-btn');
  for (var j = 0; j < botones.length; j++) {
    botones[j].classList.remove('active');
  }

  // 3. Mostrar el contenido seleccionado
  var elemento = document.getElementById(nombreId);
  if (elemento) {
    elemento.classList.add('active');
  }

  // 4. Marcar el botón presionado
  if (evt && evt.currentTarget) {
    evt.currentTarget.classList.add('active');
  }
}