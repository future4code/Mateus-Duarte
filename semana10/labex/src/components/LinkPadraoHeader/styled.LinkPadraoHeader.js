import styled from 'styled-components';

export const LinkContainer = styled.div`
  div {
    display: flex;
    width: 30vw;
    height: 5vh;
    align-items: center;
    justify-content: center;
  }
`;
export const Link = styled.button`
  color: white;
  background-color: transparent;
  border: none;
  height: 3.7vh;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
