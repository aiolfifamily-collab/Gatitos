const boton = document.getElementById("btnGato");
const imagen = document.getElementById("imagenGato");

boton.addEventListener("click", async () => {
  const respuesta = await fetch("https://api.thecatapi.com/v1/images/search");
  const datos = await respuesta.json();

  imagen.src = datos[0].url;
});