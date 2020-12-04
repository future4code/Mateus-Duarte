import { useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button } from "../../Components/Button/Button";
import { Header } from "../../Components/Header/Header";
import { PostBox } from "../../Components/PostBox/PostBox";
import GlobalStateContext from "../../Global/GlobalStateContext";
import { goToPost } from "../../Router/Coordinator";
import { CreatePostContainer } from "./styledFeed";

export function FeedPage(props){
    const {states, setters, requests, functions} = useContext(GlobalStateContext)
    const history = useHistory()
    console.log(states.posts)
    useEffect(()=>{
        requests.getPosts()
    }, [states.posts])
    useEffect(()=>{
        functions.checkAuthorization(history)
    }, [history])

    const onChangeText = (event) => {
        setters.setText(event.target.value)
    }

    const onChangeTitle = (event) => {
        setters.setTitle(event.target.value)
    }
    const renderPosts = states.posts.map((post)=>{
        return(
            <PostBox 
            comments="true" 
            border="true" 
            onClick={()=>goToPost(history, post.id)}
            votes={post.votesCount}
            username={post.username}
            commentsCount={post.commentsCount}
            title={post.title}
            text={post.text}
            createdAt={functions.timePassed(post.createdAt)}
            voteUp={()=>requests.vote(post.id, 1)}
            voteDown={()=>requests.vote(post.id, -1)}
            />
        )
    })

    return(
    <div>
            <Header/>
            <CreatePostContainer onSubmit={functions.onSubmitForm}>
                <h2>Criar um post</h2>
                <input 
                placeholder="Título" 
                type="text" 
                onChange={onChangeTitle} 
                value={states.title}
                required />
                <textarea 
                type="text" 
                rows="5" 
                placeholder="Escreva o post aqui..."  
                onChange={onChangeText} 
                value={states.text}
                required/>
                <Button 
                backgroundColor="#FE4501" 
                color="white" 
                width="10vw" hoverColor="#FE4501"
                hoverBackgroundColor="white" 
                height="5vh" 
                text="POSTAR"
                onClick={requests.createPost}/>
            </CreatePostContainer>
            {states.posts ? renderPosts : "<p>''</p>"}
        </div>
        
    )
}