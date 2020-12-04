import { ButtonContainer, RenderContainer } from "./styledButton";

export function Button(props) {
  
    return (
        <ButtonContainer backgroundColor={props.backgroundColor} color={props.color} width={props.width} hoverColor={props.hoverColor} hoverBackgroundColor={props.hoverBackgroundColor} height={props.height} onClick={props.onClick}>
        {props.text}
        </ButtonContainer>
    );
  }
  
 