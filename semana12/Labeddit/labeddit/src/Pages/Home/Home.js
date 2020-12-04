import { Button } from "../../Components/Button/Button";
import { HomeContainer } from "./styledHome";
import labeddit from '../../Assets/labeddit.svg'
import { useHistory } from "react-router-dom";
import { goToLogInPage, goToSignInPage } from "../../Router/Coordinator";
import { useEffect } from "react";
import { useContext } from "react";
import GlobalStateContext from "../../Global/GlobalStateContext";

export function Home () {
    const history = useHistory()
    const {states, setters, requests, functions} = useContext(GlobalStateContext)
    useEffect(()=>{
        functions.goToFeediIfAuthorized(history)
    }, [history])

    return(
        <HomeContainer>
            <img src={labeddit}/>
                <Button 
                    backgroundColor="white" 
                    color="#FE4501" 
                    width="15vw" 
                    hoverColor="white" 
                    hoverBackgroundColor="#FE4501"  
                    height="8vh" 
                    text="ENTRAR"
                    onClick={()=>goToLogInPage(history)}
                />
                <Button 
                backgroundColor="#FE4501" 
                color="white" 
                width="15vw"
                hoverColor="#FE4501" 
                hoverBackgroundColor="white" 
                height="8vh" text="CADASTRAR"
                onClick={()=>goToSignInPage(history)}/>
                   
        </HomeContainer>
    )
}