import styled from 'styled-components';
import { slideDownAnimation } from '../../../Animations/slideDownAnimation';

export const BoxCadastroContainer = styled.div`
  color: white;
  background-color: rgb(113, 113, 113, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30vw;
  margin-left: 10vw;
  margin-bottom: 4vh;
  animation: ${slideDownAnimation} 2s;
  padding-bottom: 2vh;
  form {
    width: 80%;
  }
  h2 {
    text-align: center;
    margin-bottom: 8vh;
  }
  button {
    align-self: center;
    margin-top: 2vh;
  }
`;
