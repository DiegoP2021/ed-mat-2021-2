export default class LinkedList { 
    #head // inicio da lista( cabeça )
    #tail // fim da lista (cauda)
    #count // quantidade de nodos na lista 

    constructor() { 
        this.#head = null
        this.#tail = null
        this.#count = 0 
        
    }

    // Getter que retorna se a lista ecadeada está vazia ou não 
    get isEmpty() {
        return this.#count === 0 
    }

    // Getter que retorna a quantidade de elementos da lista 
    get count() { 
        return this.#count
    }

    // Método para inserir em qualuer posição 
    insert(pos, val) { 

        // Cria o nodo para armazenar o valor pretendido
        const inserted = new Node(val) 
        console.log({inserted})

        // 1 caso: a lista está vazia 
        if(this.isEmpty) { 
            this.#head = inserted // 1 nodo
            this.#tail = inserted // ultimo nodo
        }

        // 2 caso: lista não vazia, inserção na primeira posição 
        else if(pos == 0) { 
            // O sucessor do nodo inserido será o nodo que atualmente 
            // oculpa a primeira posição da lista 
            inserted.next = this.#head
            // O inicio da lista passa a ser o novo node inserido 
            this.#head = inserted 
        }

        this.#count++ 

        console.log(`Head: ${JSON.stringify(this.#head)}, tail: ${JSON.stringify(this.#tail)}, count: ${this.#count}`)

    }
    
}

//////////////////////////////////////////////////////////////////////////////////////////////

const lista = new fusca 