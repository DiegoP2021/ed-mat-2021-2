import Queue from "./lib/Queue.mjs";

let fila = new Queue() 
console.log(fila.print())

// Inserções na fila 
fila.enqueue('Diego')
fila.enqueue('Mabi')
fila.enqueue('Vinicius')
fila.enqueue('Joao')

console.log(fila.print())

// Remoção da fila 
let atendido = fila.dequeue() 
console.log({atendido})
console.log(fila.print())

// Novas inserções 
fila.enqueue('Rafaela') 
fila.enqueue('Diego')
console.log(fila.print())

// Observando o inicio da fila 
let proximo = fila.peek()
console.log({proximo})
console.log(fila.print())

// Nova remoção 
atendido = fila.dequeue()
console.log({atendido})
console.log(fila.print())