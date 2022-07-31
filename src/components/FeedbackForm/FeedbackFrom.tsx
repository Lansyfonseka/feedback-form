import './FeedbackForm.scss';
import CustomInput from '../Custtominput/CustomInput';

export default function FeedbackForm(){
  return <>
  <div className="feedback-form">
    <h1>Feedback Form</h1>
    <form action="submit">
      <CustomInput name="name" label="Your name"></CustomInput>
    </form>
  </div>

  </>
}