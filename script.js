function sumValues(value) {
  const numbers = [];
  let result = 0;

  if (value < 0) {
    return alert("Por favor insira um número maior do que 0");
  }

  if (value === 0) {
    return "A soma de todos os valores inteiros divisíveis por 3 ou 5 que sejam inferiores ao número 0 é: 0";
  }

  for (let i = 0; i < value; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      numbers.push(i);
    }
  }

  result = numbers.reduce((prev, actual) => (prev += actual));

  return `A soma de todos os valores inteiros divisíveis por 3 ou 5 que sejam inferiores ao número ${value} é: ${result}`;
}

console.log(sumValues(0));
