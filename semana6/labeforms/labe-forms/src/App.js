import React from 'react';
import './App.css';
import styled from 'styled-components'
import {Etapa1} from '../src/components/Etapa1'
import {Etapa2} from '../src/components/Etapa2'
import {Etapa3} from '../src/components/Etapa3'
import {Final} from '../src/components/Final'

const Botao = styled.button`
text-align:center;
margin:auto;
background-color:blue;
color:white;
`
const Wrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
`

export class App extends React.Component{
  
  state = { 
    etapa: 1,
  }
  renderizarEtapa = () => {
    switch (this.state.etapa){
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />;
    }
  }
  proximaEtapa = () => {
      this.setState({
      etapa: this.state.etapa + 1
    });
    console.log(this.state.etapa) 
    console.log(Etapa1)
  }
  render(){
    const homepage = () => {
      const botaoFuncao = this.state.etapa < 4
      ? <Wrapper><Botao onClick={this.proximaEtapa}>Próxima etapa</Botao></Wrapper>
      : <div></div> ;
      return botaoFuncao;
      };
    
  
    return(
    <div>
      {this.renderizarEtapa()}
      <br /><br/>
      {homepage()}
    </div>  
    )
  }
}

export default App;

