import { Botao } from '../BotaoPadrao/styled.BotaoPadrao';

export function BotaoPadrao(props) {
  return <Botao onClick={props.onClick}>{props.texto}</Botao>;
}
