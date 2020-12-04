import { ProfileSession } from "../ProfileSession/ProfileSession";
import { HeaderContainer, Logo } from "./styledHeader";
import labeddit from '../../Assets/labeddit.svg'
import { useHistory } from "react-router-dom";
import { goToFeed } from "../../Router/Coordinator";

export function Header(props){
    const history = useHistory()
    return(
        <HeaderContainer>
            <Logo src={labeddit} onClick={()=>goToFeed(history)}/>
            <ProfileSession/>
        </HeaderContainer>
    )
}