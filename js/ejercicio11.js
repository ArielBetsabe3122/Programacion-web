function convertir(){
    var num=document.getElementById("numero").value;
    var k= parseFloat(num);

    if(!isNaN(k) && k>0){
        var resultado=(k*0.62137);
        document.getElementById("resultado").value = resultado + " M";
    } else {
        document.getElementById("resultado").value = "Ingresa un número mayor a 0";
    }
}