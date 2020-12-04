import styled from 'styled-components';
import { slideDownAnimation } from '../../../Animations/slideDownAnimation';

export const ContainerBoxInscricao = styled.div`
  color: white;
  background-color: rgb(113, 113, 113, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30vw;
  margin: auto;
  margin-top: 10vh;
  animation: ${slideDownAnimation} 2s;
`;
