import styled from 'styled-components';
import HomeBackground from '../../../assets/home-background.jpg';

export const HomeContainer = styled.div`
  background-image: url(${HomeBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  img {
    height: 5vh;
    margin-left: 3vw;
    margin-top: 2vh;
    cursor: pointer;
  }
`;
export const ContainerBotoes = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin-right: 15vw;
  button {
    margin-top: 3vh;
  }
`;
