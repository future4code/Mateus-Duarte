import React from 'react';
import styled from 'styled-components'
import logoLabetube from '../labetube.png'
import './Fonts.css'
import alertIcon from '../assets/alertIcon.png'
import profileIcon from '../assets/profileIcon.png'
import cameraIcon from '../assets/cameraIcon.png'

const tituloVideo = "Título do vídeo"
class Body extends React.Component {
    
  reproduzVideo = () => {
    alert("O vídeo está sendo reproduzido")
}
    render(){
        return(
            <div>
            <main>
            <nav className="menu-vertical">
                <ul>
                    <li className="botoes-meunu-vertical">Início</li>
                    <li className="botoes-meunu-vertical">Em alta</li>
                    <li className="botoes-meunu-vertical">Inscrições</li>
                    <hr />
                    <li className="botoes-meunu-vertical">Originais</li>
                    <li className="botoes-meunu-vertical">Histórico</li>
                </ul>
            </nav>
            
            <section className="painel-de-videos">
                <div className="box-pagina-principal media1" onClick={this.reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=1 " alt="" />
                    <h4>{tituloVideo}</h4>
                </div>
                <div className="box-pagina-principal media2" onClick={this.reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=2 " alt="" />
                    <h4>{tituloVideo}</h4>
                </div>
                <div className="box-pagina-principal media3" onClick={this.reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=3 " alt="" />
                    <h4>{tituloVideo}</h4>
                </div>
                <div className="box-pagina-principal media4" onClick={this.reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=4 " alt="" />
                    <h4>{tituloVideo}</h4>
                </div>
                <div className="box-pagina-principal media5" onClick={this.reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=5 " alt="" />
                    <h4>{tituloVideo}</h4>
                </div>
                <div className="box-pagina-principal media6" onClick={this.reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=6 " alt="" />
                    <h4>{tituloVideo}</h4>
                </div>
                <div className="box-pagina-principal media7" onClick={this.reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=7 " alt="" />
                    <h4>{tituloVideo}</h4>
                </div>
                <div className="box-pagina-principal media8" onClick={this.reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=8 " alt="" />
                    <h4>{tituloVideo}</h4>
                </div>
            </section>
        </main>

        <footer>
            <h4>Oi! Eu moro no footer!</h4>
        </footer>
        </div>
        )
    }
}
export default Body;

