function EncriptarSusurros() {
    var texto = $("#campo-texto").val();
    $("#campo-texto-no-editable").val(texto);
    transformarTextoSusurros(texto);
    convertirAPigpen();
}
function transformarTextoSusurros(texto){
    var textArray = dividirStringAArraySusurros(texto);
    $('#campo-texto-no-editable').val(textoEncriptadoSusurros(textArray));
}
function convertirAPigpen() {
    $('#campo-texto-no-editable').addClass("pigpen-text");
}

function dividirStringAArraySusurros(texto) {
    var textArray = texto.split("");
    return textArray;
}

function textoEncriptadoSusurros(textArray){

    var alfvafetoReferenciaMovido = moverAlfavetoSusurros();
    var textomovido = moverTexto(alfvafetoReferenciaMovido,textArray);
    return textomovido;
}
function moverTexto(alfvafetoReferenciaMovido,textArray){
    var alfvafetoReferencia =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var textoMovido = []; 
    textArray.forEach(letra => {
        var letraNormalizada = letra.toLowerCase()
        var index = 0;
        var index = alfvafetoReferencia.indexOf(letraNormalizada);
        var letraEncripitada= alfvafetoReferenciaMovido[index];
        textoMovido.push(letraEncripitada);
    });
    var textoReturn="";
    textoMovido.forEach(letra => {
        textoReturn = textoReturn + letra;
    })
    return textoReturn;
}


function moverAlfavetoSusurros(){
    var mes = parseInt($("#mes").val(), 10);
    var dia = parseInt($("#dia").val(), 10);
    var numero = mes + dia;
    if (numero == 26){
        if ((mes % 2) == 0){
            numero = numero + 1
        }
        else{
            numero = numero - 1
        }
    }
    if ((mes % 2) != 0) numero = numero * -1;

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