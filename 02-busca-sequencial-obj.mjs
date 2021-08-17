/*
    Quando um algoritimo de busca precisa atuar sobre um vetor de objetos
    , a comparação não deve ser feita dentro da função que implementa o 
    algotimo. Em vez disso, recebemos uma outra função (externa) como parametro
    que resolverá a comparação. 

    Essa função externa será chamada passando o objeto atual do vetor
    e esperará um retorno true, caso a função externa determine que
    o objeto atual contém o valor de busca, ou false, caso ontrário.

*/

function buscaSequencial(vetor, fnComp) { 
    // Percusto do vetor com for tradicionalmente 
    for(let i = -0; i < vetor.length; i++) {
        // A comparação será feita pela função externa fnComp()
       // console.log('Primeiro elemento do vetor:', vetor[i])
        if(fnComp(vetor[i])) return i    // Encontrou valorBusca
    }
    return -1   // ValorBusca não existe em vetor
}
function comparaNome(obj) {
    //console.log('objeto recebido pela função externa:', obj)
    return obj.first_name === 'DIEGO'
}

function comparaNome2(obj) {
    return obj.first_name === 'CLAUDEMIR'
}
import { objNomes } from './data/vetor-obj-nomes.mjs'

console.time('Buscando DIEGO...')
console.log('Posição de DIEGO:', buscaSequencial(objNomes, comparaNome))
console.timeEnd('Buscando DIEGO...')

// Termina o programa 
//process.exit(0)

console.time('Buscando CLAUDEMIR...')
console.log('Posição de CLAUDEMIR:', buscaSequencial(objNomes, comparaNome2))
console.timeEnd('Buscando CLAUDEMIR...')


console.time('Buscando MOACIR...')
console.log('Posição de MOACIR:', buscaSequencial(objNomes, function(obj) {
    return obj.first_name === 'MOACIR'
}))
console.timeEnd('Buscando MOACIR...')


console.time('Buscando GERCINA...')
console.log('Posição de GERCINA:', buscaSequencial(objNomes, obj => obj.first_name === 'GERCINA'))
console.timeEnd('Buscando GERCINA...')

console.time('Buscando frequency_total 14909...')
console.log('Posição de frequency_total 14909:', buscaSequencial(objNomes, obj => obj.frequency_total
=== 14909))
console.timeEnd('Buscando frequency_total 14909...')