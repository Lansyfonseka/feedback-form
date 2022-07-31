import React from 'react';
import './CustomInput.scss';

type MyState = {
  value: string,
  isError: boolean
}
type MyProps = {
  name: string,
  type: string,
  label: string,
  validate?: string
}
export default class CustomInput extends React.Component<MyProps, MyState> {
  constructor(props:MyProps) {
    super(props);
    this.state = {
      isError: false,
      value: ''
    }
    this.updateError = this.updateError.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }
  updateError(newError:boolean) {
    this.setState({isError: newError})
  }
  updateValue(newValue:string) {
    this.setState({value: newValue});
  }
  checkInput(event: {target:HTMLInputElement}) {
    this.updateError(!event.target.value);
  }
  inputChange(event: {target:HTMLInputElement}) {
    this.updateValue(event.target.value);
    console.log(this.state.value)
  }
  render() {
    const {name, type, label} = this.props;
    const {isError, value} = this.state;
    return <>
    <div className={`form-field  ${isError ? 'active-error' : ''}`}>
       <label htmlFor={name}>{label}</label>
       <input type={type} id={name} value={value} onChange={this.inputChange} onBlur={this.checkInput}/>
       <div className="form-field--error">This field is requared</div>
     </div>
    </>
  }
}