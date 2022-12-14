import React from 'react';
import './CustomInput.scss';
import {CustomInputProps,CustomInputState} from './helpers/CustomInputTypes';
import middlewareConfig from './helpers/middlewareConfig';
import validationConfig from './helpers/validationConfig';

export default class CustomInput extends React.Component<CustomInputProps, CustomInputState> {
  constructor(props: CustomInputProps | Readonly<CustomInputProps>) {
    super(props);
    this.state = {
      isError: false,
      isValid: true,
      validation: validationConfig(this.props.validations),
      middleware: middlewareConfig(this.props.middleware)
    }
    this.updateError = this.updateError.bind(this);
    this.updateValid = this.updateValid.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }
  updateError(newError:boolean) {
    this.setState({isError: newError})
  }
  updateValid(newValid:boolean){
    this.setState({isValid: newValid})
  }
  checkInput(event: {target:HTMLInputElement | HTMLTextAreaElement}) {
    this.updateError(!event.target.value);
  }
  inputChange(event: {target:HTMLInputElement | HTMLTextAreaElement}) {
    const newValue = event.target.value;
    const resultMiddleware = this.state.middleware.reduce((total,curr)=>curr(total),newValue);
    const resultValidations = this.state.validation.reduce((total,curr)=>(total = curr.test(resultMiddleware) && total),true);
    this.updateValid(resultValidations);
    this.props.callbackSetValue(resultMiddleware);
  }
  render() {
    const {name, type, label, value} = this.props;
    const {isError, isValid} = this.state;
    return <>
    <div className={`form-field${isError ? ' active-error' : ''}${isValid ? '' : ' invalid-field'}`}>
       <label htmlFor={name}>{label}</label>
       <input type={type || 'text'} id={name} value={value} onChange={this.inputChange} onBlur={this.checkInput}/>
       <div className="form-field--error">This field is requared</div>
       <div className="form-field--valid">Invalid value</div>
     </div>
    </>
  }
}