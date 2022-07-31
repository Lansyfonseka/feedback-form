import './CustomArea.scss';
import React from 'react';

type MyProps = {
  name: string,
  label: string,
  cols?: number,
  rows?: number
}

type MyState = {
  value: string,
  isError: boolean
}

export default class CustomArea extends React.Component<MyProps, MyState> {
  constructor(props:MyProps) {
    super(props);

    this.state = {
      value: '',
      isError: false
    }

    this.checkArea = this.checkArea.bind(this);
    this.changeArea = this.changeArea.bind(this);
  }

  checkArea(event: {target:HTMLTextAreaElement}) {
    const newValue = event.target.value;
    this.setState({isError:!newValue})
  }

  changeArea(event: {target:HTMLTextAreaElement}) {
    const newValue = event.target.value;
    this.setState({value: newValue})
  }

  render() {
    const {name, label} = this.props;
    const {value, isError} = this.state;
    return <>
    <div className={`form-field  ${isError ? 'active-error' : ''}`}>
       <label htmlFor={name}>{label}</label>
       <textarea id={name} value={value} onChange={this.changeArea} onBlur={this.checkArea}></textarea>
       <div className="form-field--error">This field is requared</div>
     </div>
    </>
  }
}