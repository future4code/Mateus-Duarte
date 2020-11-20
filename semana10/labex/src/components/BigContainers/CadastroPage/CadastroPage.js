import { CadastroPageContainer } from './styled-CadastroPage';
import { Header } from '../../Header/Header';
import { BackIcon } from '../../BackIcon/BackIcon';
import { BoxCadastro } from './BoxCadastro/BoxCadastro';
import { useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';

export function CadastroPage() {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token === null) {
      history.push('/');
    }
  }, [history]);
  return (
    <CadastroPageContainer>
      <Header
        link1="PAINEL DE CONTROLE"
        link2="EXPLORAR VIAGENS"
        link3="SAIR ÁREA RESTRITA"
      />

      <BackIcon />
      <BoxCadastro />
    </CadastroPageContainer>
  );
}
