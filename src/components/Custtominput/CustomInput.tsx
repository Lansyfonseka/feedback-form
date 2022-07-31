import './CustomInput.scss';

export default function CustomInput(props:any) {
  return <>
    <div className="form-field">
      <label htmlFor=""></label>
      <input type="text" />
      <div className="form-field--error">This field is requared</div>
    </div>
  </>
}