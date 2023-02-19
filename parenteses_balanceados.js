/* Parênteses Balanceados
Uma string que consiste em parênteses esquerdo e direito, "(" e ")", é dada e pede-se que você equilibre os parênteses inserindo parênteses conforme necessário. Determine o número mínimo de caracteres que devem ser inseridos.


Descrição do formato da função solução
1) Recebe como parâmetro uma string com parênteses.
2) Retorne um número inteiro que deve ser o número mínimo de caracteres a serem adicionados na string.


Exemplos
Exemplo 1:
Entrada: palavra="()))"
Saída: 2

Exemplo 2:
Entrada: palavra="()()"
Saída: 0

Exemplo 3:
Entrada: palavra="())("
Saída: 2 */

function main(palavra){
	const countPalavra = palavra.length;
    let countParenteses = 0;
    for(let i = 1; i <= countPalavra; i++){
        let iDireita = palavra[i];
        let iEsquerda = palavra[i-1];
        if(iEsquerda+iDireita === "()"){
            countParenteses++
        };
    }
    let qtd = countPalavra - countParenteses*2;

    return qtd;
}

