import './CustomArea.scss';
import CustomInput from '../CustomInput/CustomInput';

export default class CustomArea extends CustomInput {

  render() {
    const {name, label} = this.props;
    const {isError, value, isValid} = this.state;
    return <>
    <div className={`form-field${isError ? ' active-error' : ''}${isValid ? '' : ' invalid-field'}`}>
       <label htmlFor={name}>{label}</label>
       <textarea id={name} value={value} onChange={this.inputChange} onBlur={this.checkInput}></textarea>
       <div className="form-field--error">This field is requared</div>
     </div>
    </>
  }
}