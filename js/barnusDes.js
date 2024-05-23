function DesencriptarDeBarnus() {
    var texto = $("#campo-texto").val();
    texto = textoDesencriptadoBarnus(texto);
    console.log(texto)
    $('#campo-texto-no-editable').val(texto);
}

function textoDesencriptadoBarnus(texto) {
    var textArray = texto.split("");

    var alfabetoReferencia5movido = moverAlfaveto5BarnusDes();
    var TextoMovido4 = moverTexto5BarnusDesencriptar(alfabetoReferencia5movido, textArray);


    var alfabetoReferencia4movido = moverAlfaveto4BarnusDes();
    var TextoMovido3 = moverTexto4BarnusDesencriptar(alfabetoReferencia4movido, TextoMovido4);

    var alfabetoReferencia3movido = moverAlfaveto3BarnusDes();
    var TextoMovido2 = moverTexto3BarnusDesencriptar(alfabetoReferencia3movido, TextoMovido3);
    var alfabetoReferencia2movido = moverAlfaveto2BarnusDes();
    var TextoMovido1 = moverTexto2BarnusDesencriptar(alfabetoReferencia2movido, TextoMovido2);
    var alfabetoReferencia1movido = moverAlfaveto1BarnusDes();
    var TextoOriginal = moverTexto1BarnusDesencriptar(alfabetoReferencia1movido, TextoMovido1);
    var textoReturn = "";
    TextoOriginal.forEach(letra => {
        textoReturn = textoReturn + letra;
    });
    return textoReturn;
}

//Barnus1
function moverAlfaveto1BarnusDes(){
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

function moverTexto1BarnusDesencriptar(alfvafetoReferenciaMovido,textArray){
    var alfvafetoReferencia =["a", "b", "c", "d", "e"];
    var textoMovido = []; 
    textArray.forEach(letra => {
        var letraNormalizada = letra.toLowerCase()
        var index = 0;
        var index = alfvafetoReferenciaMovido.indexOf(letraNormalizada);
        if(index == -1){
            textoMovido.push(letra);
        }
        else{
            var letraEncripitada= alfvafetoReferencia[index];
            textoMovido.push(letraEncripitada);
        }
    });
    return textoMovido;
}

//Barnus2
function moverAlfaveto2BarnusDes(){
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

function moverTexto2BarnusDesencriptar(alfvafetoReferenciaMovido,textArray){
    var alfvafetoReferencia =["f", "g", "h", "i", "j"];
    var textoMovido = []; 
    textArray.forEach(letra => {
        var letraNormalizada = letra.toLowerCase()
        var index = 0;
        var index = alfvafetoReferenciaMovido.indexOf(letraNormalizada);
        if(index == -1){
            textoMovido.push(letra);
        }
        else{
            var letraEncripitada= alfvafetoReferencia[index];
            textoMovido.push(letraEncripitada);
        }
    });
    return textoMovido;
}

//Barnus3
function moverAlfaveto3BarnusDes(){
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

function moverTexto3BarnusDesencriptar(alfvafetoReferenciaMovido,textArray){
    var alfvafetoReferencia =["k", "l", "m", "n", "o"];
    var textoMovido = []; 
    textArray.forEach(letra => {
        var letraNormalizada = letra.toLowerCase()
        var index = 0;
        var index = alfvafetoReferenciaMovido.indexOf(letraNormalizada);
        if(index == -1){
            textoMovido.push(letra);
        }
        else{
            var letraEncripitada= alfvafetoReferencia[index];
            textoMovido.push(letraEncripitada);
        }
    });
    return textoMovido;
}

//Barnus4
function moverAlfaveto4BarnusDes(){
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

function moverTexto4BarnusDesencriptar(alfvafetoReferenciaMovido,textArray){
    var alfvafetoReferencia =["p", "q", "r", "s", "t"];
    var textoMovido = []; 
    textArray.forEach(letra => {
        var letraNormalizada = letra.toLowerCase()
        var index = 0;
        var index = alfvafetoReferenciaMovido.indexOf(letraNormalizada);
        if(index == -1){
            textoMovido.push(letra);
        }
        else{
            var letraEncripitada= alfvafetoReferencia[index];
            textoMovido.push(letraEncripitada);
        }
    });
    return textoMovido;
}

//Barnus5
function moverAlfaveto5BarnusDes(){
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

function moverTexto5BarnusDesencriptar(alfvafetoReferenciaMovido,textArray){
    var alfvafetoReferencia = ["u", "v", "w", "x", "y", "z"];
    var textoMovido = []; 
    textArray.forEach(letra => {
        var letraNormalizada = letra.toLowerCase()
        var index = 0;
        var index = alfvafetoReferenciaMovido.indexOf(letraNormalizada);
        if(index == -1){
            textoMovido.push(letra);
        }
        else{
            var letraEncripitada= alfvafetoReferencia[index];
            textoMovido.push(letraEncripitada);
        }
    });
    return textoMovido;
} 
