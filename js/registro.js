//Para habilitar registro de vehículo
function on (){
    if (check.checked == true) {
        console.log("Oki Doki");
        vehicle.disabled = false;
    } else {
        console.log("Esperando");
        vehicle.disabled = true;
    }
}