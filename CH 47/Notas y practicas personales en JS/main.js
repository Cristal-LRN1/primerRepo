//JAVASCRIPT

//Variables ¿que son, como declararlas y asignar valores?

//Las variables entre mas especificas sean mejor, no pueden iniciar con un gato ni con numeros
//Es un leguaje de programacion case sensitive (reconoce entre mayusculas y minusculas)
//Las comillas dentro del parentesis solo van en caso de que sea un string (texto)
//prompt para que aparezca el recuadro para que el usuario ingrese texto 

//let userName; //Utilizamos la palabra reservada let para declarar la variable
//userName = "Juan" // Asignamos un valor a la variable 
//console.log(userName);

//Tanto la asignación como la declaración se pueden realizar en la misma línea 
//let userName = ("Juan");
//alert("Hola"); Si lo cambio por un prompt //ademas de decir hola aparece un recuadro para que el usuario ingrese un dato
//Una buena práctica de código es que las variables siempre se declaran al inicio

//let userAge;
//let birthYear;

//userAge = prompt("Ingresa tu edad por favor");
//birthYear = 2024 - userAge; 
//document.write(`Tu tienes ${userAge} años de edad y naciste en el año ${birthYear}.`); 

//Concatenación: asi se llama cuando se combina texto con distintos valores

//TIPOS DE DATOS EN JAVASCRIPT
/*Primitivos: reṕresentan un solo dato (number, string, boleans (valor de verdadero y falso), null, undefined y symbols
  Tipo objeto: representan varios valores (arrays, object, date, RegExp, Error...)
*/

// Para asignar mi variable puede ser con numero entero o decimal (llamado punto flotante)
//Java Scrip es un lenguaje de programación dinamicamente tipado (una variable puede cambiar de valor durante la ejecución del código), 
//este tipo de dato solo puede realizarse con operaciones basicas
//A la variable se le puede cambiar el dato, unicamente poniendo el nombre de la funcion = dato
/*
Undefined = un valor no definido
NaN: No es un numero/nada/vacío
Null: Algo que no tiene valor
*/ 

/*
Arrays:Permiten almacenar varios valores y la forma de declararlos es 

let options = [1,2,3,4]; abrir corchetes y separarlos por una coma/ solo puede tener un tipo de dato (numbers, strings o booleanos)
*/

/* A diferencia de los objetos, los arreglos permiten asignarle un nombre a cada uno de los valores, es decir, puedo especificar, cual es la opcion 1,2,3...

let option = {

option1: 1,
option2: 2,
option3: 3,
};
*/

/*En el caso de los objetos, abrimos y cerramos llaves, con diferentes tipos de datos y su respectivo identificador

let user = {
name: "Jared",
age: 26,
membership:true
};
*/

//OPERADORES
// operandos (numeros), operador (operacion) , operadores unarios (un operando), operadores binarios (dos operandos), operador ternario (tres operandos)

/*
Tipos de operadores:
Aritmeticos: operaciones básicas (+ (suma) - (resta) * (multiplicacion) / (division) % (modulo) ** (exponenciación) ++ (incremento) -- (decremento))
Asignación: = += -= *= /= %= **= 
Comparación: > < >= <= == === != !==
Logicos: && ll 
Ternario: 
*/

//CONDICIONALES IF/ELSE

//(condicion) ? true : false ;

if (condition){
//el codigo si se cumple
}else{
//codigo no se cumple
}

//Puedo ir desglosando varias líneas de código

if (condition){
  //el codigo si se cumple
  }else{
  //codigo no se cumple
  }

}else if(condition){ //Se juntan para saber si se cumple la segunda condicion 
  //codigo si
  //Se cumple la segunda condicion 
}else{
  //codigo si
  //no se cumple
}


//SWITCH
//Similar a las condicionales, en este caso nos permite evaluar una expresion y de acuerdo a su valor ejecutara en 
//el código ciertas instrucciones, puede haber tantos casos como sea necesario // Sin limite de expresiones 
/*
Expresión
caso x = instrucciones x
caso y = instrucciones y
caso z = instrucciones z

switch (expresion){
case x:
codigo si expresion === X
break;
case y:
codigo si expresion === y
break;
default; opcionalmente tener un en codigo en caso de que la expresion no tenga ninguno de loa valores anteriores 
(No necesita break al final)
*/

//CICLO WHILE
//Evaluar una condicion WHILE (Mientras) y mientras esta condicion sea verdadera va a ejecutar las instrucciones que se encuentran dentro del ciclo
//Las veces que sea necesario, en caso de que la consicion sea falsa, esta finaliza 
//while: Evalúa la condición al principio del bucle. Si la condición es falsa desde el inicio, el código dentro del bucle no se ejecuta.

/*
while(condicion){
//instrucciones
variable++;}
*/ 
let contador = 1;
while(contador <=100){
  document.write(contador + " ");
  cont++;
}

//Variación DO WHILE
//Se evalua la condición, pero solo lo hace despues de haber ejecutado una vez las instrucciones, mientras se cumpla la condicion 
//se va a ejecutar las veces que sea necesario - el WHILE siempre va despues de las llaves 
//do-while: Evalúa la condición al final del bucle. El código dentro del bucle se ejecuta al menos una vez.
/*
do{
//instrucciones
variable++;}
}while (condicion)
*/ 

let contad =1; 
do {
  document.write(contad + "");
  contad++;
}while(contad <= 0);

//CICLO FOR


