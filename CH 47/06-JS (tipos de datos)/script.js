/*Comentarios 
multilines
en
 javascript*/

 //Comentarios de una sola línea 

 /*Javascript

 Lenguaje de programación
 Imperativo: Que se lee de arriba hacia abajo y de izquierda a derecha
 Interpretado
 Tipado débil
 Orientado a objetos
 ECMASCRIPT
 una buena práctica es que se use ; al final de una instrucción porque en Java marca error en caso de no tener
 */


 //alert ("Hola mundo"); para comprobar que se conecte bien el archivo nos muestra un mensaje de alerta

 //console.log ("Este es un mensaje de la consola");

 //document.write("Hola CH47"); nos permite imprimir en el documento

 //let nombre = prompt("Ingresa tu nombre");
 //alert ("Hola, " + nombre +  " Bienvenidx al mundo de javascript");



 //let nombre = prompt ("Regalame tu nombre");

 //let signo = prompt ("Ingresa tu signo");

 //let resultado = nombre + " y tu sino es: " + signo;

 //alert ("Eres " + resultado);

let nombre = prompt ("Ingresa tu nombre");

let edad = prompt ("Ingresa tu edad");

if (edad >=18){
    alert ("Eres mayor");
}else{
    alert("No eres mayor");
}

let a = prompt("Piensa en un número");

let simbolo = "#";

let contador = 0;

let resultado = "";

while (contador < a) {

    resultado += simbolo + "\n";

    simbolo += "#";

    contador++;

}

alert(resultado);


};







