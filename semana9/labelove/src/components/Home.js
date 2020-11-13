import React, { Profiler } from 'react'
import styled, { keyframes, css } from 'styled-components'
import Header from './Header'
import MatchesIcon from '../assets/matchesIcon.svg'
import HeartIcon from '../assets/heartIcon.svg'
import xIcon from '../assets/xIcon.svg'
import refreshIcon from '../assets/refreshIcon.svg'


const MatchesIconContainer = styled.div`
    display:flex;
    width:17vw;
    margin:auto;
    flex-direction:column;
    margin-bottom:1vh;
    img{
        align-self:flex-end;
        cursor:pointer;
    }`

const slideRightAnimation = keyframes` 
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
    opacity: 0;
  }
}
    `

const ContainerPerfil = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:auto;
    border:.5px solid #e2e4e3;
    width:17vw;
    border-top-left-radius:.5vw;
    border-top-right-radius:.5vw;
    box-shadow: 10px 10px 5px 0px #f0f2f1;
    
    /* animation:${slideRightAnimation} 1s; */
    
    img{
        height: 35vh;
        width:17vw;
        border-top-left-radius:.5vw;
        border-top-right-radius:.5vw;
    }
    div{
        width:17vw;
    }
    h4{
        align-self:flex-start;
        margin-left:1vw;
        font-weight:300;
        font-size:1.1em;
    }
    strong{
        font-weight:700;
    }
    p{
        font-weight:400;
        font-size:.8em;
        color:#9F9F9F;
        align-self:flex-start;
        margin-left:1vw;
        margin-top:-1vh;
        
    }
    `

const ContainerBotoes = styled.div`
    display:flex;
    width:17vw;
    align-items:center;
    justify-content:space-around;
    margin:auto;
    margin-top:6vh;
    img{
        height:7vh;
        width:3.5vw;
        cursor:pointer;
        :hover{
            background-color:#cdcdcd;
            border-radius:2vw;
        }
        :active{
            transform: scale(.9);
            transition: transform .25s ease;
        }
    }`

const LimparMatchesContainer = styled.div`
    display:flex;
    margin:auto;
    margin-top:3vh;
    margin-bottom:2vh;
    width:17vw;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    p{
        font-weight:400;
        font-size:1em;
        color:#9F9F9F;
        align-self:flex-start;
        margin-right:.5vw;
        :hover{
            color:#626F77;
            text-decoration:underline;
        }
    }
    img{
        height:1.5vh;
        :hover{
            transform: scale(1.5);
            transition: transform .25s ease;
        }
    }`

const Footer = styled.p`
    text-align:center;
    
    strong{
        font-weight:700;
    }
    font-weight:400;
    font-size:.7em;
    color:#9F9F9F;
    align-self:flex-start;
    margin-left:1vw;
    margin-top:-1vh;`

function Home(props) {


  return (
    <div>
        <Header/>
        <MatchesIconContainer>
            <img 
                src={MatchesIcon} 
                onClick={props.onClickGoMatches} 
                alt="go to matches icon"
            />
        </MatchesIconContainer>
        <ContainerPerfil>
            <img src={props.profile && props.profile.photo} alt="profile-pic"/>
            <div>
                <h4><strong>{props.profile && props.profile.name},</strong> {props.profile && props.profile.age}</h4>
                <p>{props.profile && props.profile.bio}</p>
            </div>
        </ContainerPerfil>
        <ContainerBotoes>
            <img 
                src={xIcon} 
                alt="negative icon"
                onClick={props.rejeitaPerfil}
                
            />
            <img 
                src={HeartIcon} 
                alt="heart icon"
                onClick={props.choosePerson}
            /> 
        </ContainerBotoes>
        <LimparMatchesContainer>
            <p onClick={props.clearMatches}>Limpar matches</p>
            <img 
                src={refreshIcon} 
                alt="refresh icon"
                onClick={props.clearMatches}
            />
        </LimparMatchesContainer>
        <Footer>Criado por <strong>@mateeusduarte</strong> na semana de 9/nov/2020.</Footer>
    </div>
  );
}

export default Home;
