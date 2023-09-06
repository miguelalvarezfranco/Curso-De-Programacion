let ataqueJugador 
let ataqueEnemigo
let VidasJugador = 3
let VidasEnemigo = 3


function iniciarJuego(){

    let sectionSeleccionarAtaque = document.getElementById('Seleccionar-ataque');
    sectionSeleccionarAtaque.style.display = 'none';

    let sectionReiniciar = document.getElementById('Reiniciar');
    sectionReiniciar.style.display ='none';

    let botonMascotaJugaador = document.getElementById('boton-mascota'); 
    botonMascotaJugaador.addEventListener('click', seleccionarMascotaJugador)//llamamos el id del boton con el DOM 


    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.addEventListener('click',ataqueFuego ) 
    let botonAgua = document.getElementById('boton-agua');
    botonAgua.addEventListener('click',ataqueAgua ) 
    let botonTierra = document.getElementById('boton-tierra');
    botonTierra.addEventListener('click',ataqueTierra ) 

    let botonReiniciar = document.getElementById('boton-reinicar');
    botonReiniciar.addEventListener('click', reinicarJuego)


}

function seleccionarMascotaJugador(){

    
    let sectionSeleccionarMascota = document.getElementById('Seleccionar-mascota');
    sectionSeleccionarMascota.style.display = 'none';

    
    let sectionSeleccionarAtaque = document.getElementById('Seleccionar-ataque');
    sectionSeleccionarAtaque.style.display = 'block';

    let inputHipodogue = document.getElementById('Hipodogue') //para que el codigo sea mas limpio almacenamos en una variable 
    let inputCapipepo = document.getElementById('capipepo') //para que
    let inputRatigueya = document.getElementById('Ratigueya') //para que
    let spanMascotaJugador = document.getElementById('mascota-jugador')


    if(inputHipodogue.checked){
        spanMascotaJugador.innerHTML ='Hipodogue'

    }else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML ='Capipepo'
        
    }else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML ='ratigueya'
        
    }else{
        alert("primero debes seleccionar una mascota")
    }

    seleccionarMascotaEnemigo()

}

function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(1,3) 
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if(mascotaAleatoria == 2){
        spanMascotaEnemigo.innerHTML = 'Hipodogue'
        //Hipodogue
    }else if(mascotaAleatoria == 2){
        spanMascotaEnemigo.innerHTML = 'capipepo'
        
    }else{
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
        
    }

}

function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
    
}
function ataqueAgua(){
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()

}
function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    
    if(ataqueAleatorio == 1){
        ataqueEnemigo = 'FUEGO'
    }else if(ataqueAleatorio == 2){
        ataqueEnemigo = 'AGUA'
}else{
    ataqueEnemigo = 'TIERRA'
}

    combate()

}

function combate(){
    let spanVidasJugador = document.getElementById('vidas-jugador');
    let spanVidasEnemigo = document.getElementById('vidas-enemigo');



    if(ataqueEnemigo == ataqueJugador){
        crearMensaje("EMPATE")
    }else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
        crearMensaje("GANASTE")
        VidasEnemigo-- 
        spanVidasEnemigo.innerHTML = VidasEnemigo
    } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
        crearMensaje("GANASTE")
        VidasEnemigo-- 
        spanVidasEnemigo.innerHTML = VidasEnemigo
    }else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
        crearMensaje("GANASTE")
        VidasEnemigo-- 
        spanVidasEnemigo.innerHTML = VidasEnemigo
    }else{
        crearMensaje("PERDISTE")
        VidasJugador-- 
        spanVidasJugador.innerHTML = VidasJugador   
    }

    revisarVidas();
}

function revisarVidas(){
    if(VidasEnemigo == 0){
        crearMensajeFinal('Felicidades GANASTE')
    }else if(VidasJugador == 0){
        crearMensajeFinal('Lo siento has perdido intenta de nuevo')
    }
}

function crearMensaje(resultado){
    let seccionMensaje = document.getElementById('Mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador + ', las macosta del enemigo ataco con ' + ataqueEnemigo + ' ' + resultado

    seccionMensaje.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal){
    let seccionMensaje = document.getElementById('Mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal

    seccionMensaje.appendChild(parrafo)

    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua');
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra');
    botonTierra.disabled = true


    let sectionReiniciar = document.getElementById('Reiniciar');
    sectionReiniciar.style.display ='block';




}

function reinicarJuego(){
    location.reload();
}



function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)