/* Codewars
Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

 */

 var summation = function (num) {
  // Code here
  let numbers = [];
  
  
  for (let i = num; i > 0; i--){    
    numbers.push(num);
    num--;
  };
  
  const soma = numbers.reduce((curr, total) => {
    return curr + total;
  }, 0);  

  return soma;
}
