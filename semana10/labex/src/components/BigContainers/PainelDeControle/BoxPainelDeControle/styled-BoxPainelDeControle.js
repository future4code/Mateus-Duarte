import styled from 'styled-components';
import { slideDownAnimation } from '../../../Animations/slideDownAnimation';

export const BoxPainelDeControleContainer = styled.div`
  color: white;
  background-color: rgb(113, 113, 113, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30vw;
  margin: auto;
  margin-top: 15vh;
  padding-bottom: 2vh;
  animation: ${slideDownAnimation} 2s;
  h1 {
    text-align: center;
  }
  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 4vh;
    align-items: center;
  }
  select {
    width: 20vw;
    height: 4vh;
    color: white;
    background-color: transparent;
    border: solid 2px white;
    :hover {
      color: black;
      background-color: white;
      cursor: pointer;
    }
    :focus {
      outline: none;
    }
    padding-left: 1vw;
  }
`;
