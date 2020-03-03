//generacion de un numero secreto aleatorio entre 1 y 100 
var max = 100;
var min = 1;
var num_secreto = Math.random()*(max-min)+min;

//se convierte el flotante generado en un entero
num_secreto = parseInt(num_secreto); 

console.log(num_secreto);

var mensaje = "Ingresa un numero para adivinar el numero magico. Si deseas cerrar el programa coloca 0";

// ciclo para indicar al usuario si el numero que ingresa es correcto, mayor o menor que el generado
//el ciclo se ejectuta hasta que el usuario ingrese la respuesta correcta
while(true){

    //con prompt se genera una ventana, en la cual se espera recibir la respuesta del usuario, recibe dos parametros
    //el primero es el mensaje que se mostrara en la ventana, el segundo es el valor que tendra por defecto
    var num_usuario = prompt(mensaje,"0"); 

    //prompt regresa una cadena, por lo cual es necesario convertirlo a entero
    num_usuario = parseInt(num_usuario);

    if(num_usuario === num_secreto){
        alert("Ganaste!!!");
        break;
    }
    else if(num_usuario === 0){
        break;
    }
    else if (num_usuario > num_secreto){
        mensaje = "lo sentimos el numero que ingresaste es mayor que el numero secreto";
    }
    else if(num_usuario < num_secreto){
        mensaje = "lo sentimos el numero que ingresaste es menor que el nunero secreto";
    }
}

