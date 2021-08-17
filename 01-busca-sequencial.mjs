/* 
    ALGORITIMO DE BUSCA SEQUENCIAL

    percorre o vetor, verificando se cada um os elementos corresponde
    ao valor de busca. Ao encontrar uma correspondencia, retorna a posição
    onde o valor de busca está no vetor.

    caso o valor de busca não exista no vetor, retorna o valor convencional
    -1.
*/

function buscaSequencial(vetor, valorBusca) { 
    // Percusto do vetor com for tradicionalmente 
    for(let i = -0; i < vetor.length; i++) {
        if(vetor[i] === valorBusca) return i    // Encontrou valorBusca
    }
    return -1   // ValorBusca não existe em vetor
}

const frutas = ['laranja', 'maça', 'uva', 'pera', 'jabuticaba', 'limão', 'mamão']

console.log('Posição de uva:', buscaSequencial(frutas, 'uva'))
console.log('Posição de laranja:', buscaSequencial(frutas, 'laranja'))
console.log('Posição de mamão:', buscaSequencial(frutas, 'mamão'))
console.log('Posição de abacate:', buscaSequencial(frutas, 'abacate'))

// Número de comparações em um vetor de n elementos:
// Quando valorBusca é encontado: pos + 1
// Quando valorBusca não é encontrado: n

import { nomes } from './data/vetor-nomes.mjs'

console.time('Buscando DIEGO...')        // Dispara a contagem do tempo
console.log('Posição de DIEGO:' , buscaSequencial(nomes, 'DIEGO'))
console.timeEnd('Buscando DIEGO...')    // Para a contagem do tempo

console.time('Buscando VERONICA...')    // Dispara a contagem do tempo
console.log('Posição de VERONICA:', buscaSequencial(nomes, 'VERONICA'))    
console.timeEnd('Buscando VERONICA')    // Para a contagem do tempo


console.time('Buscando BERNARDO...')
console.log('Posição de BERNARDO:', buscaSequencial(nomes, 'BERNARDO'))
console.timeEnd('Buscando BERNARDO')


console.time('Buscando ORKUTILSON...')
console.log('Posição de ORKUTILSON:', buscaSequencial(nomes, 'ORKUTILSON'))
console.timeEnd('Buscando ORKUTILSON')

