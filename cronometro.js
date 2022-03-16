const relogio = {
    minutoDezena: 0,
    minutoUnidade: 0,
    segundoDezena: 0,
    segundoUnidade: 0,
    miliSegundoDezena: 0,
    miliSegundounidade: 0,
    status: false
}

let cronometroAtivo = false;

setInterval(mostraCronometro,10);

function temporizador() {
    if (relogio.status === true){
        relogio.miliSegundounidade += 1;

        if (relogio.miliSegundounidade === 10) {
            relogio.miliSegundoDezena += 1;
            relogio.miliSegundounidade = 0;
        }
        
        if (relogio.miliSegundoDezena === 10) {
            relogio.segundoUnidade += 1;
            relogio.miliSegundoDezena = 0;
        }
        
        if (relogio.segundoUnidade === 10) {
            relogio.segundoDezena += 1;
            relogio.segundoUnidade = 0;
        }

        if (relogio.segundoDezena === 6) {
            relogio.minutoUnidade += 1;
            relogio.segundoDezena = 0;
        }

        if (relogio.minutoUnidade === 10) {
            relogio.minutoDezena += 1;
            relogio.minutoUnidade = 0;
        }
    }
}

function mostraCronometro() {
    document.getElementById("visor").innerHTML = `${relogio.minutoDezena}${relogio.minutoUnidade}:${relogio.segundoDezena}${relogio.segundoUnidade}.${relogio.miliSegundoDezena}${relogio.miliSegundounidade}`;
}

function zerarCronometro() {
    relogio.minutoDezena = 0;
    relogio.minutoUnidade = 0;
    relogio.segundoDezena = 0;
    relogio.segundoUnidade = 0;
    relogio.miliSegundoDezena = 0;
    relogio.miliSegundounidade = 0
    return relogio.status = false;
}

var iniciar = setInterval(temporizador,10);

const btn1 = document.getElementById("botaoIniciar");

btn1.addEventListener("click", () => {
    return relogio.status = true;
})

const btn2 = document.getElementById("botaoParar");

btn2.addEventListener("click", () => {
    if (btn1.innerText === "Iniciar" && relogio.status === true){
        btn1.innerText = "Continuar";
    }
    return relogio.status = false;
})

const btn3 = document.getElementById("botaoRecomecar");

btn3.addEventListener("click", () => {
    zerarCronometro();
    btn1.innerText = "Iniciar";
    return relogio.status = false;
})





