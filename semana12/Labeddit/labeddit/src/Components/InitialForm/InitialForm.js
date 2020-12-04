import { FormContainer, Header, Container } from "./styledInitialForm";
import labedditLogo from "../../Assets/labeddit-logo.png";
import xIcon from "../../Assets/xIcon.svg";
import { Button } from "../Button/Button";
import { goToHome } from "../../Router/Coordinator";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export function InitialForm(props) {
  const history = useHistory();
  const renderPlaceholder3 = () => {
    if (props.placeholder3) {
      return (
        <input
          placeholder={props.placeholder3}
          type={props.type3}
          onChange={props.onChange3}
          value={props.value3}
          required
        />
      );
    }
  };
  const [scaleOut, setScaleOut] = useState(false);

  const exitScalingOut = () => {
    setScaleOut(true);
    setTimeout(function () {
      history.push("/");
    }, 3000);
  };

  return (
    <Container animation={scaleOut}>
      <Header>
        <img src={labedditLogo} onClick={() => goToHome(history)} />
        <img src={xIcon} onClick={exitScalingOut} />
      </Header>
      <FormContainer onSubmit={props.onSubmit}>
        <h1>{props.title}</h1>
        <input
          placeholder={props.placeholder1}
          type={props.type1}
          onChange={props.onChange1}
          value={props.value1}
          required
        />
        <input
          placeholder={props.placeholder2}
          type={props.type2}
          onChange={props.onChange2}
          value={props.value2}
          required
        />
        {renderPlaceholder3()}
        <Button
          backgroundColor="#FF581B"
          color="white"
          width="10vw"
          hoverColor="#FF581B"
          hoverBackgroundColor="white"
          height="6vh"
          text={props.buttonText}
          onClick={props.onClick}
        />
      </FormContainer>
    </Container>
  );
}
