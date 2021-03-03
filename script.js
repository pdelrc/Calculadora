const botonNumeros = document.getElementsByName("data-number");
const botonOpera = document.getElementsByName("data-opera");
const botonIgual = document.getElementsByName("data-igual")[0];
const botonDelete = document.getElementsByName("data-delete")[0];
let result = document.getElementById("result");
let opeActual = "";
let opeAnterior = "";
let operacion = undefined;

botonNumeros.forEach(function(boton) {
    boton.addEventListener("click", function() {
        agregarNumero(boton.innerText);
    })
});

botonOpera.forEach(function(boton){
    boton.addEventListener("click", function(){
        selectOperacion(boton.innerText);
    })
});

botonIgual.addEventListener("click", function(){
    calcular();
    actualizarDisplay();
});

botonDelete.addEventListener("click", function(){
    clear();
    actualizarDisplay();
});

function selectOperacion(op) {
    if(opeActual === "") return;
    if(opeAnterior !== "") {
        calcular()
    }
    operacion = op.toString();
    opeAnterior = opeActual;
    opeActual = "";
}

function calcular() {
    let calculo;
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);
    if (isNaN(anterior) || isNaN(actual)) return;
    switch(operacion) {
        case "+":
            calculo = actual + anterior;
            break;
        case "-":
            calculo = actual - anterior;
            break;
        case "*":
            calculo = actual * anterior;
            break;
        case "/":
            calculo = actual / anterior;
            break;
    }
    opeActual = calculo;
    operacion = undefined;
    opeAnterior = "";
}

function agregarNumero(num) {
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();
}

function clear() {
    opeActual  = "";
    opeAnterior = "";
    operacion = undefined;
}

function actualizarDisplay() {
    result.value = opeActual;
}

clear();