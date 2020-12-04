import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import dropdownIcon from '../assets/dropdownIcon.svg'
import trashIcon from '../assets/trashIcon.svg'
import '../assets/fonts.css'
import Musicas from './Musicas'


const FlexPlaylist = styled.div`
    display:flex;
    justify-content:space-between;
    width: 50%;
    margin:auto;
    border-top:1px solid rgb(35,35,35);
    border-bottom:1px solid rgb(35,35,35);
    margin-bottom:2vh;`

const NomePlaylist= styled.p`
    color:rgb(166,166,166);
    font-weight:700;
    cursor:pointer;`

const BotaoDeletarPlaylist = styled.button`
    background-color:rgb(32, 32, 32);
    border:none;
    color:rgb(166,166,166);
    font-weight:700;
    font-size: .06em;
    cursor:pointer;`

const IconTrash = styled.img`
    height:1.5vh;
    cursor:pointer;`

const IconDropdown = styled.img`
    height:1.5vh;
    margin-right:.5vw;
    cursor:pointer;`

const FlexLista = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    `

const TituloPlaylists = styled.h3`
    color:white;
    text-align:center;
    margin-top:4vh;
    font-family: 'Montserrat', sans-serif;
    `

const FlexTracks = styled.div`
    display:flex;
    flex-direction:column;`
class ListaPlaylists extends React.Component{
    componentDidMount = () => {
        this.props.pegaPlaylists()
    }
    componentDidUpdate = () => {
        this.props.pegaPlaylists()
    }
    componentDidUpdate = () => {
        this.props.pegaMusicasPlaylist()
    }
    
  render(){
      const renderedPlaylists = this.props.playlists.map((playlist)=>{
            if(this.props.paginaMusicaId === playlist.id){
                return (
                    <FlexTracks>
                        <FlexPlaylist>
                            <FlexLista>
                                <IconDropdown src={dropdownIcon} onClick={()=>this.props.pegaMusicasPlaylist(playlist.id)}/>
                                <NomePlaylist key={playlist.id} onClick={()=>this.props.pegaMusicasPlaylist(playlist.id)}>{playlist.name}</NomePlaylist>
                            </FlexLista>
                            <FlexLista>
                                <BotaoDeletarPlaylist onClick={()=>this.props.deletaPlaylist(playlist.id)}>Deletar playlist</BotaoDeletarPlaylist>
                                <IconTrash src={trashIcon} onClick={()=>this.props.deletaPlaylist(playlist.id)}/>
                            </FlexLista>
                        </FlexPlaylist>
                        <Musicas 
                        tracks={this.props.tracks} 
                        paginaMusicaId={this.props.paginaMusicaId}
                        addMusica={this.props.addMusica}
                        id={playlist.id}
                        onChangeArtistTrack={this.props.onChangeArtistTrack}
                        onChangeNameTrack={this.props.onChangeNameTrack}
                        pegaMusicasPlaylist={this.props.pegaMusicasPlaylist}/>
                    </FlexTracks>
                )
            } else {
                return(
                    <FlexTracks>
                    <FlexPlaylist>
                        <FlexLista>
                            <IconDropdown src={dropdownIcon} onClick={()=>this.props.pegaMusicasPlaylist(playlist.id)}/>
                            <NomePlaylist key={playlist.id} onClick={()=>this.props.pegaMusicasPlaylist(playlist.id)}>{playlist.name}</NomePlaylist>
                        </FlexLista>
                        <FlexLista>
                            <BotaoDeletarPlaylist onClick={()=>this.props.deletaPlaylist(playlist.id)}>Deletar playlist</BotaoDeletarPlaylist>
                            <IconTrash src={trashIcon} onClick={()=>this.props.deletaPlaylist(playlist.id)}/>
                        </FlexLista>
                    </FlexPlaylist>
                </FlexTracks>
                )
            }
      })
    return (
      <div>
          <TituloPlaylists>Suas playlists:</TituloPlaylists>
         {renderedPlaylists}
      </div>
    );
  }
  
}

export default ListaPlaylists;
