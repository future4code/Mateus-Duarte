import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import BackIcon from '../assets/backIcon.svg'
import refreshIcon from '../assets/refreshIcon.svg'
import cryingHeart from '../assets/crying-heart.gif'

const BackIconContainer = styled.div` 
    width:17vw;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    margin:auto;
    img{
        height:5vh;
        cursor:pointer;
        margin-left:-.5vw;
        align-self:flex-start;
    }
    `

const MatchesContainer = styled.div` 
    border:.1vw solid #e2e4e3;
    width:17vw;
    margin:auto;
    border-radius:.5vw;
    margin-top:2vh;
    display:flex;
    flex-direction:column;
    h5{
        color:#fd6a6b;
        font-size:1em;
        align-self:center;
    }`

const ProfilesContainer = styled.div`
    display:flex;
    flex-direction:row;
    align-items:flex-start:
    width:17vw;
    margin:1.5vw;
    flex-wrap:wrap;
    `

const ProfilePic = styled.img` 
    height:5vh;
    width:5vh;
    border-radius:50%;
    align-self:center;
    `
const GifCryingHeart = styled.img`
    margin:auto;
    height:20vh;`

const SingleProfileContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:28%;
    margin:.3vh .3vw;
    justify-content:flex-start;
    align-items:center;
    p{
        font-weight:600;
        font-size:.8em;
        color:#9F9F9F;
        align-self:center;
        margin-top:.5vh;
        text-align:center;
    }
    
    

    `

const Footer = styled.p`
    text-align:center;
    strong{
        font-weight:700;
    }
    font-weight:400;
    font-size:.7em;
    color:#9F9F9F;
    align-self:flex-start;
    margin-top:4vh;`

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

function Matches(props) {
    
    const renderizaMatchesCondicionalmente = () => {
        if(props.matches.length === 0){
            return(
                <GifCryingHeart src={cryingHeart}/>
            )
        } else {
            return(
                props.matches.map((item)=>{
                    return(
                        <SingleProfileContainer>
                            <ProfilePic 
                                src={item.photo}
                                alt="foto de perfil"
                            />
                            <p>{item.name}</p>
                        </SingleProfileContainer>
                    )
                })
            )
        }
    }
    const renderizaTituloCondicionalmente = () => {
        if(props.matches.length === 0){
            return(
                <h5>Você ainda não tem nenhum match.</h5>
            )
        }else{
            return(
                <h5>Novos matches!</h5>
            )
            }
    }
    return (
        <div>
            <Header/>
            <BackIconContainer>
                <img 
                    src={BackIcon} 
                    onClick={props.onClickGoHome}
                    alt="icone de voltar para home"/>
            </BackIconContainer>
            <MatchesContainer>
                {renderizaTituloCondicionalmente()}
                <ProfilesContainer>
                    {renderizaMatchesCondicionalmente()}
                </ProfilesContainer>
            </MatchesContainer>
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

export default Matches;
