import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import {SecaoCompartilhando} from '../SecaoCompartilhando/SecaoCompartilhando'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import iconeSalvoBranco from '../../img/saved_white.svg'
import iconeSalvoPreto from '../../img/saved_black.svg'
import iconeShare from '../../img/share.svg'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando:false,
    numeroComentarios: 0,
    salvo: false,
    compartilhando: false,
  }

  onClickCurtida = () => {
    this.setState({
      curtido: !this.state.curtido,
    })
    if(this.state.curtido===false){
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas + 1
      })
    } else {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  onClickSalvo = () => {
    this.setState({
      salvo: !this.state.salvo
    })
  }
  onClickShare = () => {
    this.setState({
      compartilhando: !this.state.compartilhando
    })
  }
  render() {
    let iconeCurtida
    let iconeSalvo

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    if(this.state.salvo){
      iconeSalvo = iconeSalvoPreto
    }else {
      iconeSalvo = iconeSalvoBranco
    }

    let componenteComentario
    
    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let componenteCompartilhando

    if(this.state.compartilhando){
      componenteCompartilhando = <SecaoCompartilhando/>
    }

    return ( 
      <div className={'post-container'}>
        <div className={'post-header'}>
          <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
          <p>{this.props.nomeUsuario}</p>
        </div>

        <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

        <div className={'post-footer'}>

          <IconeComContador
            icone={iconeCurtida}
            onClickIcone={this.onClickCurtida}
            valorContador={this.state.numeroCurtidas}
          />
          <div id="footer-flex">
          <IconeComContador
              icone={iconeShare}
              onClickIcone={this.onClickShare}
            />
            <IconeComContador
              icone={iconeSalvo}
              onClickIcone={this.onClickSalvo}
            />

            <IconeComContador
              icone={iconeComentario}
              onClickIcone={this.onClickComentario}
              valorContador={this.state.numeroComentarios}
            />
          </div>
        </div>
        {componenteComentario}
        {componenteCompartilhando}
      </div>
    )
  }
}

export default Post