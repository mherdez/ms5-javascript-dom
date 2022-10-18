// SELECCIONAR UN ELEMENTO DEL DOM
const contenedor = document.querySelector('#container-cards');
// FUNCION PARA CREAR UNA TARJETA

function Card( id, nombre, email, avatar ) {
  const cardBody = `<div class="card">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg" alt="${nombre}">
    <h2>${nombre}</h2>
    <p>${email}</p>
  </div>`;
  contenedor.innerHTML += cardBody;
}


const usuarios = [
  {
    "id": 1,
    "email": "george.bluth@reqres.in",
    "first_name": "George",
    "last_name": "Bluth",
    "avatar": "https://reqres.in/img/faces/1-image.jpg"
    },
    {
    "id": 2,
    "email": "janet.weaver@reqres.in",
    "first_name": "Janet",
    "last_name": "Weaver",
    "avatar": "https://reqres.in/img/faces/2-image.jpg"
    },
    {
    "id": 3,
    "email": "emma.wong@reqres.in",
    "first_name": "Emma",
    "last_name": "Wong",
    "avatar": "https://reqres.in/img/faces/3-image.jpg"
    },
    {
    "id": 4,
    "email": "eve.holt@reqres.in",
    "first_name": "Eve",
    "last_name": "Holt",
    "avatar": "https://reqres.in/img/faces/4-image.jpg"
    },
    {
    "id": 5,
    "email": "charles.morris@reqres.in",
    "first_name": "Charles",
    "last_name": "Morris",
    "avatar": "https://reqres.in/img/faces/5-image.jpg"
    },
    {
    "id": 6,
    "email": "tracey.ramos@reqres.in",
    "first_name": "Tracey",
    "last_name": "Ramos",
    "avatar": "https://reqres.in/img/faces/6-image.jpg"
    }
];

// usuarios.map( usuario => Card(usuario.id, usuario.first_name + " " + usuario.last_name, usuario.email, usuario.avatar) )

for(let i=1; i <= 640; i++) {
  Card(i, 'Pokemon' + i, '')
}
