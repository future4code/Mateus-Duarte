import { LoginPageContainer } from './styled-LoginPage';
import { Header } from '../../Header/Header';
import { BoxLogin } from './BoxLogin/BoxLogin';

export function LoginPage() {
  return (
    <LoginPageContainer>
      <Header link1="EXPLORAR VIAGENS" />
      <BoxLogin />
      <p>
        EMAIL: <strong>admin@labex.com</strong>
      </p>
      <p>
        SENHA: <strong>etvarginha</strong>
      </p>
    </LoginPageContainer>
  );
}
