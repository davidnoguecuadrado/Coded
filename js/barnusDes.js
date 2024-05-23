function DesencriptarTextoBarnus() {
    var texto = $("#campo-texto").val();
    DestransformarTextoBarnus(texto);    
    DesconvertirAPigpen();
}

function DesconvertirAPigpen() {
    $('#campo-texto-no-editable').removeClass("pigpen-text");
}

function DestransformarTextoBarnus(texto){
    var textArray = DesdividirStringAArrayBarnus(texto);
    $('#campo-texto-no-editable').val(DestextoEncriptadoBarnus(textArray));
}

function DesdividirStringAArrayBarnus(texto) {
    var textArray = texto.split("");
    return textArray;
}

function DestextoEncriptadoBarnus(textArray){
    var alfabetoReferencia1movido = DesmoverAlfabeto1Barnus();
    var TextoMovido1 = DesmoverTexto1Barnus(alfabetoReferencia1movido,textArray);
    var alfabetoReferencia2movido = DesmoverAlfabeto2Barnus();
    var TextoMovido2 = DesmoverTexto2Barnus(alfabetoReferencia2movido,TextoMovido1);
    var alfabetoReferencia3movido = DesmoverAlfabeto3Barnus();
    var TextoMovido3 = DesmoverTexto3Barnus(alfabetoReferencia3movido,TextoMovido2);
    var alfabetoReferencia4movido = DesmoverAlfabeto4Barnus();
    var TextoMovido4 = DesmoverTexto4Barnus(alfabetoReferencia4movido,TextoMovido3);
    var alfabetoReferencia5movido = DesmoverAlfabeto5Barnus();
    var TextoMovido5 = DesmoverTexto5Barnus(alfabetoReferencia5movido,TextoMovido4);
    var textoReturn="";
    TextoMovido5.forEach(letra => {
        textoReturn = textoReturn + letra;
    });
    return textoReturn;
}

//Barnus1
function DesmoverAlfabeto1Barnus(){
    var mes = parseInt($("#mes").val(), 10);
    var dia = parseInt($("#dia").val(), 10);
    var numero = mes + dia;
    if (numero == 5){
        if ((mes % 2) == 0){
            numero = numero - 1;
        }
        else{
            numero = numero + 1;
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

function DesmoverTexto1Barnus(alfvafetoReferenciaMovido,textArray){
    var alfvafetoReferencia =["a", "b", "c", "d", "e"];
    var textoMovido = []; 
    textArray.forEach(letra => {
        var letraNormalizada = letra.toLowerCase();
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
function DesmoverAlfabeto2Barnus(){
    var mes = parseInt($("#mes").val(), 10);
    var dia = parseInt($("#dia").val(), 10);
    var numero = mes + dia;
    if (numero == 5){
        if ((mes % 2) != 0){
            numero = numero - 1;
        }
        else{
            numero = numero + 1;
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

function DesmoverTexto2Barnus(alfvafetoReferenciaMovido,textArray){
    var alfvafetoReferencia =["f", "g", "h", "i", "j"];
    var textoMovido = []; 
    textArray.forEach(letra => {
        var letraNormalizada = letra.toLowerCase();
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
function DesmoverAlfabeto3Barnus(){
    var mes = parseInt($("#mes").val(), 10);
    var dia = parseInt($("#dia").val(), 10);
    var numero = mes + dia;
    if (numero == 5){
        if ((mes % 2) == 0){
            numero = numero - 1;
        }
        else{
            numero = numero + 1;
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

function DesmoverTexto3Barnus(alfvafetoReferenciaMovido,textArray){
    var alfvafetoReferencia =["k", "l", "m", "n", "o"];
    var textoMovido = []; 
    textArray.forEach(letra => {
        var letraNormalizada = letra.toLowerCase();
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
function DesmoverAlfabeto4Barnus(){
    var mes = parseInt($("#mes").val(), 10);
    var dia = parseInt($("#dia").val(), 10);
    var numero = mes + dia;
    if (numero == 5){
        if ((mes % 2) != 0){
            numero = numero - 1;
        }
        else{
            numero = numero + 1;
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

function DesmoverTexto4Barnus(alfvafetoReferenciaMovido,textArray){
    var alfvafetoReferencia =["p", "q", "r", "s", "t"];
    var textoMovido = []; 
    textArray.forEach(letra => {
        var letraNormalizada = letra.toLowerCase();
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
function DesmoverAlfabeto5Barnus(){
    var mes = parseInt($("#mes").val(), 10);
    var dia = parseInt($("#dia").val(), 10);
    var numero = mes + dia;
    if (numero == 6){
        if ((mes % 2) == 0){
            numero = numero - 1;
        }
        else{
            numero = numero + 1;
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

function DesmoverTexto5Barnus(alfvafetoReferenciaMovido,textArray){
    var alfvafetoReferencia = ["u", "v", "w", "x", "y", "z"];
    var textoMovido = []; 
    textArray.forEach(letra => {
        var letraNormalizada = letra.toLowerCase();
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
