import styled from 'styled-components'
import React from 'react'
import axios from 'axios';



class DetalheUsuario extends React.Component{
    state = {
        email:"",
        name:"",
        id:"",
        edicao: false,
        nameNovo:"",
        emailNovo: ""
    }
    componentDidMount = () => {
        this.pegaEmail()
      }

    // componentDidUpdate = () =>{
    //     this.pegaEmail()
    // }

    pegaEmail = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.props.userId}`, {
          headers: {
            Authorization: "mateus-duarte-dumont"
          }
        }).then((resposta)=>{
          this.setState({email:resposta.data.email, name:resposta.data.name, id:resposta.data.id})
          console.log(this.state.email)
        }).catch((err)=>{
          console.log(err.message)
        })
      }  
      deletaUsuario = (userId) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`, {
          headers: {
            Authorization:"mateus-duarte-dumont"
          }
        }).then((resposta)=>{
          console.log("deletoou")
          this.pegaEmail()
          this.setState({email:"",name:""})
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
    botaoEdicao = () =>{
        this.setState({
            edicao:true
        })
    }
    editaUsuario = () => {
        const body = {
          name: this.state.nameNovo,
          email: this.state.emailNovo
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.state.id}`, body, {
          headers:{
            Authorization: "mateus-duarte-dumont"
          }
        }).then((response)=>{
          console.log("editou!")
        }).catch((error)=>{
          console.log("editou NADA")
        })
      }
    onChangeNovoNome = (event) => {
        this.setState({nameNovo: event.target.value})
    }
    onChangeNovoEmail = (event) => {
        this.setState({nameEmail: event.target.value})
    }
    render () {
        const renderizaTela = () =>{
            if(this.state.edicao === false){
        return(
        <div>
            <button onClick={this.props.onClickLista}>voltar</button>
            <p>{this.state.email}</p>
            <p>{this.state.name}</p>
            <button onClick={()=> this.deletaUsuario(this.state.id)}>delete</button>
            <button onClick={this.botaoEdicao}>edição</button>
        </div>
        )
      } else {
          return(
            <div>
            <button onClick={this.props.onClickLista}>voltar</button>
            <p>{this.state.email}</p>
            <p>{this.state.name}</p>
            <label>Novo nome</label>
            <input></input>
            <label>Novo email</label>
            <input></input>
            <button onClick={()=> this.deletaUsuario(this.state.id)}>delete</button>
            <button onClick={this.editaUsuario}>salvar</button>
        </div>
          )
      }
    }
    return (<div>{renderizaTela()}</div>)
}
}
export default DetalheUsuario;