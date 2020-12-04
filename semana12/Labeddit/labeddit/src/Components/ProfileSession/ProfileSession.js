import { ProfileContainer } from "./styledProfileSession";
import  profileIcon from '../../Assets/profileIcon.svg'
import { useHistory } from "react-router-dom";
import { goToHome } from "../../Router/Coordinator";

export function ProfileSession(props){
    const history = useHistory()
    const logout = () => {
        goToHome(history)
        localStorage.removeItem('token')
      } 
    return(
        <ProfileContainer>
            <img src={profileIcon}/>
            <div>
                <p>Mateus</p>
                <p onClick={logout}><strong>Logout</strong></p>
            </div>
        </ProfileContainer>
    )
}