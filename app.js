// SELECCIONAR UN ELEMENTO DEL DOM
const contenedor = document.querySelector('#container-cards');

function Card( imagen, titulo, texto ) {
  const cardBody = `<div class="card">
    <img src=${imagen} alt="foto">
    <h2>${titulo}</h2>
    <p>${texto}</p>
  </div>`;
  contenedor.innerHTML = cardBody;
}

const imagen = 'https://picsum.photos/200/200';
const titulo = 'Karem Diaz';
const texto  = 'karem_diaz@hotmail.com';

Card( imagen, titulo, texto);

