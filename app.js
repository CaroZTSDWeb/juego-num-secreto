let numeroSecreto = 0;
let intentos = 0;
let numeroMaximo = 10;
let listaNumerosSorteados = [];   /*es una variable estructurada de tipo arreglo / array que
                                  irá almacenando cada nuevo numero generado, para que siempre 
                                  se genere uno nuevo para cada juego.*/
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //Si el usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++; // se va a incrementar el contador cada vez que el usuario no acierte.
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
   /* let valorCaja = document.querySelector('#valorUsuario');
   valorCaja.value = '';*/
}

function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;// return Math.floor(Math.random()*10) + 1;
   
   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);
   
   if (listaNumerosSorteados.length == numeroMaximo) {    //Si ya sorteamos todos los numeros...
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
   } else   {
        //Si el numero generado esta incluido en la lista...
        if (listaNumerosSorteados.includes(numeroGenerado)) {
                //generamos un nuevo numero: usando la misma funcion, se llama Recursividad de una funcion,la funcion se llama asi misma..
                return  generarNumeroSecreto();                     // return: para q devuelva el valor.
        } else {   //si no esta en la lista...
            listaNumerosSorteados.push(numeroGenerado);// se guarda el numero generado en la lista p q no vuelva a salir y se devuelve.
            return numeroGenerado;
        }
    }
}

function condicionesIniciales () {   
    asignarTextoElemento('h1', 'Juego del numero secreto!');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}


function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar nuevo numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}


condicionesIniciales();








