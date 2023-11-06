import React from "react";
import "./contact.css";

import Lottie from "lottie-react";
import animationData from "../../../assets/lottieEmail.json";

import phoneIcon from "../../../assets/contactphone.png";
import mailIcon from "../../../assets/contactmail.png";

const Contact = () => {
  return (
    <div className = "contact" id = "contactmeform">
      <div className = "contact__header contact__header--font">Contact Me</div>
      <div className = "contact__intro contact__intro--font">
        Whether you have a question, a project idea, or just want to say hello,
        I'm all ears! Don't hesitate to get in touch. I'm open to new
        opportunities and collaborations.
      </div>
      <div class="contact__form contact__form--font">
        <form>
          <div className="form__name form--positioner">
            <label for="name" className="form__label">
              {" "}
              Your Name{" "}
            </label>
            <input type="text" id="name" maxlength="32" />
          </div>
          <div className="form__email  form--positioner">
            <label for="email" className="form__label">
              {" "}
              Your Email{" "}
            </label>
            <input type="text" id="email" maxlength="32" />
          </div>
          <div className="form__message  form--positioner">
            <label for="message" className="form__label">
              {" "}
              Your Message{" "}
            </label>
            <textarea id="message" maxlength="500" row="10" col="50" />
          </div>
          <div className="form__submit form--positioner ">
            <button type="submit"> Send </button>
          </div>
        </form>
        <div className="contact__LottieMail">
          <Lottie
            className = "LottieMail--positioner"
            animationData={animationData}
            style={{ width: 500, height: 500 }}
          />
          <div className="contact__info">
            <div className="info__email">
              <img src={mailIcon} width="35" />
              <div className="">gurjashan-singh@outlook.com</div>
            </div>
            <div className="info__phone">
              <img src={phoneIcon} width="35" />
              <div className="">(647)-514-9143</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
