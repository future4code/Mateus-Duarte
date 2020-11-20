import { BoxCadastroContainer } from './styled-BoxCadastro';
import { LabelInput } from '../../../LabelInput/LabelInput';
import { BotaoPadrao } from '../../../BotaoPadrao/BotaoPadrao';
import { useForm } from '../../../Hooks/useForm';
import axios from 'axios';

export function BoxCadastro() {
  const { form, onChange } = useForm({
    name: '',
    planet: '',
    date: '',
    durationInDays: '',
    urlImagem: '',
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
    console.log(event.target);
    console.log(form);
  };
  console.log(form);
  const onClickCreateTrip = () => {
    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.urlImagem,
      durationInDays: form.durationInDays,
    };
    const aluno = 'mateus-duarte';
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips`;
    const userToken = localStorage.getItem('token');
    const headers = {
      headers: { auth: userToken },
    };

    axios
      .post(url, body, headers)
      .then((resposta) => {
        alert('Viagem Cadastrada');
      })
      .catch((err) => {
        console.log(err.message);
        alert('Erro ao cadastrar');
      });
  };

  return (
    <BoxCadastroContainer>
      <h2>
        CADASTRE UMA NOVA
        <br /> VIAGEM
      </h2>
      <form>
        <LabelInput
          value={form.name}
          label="NOME DA VIAGEM"
          name="name"
          placeholder="NOME DA VIAGEM"
          onChange={handleInputChange}
          type="text"
        />
        <LabelInput
          value={form.planet}
          label="DESTINO"
          name="planet"
          placeholder="DESTINO"
          onChange={handleInputChange}
          type="text"
        />
        <LabelInput
          value={form.date}
          label="DATA DE DECOLAGEM"
          name="date"
          placeholder="DATA DE DECOLAGEM"
          onChange={handleInputChange}
          type="date"
        />
        <LabelInput
          value={form.durationInDays}
          label="DURAÇÃO EM DIAS"
          name="durationInDays"
          placeholder="DURAÇÃO EM DIAS"
          onChange={handleInputChange}
          type="number"
        />
        <LabelInput
          value={form.urlImagem}
          label="URL DA IMAGEM DA VIAGEM"
          name="urlImagem"
          placeholder="URL DA IMAGEM DA VIAGEM"
          onChange={handleInputChange}
          type="url"
        />
      </form>
      <BotaoPadrao texto="CADASTRAR" onClick={onClickCreateTrip} />
    </BoxCadastroContainer>
  );
}
