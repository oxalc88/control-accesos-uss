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
        empresa: 'Ransa'
    },
    {
        marca:'JAC',
        modelo: 'Patrol',
        color: 'Blanco',
        placa:'O5B764',
        fin_soat: '31/08/2020',
        empresa: 'Luna'
    },
    {
        marca:'Toyota',
        modelo: 'Corolla',
        color: 'Azul',
        placa:'V4J654',
        fin_soat: '07/09/2024',
        empresa: 'Jupiter'
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
    return console.log(visita);    
}

// para buscar vehiculo
function obtenerVehiculo (){
    const getVehicle = vehicle.value;
    let auto = vehiculos.find(vehiculo => vehiculo.placa === getVehicle)
    return console.log(auto)
}

function acceso (){
    let visita1 = obtenerVisita();
    let auto1 = obtenerVehiculo();
    //let access = auto1.concat(visita1);
    console.log(visita1);
    console.log(auto1);
    //console.log(access);
}

check.addEventListener("click", on);
consulta.addEventListener("click", acceso);

