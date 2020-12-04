import styled from 'styled-components';
import CadastroPageBackground from '../../../assets/cadastro-page-background.png';
export const CadastroPageContainer = styled.div`
  background-image: url(${CadastroPageBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
