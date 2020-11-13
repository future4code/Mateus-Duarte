import React, {useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import LabeLoveLogo from '../assets/labelove.svg'


const HeaderContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:10vh;
    img{
        height:4.5vh;
    }
    `


function Header() {
  return (
   <HeaderContainer>
       <img src={LabeLoveLogo}/>
   </HeaderContainer>
  );
}

export default Header;
