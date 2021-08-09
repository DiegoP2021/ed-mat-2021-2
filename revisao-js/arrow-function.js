// Função tradicional com 1 parametro e
// 1 linha do corpo, com return
function quadrado(x) {
    return x * x
}

// ARROW FUNCTION: forma "abreviada" de escrever funcões em JS 

// Arrow function equivalente
// 1) A função é atribuida a uma variavel (ou ainda melhor, a uma constante)
// 2) Desaparece a palavra-chave "function"
// 3) Desaparecem os parenteses em torno do parametro
// 4) Entre o parametro e o corpo da função, temos o sina "=>" (arrow, flecha)
// 5) Desaparem as chaves que delimitam o corpo da função
// 6) Desaparece a palavra-chave "return"

const quadrado2 = x => x * x
console.log(quadrado(7))
console.log(quadrado2(7))

console.log( '------------------------------------------------------------' )

// Função tradicional com 2 parametros, 1 linha de corpo com return
function potencia(base, expoente) {
    return base ** expoente

}

// Arrow function correspondente
// Retornam os parenteses em torno dos parãmetros 
const potencia2 = (base, expoente) => base ** expoente

console.log(potencia(2, 5))
console.log(potencia2(2, 5))

console.log( '------------------------------------------------------------' )

// Funçãi tradicional sem parâmetros, 1 linha de corpo com return
function dataHoraAtual(){
    return new Date()
}

// Arrow function correspondente
// Os parenteses vazios marcam a posição do parametro
const dataHoraAtual2 = () => new Date()

console.log(dataHoraAtual())
console.log(dataHoraAtual2())

console.log( '------------------------------------------------------------' )

// Função tradicional com 1 parametro e multiplas linhas de corpo
function fatorial(n) {
    let res = 1
    for(let i = n; i > 1; i--) res *= i
    return res
}

// Arrow function correspondente 
// Retornan as chaves delimitando o corpo da função 
const fatorial2 = n => {
    let res = 1
    for( let i = n; i > 1; i--) res *= i
    return res
}

console.log(fatorial(5))
console.log(fatorial2(5))