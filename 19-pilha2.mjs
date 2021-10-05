import Stack from './lib/Stack.mjs'

const expressao = '3 / {2 + 4 * [-1 - (4 * 7) / 2] + (2 * 7)}'

const analisador = new Stack()    // Cria uma pilha 

/*
    TIpos de símbolos: 
    P = Parêntese
    C = colchete
    X = chave

*/

// Percorre a expressão procurando por símnolos 
// 1. Quando encontra símbolo de abertura, empilha, no analisador 
// informações sobre eles
for(let pos = 0; pos < expressao.length; pos++) { 
    switch(expressao.charAt(Pos)){
        case'{':
            analisador.push({tipo: 'X', pos: pos})
            break 
        case '[': 
            analisador.push({tipo: 'C', pos: pos})
            break
        case '(': 
            analisador.push({tipo: 'P', pos: pos})
    }
}

console.log(analisador.print())