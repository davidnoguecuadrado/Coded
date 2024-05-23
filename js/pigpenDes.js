function DesencriptadoAPigpen() {
    var texto = $("#campo-texto").val();
    $("#campo-texto-no-editable").val(texto);
    eliminarAPigpen();
}

function eliminarAPigpen( c) {
    $('#campo-texto-no-editable').removeClass("pigpen-text");
}
