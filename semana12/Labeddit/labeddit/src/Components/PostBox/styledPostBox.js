import styled from "styled-components";

export const PostBoxContainer = styled.main`
  border: ${(props) => (props.border ? "1px solid #ACB6C0" : "none")};
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  width: 70vw;
  height: 35vh;
  margin: auto;
  margin-bottom: 5vh;
  :hover {
    border-color: #6f757a;
  }
  img {
    cursor: pointer;
  }
`;

export const PostBoxContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  margin: 0.5vh 0 0 2%;
  p:nth-child(1) {
    color: #acb6c0;
    font-size: 0.5em;
  }
  div {
    padding-left: 1vw;
    width: 13vw;
    border-radius: 5px;
    :hover {
      p {
        color: white;
        font-weight: bold;
      }
      background-color: rgb(172, 182, 192, 0.5);
      cursor: pointer;
    }
    :active {
      border: 1px solid #6f757a;
    }
    img {
      height: 4vh;
      margin-right: 1vw;
    }
    display: flex;
    align-items: center;
    p {
      color: #acb6c0;
      font-size: 0.8em;
    }
  }
`;

export const PostBoxNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3% 2% 0 0;
  img {
    height: 3vh;
    :hover {
      background-color: rgb(172, 182, 192, 0.5);
      padding: 4px;
    }
  }
`;
