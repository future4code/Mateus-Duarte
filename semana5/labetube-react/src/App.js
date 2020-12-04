import React from 'react';
import logo from './labetube.png';
import camera from './camera.png';
import user from './user.png';
import notification from './notification.png';
import Header from './components/Header'
import Body from './components/Body'
import './App.css';




class App extends React.Component {
    render(){
        return(
            <div>
           <Header />
           <Body />
           </div>
        )
    }
}
// function App() {
//   const tituloVideo = "Título do vídeo"
//   function reproduzVideo() {
//     alert("O vídeo está sendo reproduzido")
// }
//   return (
//     <div>
//       <div className="tela-inteira">

//         <header>
//             <img src={logo} id="logo"/>
//             <input type="text" placeholder="Busca" id="campoDeBusca" />
//             <div className="nav-bar">
//               <img src={camera} id="camera"/>
//               <img src={notification} id="notification"/>
//               <img src={user} id="user"/>
//             </div>

//         </header>
        
        
//     </div>
//     </div>
//   )
// }

export default App;
