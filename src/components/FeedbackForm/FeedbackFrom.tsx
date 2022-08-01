import './FeedbackForm.scss';
import CustomInput from '../CustomInput/CustomInput';
import PhoneInput from '../PhoneInput/PhoneInput';
import CustomArea from '../CustomArea/CustomArea';
import {Validator,Middleware} from './helpers/FormConfig';
import { FormEvent, useState } from 'react';
import axios from 'axios';

export default function FeedbackForm(){
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [message, setMassage] = useState('');
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [response, setResponce] = useState('');

  const fieldsList = [name,mail,phone,date,message];
  const nameValidator = /(^[A-Za-z]{3,30}) ([A-Za-z]{3,30}$)/;
  const mailValidator = /^[A-Za-z]\S+@[A-Za-z]\S+\.[A-Za-z]{2,3}$/;
  const phoneValidator = /^7\d{10}$/;
  const messageValidator = /^.{10,300}$/;

  const upperCaseMiddleware = (value:string) => value.toUpperCase();

  const resetForm = () => {
    setName('');
    setMail('');
    setPhone('');
    setDate('');
    setMassage('');
  }

  const submitForm = async (event: FormEvent) => {
    event.preventDefault();
    setDisableSubmit(true);
    const validForm = fieldsList.reduce((total,current) =>{return total && !!current}, true);
    if (!validForm) {
      alert('Please fill the fields');
      setDisableSubmit(false);
      return
    }
    const requestBody = {
      name: name,
      mail: mail,
      phone: phone,
      date: date,
      message: message
    }
    
    const requestUrl = 'https://feedback-server-lgr6lg9fz-lansyfonseka.vercel.app/api/feedback';
    axios.post(requestUrl,requestBody)
      .then(res => {
        const data = res.data;
        setResponce(data.message);
        setDisableSubmit(false);
        resetForm();
      })
  }

  return <>
  <div className="feedback-form">
    <h1>Feedback Form</h1>
    <form action="submit" onSubmit={submitForm}>
      <CustomInput 
        name="name" 
        label="Your name" 
        type="text" 
        value={name}
        validations={Validator(nameValidator)} 
        middleware={Middleware(upperCaseMiddleware)}
        callbackSetValue={setName}
      />
      <CustomInput 
        name="mail" 
        label="Your E-mail" 
        type="text"
        value={mail}
        validations={Validator(mailValidator)}
        callbackSetValue={setMail}
      />
      <PhoneInput 
        name="phone" 
        label="Your phone number" 
        type="text" 
        value={phone}
        validations={Validator(phoneValidator)}
        callbackSetValue={setPhone}
      />
      <CustomInput 
        name="date" 
        label="Your date of birth" 
        type="date"
        value={date}
        callbackSetValue={setDate}
      />
      <CustomArea 
        name="message" 
        label="Your message" 
        value={message}
        validations={Validator(messageValidator)}
        callbackSetValue={setMassage}
      />
      <button className="feedback-form--button" disabled={disableSubmit}>Submit</button>
      <div className="response">{response}</div>
    </form>
  </div>

  </>
}