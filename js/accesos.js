// Funciones de Accesos
let access = [];

let personas = [
    {
        nombre: 'Juan',
        apellido: 'Rivas Flores',
        documento: '08593485',
        fin_sctr:'31/08/2021',
        empresa: 'Ransa'
    },
    {
        nombre: 'Roberto',
        apellido: 'Diaz Tejero',
        documento: '15367891',
        fin_sctr:'03/08/2021',
        empresa: 'Palmas Rodadas'
    },
    {
        nombre: 'Ruben',
        apellido: 'Ramos Ramon',
        documento: '78961235',
        fin_sctr:'07/08/2021',
        empresa: 'Tokio Goku'
    }
];

let vehiculos = [
    {
        marca:'Nissan',
        modelo: 'Sentra',
        color: 'Rojo',
        placa:'B4J784',
        fin_soat: '31/08/2023',
        empresa_vehiculo: 'Ransa'
    },
    {
        marca:'JAC',
        modelo: 'Patrol',
        color: 'Blanco',
        placa:'O5B764',
        fin_soat: '31/08/2020',
        empresa_vehiculo: 'Luna'
    },
    {
        marca:'Toyota',
        modelo: 'Corolla',
        color: 'Azul',
        placa:'V4J654',
        fin_soat: '07/09/2024',
        empresa_vehiculo: 'Jupiter'
    }
];

//para autorizar placa
const check = document.getElementById('check');

//para obtener datos persona

const documento = document.getElementById('documento');

// para obtener datos del vehiculo
const vehicle = document.getElementById('vehicle');


// para definir manejos de consulta y registro
const registrar = document.getElementById('registro');
const consulta = document.getElementById('consulta');



// para habilitar si entra con vehiculo
function on (){
    if (check.checked == true) {
        console.log("Oki Doki");
        vehicle.disabled = false;
    } else {
        console.log("Esperando");
        vehicle.disabled = true;
    }
}

// para buscar la persona 
function obtenerVisita (){
    const valorDocumento = documento.value;
    const visita = personas.find(persona => persona.documento === valorDocumento);
    //let addPeople = access.push(visita)
    return visita;
    //return console.log(visita);    
}

// para buscar vehiculo
function obtenerVehiculo (){
    const getVehicle = vehicle.value;
    let auto = vehiculos.find(vehiculo => vehiculo.placa === getVehicle)
    //let addVehicle = access.push(auto)
    return auto;
}

//para borrar
function erase(){
    const eliminar = document.getElementById('access-container');
    const form = document.getElementById('form');
    eliminar.removeChild(form)
}
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

function mostrarPermiso(){
    window.location.href = '/permiso.html';
}

function acceso (){
    let addPersona = obtenerVisita();
    let addAuto = obtenerVehiculo();
    let entrada = {...addPersona, ...addAuto};
    erase();
    relleno(entrada);
    // mostrarPermiso();
    return console.log(entrada);
}

check.addEventListener("click", on);
consulta.addEventListener("click", acceso);

