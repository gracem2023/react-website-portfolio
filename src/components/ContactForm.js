import React, { useState } from "react";
import './ContactForm.css';

const FORM_ENDPOINT = "https://herotofu.com/start"; // Update to the correct endpoint

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
      e.preventDefault();
  
      const inputs = e.target.elements;
      const data = {};
  
      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].name) {
          data[inputs[i].name] = inputs[i].value;
        }
      }
  
      fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Form response was not ok');
          }
  
          setSubmitted(true);
        })
        .catch((err) => {
          // Submit the form manually
          e.target.submit();
        });
    };
  
    if (submitted) {
      return (
        <>
          <div className="text-2xl">Thank you!</div>
          <div className="text-md">We'll be in touch soon.</div>
        </>
      );
    }

  if (submitted) {
    return (
      <>
        <div className="thank-you-message text-2xl">Thank you!</div>
        <div className="confirmation-text text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form className="contact-form" action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST">
      <div className="form-field mb-3">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="form-input"
          required
        />
      </div>
      <div className="form-field mb-3">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="form-input"
          required
        />
      </div>
      <div className="form-field mb-3">
        <textarea
          placeholder="Your message"
          name="message"
          className="form-textarea"
          required
        />
      </div>
      <div className="form-field mb-3">
        <div class='button-container'>
        <button
          className="form-submit-button"
          type="submit"
        >
          Send a message
        </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
