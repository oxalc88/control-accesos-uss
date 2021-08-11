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

const check = document.getElementById('check');
const vehicle = document.getElementById('vehicle');

const registrar = document.getElementById('registro');
//const documento = document.getElementById('documento');

const placa = vehicle.value;

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

// para buscar la persona y el vehículo

let buscarDocumento = function(persona) {
    let consulta = document.getElementById('documento');
    let valorDocumento = consulta.value;
    return persona.documento = valorDocumento
};

let visita = personas.find(buscarDocumento)

// function prueba () {
//     if (!visita){
//         alert ("el documento " + valorDocumento + "no es valido" )
//     }else{
//         alert ("el documento " + valorDocumento + " es valido" )
//     }
// }




check.addEventListener("click", on);
consulta.addEventListener("click", console.log(visita));

