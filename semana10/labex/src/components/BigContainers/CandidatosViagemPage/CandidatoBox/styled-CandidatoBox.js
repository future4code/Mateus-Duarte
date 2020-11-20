import styled from 'styled-components';
import { slideDownAnimation } from '../../../Animations/slideDownAnimation';

export const CandidatoBoxContainer = styled.div`
  color: white;
  background-color: rgb(113, 113, 113, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30vw;
  align-items: flex-start;
  padding-left: 2vw;
  margin: 2vh 3vw;
  animation: ${slideDownAnimation}2s;
  img:nth-child(1) {
    height: 10vh;
  }
  img:nth-child(2) {
    height: 4vh;
    margin-right: 1vw;
    margin-top: 1vh;
    cursor: pointer;
  }
  padding-bottom: 3vh;
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const ContainerMap = styled.div`
  width: 100%;
  animation: ${slideDownAnimation}2s;
  display: flex;
`;
