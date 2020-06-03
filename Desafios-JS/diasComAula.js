let alunosDaSegunda = [1, 0, -5, 12, 7];
let alunosDaTerca = [0, 1, 8, 9, 6];
let alunosDaQuarta = [13, 14, 8, 17, 11];
let totalAlunosPontuais = 0;
let diaComAula = [];
let qtdePresenca = null;
let semana = [alunosDaSegunda, alunosDaTerca, alunosDaQuarta];
var vetor = null;

function acontece(vetor, qtdeMin) {
  totalAlunosPontuais = 0;
  for (var j = 0; j < vetor.length; j++) {
    if (vetor[j] <= 0) {
      totalAlunosPontuais = totalAlunosPontuais + 1;
    } else {
      totalAlunosPontuais = totalAlunosPontuais;
    };
  };
  if (totalAlunosPontuais >= qtdeMin) {
    return true;

  } else {
    return false;
  };
}

function abertura(semana, qtdeMin) {
  var i = 0;
  for (i = 0; i < semana.length; i++) {
    vetor = semana[i];
    diaComAula.push(acontece(vetor, qtdeMin));
  };

  return diaComAula;
};


