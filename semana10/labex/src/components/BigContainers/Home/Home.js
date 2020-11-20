import { HomeContainer, ContainerBotoes } from './styled-Home';
import { Header } from '../../Header/Header';
import { BotaoPadrao } from '../../BotaoPadrao/BotaoPadrao';
import { useHistory } from 'react-router-dom';

export function Home() {
  const history = useHistory();

  const onClickGoTrips = () => {
    history.push('/viagens');
  };
  const onClickGoLogin = () => {
    history.push('/login');
  };

  return (
    <HomeContainer>
      <Header />
      <ContainerBotoes>
        <BotaoPadrao texto="EXPLORAR VIAGENS" onClick={onClickGoTrips} />
        <BotaoPadrao texto="ÁREA RESTRITA" onClick={onClickGoLogin} />
      </ContainerBotoes>
    </HomeContainer>
  );
}
