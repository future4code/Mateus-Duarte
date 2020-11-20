import { ContainerBoxInscricao } from './styled-BoxInscricao';
import { LabelInput } from '../../../LabelInput/LabelInput';
import { useForm } from '../../../Hooks/useForm';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BotaoPadrao } from '../../../BotaoPadrao/BotaoPadrao';

export function BoxInscricao(props) {
  const pathParams = useParams();
  const { form, onChange } = useForm({
    name: '',
    age: 0,
    applicationText: '',
    profession: '',
    country: '',
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
    console.log(event.target);
    console.log(form);
  };
  const onClickCreateCandidate = () => {
    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country,
    };
    const aluno = 'mateus-duarte';
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips/${pathParams.id}/apply
    `;
    const userToken = localStorage.getItem('token');
    const headers = {
      headers: { auth: userToken },
    };

    axios
      .post(url, body, headers)
      .then((resposta) => {
        alert('Candidato Cadastrado');
      })
      .catch((err) => {
        console.log(err.message);
        alert('Erro ao cadastrar');
      });
  };
  return (
    <ContainerBoxInscricao>
      <h2>FAÇA SUA INSCRIÇÃO</h2>
      <h4>VIAGEM:{pathParams.name}</h4>
      <form>
        <LabelInput
          value={form.name}
          label="NOME COMPLETO"
          name="name"
          placeholder="NOME COMPLETO"
          type="text"
          onChange={handleInputChange}
        />
        <LabelInput
          value={form.age}
          label="IDADE"
          name="age"
          placeholder="IDADE"
          type="number"
          onChange={handleInputChange}
        />
        <LabelInput
          value={form.profession}
          label="PROFISSÃO"
          name="profession"
          placeholder="PROFISSÃO"
          type="text"
          onChange={handleInputChange}
        />
        <LabelInput
          value={form.country}
          label="PAÍS DE ORIGEM"
          name="country"
          placeholder="PAIS DE ORIGEM"
          type="text"
          onChange={handleInputChange}
        />
        <LabelInput
          value={form.applicationText}
          label="POR QUE VOCÊ QUER VIAJAR COM A LABEX?"
          name="applicationText"
          placeholder="EXPLIQUE O MOTIVO"
          type="text"
          onChange={handleInputChange}
        />
      </form>
      <BotaoPadrao texto="ENVIAR" onClick={onClickCreateCandidate} />
    </ContainerBoxInscricao>
  );
}
