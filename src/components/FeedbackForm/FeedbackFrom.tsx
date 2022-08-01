import './FeedbackForm.scss';
import CustomInput from '../CustomInput/CustomInput';
import PhoneInput from '../PhoneInput/PhoneInput';
import CustomArea from '../CustomArea/CustomArea';
import {Validator,Middleware} from './helpers/FormConfig';

export default function FeedbackForm(){
  const nameValidator = /(^[A-Za-z]{3,30}) ([A-Za-z]{3,30}$)/;
  const mailValidator = /^[A-Za-z]\S+@[A-Za-z]\S+\.[A-Za-z]{2,3}$/;
  const phoneValidator = /7\d{10}$/;
  const messageValidator = /^.{10,300}$/;
  const upperCaseMiddleware = (value:string) => value.toUpperCase()
  return <>
  <div className="feedback-form">
    <h1>Feedback Form</h1>
    <form action="submit">
      <CustomInput name="name" label="Your name" type="text" validations={Validator(nameValidator)} middleware={Middleware(upperCaseMiddleware)}></CustomInput>
      <CustomInput name="mail" label="Your E-mail" type="text" validations={Validator(mailValidator)}></CustomInput>
      <PhoneInput name="phone" label="Your phone number" type="text" validations={Validator(phoneValidator)}></PhoneInput>
      <CustomInput name="date" label="Your date of birth" type="date"></CustomInput>
      <CustomArea name="message" label="Your message" validations={Validator(messageValidator)} ></CustomArea>
      <button className="feedback-form--button">Submit</button>
    </form>
  </div>

  </>
}