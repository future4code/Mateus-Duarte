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
const LabelPerguntaAberta = styled.label`
font-size:30px;
`


export class PerguntaAberta extends React.Component{
   

    render(){
        return(
            <ContainerPerguntaAberta>
                <LabelPerguntaAberta for="nome" pergunta="">{this.props.pergunta}</LabelPerguntaAberta>
                <input id="nome" value=""></input>
            </ContainerPerguntaAberta>
        )
    }
}