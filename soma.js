/* Problema da soma de dois números
Um vetor com números chamado numeros é dado e pede-se que você encontre os dois elementos desse vetor que somados são iguais ao número objetivo.

Considere que existe somente uma solução possível e que você não poderá usar o mesmo elemento mais de uma vez.

Retorne os valores em ordem crescente de indice no vetor.

Obs.: Números repetidos são considerados elementos diferentes.


Descrição do formato da função solução
1) Recebe como parâmetro um vetor numeros e um número inteiro objetivo
2) Retorne um vetor com duas posições cujos valores são os indices do vetor em ordem crescente que fazem a soma objetivo ser possível.


Exemplos
Examplo 1:
Entrada: numeros = [2,7,11,15], objetivo = 9
Saída: [0,1]

Examplo 2:
Entrada: numeros = [3,2,4], objetivo = 6
Saída: [1,2]

Examplo 3:
Entrada: numeros = [3,3], objetivo = 6
Saída: [0,1] */
let numeros = [3,3]
let objetivo = 6

function main(numeros, objetivo){
    let index = [];
	for (let i = 0; i < numeros.length; i++) {
        console.log(numeros[i]);
        for (let j = i+1; j < numeros.length; j++) {
            console.log(numeros[j]);
            if (numeros[i] + numeros[j] === objetivo){
                index.push(i);
                index.push(j);
            }
        }      
    }
    return index;
}

main(numeros,objetivo)