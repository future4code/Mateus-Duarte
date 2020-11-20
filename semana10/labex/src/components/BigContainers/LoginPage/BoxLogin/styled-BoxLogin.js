import styled from 'styled-components';
import { slideRightAnimation } from '../../../Animations/slideRightAnimation';

export const BoxLoginContainer = styled.div`
  color: white;
  background-color: rgb(113, 113, 113, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30vw;
  margin-left: 10vw;
  margin-top: 15vh;
  padding-bottom: 2vh;
  margin-bottom: 3vh;
  animation: ${slideRightAnimation} 2s;
  form {
    width: 80%;
  }
  h4 {
    text-align: center;
    margin-bottom: 8vh;
  }
  button {
    align-self: center;
    margin-top: 3vh;
  }
`;
