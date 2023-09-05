const h1 = document.querySelector("h1");
const input1 = document.querySelector("#numero1");
const input2 = document.querySelector("#numero2");
const boton = document.querySelector("#botonCalcular");
const pResultado = document.querySelector("#resultado");
const form = document.querySelector("form");

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
    console.log({event});
    event.preventDefault();
 const sumaInputs = Number(input1.value) + Number(input2.value);
 pResultado.innerText = "El resultado es: " + sumaInputs;
}
