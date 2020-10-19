import React from 'react';
import styled from 'styled-components'


const ContainerEtapa3 = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const FormEtapa3 = styled.form`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const LabelEtapa3 = styled.label`
font-size:30px;
`


export class Etapa3 extends React.Component{
   

    render(){
        return(
            
            <ContainerEtapa3>
                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>

                <FormEtapa3>
                <LabelEtapa3 for="nome">6. Por que você não terminou o seu curso de graduação?</LabelEtapa3>
                <input input="text" id="nome" value=""></input>
                <br /><br />
                <LabelEtapa3>7. Você já fez algum curso complementar?</LabelEtapa3>
                <select name="complementar" id="complementar">
                    <option value="curso-tecnico">Curso Técnico</option>
                    <option value="nao-fiz">Curso de ingles</option>
                    <option value="curso-ingles">Não fiz curso complementar</option>
        
                </select>
                </FormEtapa3>
            </ ContainerEtapa3>
            
        )
    }
}