/* Possivelmente Palíndromas
Observe as seguintes strings abaixo:

"arara"
"osso"
"socorram-me, subi no onibus em marrocos"

Agora leia essas strings de trás para frente. Você pode ler elas independentemente do sentido da leitura!

Palavras e frases assim são chamadas de palíndromas.

Agora observe as seguintes strings:
"parar"
"temem"
"technation"

"parar" e "temem" são chamadas de palavras potencialmente palíndromas
Isso ocorre porque você pode rearranjar/permutar as letras dessas palavras de forma que elas se tornem palíndromas

"parar" -> "rapar"
"temem" -> "metem"

Enquanto isso, "technation" nunca será uma palavra palíndroma, independentemente de como você reorganizar as letras dela (se duvida de mim, pode tentar!)

Observações adicionais:
1) Não é necessário que as strings sejam palavras que existem na vida real
2) Considere a string vazia como potencialmente palíndroma


Descrição do formato da função solução
1) Recebe como parâmetro uma string
2) Retorne True, caso a palavra seja potencialmente palíndroma. Retorne False, caso contrário


Exemplos
Exemplo 1:
Entrada: palavra = "abbac"
Saída: True

Exemplo 2:
Entrada: palavra = "abba"
Saída: True

Exemplo 3:
Entrada: palavra = "abbacd"
Saída: False */
let palavra = "temem"
function main(palavra){
	let str = palavra.replace(" ","");
    let strReverse = str.split("").reverse().join("");
    let strPotencial = palavra.replace(" ","").split("").sort().join("");
    let potencial = true;
    for (let i = 1; i < strPotencial.length; i += 2) {
        if(strPotencial[i] !== strPotencial[i-1]){
            potencial = false;
        }  
    }
    if(str === strReverse || palavra === "" || potencial){
        return true
    } else {
        return false
    }
}
main(palavra);