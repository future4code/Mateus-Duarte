import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import '../assets/fonts.css'

const ContainerInputPlaylist = styled.div`
    background-color:rgb(32, 32, 32);
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    height:13vh;`

const LabelInput = styled.h3`
    color:white;
    font-size: 1.17em;
    font-weight: 200;
    font-family: 'Montserrat', sans-serif;`

const ContainerInputBotao = styled.div`
    display:flex;`

const InputPlaylist = styled.input`
    margin-right:1vw;
    width:25vw;
    padding-left:.5vw;
    border-radius:8px;
    height:30px;
    :focus{
        outline:none;
    }`

const BotaoCriarPlaylist = styled.button`
    background-color:rgb(234,134,35);
    height:35px;
    color:white;
    width:7vw;
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


    

class InputPlaylists extends React.Component{
  render(){
    return (
        <ContainerInputPlaylist>
            <LabelInput>
                Adicione uma playlist:
            </LabelInput>
            <ContainerInputBotao>
                <InputPlaylist value={this.props.nameState} placeholder="Nome da playlist" onChange={this.props.onChangeNomeaPlaylist} />
                <BotaoCriarPlaylist onClick={this.props.criaPlaylist}>CRIAR</BotaoCriarPlaylist>
            </ContainerInputBotao>
        </ContainerInputPlaylist>
    );
  }
  
}

export default InputPlaylists;
