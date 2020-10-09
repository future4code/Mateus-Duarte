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

const doisNumeros = (a, b) => {
    let qualMaior 
    if (a > b) {
        qualMaior = a
    } else if (b > a){
        qualMaior = b
    } else {
        qualMaior = `${a} e ${b} são iguais`
    }
    let saoDivisiveis
    if (a % b === 0 || b % a === 0){
        saoDivisiveis = `Os números são divisíveis`
    } else {
        saoDivisiveis = `Os números não são divisíveis`
    }
    let diferencaNumeros 
    if((a - b) >= 0){
        diferencaNumeros = `A diferença entre os números é ${a - b}`
    } else {
        diferencaNumeros = `A diferença entre os números é ${b - a}`
    }
    console.log(`O maior é: ${qualMaior}`)
    console.log(saoDivisiveis)
    console.log(diferencaNumeros)
}
doisNumeros(99,20)