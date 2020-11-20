import {
  CandidatoBoxContainer,
  IconsContainer,
  ContainerMap,
} from './styled-CandidatoBox';
import Astronaut from '../../../../assets/astronaut.png';
import { BotaoPadrao } from '../../../BotaoPadrao/BotaoPadrao';
import TrashIcon from '../../../../assets/trash-icon.svg';
import { useHistory, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function CandidatoBox() {
  const pathParams = useParams();
  useEffect(() => {
    getCandidates();
  }, []);
  const [candidates, setCandidates] = useState([]);
  useEffect(() => {
    getCandidates();
  }, [candidates]);
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
        setCandidates(resposta.data.trip.candidates);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const aproveCandidate = (id) => {
    const aluno = 'mateus-duarte';
    const body = { approve: true };
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips/${pathParams.id}/candidates/${id}/decide`;
    const userToken = localStorage.getItem('token');
    const headers = {
      headers: { auth: userToken },
    };
    axios
      .put(url, body, headers)
      .then((resposta) => {
        console.log(resposta);
        alert('Candidato Aprovado!');
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const deleteCandidate = (id) => {
    const aluno = 'mateus-duarte';
    const body = { approve: false };
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips/${pathParams.id}/candidates/${id}/decide`;
    const userToken = localStorage.getItem('token');
    const headers = {
      headers: { auth: userToken },
    };
    axios
      .put(url, body, headers)
      .then((resposta) => {
        console.log(resposta);
        alert('Candidato Deletado!');
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const allCandidates = candidates.map((candidate) => {
    return (
      <CandidatoBoxContainer>
        <IconsContainer>
          <img src={Astronaut} />
          <img src={TrashIcon} onClick={() => deleteCandidate(candidate.id)} />
        </IconsContainer>
        <p>{candidate.name}</p>
        <p>IDADE:{candidate.age}</p>
        <p>PROFISSÃO:{candidate.profession}</p>
        <p>PAÍS:{candidate.country}</p>
        <BotaoPadrao
          texto="APROVAR"
          onClick={() => aproveCandidate(candidate.id)}
        />
      </CandidatoBoxContainer>
    );
  });
  return <div>{allCandidates}</div>;
}
