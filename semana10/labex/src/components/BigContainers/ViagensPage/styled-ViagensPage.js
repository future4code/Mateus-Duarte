import styled, { keyframes } from 'styled-components';
import ViagensPageBackground from '../../../assets/viagenspage-background.png';
import { slideDownAnimation } from '../../Animations/slideDownAnimation';
import { slideLeftAnimation } from '../../Animations/slideLeftAnimation';

export const ViagensPageTopContainer = styled.div`
  background-image: url(${ViagensPageBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;

  img {
    height: 5vh;
    margin-left: 3vw;
    margin-top: 2vh;
  }
`;

export const TituloContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: white;
  height: 90vh;
  width: 100%;
  margin: auto;

  img {
    width: 2.5vw;
    margin: auto;
  }
  h1 {
    margin-top: 30vh;
    font-size: 3.5em;
    animation: ${slideDownAnimation} 2s;
  }
  h4 {
    align-self: center;
    font-size: 1.5em;
    animation: ${slideDownAnimation} 2s;
  }
`;

export const ViagemContainer = styled.div`
  background-image: url(${(props) => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const ViagenInfoBox = styled.div`
  color: white;
  background-color: #717171;
  height: 30vh;
  width: 12vw;
  margin-bottom: 15vh;
  margin-left: 20vw;
  opacity: 0.8;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  h3 {
    font-size: 1.3em;
  }
  h4 {
    font-size: 1.1em;
  }
`;

export const BotaoContainer = styled.div`
  margin-bottom: 15vh;
  margin-right: 20vw;
  animation: ${slideLeftAnimation} 4s;
`;
