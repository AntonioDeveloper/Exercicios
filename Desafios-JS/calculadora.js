let num1 = prompt("Digite um número");
let sym = prompt("Qual operação vc quer?");
let num2 = prompt("Digite um número");
let res = null;

switch(sym){
    case "+":
res = num1 + num2;
break;
case "-":
res = num1 - num2;
break;
case "*":
res = num1 * num2;
break;
case "/":
res = num1 / num2;
break;
}
console.log(res);
