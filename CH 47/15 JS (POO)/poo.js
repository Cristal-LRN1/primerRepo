/* POO

Clases:se refiere a nuestro  molde o plantilla para que podamos crear objetos
Utiliza la palabra reservada class
Constructor: Es una funcion obligatoria para crear objetos (chefcito) a traves de 
Caracteristicas o atributos especificos
Objetos: Es loq ue construimos a traves de la clase y el constructor
Atributo: Se refieren a las caracteristicas o propiedades de mi objeto
Metodo: Lo que hace nuestro objeto (saludar, brincar, correr)
Instanciacion: SE refiera a cuando ya creamos la clase, el constructor y el objeto

PILARES

Herencia: Cuenta con la palabra reservada extends (entiende que va a heredar de la clase principal)
La herencia permite reutilizar el código de la clase padre en la clase hijo
Polimorfismo:El comportamiento de cada objeto aún cuando es de la misma clase y método
Encapsulamiento:SE refiere a encerrar y/o ocultar el código
Abstracción:Se refiere a ser muy especificos con los objetos (resumir)
Modularidad: Nos permite reutilizar el código, hacer modificaciones, tener orden, entender,
y mantener el código

Métodos estáticos: Funciones que permiten ejecutar una clase sin instanciar al objeto
Palabra reservada: static (dentro de una clase)
Métodos accesores: (Pendiente)

PRINCIPIOS SOLID

Responsabilidad única (SRP): cada que asignamos una clase u objeto debe ser única
Principio de abierto y cerrado (OCP): Se refiere a que debemos poder extender el código ya existente de ser necesario 
(posibilidad de escalar, sin grandes modificaciones)
Principio de sustitución de Liskob: Se refiere a que podemos tener cualquier tipo de 
objeto dentro de mi clase y no se ve afectado el comportamiento del mismo
Principio de segregacion de interfaces (ISP): SE refiere a las distintas interfaces
Principio de investigacion de dependencias (DIP): Trabaja a traves de la abstraccion para que el código no dependa de detalles especificos

OBJETOS JASON
Javascript Object Notation: Trabajan a traves de clave (lo que permite manipularlos)/valor (lo que tiene guardado en una variable)
No tienen método / Van a guardar datos unicamente 

*/

const inte1 = new participante ("Xaxiry", "Gonzalez", "xaxiry@gmail.com", 27,);
//Se trabaja con const para definir nuestros objetos, palabra reservada new
setInterval.infoIntegrantes();

class ch47 {//Clase principal o clase padre 
    constructor(nombre, apellido, email, edad){//nos permite crear el objeto 
        this.name = nombre;//this nos permite seleccionar el objeto que voy a crear 
        this.lastName = apellido;
        this.email = email;
        this.age = edad;
        this.info = `Holi soy ${this.name} ${this.lastName}, mi correo es ${this.email} y mi edad es ${this.age}`
    }

    infoIntegrantes(){
        console.log(this.info);
    }
}

class instruccion extends ch47{
    constructor(nombre, apellido, email, edad, escolaridad){
        super (nombre, apellido, email, edad)
        this.grado = escolaridad;
    }

    static darSesiones(){
        console.log("Hoy no tienes sesion");
    }
}

class participantes extends ch47 {
    constructor(nombre, apellido, email, edad, escolaridad,telefono){
        super(nombre, apellido, email, edad)
        this.tel=telefono
        this.grado=escolaridad
        this.info = Holi soy ${this.name} ${this.lastName} ${this.correo}, mi edad es ${this.age}, mi telefono ${this.tel}, y mi escolaridad es ${this.grado}
    }
    // Para recibir algo 
    get _nombre(){
      return this.name;
    }
    // Modificar algo
    set _nombre1(_name){
      this.name=_name
    }
  }
const inte1= new ch47 ("xaxiry","Gonzalez","xaxiry@.com",27);//  Los objetos se deben definir con const
  const inte2 = new instruccion ("Liliana","Aguirre","lili@gmail.com",30,"Liccenciatura");
  const inte3= new mentoria ("Eva","Lagarreta", "eval@gmail.com",29,595959595);
  const int4= new participantes("Xamitl","Hernandez","ollin.h@yahoo.com",29,5610297873,"Ingenieria trunca");
  int4.infoIntegrantes();
   int4._nombre1 = "Juan" 
  console.log (int4._nombre)