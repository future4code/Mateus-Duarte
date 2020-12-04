import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import logo from "../assets/labefy-logo.png"

const HeaderPage = styled.div`
    background-color:rgb(32, 32, 32);
    height:15vh;
    display:flex;
    justify-content:center;`

const Logo = styled.img`
    height:3em;
    margin:3vh;`
class Header extends React.Component{
  render(){
    return (
      <HeaderPage>
          <Logo src={logo}/>
      </HeaderPage>
    );
  }
  
}

export default Header;
