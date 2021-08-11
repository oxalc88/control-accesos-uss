// Funciones de Accesos
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
        color: 'rojo',
        placa:'B4J784',
        fin_soat: '31/08/2023',
        empresa: 'Ransa'
    },
    {
        placa:'O5B764',
        fin_soat: '31/08/2020',
        empresa: 'Luna'
    },
    {
        placa:'V4J654',
        fin_soat: '07/09/2024',
        empresa: 'Jupiter'
    }
];

//para autorizar placa
const check = document.getElementById('check');

//para obtener datos persona

const documento = document.getElementById('documento');
const valorDocumento = documento.value;


// para obtener datos del vehiculo
const vehicle = document.getElementById('vehicle');
const getVehicle = vehicle.value;

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
let buscarDocumento = function(persona, documento, valorDocumento) {
    return persona.documento = valorDocumento
};

function obtenerVisita (){
    let visita = personas.find(buscarDocumento)
    return console.log(visita)
}

// para buscar vehiculo
let buscarVehiculo = function(vehiculo, vehicle, getVehicle) {
    return vehiculo.placa = getVehicle
};

function obtenerVehiculo (){
    let auto = vehiculos.find(buscarVehiculo)
    return console.log(auto)
}

function acceso (){
    obtenerVisita();
    obtenerVehiculo();
}

check.addEventListener("click", on);
consulta.addEventListener("click", obtenerVisita);

