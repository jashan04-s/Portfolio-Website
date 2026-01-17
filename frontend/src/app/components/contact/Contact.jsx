import React, {useState} from "react";
import "./contact.css";

import Lottie from "lottie-react";
import animationData from "../../../assets/lottieEmail.json";

import mailIcon from "../../../assets/contactmail.png";

const Contact = () => {
  const [userEmail, setUserEmail] = useState('')
  const [userName, setUserName] = useState('')

  const handleNameChange = (e) => {
    setUserName(e.target.value)
  }

  const handleEmailChange = (e) => {
    const emailInput = e.target;

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = emailPattern.test(emailInput.value); // Trigger the pattern check
  
    if (isValidEmail) {
      setUserEmail(emailInput.value);
      emailInput.setCustomValidity(''); // Clear any previous custom validation message
    } else {
      emailInput.setCustomValidity('Please enter a valid email address.');
    } 
  }

  return (
    <div className = "contact" id = "contactmeform">
      <div className = "contact__header contact__header--font">Contact Me</div>
      <div className = "contact__intro contact__intro--font">
        Whether you have a question, a project idea, or just want to say hello,
        I'm all ears! Don't hesitate to get in touch. I'm open to new
        opportunities and collaborations.
      </div>
      <div className="contact__form contact__form--font">
        <form autoComplete = "false" action = "/mail" method = "POST">
          <div className="form__name form--positioner">
            <label htmlFor="name" className="form__label">
              {" "}
              Your Name{" "}
            </label>
            <input name = "user" type="text" id="name" maxLength="32" placeholder = " your name" onChange={handleNameChange}/>
          </div>
          <div className="form__email  form--positioner">
            <label htmlFor="email" className="form__label">
              {" "}
              Your Email{" "}
            </label>
            <input name = "email" type="text" id="email" maxLength="32" placeholder = " your email" onChange={handleEmailChange}/>
          </div>
          <div className="form__message  form--positioner">
            <label htmlFor="message" className="form__label">
              {" "}
              Your Message{" "}
            </label>
            <textarea name = "feedback" id="message" maxLength="500" row="10" col="50" />
          </div>
          <div className="form__submit form--positioner ">
            <input type="submit" value = "Send"/>
          </div>
        </form>
        <div className="contact__LottieMail">
          <Lottie
            className = "LottieMail--positioner"
            animationData={animationData}
            style={{ width: 300, height: 300 }}
          />
          <div className="contact__info">
            <div className="info__email">
              <img src={mailIcon} width="35" />
              <div className="">gurjashan-singh@outlook.com</div>
            </div>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
