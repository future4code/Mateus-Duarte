import styled from 'styled-components';

export const Botao = styled.button`
  color: white;
  background-color: transparent;
  border: solid 2px white;
  height: 7vh;
  width: 12vw;
  :hover {
    color: black;
    background-color: white;
    cursor: pointer;
  }
  :focus {
    outline: none;
  }
`;
