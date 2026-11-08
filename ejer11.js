const nombre = document.querySelector("#nombre");
const profesion = document.querySelector("#profesion");
const boton = document.querySelector("#btnCrear");
const contenedor = document.querySelector("#contenedor");

boton.addEventListener("click", function () {
  console.log("Botón presionado");

  const nombreUsuario = nombre.value;
  const profesionUsuario = profesion.value;

  if (nombreUsuario.trim() === "" || profesionUsuario.trim() === "") {
    alert("Por favor, completa todos los campos");
    return;
  }

  const tarjeta = document.createElement("div");

  const titulo = document.createElement("h2");
  titulo.textContent = nombreUsuario;

  const texto = document.createElement("p");
  texto.textContent = profesionUsuario;

  tarjeta.appendChild(titulo);
  tarjeta.appendChild(texto);

  contenedor.appendChild(tarjeta);

  nombre.value = "";
  profesion.value = "";
});
