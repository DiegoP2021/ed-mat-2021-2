let pass, comps,trocas
/*
    fnComp() passará á função externa os dois elementos adjacenter do vetor
    e retornará
    - true: Se o primeiro elemento 
*/
function bubbleSorte(vetor, fnComp) {
    pass = 0, comps = 0, trocas = 0

    let  trocou

    do {
        pass++
        trocou = false 

        // Percurso for tradicional até a PENÚLTIMA posição do vetor
        for(let i = 0; i < vetor.length - 1; i++) {
            comps++
           // if(vetor[i] > vetor[i + 1]) {
               if(fnComp(vetor[1], vetor[ i + 1 ])) { 
                // Efetua a troca entre os elementos por desestruturação
                [ vetor[i], vetor[i + 1] ] = [ vetor[i + 1], vetor[i] ]
                trocou = true
                trocas++
            }
        }
    } while(trocou)
}  


import { objMotoristas }  from "./data/motoristas-obj-desord.mjs"

console.time('Tempo de ordenação')

// Ordenando por nome_motorista
//bubbleSorte(objMotoristas, (elem1, elem2) => elem1.nome_motorista > elem2.nome_motorista)

// Ordenando por nome_motorias em ordem DECRESCENTE
//bubbleSorte(objMotoristas, (elem1, elem2) => elem1.nome_motorista < elem2.nome_motorista)

// Ordenando por nome_motorias em ordem DECRESCENTE ignorando acentos
//bubbleSorte(objMotoristas, (elem1, elem2) => elem1.nome_motorista.localeCompare(elem2
  //  .nome_motorista, 'pt-br'< 0)) // Muito Lento


// Ordenação em dois níveis: primeiro por razao_social e depois por nome_motorista
bubbleSorte(objMotoristas, (elem1, elem2) => {
    if(elem1.razao_social === elem2.razao_social) {     // Mesma emrpesa    
        // Desempate é feito pelo nome do motorista
        return elem1.nome_motorista > elem2.nome_motorista
    }
    // Empresas diferentes, comparação direta de razão_social
    else return elem1.razao_social > elem2.razao_social
})




console.timeEnd('Tempo de ordenação') 

console.log(objMotoristas)
console.log({pass, comps, trocas})