const relogio = {
    horas: 0,
    minutos: 0,
    segundos: 0,
    status: false,
}

let cronometroAtivo = false;

setInterval(mostraCronometro,1000);

function temporizador() {
    if (relogio.status === true){
        relogio.segundos += 1;
        
        if (relogio.segundos === 60) {
            relogio.minutos += 1;
            relogio.segundos = 0;
        }
        
        if (relogio.minutos === 60) {
            relogio.horas += 1;
            relogio.minutos = 0;
        }
    }
}

function mostraCronometro() {
    document.getElementById("visor").innerHTML = `${relogio.horas}:${relogio.minutos}:${relogio.segundos}`;
    console.log(`${relogio.horas}:${relogio.minutos}:${relogio.segundos}`);
}

function zerarCronometro() {
    relogio.segundos = 0;
    relogio.minutos = 0;
    relogio.horas = 0;
}

var iniciar = setInterval(temporizador,1000);

const btn1 = document.getElementById("botaoIniciar");

btn1.addEventListener("click", () => {
    return relogio.status = true;
})


const btn2 = document.getElementById("botaoParar");

btn2.addEventListener("click", () => {
    btn1.innerText = "Continuar";
    return relogio.status = false;
})

const btn3 = document.getElementById("botaoRecomecar");

btn3.addEventListener("click", () => {
    zerarCronometro();
    btn1.innerText = "Iniciar";
    return relogio.status = false;
})





