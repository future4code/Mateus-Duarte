import { ViagemInfoBoxContainer } from './styled.ViagemInfoBox';

export function ViagemInfoBox(props) {
  return (
    <ViagemInfoBoxContainer>
      <h3>{props.name}</h3>
      <h4>DESTINO: {props.planet}</h4>
      <h4>DECOLAEM: {props.date}</h4>
      <h4>DURAÇÃO: {props.durationInDays}</h4>
    </ViagemInfoBoxContainer>
  );
}
