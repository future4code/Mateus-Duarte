// * EXERCICIO 1 --> O código vai adicionar i na variavel valor, até que i seja maor que 4. Então o fluxo será o seguinte: 0 + 0, 0 + 1, 1 + 2, 3 + 3, 6 + 4. Poranto o valor que vai aparecer no console é 10.

// ! EXERCICIO 2 -->  a) O console vai imprimir todos os números da lista que são maiores que 18.    b) para acessar o indice temos que usar mais que for of


//  a) const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

// for(let i = 0; i < array.length; i++){
//     console.log(array[i])
// }

// b) const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

// for(let i = 0; i < array.length; i++){
//     console.log(array[i]/10)
// }


// c) const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
// let array2 = []
// for(let i = 0; i < array.length; i++){
//     if(array[i]%2 === 0){
//         array2.push(array[i])
//     }
// }

// console.log(array2)

// d) const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
// let array2 = []
// for(let i = 0; i < array.length; i++){
//     array2.push("O elemento do índex " + i + " é: " + array[i])
// }

// console.log(array2)

// e) const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
// let valorMaximo = 0
// let valorMinimo = 131
// for(let i = 0; i < array.length; i++){
//     if(array[i] > valorMaximo){
//         valorMaximo = array[i]
//     }
// }
// for(let i = 0; i < array.length; i++){
//     if(array[i] < valorMinimo){
//         valorMinimo = array[i]
//     }
// }
// console.log("Esse é o valor máximo: " + valorMaximo)
// console.log("Esse é o valor mínimo: " + valorMinimo)


// * DESAFIO 2

// let numero = prompt("Jogador 1: escolha um número");
// console.log("Vamos Jogar!!!")
// let numero2 
// let count = 0
// while(numero !== numero2){
//     numero2 = prompt("Jogador 2: adivinhe o número escolhido pelo jogador 1!")
//     if(numero2 < numero){
//         console.log("Errrrrrrrooou, é maior")
//     }else if (numero2 > numero){
//         console.log("Errrrrrrrooou, é menor")
        
//     } else console.log("ACERTOU!!!") 
//     count++
// }
// console.log("O número de tentativas foi: " + count)


// * DESAFIO 3

// let numero = Math.floor((Math.random() * 100) + 0);
// console.log("Vamos Jogar!!!")
// let numero2 
// let count = 0
// while(numero != numero2){
//     numero2 = prompt("Jogador 2: adivinhe o número escolhido pelo jogador 1!")
//     if(numero2 < numero){
//         console.log("Errrrrrrrooou, é maior")
//     }else if (numero2 > numero){
//         console.log("Errrrrrrrooou, é menor")
        
//     } else console.log("ACERTOU!!!") 
//     count++
// }
// console.log("O número de tentativas foi: " + count)