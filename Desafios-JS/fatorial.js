function FirstFactorial(num) { 

  // code goes here  
  //return num; 
  let factorial = 1;  
  let i = num ;
  let m = 0;

for (i; i >= 1; i--){
factorial = factorial * i;


}

return factorial;
}
   
// keep this function call here 
console.log(FirstFactorial(8));