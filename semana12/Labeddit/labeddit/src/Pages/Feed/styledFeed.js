import styled from "styled-components";

export const CreatePostContainer = styled.form`
  border: 1px solid #acb6c0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 70vw;
  margin: 10vh auto 5vh auto;
  h2 {
    margin-left: 2vw;
  }
  input,
  textarea {
    border: 1px solid #acb6c0;
    border-radius: 5px;
    padding-left: 2vw;
    width: 90%;
    margin: auto;
    margin-bottom: 2vh;
    ::placeholder {
      color: #acb6c0;
    }
    :focus {
      outline: none;
    }
  }
  input {
    height: 5vh;
  }
  textarea {
    height: 20vh;
  }
  button {
    align-self: flex-end;
    margin: 2vh 2vw 4vh 0;
  }
`;
