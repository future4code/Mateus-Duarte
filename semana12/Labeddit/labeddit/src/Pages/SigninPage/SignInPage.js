import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { InitialForm } from "../../Components/InitialForm/InitialForm";
import GlobalStateContext from "../../Global/GlobalStateContext";

export function SignInPage(props){
    const {states, setters, requests, functions} = useContext(GlobalStateContext)
    const history = useHistory()
    useEffect(()=>{
        functions.goToFeediIfAuthorized(history)
    }, [history])
    
    const onChangeEmail = (event) => {
        setters.setEmail(event.target.value)
    }
    const onChangeUsername = (event) => {
        setters.setUsername(event.target.value)
    }
    const onChangePassword = (event) => {
        setters.setPassword(event.target.value)
    }
    return(
        <InitialForm 
        onSubmit={functions.onSubmitForm}
        title="Cadastro" 
        placeholder1="usuário" 
        placeholder2="email" 
        placeholder3="senha" 
        type1="text" 
        type2="email" 
        type3="password" 
        buttonText="CADASTRAR" 
        value1={states.username} 
        value2={states.email} 
        value3={states.password} 
        onChange2={onChangeEmail}
        onChange3={onChangePassword}
        onChange1={onChangeUsername}
        onClick={requests.signup}/>
    )
}