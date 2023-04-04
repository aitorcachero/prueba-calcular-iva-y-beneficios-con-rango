const precio = document.querySelector('#precio');
const slider = document.querySelector('#beneficio');
const total = document.querySelector('#total');
const impuestos = document.querySelector('#impuestos');
const btn = document.querySelector('#btn');
const text = document.querySelector('#text-range');

slider.oninput = function () {
  text.innerHTML = `${slider.value}%`;
};

function calcularBeneficio(precio, beneficio) {
  const total =
    Math.round(((precio * 21) / 100 + precio) * beneficio) / 100 +
    ((precio * 21) / 100 + precio);
  return `${total.toFixed(2)} €`;
}

btn.addEventListener('click', () => {
  precio === ''
    ? alert('Tienes que introducir un precio')
    : (total.value = calcularBeneficio(
        Number(precio.value),
        Number(beneficio.value)
      ));
});

precio.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    btn.click();
  }
});

beneficio.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    btn.click();
  }
});
