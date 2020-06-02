let num = null;
let produto = 1;

function fatorial(num) {
  if (num == 0) {
    return 1;
  } else {
    for (let i = 1; i <= num; i++) {
      produto = produto * i;
    };
  };
  return produto;
};

fatorial(5);


