/*
    INSTRUÇÕES

    1) Identifique o algoritmo abaixo.
    R - O algoritmo é SelectionSort 
    2) Faça o mapeamento das variáveis (registre em comentário o propósito de cada uma delas).
    3) Introduza a função de comparação, de modo que o algoritmo possa ser utilizado com vetores de objetos.

*/
let pass, comps, trocas
const z = y => {
    pass = 0, comps = 0, trocas = 0
    // X vai até a ultima penultima posição do vetor 
    for(let x = 0; x < y.length - 1; x++) {
        pass++
        let w = x + 1
        // Loop para procurar o menor valor no restante do vetor
        for(let i = w + 1; i < y.length; i++) {
            if(y[w] > y[i]) w = i
            comps++
        } 
         // Caso o valor de W for menor que o valor de X vai ser feito a troca
        if(y[x] > y[w]) {
            [ y[x], y[w] ] = [ y[w], y[x] ]
            trocas++
        }
    }
}