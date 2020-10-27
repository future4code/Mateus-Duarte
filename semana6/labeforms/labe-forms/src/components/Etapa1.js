import React from 'react';
import styled from 'styled-components'


const ContainerEtapa1 = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const FormEtapa1 = styled.form`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const LabelEtapa1 = styled.label`
font-size:30px;
`


export class Etapa1 extends React.Component{
  

    render(){
        return(
            <ContainerEtapa1>
                <h1>ETAPA 1 - DADOS GERAIS</h1>

                <FormEtapa1>
                <LabelEtapa1 for="nome">1. Qual o seu nome?</LabelEtapa1>
                <input type="text" id="nome" value=""></input>
                <br /><br />
                <LabelEtapa1 for="idade">2. Qual sua idade?</LabelEtapa1>
                <input type="number" id="idade" value=""></input>
                <br /><br />
                <LabelEtapa1 for="email">3. Qual o seu email?</LabelEtapa1>
                <input type="email" id="email" value=""></input>
                <br /><br />
                <LabelEtapa1>4. Qual a sua escolaridade</LabelEtapa1>
                <select name="escolaridade" id="escolaridade">
                    <option value="ensino-medio-incompleto">Ensino Médio Incompleto</option>
                    <option value="ensino-medio-completo">Ensino Médio Completo</option>
                    <option value="ensino-superior-incompleto">Ensino Superior Incompleto</option>
                    <option value="ensino-superior-completo">Ensino Superior Completo</option>
                </select>
                </FormEtapa1>
                
            </ContainerEtapa1>
        )
    }
}