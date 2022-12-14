import './CustomArea.scss';
import CustomInput from '../CustomInput/CustomInput';

export default class CustomArea extends CustomInput {

  render() {
    const {name, label, value} = this.props;
    const {isError, isValid} = this.state;
    return <>
    <div className={`form-field${isError ? ' active-error' : ''}${isValid ? '' : ' invalid-field'}`}>
       <label htmlFor={name}>{label}</label>
       <textarea cols={30} rows={4} id={name} value={value} onChange={this.inputChange} onBlur={this.checkInput}></textarea>
       <div className="form-field--error">This field is requared</div>
     </div>
    </>
  }
}