export default class Deque { 
    
    #data //vetor privado 

    constructor() { 
        this.#data = [] // vetor vazio 
    }

    // Método para inserção no inicio da estrutura 
    insertFront(val) { 
        this.#data.unshift(val)
    }

    // Método para inserção no final da estrutura 
    insertBack(val) { 
        this.#data.push(val)
    }

    // Método para remoção do inicio da estrutura
    removeFront() { 
        return this.#data.shift()
    }

    // Métodos para remoção do final da estrutura
    removeBack() { 
        return this.#data.pop()
    }

    // Método para consultar o inicio da estrutura 
    peekFront() { 
        return this.#data[0]
    }

    // Metodo para consultar o final da estrutura 
    peekBack() { 
        return this.#data[this.#data.length - 1]
    }

    // Getter para informar se o deque está ou não vazio 
    // ( propriedade somente leitura )
    get isEmpty() { 
        return this.#data.length === 0 
    }

    // Método que imprime o deque (para efeitos de deputação)
       print() { 
        let output = '['
        for(let i = 0; i < this.#data.length; i++) { 
            if(output !== '[ ') output += ', '
            output += `(${i}): ${this.#data[i]}`
        }
        return output + ' ]'
    }
}