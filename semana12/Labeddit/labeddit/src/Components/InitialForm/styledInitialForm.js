import styled, { css } from "styled-components";
import { scaleInTR } from "../../Animations/scaleInTR";
import { scaleOutTR } from "../../Animations/scaleOutTR";

export const Container = styled.main`
  animation: ${(props) => {
    if (props.animation) {
      return css`
        ${scaleOutTR} 3s
      `;
    } else {
      return css`
        ${scaleInTR} 3s
      `;
    }
  }};

  height: 100%;
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    margin-top: 2vh;
    cursor: pointer;
  }
  img:nth-child(1) {
    height: 6vh;
    margin-left: 3vw;
  }
  img:nth-child(2) {
    height: 3vh;
    margin-right: 3vw;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8vh;
  input {
    color: #fe4501;
    margin: 4vh;
    padding-left: 2vw;
    width: 30vw;
    border: none;
    border-bottom: 1px solid #fe4501;
    ::placeholder {
      color: #fe4501;
      font-size: 1.3em;
    }
    :focus {
      outline: none;
    }
  }
`;
