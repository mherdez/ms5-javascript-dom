const usuario1 = {
  "id": 9,
  "email": "tobias.funke@reqres.in",
  "first_name": "Tobias",
  "last_name": "Funke",
  "avatar": "https://reqres.in/img/faces/9-image.jpg"
  };
  const usuario2 = {
    "id": 10,
    "email": "byron.fields@reqres.in",
    "first_name": "Byron",
    "last_name": "Fields",
    "avatar": "https://reqres.in/img/faces/10-image.jpg"
    }


// document.body.innerHTML = `
//   <h1>Usuarios</h1>
//   <div class="container">
//     <div class="card">
//       <img src="${usuario1.avatar}" alt="imagen">
//       <h2>${usuario1.first_name} ${usuario1.last_name}</h2>
//       <p>${usuario1.email}</p>
//     </div>
//     <div class="card">
//       <img src="${usuario2.avatar}" alt="imagen">
//       <h2>${usuario2.first_name} ${usuario2.last_name}</h2>
//       <p>${usuario2.email}</p>
//     </div>
//   </div>
// `;


const h1 = document.createElement('h1');
h1.textContent = 'Usuarios';
document.body.appendChild(h1);

// <div class="container">
const div01 = document.createElement('div');
div01.classList.add('container');
document.body.appendChild(div01);

// <div class="card">
const div02 = document.createElement('div');
div02.classList.add('card');
div01.appendChild(div02);

//  <img src="${usuario1.avatar}" alt="imagen">
const img01 = document.createElement('img');
img01.src = usuario1.avatar;
img01.alt = usuario1.first_name;
div02.appendChild(img01);

// <h2>${usuario1.first_name} ${usuario1.last_name}</h2>
const h2 = document.createElement('h2');
h2.textContent = usuario1.first_name + " " + usuario1.last_name;
div02.appendChild(h2);

// <p>${usuario1.email}</p>
const p = document.createElement('p');
p.textContent = usuario1.email;
div02.appendChild(p);
