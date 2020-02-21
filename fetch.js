/* var place = document.getElementById("nombre");
console.log(" Place: " + place); */

var contenido = document.querySelector('#nombre');
var fperfil = document.querySelector('#fotoperfil');

var tabladatos = document.querySelector('#tabla');

var formulario = document.querySelector('#formulario');
var place = document.getElementById('respuesta');

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('Me diste click en el formularo')

    var datos = new FormData(formulario);

    fetch('http://localhost:3000/post.php', {
        method: 'POST',
        body: datos
    })
        .then(res => res.json())
        .then(data => {

            if(data=='error'){
                place.innerHTML = `
                <div class="alert alert-danger" role="alert">
                        Debes llenar todos los campos!
                </div>
                `
            }else{
                place.innerHTML = `
                <div class="alert alert-success" role="alert">
                        ${data}
                </div>
                `

            }
            

        })

})

console.log(" Contenido: " + contenido);

function traer() {
    fetch('https://randomuser.me/api/')
        .then(res => res.json()) // Importante el formato en el que vendrá la respuesta a la petición
        .then(data => {
            console.log(data.results[0]);
            contenido.innerHTML = `${data.results[0].name.first}`;
            fperfil.innerHTML = `<img src="${data.results[0].picture.medium}" alt=""></img>`
        })
}

function llenar() {
    fetch('tabla.json')
        .then(res => res.json()) 
        .then(datos => {
           // console.log(datos);
           tabla(datos)
        })
}

function tabla(datos) {
    console.log(datos);
    tabladatos.innerHTML = '';
    datos.forEach(element => {
        console.log(element);
        tabladatos.innerHTML += 
        `<tr>
            <td>${element.id}</td>
            <td>${element.nombre}</td>
            <td>${element.email}</td>
            <td>${element.estado ? "Activo" : "Inactivo"}</td>
        </tr>`
    });
}

function llenarRemoto() {
    fetch('https://henryds.000webhostapp.com/php%20API/backend/euro')
        .then(res => res.json()) 
        .then(datos => {
           // console.log(datos);
           tablaRemota(datos)
        })
}

function tablaRemota(datos) {
    console.log(datos);
    tabladatos.innerHTML = '';

    datos.forEach(element => {
        console.log(element);
        tabladatos.innerHTML += 
        `<tr>
            <td>${element.id}</td>
            <td>${element.fecha}</td>
            <td>${element.valor}</td>
            <td>${(element.valor + ',00')}</td>
        </tr>`
    });
}