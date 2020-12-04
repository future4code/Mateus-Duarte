import styled from "styled-components";

export const ProfileContainer = styled.nav`
    display:flex;
    align-items:center;
    img{
        height:5vh;
        margin-right:1vw;
    }
    div{
        p{
            margin:0;
        }
        font-size:.8em;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        strong {
            color:#ACB6C0;
            :hover{
                color:#949CA5;
                cursor:pointer;

            }
        }
    }`
