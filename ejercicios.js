/**  Desafio 4:
 *  Crea una lista vacía llamada "listaGenerica".
    Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
    Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
    Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
    Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
    Crea una función que calcule el promedio de los elementos en una lista de números.
    Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
    Crea una función que devuelva la suma de todos los elementos en una lista.
    Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
    Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
    Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
 */
/*
//1
let listaGenerica =[];
   console.log(listaGenerica);

//2
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin','Python'];
    console.log(lenguajesDeProgramacion);

 //3
 lenguajesDeProgramacion.push('Java', 'Ruby','GoLang');
 console.log(lenguajesDeProgramacion);

 //4
function mostrarListadoSeparado() {
    for (let i = 0; i < lenguajesDeProgramacion.length; i++) {
        console.log(lenguajesDeProgramacion[i]);//
       // console.log(`El lenguajes de programacion ${i} es ${lenguajesDeProgramacion[i]}`);
        
    }
}

mostrarListadoSeparado();

//5
function mostrarListadoInverso() {
    //let reversed = lenguajesDeProgramacion.reverse(); Este reverse() destruye el orden anterior del array.
    //console.log(lenguajesDeProgramacion[i]);
    for (let i = lenguajesDeProgramacion.length - 1; i >= 0; i--) {
       console.log(lenguajesDeProgramacion[i]);
    }
}

mostrarListadoInverso();


//6 
function calcularPromedioNum(lista) {
    let suma = 0;
    
    for (let i = 0; i < lista.length; i++) {
      suma += lista[i];
    }
    return suma / lista.length;
}

let listaNumeros = [10,2,8,4,6];
let promedio = calcularPromedioNum(listaNumeros);
console.log('Promedio:', promedio);


//7
function encontrarMayorMenor(lista) {
    let mayor = lista[0];
    let menor = lista[0];
  
    for (let i = 1; i < lista.length; i++) {
      if (lista[i] > mayor) {
        mayor = lista[i];
      }
      if (lista[i] < menor) {
        menor = lista[i];
      }
    }
  
    console.log('Mayor:', mayor);
    console.log('Menor:', menor);
  }
  
  //let numeros = [15, 8, 25, 5, 12];
  encontrarMayorMenor(listaNumeros);


//8
function sumarElTotal(listaNumeros) {
    let sumaTotal= 0;
    for (let i = 0; i < listaNumeros.length; i++) {
        sumaTotal += listaNumeros[i];
    } 
    return sumaTotal;
}

let resultado = sumarElTotal(listaNumeros);
console.log('Suma total:', resultado);


//9
function encontrarIndiceElemento(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === elemento) {
        return i; // Retorna el índice del elemento encontrado
      }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
  }
  
  let elemento = 4;
  let indiceElemento = encontrarIndiceElemento(listaNumeros, elemento );
  console.log(indiceElemento);

//10.función que reciba dos listas de números del mismo tamaño y devuelva 
//una nueva lista con la suma de los elementos uno a uno.
function concatenarListas(lista1, lista2) {
    
    let nuevaLista = lista1.concat(lista2);
    for (let i = 0; i < nuevaLista.length; i++) {
    }
    return console.log(nuevaLista); // Retorna una nueva la lista con la suma de los elementos uno a uno
  }
  
  let lista1 = listaNumeros;
  let lista2 = [3,5,7,9,11];
  concatenarListas(lista1, lista2);
  

//11
function calcularElCuadrado() {
    let numCuadrado = [];
    for( let i = 0; i < mi_list.length; i++) {
        numCuadrado.push(Math.pow(mi_list[i], 2));
    }
    return console.log(numCuadrado);
}
let mi_list = [9, 3, 8, 5, 7];
calcularElCuadrado(mi_list);

// 12.Programa una función que dado un array numérico devuelve otro array 
// con los números elevados al cuadrado,
// pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

   /* const elevarCuadrado = (numeros = undefined) => {
   if (numeros === undefined)
      return console.log("Debes Ingresar un array de numeros");
  
    if (numeros.length === 0) return console.log("El array ingresado está Vacio");
  
    if (!(numeros instanceof Array))
      return console.log(`El valor ${numeros} no es un Array de Numeros`);
  
    numeros = numeros.filter((numero) => typeof numero === "number");*/
  /*
    function elevarCuadrado() {
    let cuadrados = [];
    for (let i = 0; i < numeros.length; i++) {
      cuadrados.push(Math.pow(numeros[i], 2));
    }
  
    return console.log(cuadrados);
  };
  let numeros =[1, 2, 3];
  elevarCuadrado();
 */
 



/**  Desafio 3:
    función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
    función que calcule el valor del factorial de un número pasado como parámetro.
    función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
    función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
    función que muestre en pantalla el área y el perímetro de una sala circular, 
    utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
    Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

//1
function calcularImC(altura, peso) {
    let imc = peso/ (altura * altura);
    return console.log(imc);
}

//2
function calcularValorFactorial(numero) {
    if (numero === 0 || numero ===1) {
        return 1;
    } else{
        return numero * calcularValorFactorial(numero-1);
    }
}
let numero= 42;
let resultado = calcularValorFactorial(numero);
console.log(`El valor factorial de ${numero} es ${resultado}`);

//3
function convertirAReales(dolares) {
    let cotizacionDolar = 4.80;
    let reales = dolares * cotizacionDolar
    return reales;
    
}
let dolares = 50;
let valorEnReales = convertirAReales(dolares);
console.log(`${dolares} dólares  es igual a R$ ${valorEnReales} reales`);

//4
function calcularAreayPerimetroRectangulo(altura, anchura) {
    let areaRectangulo= altura * anchura;
    let perimetroRectangulo= (altura + anchura) * 2;
    console.log(`El area es ${areaRectangulo} y el perimetro es ${perimetroRectangulo}`);
    
}
let altura= 10;
let anchura= 35;
calcularAreayPerimetroRectangulo(altura, anchura);

//5
function calcularAreayPerimetroCirculo(radio) {
    let pi = 3.14;
    let area = pi * radio * radio;
    let perimetro = 2 * pi *radio;
    console.log(`El area es ${area} y el perimetro es ${perimetro}`);
    
}
let radio = 4;
calcularAreayPerimetroCirculo(radio);

//6
function tablaDeMultiplicar(num ) {
    for (let i = 1; i <= 10; i++) {
        //const resultado = num * i;
        console.log(`5 x ${i} = ${num*i}`); 
        //console.log(`Tabla de multiplicar del ${num}: ${num} x ${i} = ${resultado}`);
    }
    
}
let  num = 5;
tablaDeMultiplicar(num);
*/



/**  desafio 2:
    Crear una función que muestre "¡Hola, mundo!" en la consola.
    Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
    Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
    Crear una función que reciba tres números como parámetros y devuelva su promedio.
    Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
    Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.


//1
function holaMundo() {
    console.log('Hola mundo');
    return;
}
holaMundo();

//2
function saludoPersonalizado(nombre){
    console.log(`Hola, ${nombre}!`);
    return;
}
saludoPersonalizado('Carolina');

//3
function duplicarValor(numero) {
    let resultado = numero*2;
    return console.log('El doble del valor es:'+resultado);
}
duplicarValor(2);

/*
function calcularDoble(numero) {
  return numero * 2;
}
let resultadoDoble = calcularDoble(5);
console.log(resultadoDoble);


//4
function promediar(num1, num2, num3) {
    let promedio = (num1 + num2 + num3) / 3;
    return console.log(promedio);
}
promediar(2,3,4);

/*
function calcularPromedio(a, b, c) {
  return (a + b + c) / 3;
}

let promedio = calcularPromedio(4, 7, 10);
console.log(promedio);


//5
function devolverElMayor(num1, num2) {
   // let mayor = Math.max(num1, num2);
    //console.log(mayor);
    console.log(Math.max(num1, num2));
    return;
}
devolverElMayor(6,8);


function encontrarMayor(a, b) {
  return a > b ? a : b;
}

let numeroMayor = encontrarMayor(15, 9);
console.log(numeroMayor);



//6
function potenciarNum(Base, Exponente){
    console.log(Math.pow(Base, Exponente));
    return;
}
potenciarNum(3,2);

/**
 function cuadrado(numero) {
    return numero * numero;
}

let resultado = cuadrado(2);
console.log(resultado);


<button onclick= "mostraralerta();"   class="container__boton" id="reiniciar">Alert</button>
function mostrarAlerta() {
    let ciudad = prompt("Por favor, ingresa el nombre de una ciudad de Brasil:");
    alert("Estuve en " + ciudad + " y me acordé de ti.");
}

<button onclick= "sumaDosNumeros();"   class="container__boton" id="reiniciar">Suma</button>
function sumaDosNumeros(){
    let primerNumero = parseInt(prompt('Digite el primer numero'));
    let segunNumero = parseInt(prompt('Digite el segundo numero'));
    let resultado = primerNumero + segunNumero;
    alert(`${primerNumero} + ${segunNumero} = ${resultado}`);
}


*/