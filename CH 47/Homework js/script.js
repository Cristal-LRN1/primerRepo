//console.log("Conexión exitosa");

// Before each exercise, make sure you think about the 4 steps of a function.

// 1. Understand the purpose of the function.
// 2. Define the data that comes into the function from the caller (in the form of parameters)!
// 3. Define what data variables are needed inside the function to accomplish its goal.
// 4. Decide the set of steps that the program will use to accomplish this goal (the algorithm).
// Start coding up your answer once you have completed step 4.

// Exercise #1
// Maria has to calculate the cost of her payments for the month. For every transation there is a $3 fee and a 0.1% (0.01) interest fee. Can you help her calculate her costs?

// Return the value of what she should be paying.


// Función para calcular el costo total de las transacciones 


function calcularCostoTotal(cantidadDeTransacciones, montoTotalTransacciones) {
  const tarifaPorTransaccion = 3;
  const interesPorTransaccion = 0.001;

  // Calcular el costo total de las comisiones por transacción
  const costoDeLasComisiones = cantidadDeTransacciones * tarifaPorTransaccion;

  // Calculamos el costo del interés
  const costoDelInteres = montoTotalTransacciones * interesPorTransaccion;

  // Sumamos el costo de las comisiones y el interés
  const costoTotal = costoDeLasComisiones + costoDelInteres;

  return costoTotal;
}

  
// Exercise #2
// Part 1
// Ed would like a way to input 3 names of his friends. The output should be a console greeting to his friends saying: Welcome {name1}, {name2}, {name3}.

function saludarAmigos(nombre1, nombre2, nombre3); {
let saludarAmigos = (nombre1, nombre2, nombre3);
}
console.log(`Bienvenide + {Cristal}, {Rosa}, {Pepe}.`);


// Part 2
// Ed would like to create a function that takes in a birth year and returns the age.

// i.e. 1990 returns 30

function calcularEdad(añoActual, añoNacimiento) {
  return añoActual - añoNacimiento;
}

console.log(calcularEdad(2024, 1990));

// Part 3
// Ed would like to create a function that prints out, Welcome {name1}, you are {age1}. Welcome {name2}, you are {age2}. Welcome {name3}, you are {age3}.

function saludoNombreEdad(nombre, edad) {
  console.log(`Bienvenido ${nombre}, tienes ${edad} años.`);
}

// Challenge Yourself
// A teacher wants to create a rubric for grading. The rubric is from 0 - 11.

// Part 1
// A student passes if they have a score greater than or equal to 5. Create a function that returns a boolean true or false.

function evaluarAlumno(puntuacion) {
  const aprobado = puntuacion >= 5;
  console.log(`¿Aprobó? ${aprobado}`);
}
// Part 2
// A student has an excellent grade if they score higher than 8. Add on to your function to print out "Excellent" for scores greater than 8.

if (puntuacion > 8) {
  console.log("¡Excelente!");
}

// Part 3
// A student has a perfect grade if their score is 11. Add on to your function to print out "Perfect" for a score of 11.

if (puntuacion === 11) {
  console.log("¡Perfecto!");
}

