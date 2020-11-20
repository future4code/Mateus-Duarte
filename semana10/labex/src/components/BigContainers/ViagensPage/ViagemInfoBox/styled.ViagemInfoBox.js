import styled from 'styled-components';
import { slideRightAnimation } from '../../../Animations/slideRightAnimation';

export const ViagemInfoBoxContainer = styled.div`
  color: white;
  background-color: rgb(113, 113, 113, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20vw;
  margin-left: 15vw;
  margin-bottom: 15vh;
  padding-bottom: 2vh;
  animation: ${slideRightAnimation} 4s;
`;
