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


document.body.innerHTML = `
  <h1>Usuarios</h1>
  <div class="card">
    <img src="${usuario1.avatar}" alt="imagen">
    <h2>${usuario1.first_name} ${usuario1.last_name}</h2>
    <p>${usuario1.email}</p>
  </div>
  <div class="card">
    <img src="${usuario2.avatar}" alt="imagen">
    <h2>${usuario2.first_name} ${usuario2.last_name}</h2>
    <p>${usuario2.email}</p>
  </div>
`;
