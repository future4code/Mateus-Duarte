import { BoxLoginContainer } from './styled-BoxLogin';
import { LabelInput } from '../../../LabelInput/LabelInput';
import { BotaoPadrao } from '../../../BotaoPadrao/BotaoPadrao';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export function BoxLogin(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      history.push('/painel-de-controle');
    }
  }, [history]);
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const login = () => {
    const body = {
      email: email,
      password: password,
    };
    console.log(body);
    axios
      .post(
        'https://us-central1-labenu-apis.cloudfunctions.net/labeX/mateus-duarte/login',
        body
      )
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        history.push('/painel-de-controle');
      })
      .catch((err) => {
        console.log(err);
        alert('LOGIN OU SENHA INCORRETOS');
      });
  };
  return (
    <BoxLoginContainer>
      <h2>LOGIN</h2>
      <h4>
        ACESSE A ÁREA RESTRITA
        <br /> PARA ADMINISTRAR SUAS VIAGENS
      </h4>
      <form>
        <LabelInput
          type="email"
          id="email"
          label="EMAIL"
          name="email"
          placeholder="EMAIL"
          onChange={handleEmail}
        />
        <LabelInput
          type="password"
          id="senha"
          label="SENHA"
          name="senha"
          placeholder="SENHA"
          onChange={handlePassword}
        />
      </form>
      <BotaoPadrao texto="FAZER LOGIN" onClick={login} />
    </BoxLoginContainer>
  );
}
