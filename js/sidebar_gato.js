const gato = document.querySelector(".sidebar-gato");

  // Lista de imágenes del gato en orden
  const imagenes = [
    "img/gato_sidebar.png",
    "img/gato_sidebar1.png",
    "img/gato_sidebar2.png",
    "img/gato_sidebar3.png"
  ];

  let indiceActual = 0; // empieza en la primera imagen

  gato.addEventListener("click", () => {
    // avanzar al siguiente índice
    indiceActual = (indiceActual + 1) % imagenes.length; 
    gato.src = imagenes[indiceActual]; // cambia la imagen
  });
