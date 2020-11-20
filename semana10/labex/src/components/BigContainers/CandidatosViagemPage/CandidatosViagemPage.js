import {
  CandidatosViagemPageContainer,
  BackIconContainer,
  ContainerCandidatos,
} from './styled-CandidatosViagemPage';
import { CandidatoBox } from './CandidatoBox/CandidatoBox';
import { Header } from '../../Header/Header';
import { BackIcon } from '../../BackIcon/BackIcon';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export function CandidatosViagemPage() {
  const history = useHistory();
  const pathParams = useParams();
  const [numberCandidates, setNumberCandidates] = useState(0);
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token === null) {
      history.push('/');
    }
  }, [history]);

  useEffect(() => {
    getCandidates();
  }, []);

  const getCandidates = () => {
    const aluno = 'mateus-duarte';
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trip/${pathParams.id}`;
    const userToken = localStorage.getItem('token');
    const headers = {
      headers: { auth: userToken },
    };
    axios
      .get(url, headers)
      .then((resposta) => {
        setNumberCandidates(resposta.data.trip.candidates.length);
        console.log(resposta.data.trip.candidates.length);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <CandidatosViagemPageContainer>
      <Header
        link1="PAINEL DE CONTROLE"
        link2="EXPLORAR VIAGEM"
        link3="SAIR ÁREA RESTRITA"
      />
      <BackIconContainer>
        <BackIcon />
      </BackIconContainer>
      <h2>VIAGEM:ROLÊ PLUTÔNICO</h2>
      <h4>NÚMERO DE CANDIDATOS:{numberCandidates}</h4>
      <ContainerCandidatos>
        <CandidatoBox />
      </ContainerCandidatos>
    </CandidatosViagemPageContainer>
  );
}
