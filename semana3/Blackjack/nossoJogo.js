/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

 let cartasUsuario1 = []

 for (let index = 0; index < 2; index++) {
   car
   cartasUsuario1.push(comprarCarta())
 }

 console.log("Bem vindo ao jogo de Blackjack!");
 const cartaUsuario1 = comprarCarta()
 const cartaUsuario2 = comprarCarta()
 const cartaComputador1 = comprarCarta()
 const cartaComputador2 = comprarCarta()
 const computadorPontuacao = cartaComputador1.valor + cartaComputador2.valor
 const usuarioPontuacao = cartaUsuario1.valor + cartaUsuario2.valor
 const computadorTexto = cartaComputador1.texto + " " + cartaComputador2.texto
 const usuarioTexto = cartaUsuario1.texto + " " + cartaUsuario2.texto

 if(confirm("Quer iniciar uma nova rodada?")) {
   console.log("Usuário - cartas: " +  usuarioTexto + " - pontuação " + usuarioPontuacao )
   console.log("Computador - cartas: " +  computadorTexto + " - pontuação " + computadorPontuacao)
   if(computadorPontuacao > usuarioPontuacao){
      console.log("O computador ganhou!!")
   } else if (computadorPontuacao < usuarioPontuacao){
      console.log("O usuário ganhou!!")
   } else {
      "Empate!"
   }
} else {
	console.log("O jogo acabou!")
}
 