import { PainelDeControleContainer } from './styled-PainelDeControle';
import { BoxPainelDeControle } from './BoxPainelDeControle/BoxPainelDeControle';
import { Header } from '../../Header/Header';
import { useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';

export function PainelDeControle() {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token === null) {
      history.push('/');
    }
  }, [history]);

  return (
    <PainelDeControleContainer>
      <Header link1="EXPLORAR VIAGENS" link2="SAIR ÁREA RESTRITA" />
      <BoxPainelDeControle />
    </PainelDeControleContainer>
  );
}
