import styled from 'styled-components';
import SpaceBackground from '../../../assets/candidatos-viagem-page-background.png';
import { slideDownAnimation } from '../../Animations/slideDownAnimation';

export const CandidatosViagemPageContainer = styled.div`
  background-image: url(${SpaceBackground});
  background-position: center;
  background-repeat: repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  color: white;
  h2,
  h4 {
    margin-left: 4vw;
    margin-top: 3vh;
    animation: ${slideDownAnimation}2s;
  }
`;

export const BackIconContainer = styled.div`
  margin-top: 3vh;
  margin-left: 4vw;
`;

export const ContainerCandidatos = styled.div`
  background-image: url(${SpaceBackground});
  background-position: center;
  background-repeat: repeat;
  background-size: cover;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
