import styled from 'styled-components';
import LoginPageBackground from '../../../assets/loginpage-background.png';
import { slideRightAnimation } from '../../Animations/slideRightAnimation';

export const LoginPageContainer = styled.div`
  background-image: url(${LoginPageBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-self: center;
  color: white;
  p {
    font-size: 0.5em;
    margin-left: 10vw;
    margin-top: 0;
    animation: ${slideRightAnimation} 2s;
  }
`;
