// Números
let a = 10, b = 8, c = 10
console.log(a > b)
console.log(a < b)
console.log(a === b)
console.log(a !== b)
console.log(a === c)
console.log(a !== c)

console.log( '-------------------------------------------------------------------')
// Strings
let nome1 = 'NOME1', nome2 = 'NOME2', nome3 = 'NOME3'
console.log(nome1 > nome2)
console.log(nome1 < nome2)
console.log(nome1 === nome2)
console.log(nome1 > nome3)
console.log(nome1 < nome3)
console.log(nome1 === nome3)

console.log( '-------------------------------------------------------------------')
// Booleanos
let x = true, y = false, z = true
console.log(c > y)
console.log(x < y)
console.log(x === y)
console.log(x !== y)
console.log(x === z)
console.log(x !== z)

console.log( '-------------------------------------------------------------------')
// Diferença de usar == e ===
// ==: Verdadeiro se o conteudo for igual, mesmo se os tipos forem diferentes
// ===: Verdadeiro apenas de CONTEUDO E TIPO FOREM IGUAIS 
let i = 56, j ='56'
console.log(i == j)         // Converte tipos automaticamente
console.log(i === j)        // NÃO converte automaticamente os tipos 

console.log( '-------------------------------------------------------------------')
// Vetores 
let v1 = [10, 20, 30, 40, 50]
let v2 = [-3, -2, -1, 0]
let v3 = [10, 20, 30 , 40, 50]
console.log(v1 > v2)
console.log(v1 < v2)
console.log(v1 === v2)
console.log(v1 !== v2)
console.log(v1 === v3)
console.log(v1 !== v3)
// MORAL DA HISTORIA: vetores NÃO SÃO diretamente comparaveis

console.log( '-------------------------------------------------------------------')
let o1 = { marca: 'volkswagem', modelo: 'Fusca', cor: 'preto', ano: 1969}
let o2 = { marca: 'Chevrolet', modelo: 'Opala', cor: 'Azul', ano: 1969}
let o3 = { marca: 'volkswagem', modelo: 'Fusca', cor: 'preto', ano: 1969}
console.log(o1 > o2)
console.log(o1 < o2)
console.log(o1 === o2)
console.log(o1 !== o2)
console.log(o1 === o3)
console.log(o1 !== o3)

// MORAL DA HISTORIA: Objetos também NÃO SÃO diretamente comparaveis

/*
    CONCLUSÃO 
    Em Js, apenas os seguintes tipos de dados são diretamente
    comparaveis:
    * números
    * strings
    * booleanos

*/


