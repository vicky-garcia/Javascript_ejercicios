const nombreProducto = document.querySelector("#nombreProducto");
const precioProducto = document.querySelector("#precioProducto");
const botonAgregar = document.querySelector("#btnAgregar");
const productos = document.querySelector("#productos");

console.log("Botón presionado");

botonAgregar.addEventListener("click", function () {
  const nombre = nombreProducto.value.trim();
  const precio = precioProducto.value;

  if (nombre === "" || precio === "" || Number(precio) <= 0) {
    alert("Por favor, ingresa un nombre y un precio válido");
    return;
  }

  const tarjeta = document.createElement("div");

  const titulo = document.createElement("h2");
  titulo.textContent = nombre;

  const textoPrecio = document.createElement("p");
  textoPrecio.textContent = "Precio: $" + precio;

  tarjeta.appendChild(titulo);
  tarjeta.appendChild(textoPrecio);

  productos.appendChild(tarjeta);

  nombreProducto.value = "";
  precioProducto.value = "";
});
