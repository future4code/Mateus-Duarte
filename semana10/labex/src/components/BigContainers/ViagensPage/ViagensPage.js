import { Header } from '../../Header/Header';
import { BotaoPadrao } from '../../BotaoPadrao/BotaoPadrao';
import {
  ViagensPageTopContainer,
  TituloContainer,
  ViagemContainer,
  BotaoContainer,
} from './styled-ViagensPage';
import { ViagemInfoBox } from './ViagemInfoBox/ViagemInfoBox';
import ScrollDownIcon from '../../../assets/scrolldown-icon.svg';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function ViagensPage() {
  const history = useHistory();
  const token = localStorage.getItem('token');
  const onClickGoSubscribe = (id, name) => {
    history.push(`/inscricao/${id}/${name}`);
  };
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    getTrips();
  }, []);

  const getTrips = () => {
    const aluno = 'mateus-duarte';
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips`;
    axios
      .get(url)
      .then((resposta) => {
        setTrips(resposta.data.trips);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const allTrips = trips.map((trip) => {
    return (
      <ViagemContainer url={trip.description}>
        <ViagemInfoBox
          date={trip.date}
          durationInDays={trip.durationInDays}
          name={trip.name}
          planet={trip.planet}
        />
        <BotaoContainer>
          <BotaoPadrao
            texto="INCREVA-SE"
            onClick={() => onClickGoSubscribe(trip.id, trip.name)}
          />
        </BotaoContainer>
      </ViagemContainer>
    );
  });
  const renderizaLink = () => {
    if (token === null) {
      return 'ENTRAR ÁREA RESTRITA';
    } else {
      return 'SAIR ÁREA RESTRITA';
    }
  };
  return (
    <div>
      <ViagensPageTopContainer>
        <Header link1={renderizaLink()} />
        <TituloContainer>
          <h1>EXPLORE A GALÁXIA</h1>
          <h4>ESCOLHA SUA VIAGEM INTERPLANETÁRIA</h4>
          <img src={ScrollDownIcon} />
        </TituloContainer>
      </ViagensPageTopContainer>
      {allTrips}
    </div>
  );
}
