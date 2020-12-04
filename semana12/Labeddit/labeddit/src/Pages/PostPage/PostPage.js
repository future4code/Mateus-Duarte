import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../../Components/Button/Button";
import { Header } from "../../Components/Header/Header";
import { PostBox } from "../../Components/PostBox/PostBox";
import GlobalStateContext from "../../Global/GlobalStateContext";
import {CreateCommentContainer, EntirePostContainer} from "../PostPage/styledPostPage"


export function PostPage(props){
    const {states, setters, requests, functions} = useContext(GlobalStateContext)
    const pathParams = useParams()

    useEffect(()=>{
        requests.getPostDetail(pathParams.id)
    }, [states.postDetail])

    const renderComments = states.comments.map((comment)=>{
        return(
            <PostBox 
            border="true"
            username={comment.username}
            title={comment.text}
            votes={comment.votesCount}
            createdAt={functions.timePassed(comment.createdAt)}
            voteUp={()=>requests.voteComment(pathParams.id,comment.id, 1)}
            voteDown={()=>requests.voteComment(pathParams.id,comment.id, -1)}
            />
        )
    })

    const onChangeText = (event) => {
        setters.setText(event.target.value)
        console.log(states.text)
    }

    return(
    <div>
            <Header/>
            <EntirePostContainer>
                <PostBox 
                comments="true"
                commentsCount={states.postDetail.commentsCount}
                username={states.postDetail.username}
                title={states.postDetail.title}
                text={states.postDetail.text}
                votes={states.postDetail.votesCount}
                createdAt={functions.timePassed(states.postDetail.createdAt)}
                voteUp={()=>requests.vote(pathParams.id, 1)}
                voteDown={()=>requests.vote(pathParams.id, -1)}
                />
                <CreateCommentContainer>
                    <textarea 
                    placeholder="Deixe um comentário"
                    onChange={onChangeText}
                    value={states.text}/>
                    <Button 
                    backgroundColor="#FE4501" 
                    color="white" 
                    width="10vw" 
                    hoverColor="#FE4501"
                    hoverBackgroundColor="white" 
                    height="5vh" 
                    text="COMENTAR"
                    onClick={()=>requests.createComment(pathParams.id)}
                    />
                </CreateCommentContainer>
                {renderComments}
                
            </EntirePostContainer>

            
        </div>
        
    )
}