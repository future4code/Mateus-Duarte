import { BackIconContainer } from './styled-BackIcon';
import Back from '../../assets/back.svg';
import { useHistory } from 'react-router-dom';
export function BackIcon() {
  const history = useHistory();
  const onClickGoBack = () => {
    history.goBack();
  };
  return (
    <BackIconContainer onClick={onClickGoBack}>
      <img src={Back} />
      <p>Voltar</p>
    </BackIconContainer>
  );
}
