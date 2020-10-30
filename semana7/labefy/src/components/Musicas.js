import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import discIcon from '../assets/discIcon.svg'
import AdicionaMusica from './AdicionaMusica'


const ContainerTracks = styled.div`
    display:flex;
    flex-direction:column;
    width: 50%;
    margin:auto;
    padding-left:5vw;`
const FlexLegend = styled.div`
    display:flex;
    align-items:center;`

const IconDisc = styled.img`
    height:1.5vh;
    margin-right:.5vw;`

const TrackArtist = styled.p`
    color:white;
    font-weight:bold;
    margin-right:.2vw;`
const TrackName = styled.p`
    color:white;`
const TituloTracks = styled.p`
    color:white;`
const Audio = styled.audio`
    height:3.5vh;`

const AdicionarMusica = styled.p`
    color:rgb(234,134,35);
    font-weight:bold;
    font-size:.9em;
    `
const ContainerLink = styled.div`
    width:50%;
    margin:auto;
    padding-left:5vw;
    margin-top:2vh;`

const ContainerTitulo = styled.div`
    width:50%;
    margin:auto;
    padding-left:5vw;
    margin-top:2vh;`
class Musicas extends React.Component{
    state = {
        numeroTracks:0
    }
numeroAleatorio = () => {
    return Math.floor(Math.random() * Math.floor(101));
}
componentDidUpdate = () => {
    this.props.pegaMusicasPlaylist()
}

    render(){
        const audioAleatorio = `http://spoti4.future4.com.br/${this.numeroAleatorio()}.mp3`
        const renderedTracks = this.props.tracks.map((track)=>{
          return (
              <ContainerTracks>
                <FlexLegend>
                    <IconDisc src={discIcon}/>
                    <TrackArtist>{track.artist}: </TrackArtist> 
                    <TrackName>{track.name}</TrackName>
                </FlexLegend>
                <Audio controls><source src={audioAleatorio}/></Audio>
              </ContainerTracks>
          )
        })
       
      return (
        <div>
            <ContainerTitulo>
                <TituloTracks>Músicas:</TituloTracks>
            </ContainerTitulo>
           {renderedTracks}
           <ContainerLink>
            <AdicionarMusica>Adicona + músicas</AdicionarMusica>
           </ContainerLink>
           <AdicionaMusica
           addMusica={this.props.addMusica}
           id={this.props.id}
           onChangeArtistTrack={this.props.onChangeArtistTrack}
            onChangeNameTrack={this.props.onChangeNameTrack}
            pegaMusicasPlaylist={this.props.pegaMusicasPlaylist}/>
        </div>
      );
    }
}
export default Musicas;
