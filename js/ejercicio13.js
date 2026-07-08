function verificar(){
    var num = document.getElementById("edad").value;
    var edad = parseFloat(num);

    if(!isNaN(edad) && edad > 0){
        
        if(edad >= 18) {
            document.getElementById("resultado").value = "Puedes votar";
        } else {
            document.getElementById("resultado").value = "No puedes votar";
        }

    } else {
        document.getElementById("resultado").value = "Ingresa un número válido mayor a 0";
    }
}