function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}

function division(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Error: División por cero";
    }
}

function calcularOperacion(operacion) {
    var val1 = document.getElementById("numero1").value;
    var val2 = document.getElementById("numero2").value;
    
    var num1 = parseFloat(val1);
    var num2 = parseFloat(val2);

    if (!isNaN(num1) && !isNaN(num2)) {
        var resultado;

        if (operacion === 'suma') {
            resultado = suma(num1, num2); 
        } else if (operacion === 'resta') {
            resultado = resta(num1, num2);
        } else if (operacion === 'multiplicacion') {
            resultado = multiplicacion(num1, num2);
        } else if (operacion === 'division') {
            resultado = division(num1, num2); 
        }

        document.getElementById("resultado").value = resultado;
    } else {
        document.getElementById("resultado").value = "Ingresa numeros validos";
    }
}