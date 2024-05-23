$(document).ready(function() {
    $("#boton-encriptar").click(function() {
        var modo = $("#modo-selector").val();
        var dia = $("#dia").val();

        if(modo == 1){
            encriptar()
            return;
        }
        else{
            desencriptar()
        }
    });
    $("#estilo-selector").change(function(){
        var estilo = $(this).val();
        if(estilo == 1){
            $("#label-mes").hide()
            $("#mes").hide()
            $("#label-dia").hide()
            $("#dia").hide()
        }
        else{
            $("#label-mes").show()
            $("#mes").show()
            $("#label-dia").show()
            $("#dia").show()
        }
    });

    $("#estilo-selector").change(function(){
        var estilo = $(this).val();
        if(estilo == 1){
            $("#label-mes").hide()
            $("#mes").hide()
            $("#label-dia").hide()
            $("#dia").hide()
        }
        else{
            $("#label-mes").show()
            $("#mes").show()
            $("#label-dia").show()
            $("#dia").show()
        }
    });

    $("#modo-selector").change(function(){
        var modo = $(this).val();
        console.log(modo)
        if(modo == 1){
            $(".campo-texto-lable").text("Texto Desencriptado:")
            $(".campo-texto-no-editable-lable").text("Texto Encriptado:")
            $("#campo-texto").val("")
            $("#campo-texto-no-editable").val("")
            $('#campo-texto').removeClass("pigpen-text");
            $('#campo-texto-no-editable').addClass("pigpen-text");
            $("#boton-encriptar").text("Encriptar")

        }
        else{
            $(".campo-texto-no-editable-lable").text("Texto Desencriptado:")
            $(".campo-texto-lable").text("Texto Encriptado:")
            $("#campo-texto").val("")
            $("#campo-texto-no-editable").val("")
            $('#campo-texto-no-editable').removeClass("pigpen-text");
            $('#campo-texto').addClass("pigpen-text");
            $("#boton-encriptar").text("Desencriptar")

        }
    });
});


function encriptar() {
    var estilo = $("#estilo-selector").val();
    if(estilo == 1){
        EncriptarAPigpen();  
    }
    else if(estilo == 2){
        EncriptarSusurros();
    }
    else if(estilo == 3){
        EncriptarABarnus();
    }
}
function desencriptar() {
    var estilo = $("#estilo-selector").val();
    if(estilo == 1){
        DesencriptadoAPigpen();  
    }
    else if(estilo == 2){
        DesencriptarSusurros();
    }
    else if(estilo == 3){
        DesencriptarDeBarnus();
    }
}


