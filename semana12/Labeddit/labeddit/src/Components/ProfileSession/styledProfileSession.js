import styled from "styled-components";

export const ProfileContainer = styled.nav`
  display: flex;
  align-items: center;
  img {
    height: 5vh;
    margin-right: 1vw;
  }
  div {
    p {
      margin: 0;
    }
    font-size: 0.8em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    strong {
      color: #acb6c0;
      :hover {
        color: #949ca5;
        cursor: pointer;
      }
    }
  }
`;
