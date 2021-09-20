/*
    INSTRUÇÕES

    1) Identifique o algoritmo abaixo.
    R - O algoritimo é o MergeSort

    2) Faça o mapeamento das variáveis (registre em comentário o propósito de cada uma delas).
    3) Introduza a função de comparação, de modo que o algoritmo possa ser utilizado com vetores de objetos.

*/
let comps = 0
const z = y => {
    // vai pegar 2 elementos para ser dividido, pois é o minimo que tem que ter.
    if(y.length < 2) return y 
    // Vai achar aproximadamente o meio 
    let x = Math.floor(y.length / 2)
    // slice() divide um vetor da primeira posição informada 
    // até a última posição informada 
    let w = y.slice(0, x)
    // Quando o segundo parâmetro de slice() é omitido, a fatia vai
    // da posição informada até o final do vetor
    let v = y.slice(x)
    let u
    w = z(w)
    v = z(v)
    let t = 0, s = 0, r = []
    while(t < w.length && s < v.length) {
         // O menor elemento é o do vetor esquerdo
        comps++
        if(w[t] < v[s]) {
          
            r.push(w[t])
            t++
        }
           // O menor elemento é o do vetor direito
        else {
            r.push(v[s])
            s++
        }
    }

    // Sobra à esquerda
    // Copia para a sobra todos os elementos a partir de T
    // até o fim de T
    if(t < s) u = w.slice(t)
    // Sobra a direita
     // Copia para a sobra todos os elementos a partir de S
     // até o fim de S
    else u = v.slice(s)
     // O vetor final ordenado será a concatenação de T + S
    return [...r, ...u]
}