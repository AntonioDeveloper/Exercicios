let numeros = [];

function produto(numeros) {
  let multipl = 1;
  for (var i = 0; i < numeros.length; i++) {
    multipl = multipl * numeros[i];
  };
  return multipl;
};

produto(numeros);