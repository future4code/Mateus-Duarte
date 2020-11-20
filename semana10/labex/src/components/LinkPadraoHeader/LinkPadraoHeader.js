import {
  Link,
  LinkContainer,
} from '../LinkPadraoHeader/styled.LinkPadraoHeader';
import { useHistory } from 'react-router-dom';

export function LinkPadraoHeader(props) {
  const history = useHistory();
  const token = localStorage.getItem('token');

  const onClickChangePageLink = (link) => {
    switch (link) {
      case 'PAINEL DE CONTROLE':
        history.push('/painel-de-controle');
        break;
      case 'ENTRAR ÁREA RESTRITA':
        history.push('/login');
        break;
      case 'EXPLORAR VIAGENS':
        history.push('/viagens');
        break;
      case 'SAIR ÁREA RESTRITA':
        history.push('/');
        localStorage.removeItem('token');
        break;
    }
  };
  const renderizaLink = () => {
    if (token === null) {
      return 'ENTRAR ÁREA RESTRITA';
    } else {
      return 'SAIR ÁREA RESTRITA';
    }
  };
  return (
    <LinkContainer>
      <Link onClick={() => onClickChangePageLink(props.link1)}>
        {props.link1}
      </Link>
      <Link onClick={() => onClickChangePageLink(props.link2)}>
        {props.link2}
      </Link>
      <Link onClick={() => onClickChangePageLink(props.link3)}>
        {props.link3}
      </Link>
    </LinkContainer>
  );
}
