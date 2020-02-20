console.log('var, let, const');

var edad = 55;
console.log('declaracion de variable edad: '+edad);

var edad = 22;
console.log('redefinicion de la variable edad: '+edad);

let edad2 = 20;
console.log('declaracion de let edad: '+edad2);

edad2 = 26;
console.log('asignando otro valor a edad: '+edad2);

//ciclo for con var

console.log('comportamiento de var declarada dentro de un ciclo:');
for(var i = 0; i<=5; i++){
    console.log(i);
}

console.log('impresion fuera del ciclo '+i);

//ciclo for con let
let a = 10;
console.log('valor de variable inicial, fuera de for: '+a);
console.log('comportamiento de let declarada dentro de un ciclo:');
for(let a = 0; a<=5; a++){
    console.log(a);
}

console.log('impresion fuera del ciclo '+a);

//ciclo if con let
let b = 20;
console.log('valor de variable inicial, fuera de if: '+b);
console.log('comportamiento de let declarada dentro de un if:');
if(true){
    let b = 55;
    console.log(b);
}

console.log('impresion fuera del if '+b);

//uso de constantes

/*si se declara una constante sin definir su valor
al invocar dicha constante marcara un error*/
//const numero;
//console.log('constante '+numero);

/* si se declara una variable con let o var sin
definir su valor y se invoca dicha variable
marcara como indefinida*/

var letra;
console.log('variable con var' + letra);

let signo;
console.log('variable con let '+ signo);

const c = 10;
console.log('valor de constante, fuera de for: '+c);
console.log('comportamiento de let declarada dentro de un ciclo + una constante:');
for(let a = 0; a<=5; a++){
    const c = 15;
    console.log(a+c);
}

console.log('impresion fuera del ciclo '+c);

