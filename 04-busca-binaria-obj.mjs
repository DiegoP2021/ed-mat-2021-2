let comps
function buscaBinaria(vetor, valorBusca, fnComp) {
    comps = 0
    let ini = 0
    let fim = vetor.length - 1
    while(fim >= ini) {
        comps++
        // Math.floor() retira as casas decimais de um número
        let meio = Math.floor((ini + fim) / 2)
        
        switch(fnComp(vetor[meio])){
            case 0:     // Encontrando o valor de busca
                return meio

            case 1:     // valor busca > valor do meio do vetor
                ini = meio + 1
                break

            default:    // -1, valor de busca < valor do meio vetor
                fim = meio - 1
        }
    }
    // Se chegamos até aqui, significa que fim < ini e, portanto,
    // o valor de busca não existe no vetor. Para indicar isso,
    // retornamos o valor convencional -1
    return -1
}

/*
    Na busca binária, a compração entre o valor de busca e o valor 
    que esta no meio do vetor, tem tras possibilidades:
    1 -> ambos dos valores sao IGUAIS
    2 -> o valor de busca é MAIOR que o valor do meio do vetor
    3 -> o valor de busca é MENOR  que o valor do meio do vetor

    para usar a busca binaria em um VETOR DE OBJETOS, precisamos
    transferir a comparação para uma função externa que retorne um
    dos tres valores:
    0 -> caso ambos os valores sejam IGUAIS
    1 -> caso o valor de busca seja MAIOR que o valor do meio do vetor
    -1 -> caso o valor de busca seja MENOR uqe o valor do meio do vetor 
*/

function comparar(valorMeio, valorBusca = 'DIEGO') {
    if(valorBusca === velorMeio.first_name) return 0
    else if(valorBusca > valorMeio.first_name) return 1
    else return -1
}