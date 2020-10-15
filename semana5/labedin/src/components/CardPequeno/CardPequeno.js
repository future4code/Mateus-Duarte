import React from 'react';
import './CardPequeno.css'

function CardPequeno(props){
    return(
        <div className="smallcard-container">
            <div id="smallcard-flex">
                <img src={ props.imagem1 } />
                <p>{ props.descricao1 }</p>
            </div>
            <div id="smallcard-flex">
                <img src={ props.imagem2 } />
                <p>{ props.descricao2 }</p>
            </div>
        </div>
    )
}

export default CardPequeno;