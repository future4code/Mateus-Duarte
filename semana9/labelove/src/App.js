import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Home from './components/Home'
import Matches from './components/Matches'


function App(props) {
  

  const aluno = "mateus-duarte"

  const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/"

  const headers = {headers: {'Content-Type':'application/json'}}
  
  const [profile, setProfile] = useState({})
  
  const [slide, setSlide] = useState(false)
  
  const [matches, setMatches] = useState([])

  const [trocaPerfil, setTrocaPerfil] = useState(true)
  
  const getProfile = () => {
    axios.get(`${baseUrl}${aluno}/person`)
    .then(response => {
      setProfile(response.data.profile) 
    })
    .catch(error => console.log('erro uhul',error))
    
    
    
  }

  const getMatches = () => {
    axios.get(`${baseUrl}${aluno}/matches`)
    .then(response => setMatches(response.data.matches))
    .catch(error => console.log(error))
  }
  

  const choosePerson = () => {
    axios.post(`${baseUrl}${aluno}/choose-person`, 
    {"id": profile.id, "choice": true}
    , headers)
    .then(response => setTrocaPerfil(!trocaPerfil))
    .catch((err) => {console.log(err.message)});
    setSlide(true)
    console.log(slide)
    
    getProfile()
    
  }
  const rejeitaPerfil = () => {
    axios.post(`${baseUrl}${aluno}/choose-person`, 
    {"id": profile.id, "choice": false}
    , headers)
    .then(response => setTrocaPerfil(!trocaPerfil))
    .catch((err) => {console.log(err.message)});
    setSlide(true)
    console.log(slide)
    
    getProfile()

  }

  const clearMatches = () => {
    axios.put(`${baseUrl}${aluno}/clear`)
    .then((resposta)=>{console.log(matches)})
    .catch((err) => {console.log(err.message)});
  }

  useEffect(()=> {
    getProfile()
  }, [])

  useEffect(()=> {
    getMatches()
  }, [trocaPerfil])

  useEffect(()=>{
    getMatches()
  }, [matches])
  
  const [valorPagina, setValorPagina] = useState('home')
  
  const onClickGoMatches = () => {
    setValorPagina('matches')
  }

  const onClickGoHome = () => {
    setValorPagina('home')
  }

  const RenderizaTela = () => {
    switch (valorPagina){
    case 'home':
      return (<Home 
                onClickGoMatches={onClickGoMatches}
                clearMatches={clearMatches}
                profile={profile}
                choosePerson={choosePerson}
                rejeitaPerfil={rejeitaPerfil}
                slide={slide}
                
                />)
      break;
    case 'matches':
      return(<Matches 
                onClickGoHome={onClickGoHome}
                matches={matches}
                clearMatches={clearMatches}
                />)
      break;
    }
  }

  
  return (
    <div>
      {RenderizaTela()}
    </div>
  )
}

export default App;
