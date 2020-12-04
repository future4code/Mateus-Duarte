
import styled from 'styled-components'
import axios from 'axios'
import React from 'react'
import Atividades from './components/Atividades'
import PaginaFiltro from './components/PaginaFiltro'
const Pagina = styled.div`
  `

class App extends React.Component{
  state={
    activity:"",
    participants:"",
    mostrar:false,
    paginaFiltros: false,
    mostrarFiltro:false,
    partipantesFiltro:4,
  }
  irPaginaFiltro = () => {
    this.setState({paginaFiltros:true})
}
irHome = () => {
  this.setState({paginaFiltros:false})
}
onChangeFiltro = (event) =>{
  this.setState({partipantesFiltro:event.target.value})
  console.log(event)
  console.log(this.state.partipantesFiltro)
}

pegarAtividadeFiltrada = () => {
  axios.get(`http://www.boredapi.com/api/activity?participants=${this.state.partipantesFiltro}`)
  .then((response) => {
    this.setState({
      activity:response.data.activity,
      participants:response.data.participants,
      mostrarFiltro:true,
    })
    console.log(this.state.partipantesFiltro)
  }).catch((error) => {
    console.log(error)
  })
}

  pegarAtividade = () => {
    
    axios.get("http://www.boredapi.com/api/activity/")
    .then((response) => {
      this.setState({
        activity:response.data.activity,
        participants:response.data.participants,
        mostrar:true,
      })
      console.log(this.state)
    }).catch((error) => {
      console.log(error)
    })
  }
  render(){
    const renderizaTela = () => {
      if(this.state.paginaFiltros === false){
          return(
            <Pagina>
              <Atividades
              pegarAtividade={this.pegarAtividade}
              mostrar={this.state.mostrar}
              atividade={this.state.activity}
              participantes={this.state.participants}
              irPaginaFiltro={this.irPaginaFiltro}/>
          </Pagina>
            )
      } else {
          return(
            <Pagina>
            <PaginaFiltro
            pegarAtividadeFiltrada={this.pegarAtividadeFiltrada}
            mostrar={this.state.mostrar}
            atividade={this.state.activity}
            participantes={this.state.participants}
            irHome={this.irHome}
            onChangeFiltro={this.onChangeFiltro}/>
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

export default App;

