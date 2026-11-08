let contador = 0;

const numero = document.querySelector("#numero");
const aumentar = document.querySelector("#aumentar");
const disminuir = document.querySelector("#disminuir");

console.log("Botón presionado");

aumentar.addEventListener("click", function () {
  contador++;
  numero.textContent = contador;
});

disminuir.addEventListener("click", function () {
  contador--;
  numero.textContent = contador;
});
