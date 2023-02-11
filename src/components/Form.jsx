import React from "react";
import emailjs from "@emailjs/browser";
import "../App.css";

function Form() {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_bgkky1j", "template_6rl64lm", e.target,'TUKDGztQhG4wtHJsz')
        .then(response => console.log(response))
        .catch(error => console.log(error))
  };
  return (
    <div>
      <div className="container">
        <form
          id="contactForm"
          data-sb-form-api-token="API_TOKEN"
          onSubmit={sendEmail}
        >
          <div className="mb-3 mt-4">
            <input
              className="input"
              id="name"
              name="user_name"
              type="text"
              placeholder="Nombre"
              data-sb-validations="required"
            />
            <div className="invalid-feedback" data-sb-feedback="name:required">
              Name is required.
            </div>
          </div>

          <div className="mb-3">
            <input
              className="input"
              id="emailAddress"
              type="email"
              name="user_email"
              placeholder="Correo"
              data-sb-validations="required, email"
            />
            <div
              className="invalid-feedback"
              data-sb-feedback="emailAddress:required"
            >
              Email Address is required.
            </div>
            <div
              className="invalid-feedback"
              data-sb-feedback="emailAddress:email"
            >
              Email Address Email is not valid.
            </div>
          </div>

          <div className="mb-3">
            <textarea
              className="input text-area mb-2"
              name="user_msj"
              id="message"
              type="text"
              placeholder="¿En que te podemos ayudar?"
              data-sb-validations="required"
            ></textarea>
            <div
              className="invalid-feedback"
              data-sb-feedback="message:required"
            >
              Message is required.
            </div>
          </div>

          <div className="d-none" id="submitSuccessMessage">
            <div className="text-center mb-3">Form submission successful!</div>
          </div>

          <div className="d-none" id="submitErrorMessage">
            <div className="text-center text-danger mb-3">
              Error sending message!
            </div>
          </div>

          <div className="d-grid">
            <button
              className="btn btn-enviar mb-5"
              id="submitButton"
              type="submit"
            >
              ENVIAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
