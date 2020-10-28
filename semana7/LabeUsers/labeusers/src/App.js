

import styled from 'styled-components'
import React from 'react'
import axios from 'axios';
import Home from './components/Home'
import ListaUsuarios from './components/ListaUsuarios'

const Pagina = styled.div`
margin:3vh;`


class App extends React.Component {
  state= {
    listaCompletaUsuarios:[],
    paginaLista:false,
      };
    
  componentDidMount = () => {
    this.pegaUsuario()
  }
  criaUsuario = () => {
    const body = {
      name: this.state.name,
      email: this.state.email
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
      headers:{
        Authorization: "mateus-duarte-dumont"
      }
    }).then((response)=>{
      console.log("PASSEI AQUIooo")
    }).catch((error)=>{
      console.log("PASSEI AQUI")
    })
  }
  pegaUsuario = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
      headers: {
        Authorization: "mateus-duarte-dumont"
      }
    }).then((resposta)=>{
      this.setState({listaCompletaUsuarios:resposta.data})
      console.log(this.state.listaCompletaUsuarios)
    }).catch((err)=>{
      console.log(err.message)
    })
  }  
  onClickPaginaLista = () => {
    this.setState({paginaLista:true})
  }
  onClickHome = () => {
    this.setState({paginaLista:false})
  }
  onChangeNomeUsuario = (event) => {
    this.setState({name: event.target.value})
  }
  onChangeEmailUsuario = (event) => {
    this.setState({email: event.target.value})
  };
  
  render () {
    
    const renderizaTela = () =>{
      if(this.state.paginaLista === false){
        return(
          <Pagina>
            <Home 
            criaUsuario={this.criaUsuario}
            onChangeEmailUsuario={this.onChangeEmailUsuario}
            onChangeNomeUsuario={this.onChangeNomeUsuario}
            stateName = {this.state.name}
            stateEmail = {this.state.email}
            onClickPaginaLista={this.onClickPaginaLista}/>
          </Pagina>
        )
      } else {
        return (
        <div>
          <ListaUsuarios 
          stateListaCompleta={this.state.listaCompletaUsuarios}
          onClickHome={this.onClickHome}
          stateId={this.state.id}
          pegaUsuario={this.pegaUsuario} />
          </div>)
      }
    }
    return (<div>{renderizaTela()}</div>)
}
}

export default App;
