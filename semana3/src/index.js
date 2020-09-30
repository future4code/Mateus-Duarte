// * 1 - O codigo testa se um número é par ou não. Se for ele passa no teste, caso o contrario não passa.

// * 2 a) o codigo acima verifica o produto como input e solta um preço como output. b) O preço da fruta maça é R$2.25. c) 5

// * 3 a) A primeira linha cria uma variável pedindo ao usuário um número, e automaticamente já transforma o que o usuário digitar em número. b)Vamos presenciar um erro em todos os casos, pois a variável mensagem foi definida dentro do if e a utilização foi feita fora do mesmo.

// ! 4 --> 

// ! let idade =  Number(prompt("Qual a sua idade?"))
// !if(idade >= 18){
// !    console.log("Você pode dirigir!")
// ! }
// ! else {
// !    console.log("Você não pode dirigir!")
// ! }



// ? 5 -->

// ? let turno = prompt("Qual turno do dia você estuda? (M (matutino) ou V (Vespertino) ou N (Noturno))")
// ? if(turno === "M"){
// ?    console.log("Bom dia!")
// ? }
// ? else if (turno ==="V"){
// ?    console.log("Boa tarde!")
// ? }
// ? else {
// ?    console.log("Boa noite!")
// ? }


// * 6 -->

// * let turno = prompt("Qual turno do dia você estuda? (M (matutino) ou V (Vespertino) ou N (Noturno))")
// * switch(turno) {
// *    case "M":
// *        console.log("Bom dia!");
// *        break;
// *    case "N":
// *        console.log("Boa noite!");
// *        break;
// *    default:
// *        console.log("Boa tarde!");
// *        break;
// * }



// ! 7

// ! let genero = prompt("Qual o gênero do filme?");
// ! let preco = Number(prompt("Quanto custa mano?"))
// ! let resposta
// ! if(genero === "Fantasia" || genero === "fantasia"){
// !    if(preco < 15){
// !       resposta = "Bom filme"
// !    }
// !    else {
// !        resposta = "Escolha outro filme"
// !    }
// ! }
// ! else {
// !    resposta = "Escolha outro filme"
// ! }
// ! console.log(resposta)

// ? DESAFIO 1

// ? let genero = prompt("Qual o gênero do filme?");
// ? let preco = Number(prompt("Quanto custa mano?"))
// ? let snack = prompt("Qual snack você quer?")
// ? let resposta
// ? if(genero === "Fantasia" || genero === "fantasia"){
// ?   if(preco < 15){
// ?      resposta = "Bom filme! Com "+ snack
// ?   }
// ?   else {
// ?       resposta = "Escolha outro filme"
// ?   }
// ? }
// ? else {
// ?   resposta = "Escolha outro filme"
// ? }
// ? console.log(resposta)


// DESAFIO 2

// let nome = prompt("Qual o seu nome?")
// let tipoDeJogo = prompt("Qual o tipo de jogo? IN(internacional) ou DO(doméstico)")
// let etapaDoJogo = prompt("Qual a etapa do jogo? SF(semi-final), DT(decisão de terceiro lugar) ou FI(final)")
// let categoria = Number(prompt("Qual a categoria? 1, 2, 3 ou 4"))
// let quantidadeIngressos = prompt("Quantos ingressos?")
// let preco


// switch(tipoDeJogo){
//     case "IN":
//         tipoDeJogo = "Internacional";
//         break;
//     default:
//         tipoDeJogo ="Nacional"
//         break;
// }
// switch(etapaDoJogo){
//     case "SF":
//         etapaDoJogo = "Semi-Final";
//         break;
//     case "FI":
//         etapaDoJogo = "Final";
//         break;
//     default:
//         etapaDoJogo ="Decisão de terceiro lugar";
//         break;
// }

// if (etapaDoJogo === "SF"){
//     switch(categoria){
//         case 1:
//             preco = 1320;
//             break;
//         case 2:
//             preco = 880;
//             break;
//         case 3:
//             preco = 550;
//             break;
//         default:
//             preco = 220;
//             break;
//     } 
// } else if(etapaDoJogo === "DT"){
//     switch(categoria){
//         case 1:
//             preco = 660;
//             break;
//         case 2:
//             preco = 440;
//             break;
//         case 3:
//             preco = 330;
//             break;
//         default:
//             preco = 170;
//             break;
//     }
// } else {
//     switch(categoria){
//         case 1:
//             preco = 1980;
//             break;
//         case 2:
//             preco = 1320;
//             break;
//         case 3:
//             preco = 880;
//             break;
//         default:
//             preco = 330;
//             break;
//     }    
// }

// if(tipoDeJogo === "IN"){
//     preco = preco * 4.1
// } else {
//     preco = preco
// }

// let precoTotal = preco * quantidadeIngressos
// if(tipoDeJogo === "IN"){
//     precoTotal = "U$ " + precoTotal
// } else {
//     precoTotal = "R$" + precoTotal
// }

// if(tipoDeJogo === "IN"){
//     preco = "U$ " + preco
// } else {
//     preco = "R$" + preco
// }

// console.log(preco)
// console.log("--Dados da compra--")
// console.log("Nome do cliente: " + nome)
// console.log("Etapa do jogo: " + etapaDoJogo)
// console.log("Tipo do Jogo: " + tipoDeJogo)
// console.log("Categoria: " + categoria)
// console.log("Quantidade de ingressos: " + quantidadeIngressos)
// console.log("--Valores--")
// console.log("Valor do ingresso: " + preco)
// console.log("Valor total: " + precoTotal)



