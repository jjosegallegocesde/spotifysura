//DECLARANDO VARIABLES CON JS DESDE EL DOM

let nombreUsuario="Juan Jose Gallego"
let edadUsuario=34
let estaturaUsuario=1.64
let estaLloviendo=false
let rh="O+"

let botonFormulario=document.getElementById("botonIngreso")
let cajaFormularioNombre=document.getElementById("nombre")
let cajaFormularioEmail=document.getElementById("email")
let cajaFormularioPassword=document.getElementById("password")

//DETECTANDO EVENTOS CON JS
botonFormulario.addEventListener("click",function(evento){

    evento.preventDefault()
    
    //1.capturamos la informacion del formulario
    let nombreUsuario=cajaFormularioNombre.value
    console.log("el nombre de usuario es: "+nombreUsuario)

    let correoUsuario=cajaFormularioEmail.value
    console.log("el correo de usuario es: "+correoUsuario)

    let passwordUsario=cajaFormularioPassword.value
    console.log("la contraseña es: "+passwordUsario)

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




