// import { functionsIn } from "lodash";

// Funciones de Accesos
let access_entrada = [];
let access_salida = [];

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
const eliminar = document.getElementById('access-container');


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
    return visita;  
}

// para buscar vehiculo
function obtenerVehiculo (){
    const getVehicle = vehicle.value;
    let auto = vehiculos.find(vehiculo => vehiculo.placa === getVehicle)
    return auto;
}

//para borrar los estilos de la consulta
function erase(){
    const form = document.getElementById('form');
    eliminar.removeChild(form)
}
// para llenar con jquery
function relleno (_e){
    $("#permisos").append(`<section class="success" ><h3>Resultado: Autorizado</h3>
    <p>Visitante: ${_e.nombre} ${_e.apellido}</p>
    <p>Documento N° ${_e.documento}</p>
    <p>Empresa: ${_e.empresa}</p>
    <p>SCTR vigente hasta: ${_e.fin_sctr}</p>
    <h3>Datos del Vehículo</h3>
    <p>Placa: ${_e.placa}</p>
    <p>Marca: ${_e.marca}</p>
    <p>Modelo: ${_e.modelo}</p>
    <p>Color: ${_e.color}</p>
    <p>Pertenece a: ${_e.empresa_vehiculo}</p>
    </section>
    <section class="acceso">
    <button class="button button--in" id="ingreso" onClick ="registro_ingreso()">Ingreso
    </button>
    <button class="button button--out" id="out">Salida
    </button>
     </section>
     <div>
    <button class="button button--volver" id="volver">Regresar a Consulta
    </button>
     </div>`);
}

function consultar_visitante (){
    let addPersona = obtenerVisita();
    let addAuto = obtenerVehiculo();
    let entrada = {...addPersona, ...addAuto};
    let entradaJSON = JSON.stringify(entrada);
    localStorage.setItem('visitor', entradaJSON)
    erase();
    relleno(entrada);
    return console.log(entradaJSON);
}

function registro_ingreso (){
    let visitante = JSON.parse(localStorage.getItem("visitor"));
    let nombre = visitante.nombre;
    let apellido = visitante.apellido;
    access_entrada.push(visitante);
    console.log(access_entrada);
    $( "#permisos" ).remove();
    $("#acceso-visita").append(`<section class="success">
    <h3>Bienvenido</h3>
    <p>${nombre} ${apellido}</p>
    <div>
    <button class="button button--volver" id="volver">Regresar a Consulta
    </button>
     </div>
    </section>`)

}


check.addEventListener("click", on);
consulta.addEventListener("click", consultar_visitante);
