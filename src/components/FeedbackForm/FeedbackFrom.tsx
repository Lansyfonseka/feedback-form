import './FeedbackForm.scss';
import CustomInput from '../CustomInput/CustomInput';
import PhoneInput from '../PhoneInput/PhoneInput';
import CustomArea from '../CustomArea/CustomArea';

export default function FeedbackForm(){
  return <>
  <div className="feedback-form">
    <h1>Feedback Form</h1>
    <form action="submit">
      <CustomInput name="name" label="Your name" type="string"></CustomInput>
      <CustomInput name="mail" label="Your E-mail" type="string"></CustomInput>
      <PhoneInput name="phone" label="Your phobe number" type="string"></PhoneInput>
      <CustomInput name="date" label="Your date of birth" type="date"></CustomInput>
      <CustomArea name="message" label="Your message"></CustomArea>
      <button className="feedback-form--button">Submit</button>
    </form>
  </div>

  </>
}