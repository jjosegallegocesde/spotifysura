//consumiendo apis con JS

//1. Pa onde vas (Almceno en una variable la URI del servicio)
let URI="https://api.spotify.com/v1/artists/2ye2Wgw4gimLv2eAKyk1NB/top-tracks?market=US"

//2. Que vas a Hacer? (metodo HTTP)
let metodo="GET"

//3. Tenes permisos? (Configurar peticiones)
let token="Bearer BQD7pRlHywGw5jYsA-8MkGA24n8CwOc4-kY5KsxHXwgirMxQqCOh4aVquGr6k71j99LOCuoWS7lIoGK0WYNF9IhsONB0Z48DD1313iuwt7G1DeWFZDA"

let peticion={
    method:metodo,
    headers:{
        "Authorization":token
    }
}

//4. Vaya pues traigame cositas (Promesa)
fetch(URI,peticion)
.then(function(respuestaServidor){
    return respuestaServidor.json()
}) //linea para indicar que hago si todo esta bien
.then(function(respuestaJson){
    console.log(respuestaJson)
})
.catch(function(respuestaError){
    console.log(respuestaError)
}) //linea para indicar que hago si algo fallo 