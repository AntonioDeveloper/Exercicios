function FirstReverse(str) { 

  // code goes here  
  //return str; 
let backwards = '';

  const wordLength = str.length;
  for (let i = wordLength; i >= 0; i--){
backwards = `${backwards}${str.charAt(i)}`;
  }
console.log(backwards);

}
   
// keep this function call here 
console.log(FirstReverse("coderbyte"));