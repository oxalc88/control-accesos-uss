// para llenar con jquery
function relleno (_e){
    $("#permisos").append(`<div><h3>Autorizado</h3>
    <p>${_e.nombre} ${_e.apellido}</p>
    <p>${_e.documento}</p>
    <p>${_e.empresa}</p>
    <p>SCTR vigente hasta: ${_e.fin_sctr}</p>
    <p>${_e.placa}</p>
    <p>${_e.marca}</p>
    <p>${_e.modelo}</p>
    <p>${_e.color}</p>
    <p>Pertenece${_e.empresa_vehiculo}</p>
    </div>`);
}

function acceso (){
    let addPersona = obtenerVisita();
    let addAuto = obtenerVehiculo();
    let entrada = {...addPersona, ...addAuto};
    relleno(entrada);
    return console.log(entrada);
}

consulta.addEventListener("click", acceso);

