function convertir(){
    var num=document.getElementById("numero").value;
    var celsius= parseInt(num);

    if(!isNaN(celsius)){
        var resultado=(celsius* 9/5)+32;
        document.getElementById("resultado").value = resultado + " °F";
    } else {
        document.getElementById("resultado").value = "Error: Ingresa un número";
    }
}