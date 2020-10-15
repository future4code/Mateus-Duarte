import React, {Component} from 'react'
import './SecaoCompartilhando.css'
import facebookLogo from '../../img/facebook.svg'
import emailIcon from '../../img/email.svg'
import bluetoothIcon from '../../img/bluetooth.svg'

export class SecaoCompartilhando extends Component {
	state = {
		valorMensagem: ""
    }
    onChangeMensagem(event) {
		console.log(event.target.value)
	}
	render() {
		return <div className={'share-container'}>
            <div className="share-flex">
                <img src={facebookLogo} className={"share-image"} alt="oi"/>
                <img src={emailIcon} className={"share-image"} alt="oi"/>
                <img src={bluetoothIcon} className={"share-image"} alt="oi"/>
            </div>
            <input
				className={'input-share'}
				placeholder={'Mensagem'}
				value={this.state.valorMensagem}
				onChange={this.onChangeMensagem}
			/>
            <button onClick={this.props.aoEnviar}>Enviar</button>
		</div>
	}
}
