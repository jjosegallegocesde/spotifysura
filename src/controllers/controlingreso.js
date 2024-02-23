//DECLARANDO VARIABLES CON JS DESDE EL DOM

let usuarioBaseDatos="sura45"
let contrasenaBaseDatos="12345"
let correoBaseDatos="savelo@gmail.com"

let botonFormulario=document.getElementById("botonIngreso")
let cajaFormularioNombre=document.getElementById("nombre")
let cajaFormularioEmail=document.getElementById("email")
let cajaFormularioPassword=document.getElementById("password")

//DETECTANDO EVENTOS CON JS
botonFormulario.addEventListener("click",function(evento){

    evento.preventDefault()
    
    //1.capturamos la informacion del formulario
    let nombreUsuario=cajaFormularioNombre.value
    let correoUsuario=cajaFormularioEmail.value
    let passwordUsario=cajaFormularioPassword.value

    //validando los datos del uusuario
    if(usuarioBaseDatos==nombreUsuario){
        Swal.fire({
            title: "Bienvenido "+nombreUsuario,
            text: "Tus credenciales son correctas",
            icon: "success"
        })

        window.location.href="./src/views/home.html"


    }else{
        Swal.fire({
            icon: "error",
            title: "Oops... "+nombreUsuario+"Tienes un problema",
            text: "Verifica tus credenciales",
            
          });
    }

})

/*cajaFormularioNombre.addEventListener("click",function(){
    alert("digite su nombre")
})

cajaFormularioNombre.addEventListener("click",function(){
    alert("digite su nombre")
})

cajaFormularioNombre.addEventListener("click",function(){
    alert("digite su nombre")
})*/




