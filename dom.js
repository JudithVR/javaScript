//se obtiene el elemento con id igual al que se pasa como parametro
var div1 = document.getElementById("mi_div");
console.log(div1);

var div3 = document.getElementById("nombre");
console.log(div3);

//div.classList.add("mi_clase");

//se obtienen los elementos que tengan la clase igual a lade parametro
var div2 = document.getElementsByClassName("miClase");

console.log(div2);

//se obtiene los elementos cuya etiqueta sea igual a la del parametro

var parrafos = document.getElementsByTagName("p");

console.log(parrafos);

//para obtener elementos de css
var mi_clase = document.querySelectorAll("head");

console.log(mi_clase);
