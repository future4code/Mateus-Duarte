import styled from 'styled-components'
import axios from 'axios'
import React from 'react'


const Pagina = styled.div`
  `
const Container = styled.div`
  display:flex;
  flex-direction:column;
  width:40vw;
  margin:auto;
  margin-top:30vh;
  border:1px solid black;
  height:40vh;
  align-items:center;
  justify-content:space-around;
  border-radius: 32px;`
const BotaoEventoAleatorio = styled.button`
  width:70%;
  width: 400px;
    height: 100px;
    background: #f3f0f1;
    position: relative;
    background: #f3f0f1;
    margin-bottom: 25px;
    border-radius: 32px;
    text-align: center;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    span {
      font-family: "Montserrat", sans-serif;
      font-size: 30px;
      font-weight: semibold;
    }
    :focus{
        outline: none;
    }
    &:nth-child(1) {
      box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8),
        6px 6px 10px rgba(0, 0, 0, 0.2);
      color: #6f6cde;
      &:hover {
        opacity: 0.3;
        box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8),
          6px 6px 10px rgba(0, 0, 0, 0.2);
      }
      &:active {
        opacity: 1;
        box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.5),
          inset 8px 8px 16px rgba(0, 0, 0, 0.1);
        color: #79e3b6;
      }
    }`
const SpanBotao = styled.span`
  `
const AtividadeAleatoria = styled.div`
  border:1px solid black;
  width:70%;
  text-align:center;
  border-radius: 32px;
  color: #6f6cde;
  box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8),
        6px 6px 10px rgba(0, 0, 0, 0.2);
        font-family: "Montserrat", sans-serif;
      font-size: 18px;
      font-weight: semibold;
      background: #f3f0f1;`
const RespostaQuery = styled.p`
    `
const BotaoFiltrar = styled.button`
    width:10vw;
    margin-top:3vh;
    margin-left:85vw;
    height: 5vh;
    background: #f3f0f1;
    position: relative;
    background: #f3f0f1;
    margin-bottom: 25px;
    border-radius: 32px;
    text-align: center;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    span {
      font-family: "Montserrat", sans-serif;
      font-size: 30px;
      font-weight: semibold;
    }
    :focus{
    outline: none;
    }
    &:nth-child(1) {
      box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8),
        6px 6px 10px rgba(0, 0, 0, 0.2);
      color: #6f6cde;
      &:hover {
        opacity: 0.3;
        box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8),
          6px 6px 10px rgba(0, 0, 0, 0.2);
      }
      &:active {
        opacity: 1;
        box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.5),
          inset 8px 8px 16px rgba(0, 0, 0, 0.1);
        color: #79e3b6;
      }
    }`
class PaginaFiltro extends React.Component{
   

    
    render(){
    const renderizaTela = () => {
        if(this.props.mostrar === false){
            return(
            <Pagina>
                <BotaoFiltrar onClick={this.props.irHome}>Home</BotaoFiltrar>
                <Container>
                  <BotaoEventoAleatorio onClick={this.props.pegarAtividadeFiltrada}>
                    <SpanBotao>RECEBA UMA ATIVIDADE ALEATÓRIA!</SpanBotao>
                  </BotaoEventoAleatorio>
                  <label>Escolha número de Participantes</label>
                  <select onChange={this.props.onChangeFiltro} id="participantes" name="participantes">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                  <AtividadeAleatoria>
                    ATIVIDADE
                  </AtividadeAleatoria>
                </Container>
              </Pagina>
              )
        } else {
            return(
                <Pagina>
                 <BotaoFiltrar onClick={this.props.irHome}>Home</BotaoFiltrar>
                <Container>
                  <BotaoEventoAleatorio onClick={this.props.pegarAtividadeFiltrada}>
                    <SpanBotao>RECEBA UMA ATIVIDADE ALEATÓRIA!</SpanBotao>
                  </BotaoEventoAleatorio>
                  <label>Escolha número de Participantes</label>
                  <select onChange={this.props.onChangeFiltro} id="participantes" name="participantes">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                  <AtividadeAleatoria>
                    <RespostaQuery>Atividade: {this.props.atividade}</RespostaQuery>
                    <RespostaQuery>Participantes: {this.props.participantes}</RespostaQuery>
                  </AtividadeAleatoria>
                </Container>
              </Pagina>    
            )
        }
    }
    return (
        <div>
      {renderizaTela()}
      </div>
    )
  
  }
  
}

export default PaginaFiltro;
