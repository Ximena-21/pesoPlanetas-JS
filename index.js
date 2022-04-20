
const botonPeso = document.querySelector("#btnCalcular")
const elementoMensaje = document.querySelector(".result") 
const inputPesoTierra = document.querySelector("#inputPeso")

function calcularPeso(){

    const pesoTierra = inputPesoTierra.value
    const gravedadTierra = 9.81
    const gravedadLuna = 1.62
    const pesoLuna = (pesoTierra/gravedadTierra)*gravedadLuna

    const mensajeResultado = "Tu peso es "+ pesoLuna

    elementoMensaje.textContent = mensajeResultado
}



botonPeso.addEventListener("click",calcularPeso)


