import styled from "styled-components";

export const EntirePostContainer = styled.main`
    border:1px solid #ACB6C0;
    border-radius:5px;
    width:80%;
    margin:5vh auto;`

export const CreateCommentContainer = styled.div`
    display:flex;
    flex-direction:column;
    
    border-radius:5px;
    width:90%;
    margin:5vh auto;
    textarea{
        border:1px solid #ACB6C0;
        border-radius:5px;
        padding-left:2vw;
        width: 90%;
        margin:3vh auto 2vh auto;
        height:20vh;
        ::placeholder{
            color:#ACB6C0;
        }
        :focus{
            outline:none;
        }
    }
    button{
        align-self:flex-end;
        margin:2vh 2vw 4vh 0;
    }`
 
