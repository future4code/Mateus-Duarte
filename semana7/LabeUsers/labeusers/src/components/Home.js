
import styled from 'styled-components'
import React from 'react'
import axios from 'axios';

const PaginaHome = styled.div`
margin:3vh;`
const BotaoProximaPagina = styled.button`
`
const ContainerForms = styled.form`
display:flex;
border:solid 1px black;
flex-direction:column;
width:22%;
justify-content: space-around;
align-items:center;
margin:auto;
height:15vh;`
const ContainerEmail = styled.div`
margin-right:5vh;`
const ContainerNome = styled.div`
margin-right:5vh;`
const BotaoSalvar= styled.button`
width:5vh;
`

class Home extends React.Component{
    render () {
        return(
        <PaginaHome>
          <BotaoProximaPagina onClick={this.props.onClickPaginaLista}>Ir para página de lista</BotaoProximaPagina>
          <ContainerForms>
            <ContainerNome>
              <label>Nome:</label>
              <input
                placeholder="Nome"
                value={this.props.stateName}
                onChange={this.props.onChangeNomeUsuario}
                />
            </ContainerNome>
            <ContainerEmail>
              <label>E-mail:</label>
             <input
                placeholder="Email"
                value={this.props.stateEmail}
                onChange={this.props.onChangeEmailUsuario}
                />
            </ContainerEmail>
            <BotaoSalvar type='button' onClick={this.props.criaUsuario}>Salvar</BotaoSalvar>
          </ContainerForms>
        </PaginaHome>
        )
      }
}
export default Home;
