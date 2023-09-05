const h1 = document.querySelector("h1");
const p = document.querySelector('p')
const parrafo = document.querySelector(".parrafo");
const pid = document.getElementById("pid");
const input = document.querySelector("input");

console.log(input.value);
console.log({ h1, p, parrafo, pid, input });

h1.innerHTML = 'Manipulando  <br> con innerHTML';
p.innerText = "Manipulando con innerText";
console.log(h1.getAttribute("jugador"));
h1.setAttribute("jugador", "zidane")
console.log(h1.getAttribute("jugador"));
h1.classList.add("equipo")
console.log(h1.getAttribute("class"));
h1.classList.remove("equipo");
//h1.classList.toggle(""); nos permite quitar o poner la clase dependeindo del evento que usemos
//h1.classList.contains(""); devuelve true o false dependiendo de la clase que implementemos 
input.value = "34676";
input.placeholder = "Hola";
console.log(document.createElement('span'));

let img = document.createElement("img");
img.setAttribute("src", "https://www.fichajes.com/build/images/player-covers/cristiano-ronaldo.352c95f5.jpg");
console.log(img);

pid.innerHTML = " ";
pid.append(img);