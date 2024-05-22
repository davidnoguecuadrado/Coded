function EncriptarABarnus() {
    var texto = $("#campo-texto").val();
    transformarTextoBarnus(texto)    
    convertirAPigpen();
}

function convertirAPigpen( c) {
    $('#campo-texto-no-editable').addClass("pigpen-text");
}
function transformarTextoBarnus(texto){
    var textArray = dividirStringAArrayBarnus(texto);
    $('#campo-texto-no-editable').val(textoEncriptadoBarnus(textArray));
}

function dividirStringAArrayBarnus(texto) {
    var textArray = texto.split("");
    return textArray;
}

function textoEncriptadoBarnus(textArray){
    var alfabetoReferencia1movido = moverAlfaveto1Barnus();
    var TextoMovido1 = moverTexto1Barnus(alfabetoReferencia1movido,textArray);
    var alfabetoReferencia2movido = moverAlfaveto2Barnus();
    var TextoMovido2 = moverTexto2Barnus(alfabetoReferencia2movido,TextoMovido1);
    var alfabetoReferencia3movido = moverAlfaveto3Barnus();
    var TextoMovido3 = moverTexto3Barnus(alfabetoReferencia3movido,TextoMovido2);
    var alfabetoReferencia4movido = moverAlfaveto4Barnus();
    var TextoMovido4 = moverTexto4Barnus(alfabetoReferencia4movido,TextoMovido3);
    var alfabetoReferencia5movido = moverAlfaveto5Barnus();
    var TextoMovido5 = moverTexto5Barnus(alfabetoReferencia5movido,TextoMovido4);
    var textoReturn="";
    TextoMovido5.forEach(letra => {
        textoReturn = textoReturn + letra;
    })
    return textoReturn;
}

//Barnus1
function moverAlfaveto1Barnus(){
    var mes = parseInt($("#mes").val(), 10);
    var dia = parseInt($("#dia").val(), 10);
    var numero = mes + dia;
    if (numero == 5){
        if ((mes % 2) == 0){
            numero = numero - 1
        }
        else{
            numero = numero + 1
        }
    }
    if ((mes % 2) != 0) numero = numero * -1;

    var alfabetoReferencia = ["a", "b", "c", "d", "e"];
    var alfabetoReferenciaMovido1 = [];

    for (var i = 0; i < alfabetoReferencia.length; i++) {
        var nuevaPosicion = (i + numero) % alfabetoReferencia.length;
        if (nuevaPosicion < 0) {
            nuevaPosicion += alfabetoReferencia.length;
        }
        alfabetoReferenciaMovido1.push(alfabetoReferencia[nuevaPosicion]);
    }

    console.log(alfabetoReferenciaMovido1);

    return alfabetoReferenciaMovido1;
}

function moverTexto1Barnus(alfvafetoReferenciaMovido,textArray){
    var alfvafetoReferencia =["a", "b", "c", "d", "e"];
    var textoMovido = []; 
    textArray.forEach(letra => {
        var letraNormalizada = letra.toLowerCase()
        var index = 0;
        var index = alfvafetoReferencia.indexOf(letraNormalizada);
        if(index == -1){
            textoMovido.push(letra);
        }
        else{
            var letraEncripitada= alfvafetoReferenciaMovido[index];
            textoMovido.push(letraEncripitada);
        }
    });
    return textoMovido;
}

//Barnus2
function moverAlfaveto2Barnus(){
    var mes = parseInt($("#mes").val(), 10);
    var dia = parseInt($("#dia").val(), 10);
    var numero = mes + dia;
    if (numero == 5){
        if ((mes % 2) != 0){
            numero = numero - 1
        }
        else{
            numero = numero + 1
        }
    }
    if ((mes % 2) == 0) numero = numero * -1;

    var alfabetoReferencia = ["f", "g", "h", "i", "j"];
    var alfabetoReferenciaMovido1 = [];

    for (var i = 0; i < alfabetoReferencia.length; i++) {
        var nuevaPosicion = (i + numero) % alfabetoReferencia.length;
        if (nuevaPosicion < 0) {
            nuevaPosicion += alfabetoReferencia.length;
        }
        alfabetoReferenciaMovido1.push(alfabetoReferencia[nuevaPosicion]);
    }

    console.log(alfabetoReferenciaMovido1);

    return alfabetoReferenciaMovido1;
}

function moverTexto2Barnus(alfvafetoReferenciaMovido,textArray){
    var alfvafetoReferencia =["f", "g", "h", "i", "j"];
    var textoMovido = []; 
    textArray.forEach(letra => {
        var letraNormalizada = letra.toLowerCase()
        var index = 0;
        var index = alfvafetoReferencia.indexOf(letraNormalizada);
        if(index == -1){
            textoMovido.push(letra);
        }
        else{
            var letraEncripitada= alfvafetoReferenciaMovido[index];
            textoMovido.push(letraEncripitada);
        }
    });
    return textoMovido;
}

//Barnus3
function moverAlfaveto3Barnus(){
    var mes = parseInt($("#mes").val(), 10);
    var dia = parseInt($("#dia").val(), 10);
    var numero = mes + dia;
    if (numero == 5){
        if ((mes % 2) == 0){
            numero = numero - 1
        }
        else{
            numero = numero + 1
        }
    }
    if ((mes % 2) != 0) numero = numero * -1;

    var alfabetoReferencia = ["k", "l", "m", "n", "o"];
    var alfabetoReferenciaMovido1 = [];

    for (var i = 0; i < alfabetoReferencia.length; i++) {
        var nuevaPosicion = (i + numero) % alfabetoReferencia.length;
        if (nuevaPosicion < 0) {
            nuevaPosicion += alfabetoReferencia.length;
        }
        alfabetoReferenciaMovido1.push(alfabetoReferencia[nuevaPosicion]);
    }

    console.log(alfabetoReferenciaMovido1);

    return alfabetoReferenciaMovido1;
}

function moverTexto3Barnus(alfvafetoReferenciaMovido,textArray){
    var alfvafetoReferencia =["k", "l", "m", "n", "o"];
    var textoMovido = []; 
    textArray.forEach(letra => {
        var letraNormalizada = letra.toLowerCase()
        var index = 0;
        var index = alfvafetoReferencia.indexOf(letraNormalizada);
        if(index == -1){
            textoMovido.push(letra);
        }
        else{
            var letraEncripitada= alfvafetoReferenciaMovido[index];
            textoMovido.push(letraEncripitada);
        }
    });
    return textoMovido;
}

//Barnus4
function moverAlfaveto4Barnus(){
    var mes = parseInt($("#mes").val(), 10);
    var dia = parseInt($("#dia").val(), 10);
    var numero = mes + dia;
    if (numero == 5){
        if ((mes % 2) != 0){
            numero = numero - 1
        }
        else{
            numero = numero + 1
        }
    }
    if ((mes % 2) == 0) numero = numero * -1;

    var alfabetoReferencia = ["p", "q", "r", "s", "t"];
    var alfabetoReferenciaMovido1 = [];

    for (var i = 0; i < alfabetoReferencia.length; i++) {
        var nuevaPosicion = (i + numero) % alfabetoReferencia.length;
        if (nuevaPosicion < 0) {
            nuevaPosicion += alfabetoReferencia.length;
        }
        alfabetoReferenciaMovido1.push(alfabetoReferencia[nuevaPosicion]);
    }

    console.log(alfabetoReferenciaMovido1);

    return alfabetoReferenciaMovido1;
}

function moverTexto4Barnus(alfvafetoReferenciaMovido,textArray){
    var alfvafetoReferencia =["p", "q", "r", "s", "t"];
    var textoMovido = []; 
    textArray.forEach(letra => {
        var letraNormalizada = letra.toLowerCase()
        var index = 0;
        var index = alfvafetoReferencia.indexOf(letraNormalizada);
        if(index == -1){
            textoMovido.push(letra);
        }
        else{
            var letraEncripitada= alfvafetoReferenciaMovido[index];
            textoMovido.push(letraEncripitada);
        }
    });
    return textoMovido;
}

//Barnus5
function moverAlfaveto5Barnus(){
    var mes = parseInt($("#mes").val(), 10);
    var dia = parseInt($("#dia").val(), 10);
    var numero = mes + dia;
    if (numero == 6){
        if ((mes % 2) == 0){
            numero = numero - 1
        }
        else{
            numero = numero + 1
        }
    }
    if ((mes % 2) != 0) numero = numero * -1;

    var alfabetoReferencia = ["u", "v", "w", "x", "y", "z"];
    var alfabetoReferenciaMovido1 = [];

    for (var i = 0; i < alfabetoReferencia.length; i++) {
        var nuevaPosicion = (i + numero) % alfabetoReferencia.length;
        if (nuevaPosicion < 0) {
            nuevaPosicion += alfabetoReferencia.length;
        }
        alfabetoReferenciaMovido1.push(alfabetoReferencia[nuevaPosicion]);
    }

    console.log(alfabetoReferenciaMovido1);

    return alfabetoReferenciaMovido1;
}

function moverTexto5Barnus(alfvafetoReferenciaMovido,textArray){
    var alfvafetoReferencia = ["u", "v", "w", "x", "y", "z"];
    var textoMovido = []; 
    textArray.forEach(letra => {
        var letraNormalizada = letra.toLowerCase()
        var index = 0;
        var index = alfvafetoReferencia.indexOf(letraNormalizada);
        if(index == -1){
            textoMovido.push(letra);
        }
        else{
            var letraEncripitada= alfvafetoReferenciaMovido[index];
            textoMovido.push(letraEncripitada);
        }
    });
    return textoMovido;
}