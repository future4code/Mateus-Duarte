import styled from "styled-components";

export const ButtonContainer = styled.button`
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 10px;
  border: 1px solid #fe4501;
  cursor: pointer;
  font-weight: bold;
  :hover {
    color: ${(props) => props.hoverColor};
    background-color: ${(props) => props.hoverBackgroundColor};
  }
  :active {
    background-color: #ff581b;
    color: white;
  }
  :focus {
    outline: none;
  }
`;
