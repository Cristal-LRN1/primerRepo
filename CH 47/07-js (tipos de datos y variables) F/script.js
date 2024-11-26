//alert("Tipos de datos")
/*Tipos de datos y variables

Variable: Es un espacio de memoria dentro de nuestro programa 

var, let y const

var: tiene alcance global
let: tiene un alcance local/bloque de código
const: es un constante (fecha de nacimiento, PI, )

string: cadena de texto
number: numero
boolean: true or false/ 0/1
null:no tiene un valor
nan: no es un número

Declarar, inicializar y modificar variables son distintas 

scope: alcance de mis variables


*/

//let nombre; Declaro mi variable
// nombre = "Cristal"; inicializo mi variable
//"" representa un string


let nombre = "Cristal"


nombre = "Cristal"

const apellido = "Ramirez";
console.log(apellido);

console.log(nombre); 

let telefono = null;
console.log(telefono); 

let direccion;
console.log(direccion); 

//multiples variables

let num1 =15;
let num2 =18;
let num3 =21;

//Encasillamiento o cohersion se refiere a una conversion automática de datos
//Type of permite saber el tipo de dato

//let precio = prompt ("cual es tu rango de conversion");
console.log(typeof precio);

//onjeto Number cambio string a number
let numero1 = "41";
let newNumber = Number(numero1);

console.log(typeof newNumber);

//conversion de tipo de dato string a number

let cp = "57139";
let numcp = parseFloat(cp);
console.log(typeof numcp); 

//conversion de un numero a un string

let edad = 26; 
let edadString = edad.toString();
console.log(edadString); 

//conversion de boolean a string
let ine = true; 
let ineString= ine.toString();
console.log(ineString);
console.log(typeof ineString);

console.log(edad * nombre)