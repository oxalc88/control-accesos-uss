let personas = [
    {
        nombre: 'Juan',
        apellido: 'Rivas Flores',
        fin_sctr:'31/08/2021',
        empresa: 'Ransa'
    },
    {
        nombre: 'Roberto',
        apellido: 'Diaz Tejero',
        fin_sctr:'03/08/2021',
        empresa: 'Palmas Rodadas'
    },
    {
        nombre: 'Ruben',
        apellido: 'Ramos Ramon',
        fin_sctr:'07/08/2021',
        empresa: 'Tokio Goku'
    }
]

let vehículos = [
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
]

let check = document.getElementById('check')

function on (){
    if (check = true) {
        console.log("Oki Doki");
    } else {
        console.log("Esperando");
    }
}

check.addEventListener("click", on);

