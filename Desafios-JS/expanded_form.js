/* Codewars

Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

NOTE: All numbers will be whole numbers greater than 0.
If you liked this kata, check out part 2!!

*/

function expandedForm(num) {
  // Your code here
  
  var tamanho = Math.log(num) * Math.LOG10E + 1 | 0; 
  let numStr = num.toString();
  let decSys = null;
  let decrm = 1;
  let values = [];
  
  for(let i = 0; i < numStr.length; i++){
    if(numStr.charAt(i) != 0){     
    decSys = numStr.charAt(i) + '0'.repeat(numStr.length - decrm);
      values.push(decSys);
      decrm++;
    } else{
      decrm++;
    }
  }
  
  
return values.toString().replace(/,/g, ' + ');
}

console.log(expandedForm(70304));