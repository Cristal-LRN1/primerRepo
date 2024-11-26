//01 - OPERADORES ARITMETICOS
let operando1 = 3;
let operando2 = 2;
let resultado; 

resultado = operando1 + operando2;
resultado = operando1 - operando2;
resultado = operando1 * operando2;
resultado = operando1 / operando2;
resultado = operando1 % operando2; //resto de la division
resultado = operando1 ** operando2; //exponenciacion 
//incremento en uno el valor del operando, dependiendo si va adelante o al final de la funcion, se define si el incremento/decremento se hace antes o depues de la variable resultado 

resultado = operando1++;

console.log(resultado);
console.log(operando1);

resultado = --operando2; //decremento

console.log(resultado);
console.log(operando1);

//02 -OPERADORES DE ASIGNACIÓN
//Ademas de asignar un valor tambien realizan un operacion aritmética al mismo tiempo
//esto tambien puede realizarse con la resta, multiplicación, divisio, módulo y exponenciación 

let resul = 5; 
resul += 3; //Aquí esta sumando 3 al valor inicial de 5

console.log(resul);

//03 -OPERADORES DE COMPARACION
//Permiten determinar si una variable cumple cierta condicion o no 

console.log(2 > 3);
console.log(2 < 3);
console.log(3 <= 3);
console.log(3 >= "3");//este tipo de comparacion no toma en cuenta el tipo de valor
console.log(3 === 3);
console.log(3 != "3"); // si son diferentes 
console.log(3 !== "3"); //estrictamente diferentes

//asignar = , comparar == , === para estricta igualdad

//04 - OPERADORES LÓGICOS: Son AND (&&) y OR (||)
/*  AND
Verdadero y Verdadero = Verdadero : Solo cuando ambos valores son verdaderos se tendrá un valor verdadero
Verdadero y Falso = Falso
Falso y Verdadero = Verdadero
Falso y Falso = Falso
*/
let operando3 = true;
let operando4 = false;

console.log(operando3 && operando4);//operando 4 es falso, en este caso ambos deberian de ser true, para que devuelva lo mismo

/* OR
Verdadero y verdadero = Verdadero
Verdadero y falso = Verdadero
Falso y verdadero = Verdadero
Falso y falso = Falso
*/
let operando5 = true;
let operando6 = false;

console.log(operando5 || operando6);

//05- Operador ternario (permite evaluar una condicion y dependiendo del resultado da una accion u otra)
//Se usa if else cuando son varias líneas de código
//se representa con una condicion entre parentesis y un signo de interrogacion en medio y dos posibles 
//resultados uno cuando 1 cuando la condicion es verdadera y otro cuando es falsa, separando los dos posibles resultados con dos puntos
//SE puede ocpupar con otros valores y comparadores, asi como cambiar los mensajes 
resultado = (30==="30")? "SI es igual" : "NO es igual";
console.log(resultado);

//05 IF/ELSE
//Usuario ingresa la hora
//el sistema le saluda de acuerdo a las siguientes condiciones:
// hora 6 - 12: Buenos días
// hora 13- 18: Buenas tardes
//resto de horas: Buenas noches 


//let hora = prompt("Ingresa la hora por favor");

//if (hora>=6 && hora<=12){
//document.write("<h1>¡Buenos días!</h1>");
//}else if(hora>=13 && hora<=18){
//document.write("<h1>¡Buenas tardes!</h1>");
//}else{
//document.write("<h1>¡Buenas noches!</h1>");
//}

//05 SWITCH
//Similar a las condicionales, en este caso nos permite evaluar una expresion y de acuerdo a su valor ejecutara en 
//el código ciertas instrucciones, puede haber tantos casos como sea necesario // Sin limite de expresiones 
//Permite tener un código más organizado y legible, en casos donde tenga que elegr más de tres opciones 
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
// let numeroDia = prompt("Ingresa el día de la semana:");

// switch (numeroDia) {
//     case "1":
//         document.write("<h1>El día de hoy es<br>LUNES</h1>");
//         break;
//     case "2":
//         document.write("<h1>El día de hoy es<br>MARTES</h1>");
//         break;
//     case "3":
//         document.write("<h1>El día de hoy es<br>MIÉRCOLES</h1>");
//         break;
//     case "4":
//         document.write("<h1>El día de hoy es<br>JUEVES</h1>");
//         break;
//     case "5":
//         document.write("<h1>El día de hoy es<br>VIERNES</h1>");
//         break;
//     case "6":
//         document.write("<h1>El día de hoy es<br>SÁBADO</h1>");
//         break;
//     case "7":
//         document.write("<h1>El día de hoy es<br>DOMINGO</h1>");
//         break;
//     default:
//         document.write("<h1>Día desconocido</h1>");
// }

//Tambien pudiendo juntar if else con switch de la siguiente manera:

// let numeroDia = prompt("Ingresa el día de la semana (1-7):");

// if (numeroDia >= 1 && numeroDia <= 7) {
//     switch (numeroDia) {
//         case "1":
//         document.write("<h1>El día de hoy es<br>LUNES</h1>");
//         break;
//     case "2":
//         document.write("<h1>El día de hoy es<br>MARTES</h1>");
//         break;
//     case "3":
//         document.write("<h1>El día de hoy es<br>MIÉRCOLES</h1>");
//         break;
//     case "4":
//         document.write("<h1>El día de hoy es<br>JUEVES</h1>");
//         break;
//     case "5":
//         document.write("<h1>El día de hoy es<br>VIERNES</h1>");
//         break;
//     case "6":
//         document.write("<h1>El día de hoy es<br>SÁBADO</h1>");
//         break;
//     case "7":
//         document.write("<h1>El día de hoy es<br>DOMINGO</h1>");
//         break;
//     default:
//         document.write("<h1>Día desconocido</h1>");
//     }
// } else {
//     document.write("<h1>Por favor, ingresa un número válido entre 1 y 7.</h1>");
// }

//CICLO WHILE
let contador = 1;
while(contador <=100){
  document.write(contador + " ");
  cont++;
}

//Variación DO WHILE
let contad =1; 
do {
  document.write(contad + "");
  contad++;
}while(contad <= 0);
