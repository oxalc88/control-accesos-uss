//Para validar registro pendiente de hacerlo funcionar con api gratuita
// "https://apifacturacion.com/#"
// const myHeader = new Headers({
//   'Authorization': 'Bearer 3bda6e9ae74ee954e1db56ec82463068'
//   });


// const myInit = { 
//   method: 'GET',
//   headers: myHeader,
//   mode: 'no-cors',     
//   cache: 'default',
//   //'Access-Control-Allow-Origin': '*',
// };

// const consulta_dni = 'https://apifacturacion.com/doc/45070756';

// const myrequest = new Request(consulta_dni, myInit);


// fetch(myrequest)
// .then(response => response.json())
// .then(data => resolve(data ? JSON.parse(data) : {}))
// .catch(error=> console.log(`Hubo error ${error}`))  

// console.log(myrequest);
// console.log(myrequest.dni)
// console.log(myrequest.cliente)
// console.log(data)

//Api para consultar DNI
const getDNI = document.getElementById('dni_visita').value;
const getRUC = document.getElementById('ruc_empresa').value;
const getVisita = getDNI.toString()
const getEmpresa = getRUC.toString()

import {api_dni_ruc} from "./apikey.js";

const formData_dni = new FormData();
formData_dni.append("token", api_dni_ruc);
formData_dni.append("dni", getVisita);


const request_dni = new XMLHttpRequest();
request_dni.open("POST", "https://api.migo.pe/api/v1/dni");
request_dni.setRequestHeader("Accept", "application/json");
request_dni.send(formData_dni);

const consulta_dni = request_dni.onload = function() {
let data_dni = JSON.parse(this.response);
    return data_dni.nombre
};

const formData_ruc = new FormData();
formData_ruc.append("token", api_dni_ruc);
formData_ruc.append("ruc", getEmpresa);

const request_ruc = new XMLHttpRequest();
request_ruc.open("POST", "https://api.migo.pe/api/v1/ruc");
request_ruc.setRequestHeader("Accept", "application/json");
request_ruc.send(formData_ruc);

const consulta_ruc = request_ruc.onload = function() {
    let data_ruc = JSON.parse(this.response);
    return data_ruc.nombre_o_razon_social
};


function registro_vista(e1, e2) {
  $("#datos-registro").append(`<p>
  Nombre: {e1.nombre}</p>
  <p>Empresa: {e2.empresa}</p>`);
}

function obtener_datos() {
  registro_vista(consulta_dni, consulta_ruc);
  console.log(consulta_ruc.nombre);
  console.log(consulta_dni.nombre_o_razon_social);
}




const verificar = document.getElementById('verificar')

verificar.addEventListener("click", obtener_datos);