import LogoLabeX from '../../assets/logo-labex.png';
import { HeaderContainer } from './styled-Header';
import { LinkPadraoHeader } from '../LinkPadraoHeader/LinkPadraoHeader';
import { useHistory } from 'react-router-dom';

export function Header(props) {
  const history = useHistory();
  const onClickGoHome = () => {
    history.push('/');
  };
  return (
    <HeaderContainer>
      <img src={LogoLabeX} onClick={onClickGoHome} />
      <LinkPadraoHeader
        link1={props.link1}
        link2={props.link2}
        link3={props.link3}
      />
    </HeaderContainer>
  );
}
