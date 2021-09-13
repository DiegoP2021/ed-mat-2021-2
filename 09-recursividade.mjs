/*
    Fatorial de um número natural é igual a ele proprio
    multiplicado por todos os seus antecessores

    5! = 5 * 4 * 3 * 2 * 1(120)
    4! = 4 * 3 * 2 * 1 (24)
    3! = 3 * 2 * 1 (6)
    2! = 2 * 1 (2)

    casos especiais: 
    1! = 1
    0! = 0 

    Expressando recursividamente: 
    5! - 5 * 4!
    4! = 4 * 3!
    3! = 3 * 2!
    2! = 2 * 1!

    Fatorial(n) = n * fatorial(n - 1), para qualquer n > 1

    Diz-se que uma definição é recursiva quando a definição aparece
    dois lados da igualdade 

    Para cada algoritimo recursivo, exite o correspondente iterarivo.
    No entanto, a versão interativa pode ser mais extensa e dificil de 
    implementar que a versão recursiva. 
*/





// Implementação ITERATIVA (iter = caminho 'em latim')
function fatorial(n) {
    let resultado = 1 
    for(let i = n; i > 1; i--)resultado *= i
    return resultado 
}

console.log('Fatorial de 5:', fatorial(5))

//Impliementação RECURSIVA de um função que calcula o fatorial
// de um número. Note que existe uma chamada á própria função
// dentro dela

// Condição de saída: é uma situação em que a função recursiva 
// não 
function fatorialRec(n) {
    if(n <= 1) return 1
    return n * fatorial(n - 1)
}

console.log('Fatorial (recursivo) de 5:', fatorialRec(4))