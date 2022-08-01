import CustomInput from '../CustomInput/CustomInput';
import { CustomInputProps } from '../CustomInput/helpers/CustomInputTypes';
import './PhoneInput.scss';

export default class PhoneInput extends CustomInput {
  constructor(props: CustomInputProps | Readonly<CustomInputProps>) {
    super(props);

    this.phoneChangeMiddleware = this.phoneChangeMiddleware.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }
  phoneChangeMiddleware(value:string) {
    const regExpNumber = new RegExp('\\D','gi');
    const newValue = value.replace(regExpNumber,'');
    return newValue
  }
  inputChange(event: {target:HTMLInputElement}) {
    const newValue = this.phoneChangeMiddleware(event.target.value);
    const resultValidations = this.state.validation.reduce((total,curr)=>(total = curr.test(newValue) && total),true);
    this.updateValid(resultValidations);
    this.props.callbackSetValue(newValue)
  }
} 