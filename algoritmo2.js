/*
    INSTRUÇÕES

    1) Identifique o algoritmo abaixo.
    R - O algoritimo é BuscaBinaria 

    2) Faça o mapeamento das variáveis (registre em comentário o propósito de cada uma delas).
    3) Introduza a função de comparação, de modo que o algoritmo possa ser utilizado com vetores de objetos.

*/
// z vai ser usado para as posições no vetor
const z = (y, x) => {
    comps = 0 
    // 0 tem como valor 0
    let w = 0
    let v = y.length - 1
    while(v >= w) {
        comps++
        // O Math.floor vai retirar as casas decimais de um numero 
        let u = Math.floor((w + v) / 2)
        // Vai retornar o que encontar caso o valor de buscas for igual ao valor do vetor 
        // na posição do meio 
        if(x === y[u]){
            comps++
            return u
        } 
        // Senão, caso o valor de busca for maior que o valor do meio do vetor 
        // a vai ser descartado a metade da esquerda do vetor 
        // e irá trazer o ponteiro w para + 1 
        else if(x > y[u]){
            comps+=2
            w = u + 1
        }
        // se o valor de busca for menor que o valor do meio do vetor 
        // vai ser descartado a metade da direita, trazendo o v para - 1  
        else{
            comps+=2
            v = u - 1}
    }
    // O valor de busca não existe, então vai retornar - 1
    return -1
}