import CustomInput from '../CustomInput/CustomInput';
import './PhoneInput.scss';

export default class PhoneInput extends CustomInput {
  constructor(props:any) {
    super(props);

    this.phoneChange = this.phoneChange.bind(this);
  }
  phoneChange(event: {target: HTMLInputElement}) {
    const regExpNumber = new RegExp('\\D','gi');
    const newValue = event.target.value;
    const validateValue = newValue.replace(regExpNumber,'')
    this.setState({value: validateValue});
  }

  render() {
    const {name, type, label} = this.props;
    const {isError, value} = this.state;
    return <>
    <div className={`form-field  ${isError ? 'active-error' : ''}`}>
       <label htmlFor={name}>{label}</label>
       <input type={type} id={name} value={value} onChange={this.phoneChange} onBlur={this.checkInput}/>
       <div className="form-field--error">This field is requared</div>
     </div>
    </>
  }
} 