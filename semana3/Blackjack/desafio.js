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



console.log("Bem vindo ao jogo de Blackjack!");
let cartasUsuarioTexto = []
let cartasComputadorTexto = []
let somaCartasUsuario = 0
let somaCartasComputador = 0

if(confirm("Quer iniciar uma nova rodada?")) {
   for (i = 0; i < 2; i++) {
      let cartaU = comprarCarta();
      cartasUsuarioTexto.push(cartaU.texto);
      somaCartasUsuario += cartaU.valor;
      if(somaCartasUsuario === 22){
         somaCartasUsuario -= cartaU.valor;
         cartasUsuarioTexto.pop
      }
      let cartaC = comprarCarta();
      cartasComputadorTexto.push(cartaC.texto);
      somaCartasComputador += cartaC.valor;
      if(somaCartasComputador === 22){
         somaCartasComputador -= cartaU.valor;
         cartasComputadorTexto.pop
      }
   } 

} else {
   console.log("O jogo acabou!")
}


let usuarioQuerContinuar = true


while (usuarioQuerContinuar){
   if (confirm(
      "Suas cartas são: " + cartasUsuarioTexto + ". Você tem " + somaCartasUsuario + " pontos." +
      "\n" + "A carta revelada do computador é: " + cartasComputadorTexto[0] +
      "\n"+ 
      "Deseja comprar mais uma carta?"
   )){
      let cartaU = comprarCarta();
      cartasUsuarioTexto.push(cartaU.texto);
      somaCartasUsuario += cartaU.valor;
      if(somaCartasUsuario >= 21) {
         usuarioQuerContinuar = false
      }
   } else{
      console.log("vez do computador!!!")
      usuarioQuerContinuar = false
   }
}
   

   


if(somaCartasUsuario > 21){
   console.log("Você estourou! Suas cartas são: " + cartasUsuarioTexto +  ". Sua pontuaçãoo é: " + somaCartasUsuario + "! O computador fez " + somaCartasComputador + " pontos! Com as cartas: " + cartasComputadorTexto + "." );
}else if (somaCartasUsuario === somaCartasComputador && somaCartasUsuario === 21) {
   console.log("Deu empate!!! OS DOIS GANHARAM!! Você fez " + somaCartasUsuario + " pontos! Com as cartas: " + cartasUsuarioTexto + "! O computador fez " + somaCartasComputador + " pontos! Com as cartas: " + cartasComputadorTexto + "." );
}else if (somaCartasUsuario < somaCartasComputador){
   console.log("Perdeeeu! Você fez " + somaCartasUsuario + " pontos! Com as cartas: " + cartasUsuarioTexto + "! O computador fez " + somaCartasComputador + " pontos! Com as cartas: " + cartasComputadorTexto + "." );
}else if(somaCartasUsuario === somaCartasComputador && somaCartasUsuario < 21){
   console.log("VISH! Deu empate!!! Você fez " + somaCartasUsuario + " pontos! Com as cartas: " + cartasUsuarioTexto + "! O computador fez " + somaCartasComputador + " pontos! Com as cartas: " + cartasComputadorTexto + ".");
} else if (somaCartasUsuario > somaCartasComputador){
   do{
      let cartaC = comprarCarta();
      cartasComputadorTexto.push(cartaC.texto);
      somaCartasComputador+= cartaC.valor;
   } while(somaCartasComputador < somaCartasUsuario)
   if(somaCartasComputador > 21){
      console.log("Você ganhou! Suas cartas são: " + cartasUsuarioTexto +  ". Sua pontuaçãoo é: " + somaCartasUsuario + "! O computador estourou!! Fez " + somaCartasComputador + " pontos! Com as cartas: " + cartasComputadorTexto + "." );
   } else if(somaCartasUsuario === somaCartasComputador){
         console.log("VISH! Deu empate!!! Você fez " + somaCartasUsuario + " pontos! Com as cartas: " + cartasUsuarioTexto + "! O computador fez " + somaCartasComputador + " pontos! Com as cartas: " + cartasComputadorTexto + ".");
   } else {
      console.log("Perdeeeu! Você fez " + somaCartasUsuario + " pontos! Com as cartas: " + cartasUsuarioTexto + "! O computador fez " + somaCartasComputador + " pontos! Com as cartas: " + cartasComputadorTexto + "." );
   }
}


  
