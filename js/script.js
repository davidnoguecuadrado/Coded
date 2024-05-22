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
}


