import styled from 'styled-components';
import PaginaInscricaoBackground from '../../../assets/pagina-inscricao-background.png';
export const PaginaInscricaoContainer = styled.div`
  background-image: url(${PaginaInscricaoBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-self: center;
  button {
    align-self: center;
    margin-bottom: 3vh;
  }
`;
