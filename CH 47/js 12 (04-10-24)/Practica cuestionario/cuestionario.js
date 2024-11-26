document.getElementById("registrarse").addEventListener("click",function(){
   
    const nombre = document.querySelector("#nombre input").value.trim();
    const email = document.querySelector("#email input").value.trim();
    const password = document.querySelector("#password input").value.trim();
    const fechaNam = document.querySelector("#fechaNam input").value.trim();
    const tel = document.querySelector("#tel input").value.trim();

    if (nombre === ""){
        alert("Por favor ingresa tu nombre, este campo no puede quedar vacío");
    } else if (email ==="") {
        alert ("Este campo no puede estar vacío");
    } else if (!email.includes ("@")){
        alert ("Ingresa una direccion valida");
    } else if (password ===""){
        alert ("Contraseña incorrecta");
    } else if (password.length < 8) {
        alert ("Contraseña no segura");
    }else if (fechaNam ===""){
        alert ("Debes ingresar tu fecha de nacimiento");
    }else if (tel === ""){
        alert ("Debes ingresar tu numero de telefono");
    }else if (tel.length < 10){
        alert ("Tu número debe ser de 10 digitos");
    }else {
        alert("Registro completo" + nombre + "!");
    }
});