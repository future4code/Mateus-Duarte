import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [{
        id: Date.now(),
        texto: 'JP Morgan: Paraba. Você está demitido',
        completa: true
      
      },
      {
        id: Date.now(),
        texto: 'cu de bebado',
        completa: false
      }],
      inputValue: '',
      filtro: 'pendentes'
    }

  componentDidUpdate() {
    localStorage.setItem("lista-tarefas",JSON.stringify(this.state.tarefas))
  };

  componentDidMount() {
    const tarefasStrings = localStorage.getItem("lista-tarefas")
    const tarefasObjeto = JSON.parse(tarefasStrings)
    this.setState({
      tarefas: tarefasObjeto
     
    })
  };

  onChangeInput = (event) => {
    this.setState({
      inputValue: event.target.value
    })

  }

  criaTarefa = () => {
    const novaTarefa = {
      id:Date.now(),
      texto:this.state.inputValue,
      completa: false
    }
    const copiaEstado = [...this.state.tarefas, novaTarefa]
    
  }

  selectTarefa = (id) => {
    const novaListadeTarefas = this.state.tarefas.map((tarefa) => {
      if(id === tarefa.id){
        const tarefaModificada = {
          ...tarefa,
          completa:!tarefa.completa
        }
        return tarefaModificada
      }else{
        return tarefa
      }
    })
    this.setState({tarefas:novaListadeTarefas})
    console.log(this.state.tarefas)
  }

  onChangeFilter = (event) => {
    this.setState({
      filtro: event.target.value
    })
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
       
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <div>
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
              <br/>
              </div>
            )

          })}
          
        </TarefaList>
      </div>
    )
  }
}

export default App
