import { LabelInputContainer } from '../LabelInput/styled-LabelInput';

export function LabelInput(props) {
  return (
    <LabelInputContainer>
      <label for={props.id}>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        required
        pattern={props.pattern}
      />
    </LabelInputContainer>
  );
}
