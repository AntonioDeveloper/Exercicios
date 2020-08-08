function ehPalindromo(palavra) {
// não altere a linha acima

 /*
 * Complete o código abaixo para verificar se 
 * varíavel `palavra` é um palíndromo ou não.
 * Caso seja um palíndromo, a função deve retornar
 * `SIM, SOU UM PALÍNDROMO`, se não é um palídromo
 * a função deve retornar 
 * `INFELIZMENTE, NÃO SOU UM PALÍNDROMO`
 */
// escreva aqui seu código:

let backwards = "";

for (let i = palavra.length; i >= 0; i--){
backwards = backwards + palavra.charAt(i);
}

console.log(backwards);

backwards === palavra ? console.log(backwards, "SIM, SOU UM PALÍNDROMO") : console.log("INFELIZMENTE, NÃO SOU UM PALÍNDROMO")




 

    


// não altere as linhas abaixo
}

ehPalindromo("ovo");
