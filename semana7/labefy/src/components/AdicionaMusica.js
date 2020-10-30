import styled from 'styled-components'
import axios from 'axios'
import React from 'react'
const Pagina = styled.div`
    width: 50%;
    margin:auto;`
const ContainerAdicione = styled.div`
    display:flex;
    flex-direction:column;
    width: 55%;
    margin:auto;
    margin-left:2vw;
    background-color:rgb(40,40,40);
    height:30vh;
    justify-content:space-evenly;
    align-items:center;`

const TituloAdicione = styled.p`
    color:white;
    font-size:1.2em;`

const Label = styled.label`
    color:rgb(166,166,166);
    font-size:.8em;`
const Input = styled.input`
    width:15vw;
    padding-left:.5vw;
    border-radius:8px;
    height:20px;
    :focus{
        outline:none;
    }`
const BotaoAdicionar = styled.button`
       background-color:rgb(234,134,35);
    height:35px;
    color:white;
    width:5vw;
    text-align:center;
    border-radius:20px;
    cursor:pointer;
    :focus{
        outline:none;
    }
    font-weight:900;
    font-family: Arial, Helvetica, sans-serif;
    font-size:13px;
    border:none;
    :hover{
        background-color:rgb(255,122,35);
    }`
const FlexInputs = styled.div`
display:flex;
flex-direction:column;`
class AdicionaMusicas extends React.Component{
   componentDidUpdate = () => {
    this.props.pegaMusicasPlaylist()
}
    render(){
        console.log("DEU BOM", this.props.id)
      return (
      <Pagina>
          <ContainerAdicione>
              <TituloAdicione>Adicione uma música:</TituloAdicione>
              <FlexInputs>
              <Label>Nome da música</Label>
              <Input onChange={this.props.onChangeNameTrack} placeholder="Nome da música"></Input>
              </FlexInputs>
              <FlexInputs>
              <Label>Nome do Artista</Label>
              <Input onChange={this.props.onChangeArtistTrack}placeholder="Nome do artista"></Input>
              </FlexInputs>
              <BotaoAdicionar onClick={()=>this.props.addMusica(this.props.id)}>Adicionar</BotaoAdicionar>
          </ContainerAdicione>
      </Pagina>
      );
    }
}
export default AdicionaMusicas;
