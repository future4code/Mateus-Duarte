//  * EXERCICIO 1 => a) vai ser impresso 10 e 50. b) nada seria impresso

// ! EXERCICIO 2 => a) Darvas e Caio   b) Amanda e Caio

//  ? EXERCICIO 3 => A função recebe um array, e cria um novo com todos os números pares daquele array ao quadrado. Eu colocaria o nome de criarArrayNumerosParesAoQuadrado

// * EXERCICIO 4 =>


// a) 

// function fazerIntroducao(){
//     console.log("Eu sou Mateus, tenho 22 anos, moro em São Paulo e sou estudante.")
// }

// fazerIntroducao()

// b)
// function fazerIntroducao(nome, idade, cidade, estudante) {
//     if (estudante === true){
//     return ("Eu sou " + nome + ", tenho " + idade + " anos, moro em " + cidade +" e sou estudante")

//     } else {
//         return ("Eu sou " + nome + ", tenho " + idade + " anos, e moro em " + cidade)
//     }
// }

// console.log(fazerIntroducao("Mateus", 22, "São Paulo", false))


// ! EXERCICIO 2 =>

// A)
// function somaNumero (numero1, numero2){
//     return numero1 + numero2;
// }

// console.log(somaNumero(10, 89))


// B)
// function isBigger (numero1, numero2){
//     return numero1 >= numero2;
// }
// console.log(isBigger(80,320))

// function repete10Vezes (string){
//     let loops = 0;
//     while (loops != 10){
//         console.log(string);
//         loops++
//     }
// }

// repete10Vezes("ihaaaaa")

// ? EXERCICIO 3 =>

// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22, 82]

// A)
// function numerosArray(array){
//     return array.length;
// }

// console.log(numerosArray(array))


// B)
// function ePar(numero){
//     return numero % 2 === 0;
// }
// console.log(ePar(4))
// console.log(ePar(27))

// C) e D) 
// function quantosPares(array){
//     let even_count = 0
//     for(i = 0; i < array.length; i++){
//         if (ePar(array[i])){
//             even_count++;
//         }
//     }
//     return even_count; 
// }

// console.log(quantosPares(array))


// * DESAFIO 1 


// let printParametro = (a) => {
//     console.log(a)
// }

// // printParametro("oieee")

// let somaParametros = (p1,p2) => {
//     let soma = p1 + p2;
//     printParametro(soma)
// }

// somaParametros(100, 890)


// ! DESAFIO 2

const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]


// a)

// function paresVezesDois(array){
//     let arrayNovo = []
//     for(i = 0; i < array.length; i++){
//         if(array[i] % 2 === 0){
//             arrayNovo.push(array[i]*2)
//         }
//     }
//     console.log(arrayNovo)
// }

// paresVezesDois(numeros)


// b)
// function maiorNumeroArray(array){
//     let maiorNumero = -1000000
//     for(i = 0; i < array.length; i++){
//         if(array[i] > maiorNumero){
//             maiorNumero = array [i]
//         } 
//     }
//     return maiorNumero
// }

// console.log(maiorNumeroArray(numeros))



// c)

// function maiorNumeroArray(array){
//     let maiorNumero = -1000000
//     let indiceMaiorNumero
//     for(i = 0; i < array.length; i++){
//         if(array[i] > maiorNumero){
//             maiorNumero = array [i]
//             indiceMaiorNumero = i

//         } 
//     }
//     return indiceMaiorNumero
// }

// console.log(maiorNumeroArray(numeros))


// d)

// function arrayInvertido(array){
//     let novoArray = []
//     for(i = 0; i < array.length; i++){
//         novoArray.unshift(array[i])
//     }
//     return novoArray
// }

// console.log(arrayInvertido(numeros))