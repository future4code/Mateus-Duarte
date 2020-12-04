import { PostBoxContainer, PostBoxContent, PostBoxNav } from "./styledPostBox";
import commentIcon from '../../Assets/commentBox.svg'
import upArrow from '../../Assets/up-arrow.svg'
import downArrow from '../../Assets/down-arrow.svg'
export function PostBox(props){
        const renderComments = () => {
        if(props.comments){
            return(
                <div onClick={props.onClick}>
                <img src={commentIcon} />
                <p>{props.commentsCount} comentários</p>
            </div>
            )
        }
    }
   
    return(
        <PostBoxContainer border={props.border} >
            <PostBoxContent>
                <p>Postado por {props.username} {props.createdAt}</p>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
               {renderComments()}
            </PostBoxContent>
            <PostBoxNav>
                <img src={upArrow} onClick={props.voteUp}/>
                <p>{props.votes}</p>
                <img src={downArrow} onClick={props.voteDown}/>
            </PostBoxNav>
        </PostBoxContainer>
    )
}