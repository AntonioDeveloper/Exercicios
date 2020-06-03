let pos = 0;
let neg = 0;
let zeros = 0;
let valores = [];
let res = [];
let porctNeg, porctZeros, porctPos = 0;

function maisMenos(valores) {
  for (var i = 0; i < valores.length; i++) {
    if (valores[i] < 0) {
      neg = neg + 1;
    }
    else if (valores[i] == 0) {
      zeros = zeros + 1
    } else {
      pos = pos + 1;
    }
  };
  porctNeg = (neg * 1) / valores.length;
  porctZeros = (zeros * 1) / valores.length;
  porctPos = (pos * 1) / valores.length;
  res.push(porctPos, porctZeros, porctNeg);

  return res;
};

console.log(maisMenos([1, 2, 0, -1]));
