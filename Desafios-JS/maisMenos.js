let pos = 0;
let neg = 0;
let zeros = 0;
let valores = [];

function maisMenos(valores) {
  for (var i = 0; i < valores; i++) {
    if (valores[i] < 0) {
      neg = neg + 1;
    };
    if (valores[i] == 0) {
      zeros = zeros + 1
    } else {
      pos = pos + 1;
    }
  }
  console.log(neg);
  console.log(zeros);
  console.log(pos);
};

maisMenos([1, 2, -4, 0, 0, -8, -13, 14]);