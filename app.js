// SELECCIONAR UN ELEMENTO DEL DOM
const contenedor = document.querySelector('#container-cards');

function Card( imagen, titulo, texto ) {
  const cardBody = `<div class="card">
    <img src=${imagen} alt="foto">
    <h2>${titulo}</h2>
    <p>${texto}</p>
  </div>`;
  contenedor.innerHTML += cardBody;
}

Card(
'https://picsum.photos/id/80/200',
'Karem Diaz',
'karem_diaz@hotmail.com'
);

Card(
  'https://picsum.photos/id/90/200',
  'Sebastian Pedroza',
  'sebastian_pedroza@hotmail.com'
);

Card(
  'https://picsum.photos/id/100/200',
  'Maria Elena',
  'maria_elena@hotmail.com'
);


