$(document).ready(function() {

    $('#estilo-selector').change(function() {
        var valorSeleccionado = $(this).val();
        
        // Realiza una acción basada en el valor seleccionado
        if (valorSeleccionado === '2' || valorSeleccionado === '3') {
            $('#label-mes, #mes, #label-dia, #dia').show();        
        }
        else{
            $('#label-mes, #mes, #label-dia, #dia').hide();        
        }
    });

    $('#modo-selector').change(function() {
        var valorSeleccionado = $(this).val();
        
        // Realiza una acción basada en el valor seleccionado
        if (valorSeleccionado === '2') {
            $('#campo-texto-no-editable').removeClass("pigpen-text");    
            $('#campo-texto').addClass("pigpen-text");
            $('#boton-encriptar').text("Desencriptar");
            $('.campo-texto-lable').text("Texto Encriptado");
            $('.campo-texto-no-editable-lable').text("Texto Desencriptado");

        }
        else{
            $('#campo-texto').removeClass("pigpen-text");    
            $('#campo-texto-no-editable').addClass("pigpen-text");         
            $('#boton-encriptar').text("Encriptar");
            $('.campo-texto-no-editable-lable').text("Texto Encriptado");
            $('.campo-texto-lable').text("Texto Desencriptado");  
        }
    });

    $('#campo-texto').on('input', function() {
        $(this).css('height', 'auto');
        $(this).css('height', this.scrollHeight + 'px');
    });

    $('#boton-encriptar').click(function() {
        var modo = $('#modo-selector').val();
        if(modo == 1){
            encriptar();
        }
        else{
            desencriptar();
        }
    });
});


function desencriptar(){

    // Copiar el texto del primer textarea al segundo
    var texto = $('#campo-texto').val();
    var tipo = $('#estilo-selector').val();

    if(tipo == 1){
        convertirANormal();
    }
    else if(tipo == 2){
        if(verificarCamposObligatorios()){
            
            texto=desCifradoSusurros(texto);
        }   
        else{
            mostrarAlertHacker("Rellena todos los datos como toca >:(");
        }
    }
    else if(tipo == 3){
        if(verificarCamposObligatorios()){
            
            texto=cifradoBarnus(texto);
        }   
        else{
            mostrarAlertHacker("Rellena todos los datos como toca >:(");
        }
    }
    
    $('#campo-texto-no-editable').val(texto);
    
    // Ajustar la altura del segundo textarea
    $('#campo-texto-no-editable').css('height', 'auto'); // Restablece la altura
    $('#campo-texto-no-editable').css('height', $('#campo-texto-no-editable')[0].scrollHeight + 'px'); // Ajusta la altura al contenido     
    convertirANormal();
}


function convertirANormal() {
    $('#campo-texto-no-editable').removeClass("pigpen-text");
}

function encriptar(){

        // Copiar el texto del primer textarea al segundo
        var texto = $('#campo-texto').val();
        var tipo = $('#estilo-selector').val();

        if(tipo == 1){
            convertirAPigpen();
        }
        else if(tipo == 2){
            if(verificarCamposObligatorios()){
                
                texto=cifradoSusurros(texto);
            }   
            else{
                mostrarAlertHacker("Rellena todos los datos como toca >:(");
            }
        }
        else if(tipo == 3){
            if(verificarCamposObligatorios()){
                
                texto=cifradoBarnus(texto);
            }   
            else{
                mostrarAlertHacker("Rellena todos los datos como toca >:(");
            }
        }
        
        $('#campo-texto-no-editable').val(texto);
        
        // Ajustar la altura del segundo textarea
        $('#campo-texto-no-editable').css('height', 'auto'); // Restablece la altura
        $('#campo-texto-no-editable').css('height', $('#campo-texto-no-editable')[0].scrollHeight + 'px'); // Ajusta la altura al contenido     

}
function cifradoBarnus(texto){
    convertirAPigpen();
    bloque1 = 
    [
        {"a":"a"},
        {"b":"b"},
        {"c":"c"},
        {"d":"d"},
        {"e":"e"},
        {"f":"f"},
        {"g":"g"},
        {"h":"h"},
        {"i":"i"}
    ]

    bloque2 = 
    [
        {"j":"j"},
        {"k":"k"},
        {"l":"l"},
        {"m":"m"},
        {"n":"n"},
        {"o":"o"},
        {"p":"p"},
        {"q":"q"},
        {"r":"r"}
    ]

    bloque3 =
    [
        {"s":"s"},
        {"u":"u"},
        {"v":"v"},
        {"t":"t"}
    ]

    bloque4 =
    [
        {"w":"w"},
        {"y":"y"},
        {"z":"z"},
        {"x":"x"}
    ]

    var mes = $('#mes').val();
    var dia = $('#dia').val();
    var mesSeparadio = separarDigitos(mes);
    var diaSeparado =   separarDigitos(dia);
    var cifrado = 0;
    mesSeparadio.forEach(element => {
        cifrado += element
    });
    diaSeparado.forEach(element => {
        cifrado += element
    });
    
    let desplazamiento = cifrado; // Por ejemplo, desplazamiento de 2 hacia la derecha
    let [minCharCode, maxCharCode] = encontrarRango(bloque1);
    
    if(esPar(mes)){
        var bloqueCifrado1 = cesarCipherBloque(bloque1, QuitarMultiplosRestar(desplazamiento), 'izquierda', minCharCode, maxCharCode);
        var bloqueCifrado2 = cesarCipherBloque(bloque2, QuitarMultiplosSumar(desplazamiento), 'derecha', minCharCode, maxCharCode);
        var bloqueCifrado3 = cesarCipherBloque(bloque3, QuitarMultiplosRestar(desplazamiento), 'izquierda', minCharCode, maxCharCode);
        var bloqueCifrado4 = cesarCipherBloque(bloque4, QuitarMultiplosSumar(desplazamiento), 'derecha', minCharCode, maxCharCode);
    }
    else{
        var bloqueCifrado1 = cesarCipherBloque(bloque1, QuitarMultiplosSumar(desplazamiento), 'derecha', minCharCode, maxCharCode);
        var bloqueCifrado2 = cesarCipherBloque(bloque2, QuitarMultiplosRestar(desplazamiento), 'izquierda', minCharCode, maxCharCode);
        var bloqueCifrado3 = cesarCipherBloque(bloque3, QuitarMultiplosSumar(desplazamiento), 'derecha', minCharCode, maxCharCode);
        var bloqueCifrado4 = cesarCipherBloque(bloque4, QuitarMultiplosRestar(desplazamiento), 'izquierda', minCharCode, maxCharCode);
    }

    var textoReemplazado = reemplazarLetrasConBloquesDeEjemplo(texto, bloqueCifrado1);
    textoReemplazado = reemplazarLetrasConBloquesDeEjemplo(textoReemplazado, bloqueCifrado2);
    textoReemplazado = reemplazarLetrasConBloquesDeEjemplo(textoReemplazado, bloqueCifrado3);
    textoReemplazado = reemplazarLetrasConBloquesDeEjemplo(textoReemplazado, bloqueCifrado4);
    return textoReemplazado;
}

function reemplazarLetrasConBloquesDeEjemplo(texto, bloquesDeEjemplo) {
    var resultado = texto;
    for (var i = 0; i < bloquesDeEjemplo.length; i++) {
        var bloque = bloquesDeEjemplo[i];
        for (var key in bloque) {
            if (bloque.hasOwnProperty(key)) {
                var regex = new RegExp(key, "gi"); // "gi" para reemplazar todas las apariciones, ignorando mayúsculas y minúsculas
                resultado = resultado.replace(regex, bloque[key]);
            }
        }
    }
    return resultado;
}

function QuitarMultiplosSumar(numero){
    var numret = numero
    if(esMultiploDeNueve(numret) || esMultiploDeCuatro(numret)){
        numret += 1
        QuitarMultiplosSumar(numret);
        return numret;
    }
    else{
        return numret;
    }

}

function QuitarMultiplosRestar(numero){
    var numret = numero
    if(esMultiploDeNueve(numret) || esMultiploDeCuatro(numret)){
        numret -= 1
        QuitarMultiplosSumar(numret);
        return numret;
    }
    else{
        return numret;
    }
}

function esMultiploDeNueve(numero) {
    var sumaDigitos = 0;
    var numString = numero.toString();
    for (var i = 0; i < numString.length; i++) {
        sumaDigitos += parseInt(numString[i]);
    }
    return sumaDigitos % 9 === 0;
}

function esMultiploDeCuatro(numero) {
    var sumaDigitos = 0;
    var numString = numero.toString();
    for (var i = 0; i < numString.length; i++) {
        sumaDigitos += parseInt(numString[i]);
    }
    return sumaDigitos % 4 === 0;
}

function encontrarRango(bloque) {
    let primerObjeto = bloque[0];
    let ultimoObjeto = bloque[bloque.length - 1];
    let primerValor = Object.values(primerObjeto)[0];
    let ultimoValor = Object.values(ultimoObjeto)[0];
    let minCharCode = primerValor.charCodeAt(0);
    let maxCharCode = ultimoValor.charCodeAt(0);

    return [minCharCode, maxCharCode];
}

function cesarCipherBloque(bloque, desplazamiento, direccion, minCharCode, maxCharCode) {
    // Asegurarse de que el desplazamiento esté dentro del rango [0, 25]
    desplazamiento = desplazamiento % (maxCharCode - minCharCode + 1);
    if (desplazamiento < 0) {
        desplazamiento += (maxCharCode - minCharCode + 1);
    }

    let resultado = [];

    bloque.forEach(obj => {
        let llave = Object.keys(obj)[0];
        let valor = obj[llave];
        let code = valor.charCodeAt(0);

        // Aplicar el desplazamiento según la dirección especificada
        if (direccion === 'izquierda') {
            code -= desplazamiento;
            if (code < minCharCode) {
                code += (maxCharCode - minCharCode + 1);
            }
        } else {
            code += desplazamiento;
            if (code > maxCharCode) {
                code -= (maxCharCode - minCharCode + 1);
            }
        }

        // Convertir el código ASCII resultante de vuelta a carácter
        valor = String.fromCharCode(code);
        let nuevoObj = {};
        nuevoObj[llave] = valor;
        resultado.push(nuevoObj);
    });

    return resultado;
}

function cifradoSusurros(texto){
    convertirAPigpen();
    var mes = $('#mes').val();
    var dia = $('#dia').val();
    var mesSeparadio = separarDigitos(mes);
    var diaSeparado =   separarDigitos(dia);
    var cifrado = 0;
    mesSeparadio.forEach(element => {
        cifrado += element
    });
    diaSeparado.forEach(element => {
        cifrado += element
    });
    if(cifrado == 26){
        if(esPar(mes)){
            cifrado == 25
        }
        else{
            cifrado == 27
        }
    }

    if(esPar(mes)){
        texto=cesarCipher(texto,cifrado,"derecha");
    }
    else{
        texto=cesarCipher(texto,cifrado,"izquierda");
    }
    return texto;
}
// Función para mostrar un alert con estilo hacker
function mostrarAlertHacker(mensaje) {
    // Crear un elemento div para el alert
    var alertDiv = $('<div>');
    alertDiv.addClass('alert-hacker');
    alertDiv.text(mensaje);
    
    // Agregar el alert al body
    $('body').append(alertDiv);
    
    // Eliminar el alert después de unos segundos
    setTimeout(function() {
        alertDiv.remove();
    }, 3000);
}

function convertirAPigpen() {
    $('#campo-texto-no-editable').addClass("pigpen-text");
}

// Función para verificar si los campos obligatorios están llenos
function verificarCamposObligatorios() {
    var mes = $('#mes').val();
    var dia = $('#dia').val();
    var texto = $('#campo-texto').val();
    
    // Verificar si el mes y el día son números
    var esNumeroMes = !isNaN(mes);
    var esNumeroDia = !isNaN(dia);
    
    // Si los campos obligatorios están llenos y el mes y el día son números, habilita el botón
    if (mes && dia && texto && esNumeroMes && esNumeroDia) {
        return true;
    } else {
        return false;
    }
}


function cesarCipher(texto, desplazamiento, direccion) {
    // Asegurarse de que el desplazamiento esté dentro del rango [0, 25]
    desplazamiento = desplazamiento % 26;
    if (desplazamiento < 0) {
        desplazamiento += 26;
    }

    // Convertir el texto a mayúsculas para mantener la coherencia
    texto = texto.toUpperCase();

    let resultado = '';

    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];
        if (char.match(/[A-Z]/)) {
            // Obtener el código ASCII del carácter actual
            let code = texto.charCodeAt(i);
            // Aplicar el desplazamiento según la dirección especificada
            if (direccion === 'izquierda') {
                code -= desplazamiento;
                if (code < 65) {
                    code += 26;
                }
            } else {
                code += desplazamiento;
                if (code > 90) {
                    code -= 26;
                }
            }
            // Convertir el código ASCII resultante de vuelta a carácter
            char = String.fromCharCode(code);
        }
        // Concatenar el carácter al resultado
        resultado += char;
    }

    return resultado;
}

function separarDigitos(numero) {
    // Convertir el número a una cadena para poder acceder a cada dígito
    var numeroStr = numero.toString();
    
    // Crear un array para almacenar los dígitos individuales
    var digitos = [];
    
    // Iterar sobre cada carácter en la cadena y convertirlo de nuevo a un número
    for (var i = 0; i < numeroStr.length; i++) {
        digitos.push(parseInt(numeroStr[i]));
    }
    
    // Devolver el array de dígitos individuales
    return digitos;
}

function esPar(numero) {
    return numero % 2 === 0;
}

function desCifradoSusurros(texto){
    convertirAPigpen();
    var mes = $('#mes').val();
    var dia = $('#dia').val();
    var mesSeparadio = separarDigitos(mes);
    var diaSeparado =   separarDigitos(dia);
    var cifrado = 0;
    mesSeparadio.forEach(element => {
        cifrado += element
    });
    diaSeparado.forEach(element => {
        cifrado += element
    });
    if(cifrado == 26){
        if(esPar(mes)){
            cifrado == 25
        }
        else{
            cifrado == 27
        }
    }

    if(esPar(mes)){
        texto=cesarCipher(texto,cifrado,"izquierda");
    }
    else{
        texto=cesarCipher(texto,cifrado,"derecha");
    }
    return texto;
}