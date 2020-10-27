import React from 'react';
import styled from 'styled-components'


const ContainerEtapa2 = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const FormEtapa2 = styled.form`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const LabelEtapa2 = styled.label`
font-size:30px;
`


export class Etapa2 extends React.Component{
   

    render(){
        return(
            
            <ContainerEtapa2>
                <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>

                <FormEtapa2>
                <LabelEtapa2 for="nome">5. Qual curso?</LabelEtapa2>
                <input type="text" id="nome" value=""></input>
                <br /><br />
                <LabelEtapa2 for="idade">6. Qual a unidade de ensino?</LabelEtapa2>
                <input type="text" id="idade" value=""></input>
                </FormEtapa2>
            </ ContainerEtapa2>
            
        )
    }
}