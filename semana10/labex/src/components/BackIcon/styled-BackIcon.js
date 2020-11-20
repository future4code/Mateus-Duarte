import styled from 'styled-components';
import { BackIcon } from './BackIcon';
import { slideDownAnimation } from '../Animations/slideDownAnimation';

export const BackIconContainer = styled.div`
  color: white;
  display: flex;
  width: 20vw;
  justify-content: flex-start;
  align-items: center;
  animation: ${slideDownAnimation} 2s;
  img {
    height: 3vh;
  }
  cursor: pointer;
`;
