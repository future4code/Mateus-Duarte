import styled from 'styled-components';
import PainelDeControleBackground from '../../../assets/painel-de-controle-background.png';

export const PainelDeControleContainer = styled.div`
  background-image: url(${PainelDeControleBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-self: center;
`;
