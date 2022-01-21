const enter = document.querySelector(".botEnter");
const results = document.querySelector(".resultado");

enter.addEventListener("click", (ev) => {
  ev.preventDefault();
  const number = document.querySelector(".inputNum").value;
  sumValues(number);
});

function sumValues(value) {
  const numbers = [];
  let result = 0;

  if (value < 0) {
    document.querySelector(".error").classList.add("active");
    return;
  }

  document.querySelector(".formulario").classList.add("desactive");

  if (value == 0) {
    createResult(0, value);
    return;
  }

  for (let i = 0; i < value; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      numbers.push(i);
    }
  }

  result = numbers.reduce((prev, actual) => (prev += actual));

  return createResult(result, value);
}

function createResult(res, num) {
  const div = document.createElement("div");
  results.append(div);
  div.innerHTML = `
    <p>A soma de todos os valores inteiros divisíveis por 3 ou 5 que sejam inferiores ao número ${num} é: 
    <br/> <strong><span class="sum">${res}</span></strong></p>
    <button type="click" class="botReload" onclick="window.location.reload();"> Novo Valor </button>
    `;

  return;
}
