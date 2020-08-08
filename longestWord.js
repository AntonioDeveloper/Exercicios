function LongestWord(sen) {
  let wordsList = [];
  let word = "";
  let currWord = [];
  let pos = 0;
  let biggestWords = [];

  for (let i = 0; i <= sen.length; i++) {
    if (sen[i] === " " || i == sen.length) {
      word = sen.substring(pos, i).trim().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
      wordsList.push(word);
      pos = pos + word.length + 1;
      word = "";
    }
  };

  let biggestLenght = wordsList.map(word => {
    currWord.push(word);
    return word.length;
  }).reduce(function (a, b) {
    return Math.max(a, b);
  });

  biggestWords = currWord.filter(word => {
    if (word.length == biggestLenght) {
      return word;
    }
  })

  console.log(biggestLenght);
  console.log(currWord);
  console.log(biggestWords[0]);



  return biggestWords[0];

}

LongestWord("fun&!! time");