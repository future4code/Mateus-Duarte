import { BotaoPadrao } from '../../BotaoPadrao/BotaoPadrao';
import { PaginaInscricaoContainer } from './styled-PaginaInscricao';
import { Header } from '../../Header/Header';
import { BoxInscricao } from './BoxInscricao/BoxInscricao';

export function PaginaInscricao() {
  return (
    <PaginaInscricaoContainer>
      <Header link1="EXPLORAR VIAGENS" link2="ENTRAR ÁREA RESTRITA" />
      <BoxInscricao />
    </PaginaInscricaoContainer>
  );
}
