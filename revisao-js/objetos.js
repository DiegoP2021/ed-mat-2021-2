/*
    objetos são estruturas da linguagem JS que permitem armazenar 
    múltiplos valores em uma variavel, tal como os vetores. No
    entanto, ao contrário destes, as posições dos vetores são 
    NOMEADAS, não NUMERADAS.

*/

// Criação de um objeto vazio
let objeto1 = new Object()       // Forma tradicional
let objeto2 = {}                 // Forma moderna


// Criando objetos já com propriedades
// Uma propriedade é um par formado pelo nome da propriedade
// e o valor da propriedade, separados por dois pontos 
// Propriedades são também chamadas de atributos

let pessoa = { 
    nome: 'Juracir Junqueira ',
    sexo: 'M',
    dataNasc: '2000-09-18',
    ocupacao: 'estudante',
    // Quando nomes de propriedades contêm espaços ou
    // caracteres acentuados, eles devem vir ENTRE ASPAS
    'cidade de origem': 'Restinga/SP',
    'serie': '3o C',
    gostos: ['jogar', 'comer doces', 'dormir']
}

// Acessando propriedadews de um objeto
console.log(pessoa.nome)
console.log(pessoa.gostos)

// Qaundo o nome da propriedades contém espaço ou acentos,
// devemos acessá-la usando a SINTAXE DOS COLCHETES'1
console.log(pessoa['serie'])
console.log(pessoa['cidade de origem'])

// A SINTAXE DOS COLCHETES sempre funciona!
console.log(pessoa['dataNasc'])
console.log(pessoa['ocupacao'])

console.log( '------------------------------------------------------------' )

// uma consequencia da sintaxe dos colchetes é a possibilidade de 
// ter nomes de propriedades dentro de variaveis 

// vetor com nome das propriedades 
let props = ['sexo', 'nome', 'dataNasc', 'ocupacao']

for(let p of props) {
    console.log(pessoa[p])
}

console.log( '------------------------------------------------------------' )

// Acrescentando novas propriedades a uma objeto existente
pessoa.email = 'juracirj@gmail.com'
pessoa['telefone contato'] = '(16) 9999-8888'

console.log(pessoa) // Exibindo objeto inteiro

console.log( '------------------------------------------------------------' )

// iniciando um objeto vazio e criando as propriedades depois
let carro = {}
carro.modelo = 'volkswagen'
carro.marca = 'Fusca'
carro.cor = 'Preto'
carro.ano = 1969
carro['nome proprietario'] = 'Juscelina Jordão'

console.log(carro)

console.log( '------------------------------------------------------------' )
console.log('Exibindo os nomes das propriedades do objeto "pessoa"')

// for..in: Retorna os nomes das propriedades de um objeto
for(let prop in pessoa) {
    console.log(prop)
}

console.log( '------------------------------------------------------------' )
console.log('Exibindo os nomes das propriedades do objeto "carro"')

for(let atrib in carro) {
    console.log(atrib)
}

console.log( '------------------------------------------------------------' )

// for..in pode ser utilizado justamente com a sintaxe dos colchetes
// para recuperar o valor de todas as propriedades de um objeto
for( let p in pessoa) {
    console.log(`${p} -> ${pessoa[p]}`)
}
