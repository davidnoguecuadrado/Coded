function EncriptarABarnus() {
    var texto = $("#campo-texto").val();
    $("#campo-texto-no-editable").val(texto);
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
    var alfabetoReferencia1 = ["a", "b", "c", "d", "e"];
    var alfabetoReferencia2 = ["f", "g", "h", "i", "j"];
    var alfabetoReferencia3 = ["k", "l", "m", "n", "o"];
    var alfabetoReferencia4 = ["p", "q", "r", "s", "t"];
    var alfabetoReferencia5 = ["u", "v", "w", "x", "y", "z"];

}