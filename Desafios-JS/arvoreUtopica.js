let n = null;
let altura = 0;

function alturaArvoreUtopica(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      altura = altura + 1;
    } else {
      altura = altura * 2;
    };
  };
  return altura;
};

console.log(alturaArvoreUtopica(6)); 

