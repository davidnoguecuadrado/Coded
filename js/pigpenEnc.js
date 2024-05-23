function EncriptarAPigpen() {
    var texto = $("#campo-texto").val();
    $("#campo-texto-no-editable").val(texto);
    convertirAPigpen();
}

function convertirAPigpen( c) {
    $('#campo-texto-no-editable').addClass("pigpen-text");
}
