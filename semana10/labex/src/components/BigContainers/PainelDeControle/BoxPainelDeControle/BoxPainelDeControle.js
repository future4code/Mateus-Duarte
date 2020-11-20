import { BoxPainelDeControleContainer } from './styled-BoxPainelDeControle';
import { BotaoPadrao } from '../../../BotaoPadrao/BotaoPadrao';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function BoxPainelDeControle() {
  const history = useHistory();

  const onClickGoCadastro = () => {
    history.push('/cadastro');
  };
  const onChangeGoCandidates = (event) => {
    history.push(`/candidatos/${event.target.value}`);
    console.log(event.target.value);
  };
  const [trips, setTrips] = useState([]);
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
  useEffect(() => {
    getTrips();
  }, []);
  const allTrips = trips.map((trip) => {
    return <option value={trip.id}>{trip.name}</option>;
  });
  return (
    <BoxPainelDeControleContainer>
      <h1>BEM-VINDO AO PAINEL DE CONTROLE</h1>
      <div>
        <h4>CADASTRE UMA NOVA VIAGEM</h4>
        <BotaoPadrao texto="CRIAR NOVA VIAGEM" onClick={onClickGoCadastro} />
      </div>
      <div>
        <h4>CONFIRA OS CANDIDADOS DAS VIAGENS</h4>
        <select name="viagens" onChange={onChangeGoCandidates}>
          <option value="" disabled selected>
            SELECIONE VIAGEM
          </option>
          {allTrips}
        </select>
      </div>
    </BoxPainelDeControleContainer>
  );
}
