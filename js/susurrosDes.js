function DesencriptarSusurros() {
    var textoEncriptado = $("#campo-texto").val();
    $("#campo-texto-no-editable").val(textoEncriptado);
    revertirTransformacionSusurros(textoEncriptado);
    removerPigpen();
}

function revertirTransformacionSusurros(textoEncriptado) {
    var textArray = dividirStringAArraySusurros(textoEncriptado);
    $('#campo-texto-no-editable').val(textoDesencriptadoSusurros(textArray));
}

function removerPigpen() {
    $('#campo-texto-no-editable').removeClass("pigpen-text");
}

function dividirStringAArraySusurros(texto) {
    var textArray = texto.split("");
    return textArray;
}

function textoDesencriptadoSusurros(textArray) {
    var alfabetoReferenciaMovido = moverAlfabetoSusurros();
    var textoMovido = revertirTexto(alfabetoReferenciaMovido, textArray);
    return textoMovido;
}

function revertirTexto(alfabetoReferenciaMovido, textArray) {
    var alfabetoReferencia = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var textoMovido = [];
    textArray.forEach(letra => {
        var letraNormalizada = letra.toLowerCase();
        var index = alfabetoReferenciaMovido.indexOf(letraNormalizada);
        var letraDesencriptada = alfabetoReferencia[index];
        textoMovido.push(letraDesencriptada);
    });
    var textoReturn = "";
    textoMovido.forEach(letra => {
        textoReturn += letra;
    });
    return textoReturn;
}

function moverAlfabetoSusurros() {
    var mes = parseInt($("#mes").val(), 10);
    var dia = parseInt($("#dia").val(), 10);
    var numero = mes + dia;
    if (numero == 26) {
        if ((mes % 2) == 0) {
            numero = numero + 1;
        } else {
            numero = numero - 1;
        }
    }
    if ((mes % 2) == 0) numero = numero * -1;

    var alfabetoReferencia = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var alfabetoReferenciaMovido = [];

    for (var i = 0; i < alfabetoReferencia.length; i++) {
        var nuevaPosicion = (i + numero) % alfabetoReferencia.length;
        if (nuevaPosicion < 0) {
            nuevaPosicion += alfabetoReferencia.length;
        }
        alfabetoReferenciaMovido.push(alfabetoReferencia[nuevaPosicion]);
    }

    return alfabetoReferenciaMovido;
}
