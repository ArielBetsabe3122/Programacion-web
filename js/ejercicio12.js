function convertir(){
    var num=document.getElementById("numero").value;
    var pesos= parseFloat(num);

    if(!isNaN(pesos) && pesos>0){
        var resultado=(pesos*0.057);
        document.getElementById("resultado").value = resultado ;
    } else {
        document.getElementById("resultado").value = "Ingresa un número mayor a 0";
    }
}