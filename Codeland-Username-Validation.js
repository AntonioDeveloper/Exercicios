function CodelandUsernameValidation(str) { 

  // code goes here  
  //return str.length;

const wordLength = str.length;
const firstChar = str.charAt(0);
const patt = /[a-z]/i;
const result = firstChar.match(patt);
const legalChars = /^[a-z0-9_]+$/i;
const result2 = str.match(legalChars);
const underscore = str.charAt(wordLength-1).match(/[_]/);
let validation = 0;

if(wordLength >= 4 && wordLength <= 25){
console.log ("true");
validation = validation + 1;
} else {
  console.log ("false");
   validation = validation - 1;
};

if (result) {
console.log ("true");
validation = validation + 1;
} else {
  console.log ("false");
   validation = validation - 1;
};

if (result2) {
console.log ("true");
validation = validation + 1;
} else {
  console.log ("false");
  validation = validation - 1;
};
  
if(!underscore){
  console.log("true");
   validation = validation + 1;
} else {
  console.log("false");
  validation = validation - 1;
}
console.log(validation);

if(validation == 4 ) {
  return "true"
} else {
  return "false"
}

}
   

// keep this function call here 
console.log(CodelandUsernameValidation("Teste"));