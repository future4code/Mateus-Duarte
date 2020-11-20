import styled from 'styled-components';

export const LabelInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  label {
    font-size: 0.8em;
    font-weight: bold;
    margin-bottom: 2vh;
  }
  input {
    background-color: transparent;
    border-top: none;
    padding-left: 1vw;
    border-left: none;
    border-right: none;
    border-bottom: solid white 1.5px;
    margin-bottom: 2vh;
    :focus {
      outline: none;
    }
    color: white;
    ::placeholder {
      color: #a49f9f;
    }
  }
`;
