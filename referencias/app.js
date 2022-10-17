const listaDeUsuarios =  [
  {
  "id": 7,
  "email": "michael.lawson@reqres.in",
  "first_name": "Michael",
  "last_name": "Lawson",
  "avatar": "https://reqres.in/img/faces/7-image.jpg"
  },
  {
  "id": 8,
  "email": "lindsay.ferguson@reqres.in",
  "first_name": "Lindsay",
  "last_name": "Ferguson",
  "avatar": "https://reqres.in/img/faces/8-image.jpg"
  },
  {
  "id": 9,
  "email": "tobias.funke@reqres.in",
  "first_name": "Tobias",
  "last_name": "Funke",
  "avatar": "https://reqres.in/img/faces/9-image.jpg"
  },
  {
  "id": 10,
  "email": "byron.fields@reqres.in",
  "first_name": "Byron",
  "last_name": "Fields",
  "avatar": "https://reqres.in/img/faces/10-image.jpg"
  },
  {
  "id": 11,
  "email": "george.edwards@reqres.in",
  "first_name": "George",
  "last_name": "Edwards",
  "avatar": "https://reqres.in/img/faces/11-image.jpg"
  },
  {
  "id": 12,
  "email": "rachel.howell@reqres.in",
  "first_name": "Rachel",
  "last_name": "Howell",
  "avatar": "https://reqres.in/img/faces/12-image.jpg"
  },
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

function createPage( titulo ) {
  const h1 = document.createElement('h1');
  h1.textContent = titulo;
  document.body.appendChild(h1);

  // <div class="container">
  const div01 = document.createElement('div');
  div01.classList.add('container');
  document.body.appendChild(div01);
}

function newCard( usuario ) {
    // <div class="card">
  const div02 = document.createElement('div');
  div02.classList.add('card');

  const contenedor = document.querySelector('.container');
  contenedor.appendChild(div02);

  //  <img src="${usuario1.avatar}" alt="imagen">
  const img01 = document.createElement('img');
  img01.src = usuario.avatar;
  img01.alt = usuario.first_name;
  div02.appendChild(img01);

  // <h2>${usuario1.first_name} ${usuario1.last_name}</h2>
  const h2 = document.createElement('h2');
  h2.textContent = usuario.first_name + " " + usuario.last_name;
  div02.appendChild(h2);

  // <p>${usuario1.email}</p>
  const p = document.createElement('p');
  p.textContent = usuario.email;
  div02.appendChild(p);

}

document.title = 'Usuarios Random v2.0'
createPage('Usuarios Contratados');
listaDeUsuarios.map( usuario => newCard(usuario) );