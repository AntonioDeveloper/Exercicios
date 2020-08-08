function buscaNumeroPrimos(n) {
//não altere a linha acima

/*
 * Nas linhas a seguir, escreva um código que encontre todos
 * os números primos entre 0 e n e coloque-os num array chamado
 * `numerosPrimos`(você deve criar esse array)
 */


let numerosPrimos = [];
let divisores = [];

for(let m = 0; m < n; m++){

for(let i = 0; i < n; i++){
   
       if(m%i == 0){
        divisores.push(i);
        console.log(divisores);
        }   

   }
   if(divisores.length == 2){
        	numerosPrimos.push(m);
        	divisores = [];
        	console.log ('Número primo');
        } else {
        	console.log ('Número não é primo');
        	divisores = [];
        }
   console.log(m);
 }   

    
    console.log(numerosPrimos);
    

//não altere as linhas abaixo
  return numerosPrimos;
}

buscaNumeroPrimos(10);