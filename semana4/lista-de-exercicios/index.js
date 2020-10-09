// ! Interpretação de código

// * 1. Quando o usuario acessar a pagina, vai subir um prompt perguntando o colar da cotação do Dolar. Esse valor sera multiplicado por 100 e aparecera no console.


// * 2. Vai aparecer 165 no console e a string --> TIPO DE INVESTIMENTO INFORMADO INCORRETO

// * 3. 14 7 7

// * 4. 25 25

// ! Lógica de Programação

// * 1
// let array1 = [2,3,4,8,9,10]
// let w = 0
// for (i = 0; i < array1.length; i++){
//     console.log(array1[i])
// }
//     while (w < array1.length){

//     console.log(array1[w])
//     w++
// }
// do {
//     console.log(array1[w])
//     w++
// } while (w < array1.length)

// * 2

// const booleano1 = true
// const booleano2 = false
// const booleano3 = !booleano2
// const booleano4 = !booleano3 

// a) false
// b) false
// c) true
// d) true
// e) true

// * 3

// const quantidadeDeNumerosPares = 10
// let i = 0
// while(i <= quantidadeDeNumerosPares) {
//   console.log(i*2)
//   i++
// }

// * 4

// const ladosTriangulo = (a, b, c) => {
//     if (a === b && a === c){
//         return "Equilátero";
//     } else if (a === b || a === c || b === c){
//         return "Isósceles"
//     } else {
//         return "Escaleno"
//     }
// }

// console.log(ladosTriangulo(2, 5, 3))

// * 5

// const doisNumeros = (a, b) => {
//     let qualMaior 
//     if (a > b) {
//         qualMaior = a
//     } else if (b > a){
//         qualMaior = b
//     } else {
//         qualMaior = `${a} e ${b} são iguais`
//     }
//     let saoDivisiveis
//     if (a % b === 0 || b % a === 0){
//         saoDivisiveis = `Os números são divisíveis`
//     } else {
//         saoDivisiveis = `Os números não são divisíveis`
//     }
//     let diferencaNumeros 
//     if((a - b) >= 0){
//         diferencaNumeros = `A diferença entre os números é ${a - b}`
//     } else {
//         diferencaNumeros = `A diferença entre os números é ${b - a}`
//     }
//     console.log(`O maior é: ${qualMaior}`)
//     console.log(saoDivisiveis)
//     console.log(diferencaNumeros)
// }
// doisNumeros(99,20)


// ! Funções

// * 1

// array1 = [2, 7, 10, 30, 8, 1, 9,18, 999, 882, 23, 827]
// const segundoMaiorSegundoMenor = (array) => {
//    let maxNumber = (Math.max(...array))
//    let i = array.indexOf(maxNumber)
//    console.log(i)
//    array.splice(Number(i), 1);
//    console.log(array)
//    let minNumber = (Math.min(...array))
//    let j = array.indexOf(minNumber)
//    array.splice(Number(j), 1);
//    return `O segundo maior número do array é ${Math.max(...array)} e o segundo menor é ${Math.min(...array)}`

// }
// console.log(segundoMaiorSegundoMenor(array1))


// * 2

// let alerta = function(){alert("Hello Future4");}
// alerta();

// ! Objetos

// * 1

// Objetos são propriedades onde podemos gravar dados de uma forma mais estruturada. Podemos utilizar elementos por exemplo para guardar uma lista de integrantes de uma banda, onde podemos colocar caracteristias da pessoa, seja nome, idade, genero e comida preferida.

// * 2

// const criaRetangulo = (lado1, lado2) => {
//    const retangulo = {
//         largura: lado1,
//         altura: lado2,
//         perimetro: 2* (lado1 + lado2),
//         area: (lado1 * lado2)
//     }
//     return retangulo
// }
// console.log(criaRetangulo(2,3))

// * 3

// const filmeFavorito = {
//     titulo: 'Era uma vez em Holywood',
//     ano: 2019,
//     diretor: 'Quentin Tarantino',
//     atores: ['Brad Pitt', 'Leonardo DiCaprio'],
//     atrizes: ['Margot Robbie','Dakota Planning']
// }
// console.log(`Venha assistir ao filme ${filmeFavorito.titulo}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e estrelado por ${filmeFavorito.atores},${filmeFavorito.atrizes}`)

// * 4
// const pessoaQualquer = {
//     nome: 'Roger',
//     idade: 49,
//     email: 'roger@gmail.com',
//     endereco: 'Rua dos maluco, 132'
// }

// const anonimizarPessoa = () => {
//     const pessoaAnonima = {
//     ...pessoaQualquer,
//     nome: 'Anonimo',
//     idade: 'Anonimo',
//     email: 'Anonimo',
//     endereco: 'Anonimo'
//  }
//  return pessoaAnonima
// }

// console.log(anonimizarPessoa())

// ! Funções de Array

// * 1

// let array1 = [
// 	{ nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 } 
// ]

// const adultos = array1.filter((element) => {
//     return element.idade >= 20
// })
// const criancas = array1.filter((element) => {
//     return element.idade < 20
// })

// console.log(adultos)

// console.log(criancas)

// * 2

const array = [1, 2, 3, 4, 5, 6]

// a) const arrayVezesDois = array.map((element) => {
//     return element * 2
// })

// b) const arrayVezesTresString = array.map((element) => {
//     let num = element * 3
//     return String(num)
// })

// c) const arrayStrings = array.map((element) => {
//     if(element % 2 === 0){
//         return `${element} é par` 
//     } else {
//         return `${element} é impar`
//     }
// })

// console.log(arrayStrings)

// * 3 

// const pessoas = [
// 	{ nome: "Paula", idade: 12, altura: 1.8},
// 	{ nome: "João", idade: 20, altura: 1.3},
// 	{ nome: "Pedro", idade: 15, altura: 1.9},
// 	{ nome: "Luciano", idade: 22, altura: 1.8},
// 	{ nome: "Artur", idade: 10, altura: 1.2},
// 	{ nome: "Soter", idade: 70, altura: 1.9}
// ]

// const permissao = pessoas.filter((element) => {
//     return (element.idade > 14 && element.idade < 60 && element.altura >= 1.5)
// })

// const semPermissao = pessoas.filter((element) => {
//     return (element.idade < 14 || element.idade > 60 || element.altura < 1.5)
// })

// console.log(semPermissao)

// * 4

// const consultas = [
// 	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
// 	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
// 	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
// 	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
// ]

// const email = consultas.map((element) => {
//     if(element.cancelada === false && element.genero === 'masculino'){
//         return `
//         Olá, Sr.${element.nome}. Estamos enviando esta mensagem para
//         lembrá-lo da sua consulta no dia ${element.dataDaConsulta}. Por favor, acuse
//         o recebimento deste e-mail.
//         `
//     } else if (element.cancelada === true && element.genero === 'masculino'){
//         return `Olá, Sr.${element.nome}. Infelizmente, sua consulta marcada
//         para o dia ${element.dataDaConsulta} foi cancelada. Se quiser, pode entrar em 
//         contato conosco para remarcá-la`
//     } else if (element.cancelada === false && element.genero === 'feminino'){
//         return `
//         Olá, Sra.${element.nome}. Estamos enviando esta mensagem para
//         lembrá-la da sua consulta no dia ${element.dataDaConsulta}. Por favor, acuse
//         o recebimento deste e-mail.
//         `
//     } else{
//         return `Olá, Sra.${element.nome}. Infelizmente, sua consulta marcada
//         para o dia ${element.dataDaConsulta} foi cancelada. Se quiser, pode entrar em 
//         contato conosco para remarcá-la`
//     }
// })

// console.log(email)

// * 5
let array1 = [1,4,5,6,10]
const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]



const email = contas.forEach((element) => {
    for(i = 0; i < element.length;i++){
        let sumCompras = 0
        for(j = 0; j < element[i].compras.length; j++){
            sumCompras += element[i].compras[j]
        }
        return element.saldoTotal =+ sumCompras
    }
})

console.log(contas)

