//para saber el tipo de dato de una variable se usa typeof

var a  = 0.2;
var b = 'hola';
var c = ['a',1,'e',3];

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

//para saber si una variable está definida o no

var hola; //puede estar declarada, pero no tene un valor

if( typeof hola == 'undefined'){
    console.log('esta variable (hola) no esta definida');
}

var saludo;
if(saludo == null){
    console.log('esta variable (saludo) no tiene valor');
}