import { useState } from 'react';
import './CustomInput.scss';

export default function CustomInput(props:any) {
  const [isError, setIsError] = useState(false);
  const inputChange = (event: { target: any; }) => {
    console.log(event.target.value)
  };
  const checkInput = (event: {target:HTMLInputElement}) => {
    setIsError(!event.target.value);
  }
  return <>
    <div className={`form-field  ${isError ? 'active-error' : ''}`}>
      <label htmlFor={props.name}>{props.label}</label>
      <input type={props.type} id={props.name} onChange={inputChange} onBlur={checkInput}/>
      <div className="form-field--error">This field is requared</div>
    </div>
  </>
}