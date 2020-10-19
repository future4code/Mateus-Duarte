import React from 'react';

import styled from 'styled-components'


const ContainerFinal = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`




export class Final extends React.Component{
   

    render(){
        return(
            
            <ContainerFinal>
                <h1>O FORMULÁRIO ACABOU</h1>
                <p>Muito obrigado por participar! Entraremos em contato!</p>

                
            </ ContainerFinal>
            
        )
    }
}