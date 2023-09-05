
const h1 = document.querySelector('h1');

const input1 = document.querySelector('#numero1');

const input2 = document.querySelector('#numero2');

const boton = document.querySelector('#botonCalcular');

const pResultado = document.querySelector('#resultado')

function botonOnClick(){
   const sumaInputs =  Number(input1.value) + Number(input2.value);
   pResultado.innerText = "El resultado es: " + sumaInputs;
}