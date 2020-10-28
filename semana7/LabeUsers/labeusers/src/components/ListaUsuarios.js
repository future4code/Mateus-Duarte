
import styled from 'styled-components'
import React from 'react'
import axios from 'axios';
import DetalheUsuario from '../components/DetalheUsuario'

const BotaoAnteriorPagina = styled.button`
`
const BotaoDeletar = styled.p`
color:red;
background-color:white;
cursor:pointer;
margin-left:4px;`

const FlexPagina = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
text-align:center;
align-items:center;`

const FlexLista = styled.div`
display:flex;`

class ListaUsuarios extends React.Component{
    state = {
        paginaDetalhe:false,
        userId:0,
        userName:"",
    }
    componentDidMount = () => {
        this.props.pegaUsuario()
      }
    // componentDidUpdate = () =>{
    //     this.props.pegaUsuario()
    // }
    onClickDetalhe = (userId,userName) =>{
        this.setState({paginaDetalhe:true, userId:userId,userName:userName})
        
    }
    deletaUsuario = (userId) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`, {
          headers: {
            Authorization:"mateus-duarte-dumont"
          }
        }).then((resposta)=>{
          console.log("deletoou")
          this.props.pegaUsuario()
        }).catch((error)=>{
          console.log(error.message)
        })
      }
      perguntaDeleta = (userId) =>{
        if(window.confirm("quer mesmo?")){
            this.deletaUsuario(userId)
            alert("deletado!!")
        }
    
    }
    onClickLista = () =>{
        this.setState({paginaDetalhe:false})
    }
    render () {
        const renderizaTela = () =>{
          if(this.state.paginaDetalhe === false){
            const renderedListaUsuarios = this.props.stateListaCompleta.map((usuario)=>{
                return <FlexLista><p key={usuario.id} onClick={()=>this.onClickDetalhe(usuario.id,usuario.name)}>{usuario.name}</p><BotaoDeletar onClick={()=>this.perguntaDeleta(usuario.id)}>X</BotaoDeletar></FlexLista>
            })
            return(
                <div>
                <BotaoAnteriorPagina onClick={this.props.onClickHome}>Ir para home</BotaoAnteriorPagina>
                <FlexPagina>
                <h1>Usuários Cadastrados</h1>
                {renderedListaUsuarios}
                </FlexPagina>   
                </div>
            )
        } else {
            return(
                <DetalheUsuario
                userId={this.state.userId}
                userName={this.state.userName}
                onClickLista={this.onClickLista}
                deletaUsuario={this.deletaUsuario}/>
            )
        }
        
       
    }
    return (<div>{renderizaTela()}</div>)
}}
export default ListaUsuarios;
