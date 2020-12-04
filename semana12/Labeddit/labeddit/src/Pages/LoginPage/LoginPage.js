import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { InitialForm } from "../../Components/InitialForm/InitialForm";
import GlobalStateContext from "../../Global/GlobalStateContext";


export function LoginPage(props){
    const history = useHistory()
    const {states, setters, requests, functions} = useContext(GlobalStateContext)
    useEffect(()=>{
        functions.goToFeediIfAuthorized(history)
    }, [history])

   
    const onChangeEmail = (event) => {
        setters.setEmail(event.target.value)
    }
    const onChangePassword = (event) => {
        setters.setPassword(event.target.value)
        
    }
    return(
        <InitialForm 
        onSubmit={functions.onSubmitForm}
        title="Login" 
        placeholder1="email" 
        placeholder2="senha" 
        type1="text" 
        type2="password" 
        value1={states.email} 
        value2={states.password} 
        onChange1={onChangeEmail}
        onChange2={onChangePassword}
        buttonText="ENTRAR" 
        onClick={()=>requests.login(history)}
        />
    )
}