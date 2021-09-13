/*
    MERGE SORT 

    No processo de ordenação, esse algoritimo "desmonta" o vetor original
    contendo N elementos até obter N vetores de apenas um elemento cada um.
    Em seguida, usando a tecnica de mesclagem (merge), "remonta" o vetor,
    dessa vez com os elementos já em ordem.

*/

function mergeSort(vetor) { 
    // Para ser dividido, um vetor precisa ter pelo menos 2 elementos
    if(vetor.length < 2) return // Sai da função sem fazer nada

    // Acha o meio (Aproximado) do vetor
    let meio = math.floor(vetor.length / 2 )

    // slice() divide um vetor da primeira posição informada (inclusive)
    // até a ultima posição informada (exclusive)
    const vetEsq = vetor.slice(0, meio)

    // Quando o segundo parãmetro de slice() é omitido, a fatia vai
    // da posição informada até o final do vetor
    const vetDir = vetor.slice(meio)

    // Chamadas recursivas ao mergeSort
    vetEsq = mergeSort(vetEsq)
    vetDir = mergeSort(vetDir)
}