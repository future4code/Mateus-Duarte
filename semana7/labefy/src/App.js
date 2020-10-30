import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Header from './components/Header'
import InputPlaylists from './components/InputPlaylists'
import ListaPlaylists from './components/ListaPlaylists'
import Musicas from './components/Musicas'

const Page = styled.div`
    background-color:rgb(32, 32, 32);`


class App extends React.Component{
  state = {
    name: "",
    playlists:[],
    tracks:[
      {
        name: "Yellow Submarine",
        artist: "Beatles",
        url: "www.lasis.com"
      },
      {
        name: "Yellow Submarine",
        artist: "Beatles",
        url: "www.lasis.com"
      },
      {
        name: "Yellow Submarine",
        artist: "Beatles",
        url: "www.lasis.com"
      },
    ],
    paginaMusicaId:"",
    nameTrack:"",
    artistTrack:"",
    urlTrack:"ulala"
  }
  criaPlaylist = () => {
    const body = {
      name: this.state.name
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",body,{
      headers: {
        Authorization:"mateus-duarte-dumont"
      }
    })
  .then((resposta)=>{
    console.log(resposta.data)
    alert("Playlist criada!")
  }).catch((error) => {
    console.log(error.message)
    alert("Erro ao criar playlist!")
  })
  this.setState({name:""})
}
  addMusica = (playlistId) => {
    const body = {
      name: this.state.nameTrack,
      artist:this.state.artistTrack,
      url:this.state.urlTrack
    }
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`,body,{
      headers: {
        Authorization:"mateus-duarte-dumont"
      }
    })
  .then((resposta)=>{
    console.log(resposta.data)
    alert("Musca criada!")
  }).catch((error) => {
    console.log(playlistId)
    alert("Erro ao criar playlist!")
    
  })
  this.setState({name:""})
  }
  pegaPlaylists = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",{
      headers: {
        Authorization: "mateus-duarte-dumont"
      }
    }).then((resposta)=>{
      this.setState({playlists: resposta.data.result.list})
    }).catch((err)=>{
      console.log(err.message)
    })
  }
  pegaMusicasPlaylist = (playlistId) => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`,{
      headers:{
        Authorization: "mateus-duarte-dumont"
      }
    }).then((resposta)=>{
      console.log(resposta)
      this.setState({tracks:resposta.data.result.tracks, paginaMusicaId:playlistId})
      console.log(this.state.tracks)
    }).catch((err)=>{
      console.log(err.mesage)
    })
  }
  
  deletaPlaylist = (playlistId) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`,{
      headers:{
        Authorization:"mateus-duarte-dumont"
      }
    }).then((resposta)=>{
      alert("DELETOU")
    }).catch((err)=>
    alert("ERRO AO DELETAR")
    )
  }
  onChangeNomeaPlaylist = (event) => {
    this.setState({name:event.target.value})
  }
  onChangeNameTrack = (event) => {
    this.setState({nameTrack:event.target.value})
  }
  onChangeArtistTrack = (event) => {
    this.setState({artistTrack:event.target.value})
  }
 
  render(){
    return (
      <Page>
        <Header />
        <InputPlaylists 
        criaPlaylist={this.criaPlaylist}
        onChangeNomeaPlaylist={this.onChangeNomeaPlaylist}
        nameState={this.state.name}/>
        <ListaPlaylists
        playlists={this.state.playlists}
        pegaPlaylists={this.pegaPlaylists}
        deletaPlaylist = {this.deletaPlaylist}
        pegaMusicasPlaylist = {this.pegaMusicasPlaylist}
        tracks={this.state.tracks}
        paginaMusicaId={this.state.paginaMusicaId}
        addMusica={this.addMusica}
        onChangeArtistTrack={this.onChangeArtistTrack}
        onChangeNameTrack={this.onChangeNameTrack}/>
      </Page>
    );
  }
  
}

export default App;
