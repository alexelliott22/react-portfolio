import React, {useState} from 'react';
import {validateEmail} from '../../utils/helpers';
import emailjs from 'emailjs';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const {name, email, message} = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if(e.target.name === 'email') {
            const isValid = validateEmail(e.target.value)
            console.log(isValid)
            if(!isValid) {
                setErrorMessage('Your email is invalid')
            } else {
                setErrorMessage('')
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`)
            } else {
                setErrorMessage('');
            }
        }
    

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_dpm3kik', 'template_5gefie9', e.target, 'user_WH0NHkgEcXosO77IhPidu')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }

    return (
        <section>
            <h1 data-testid="h1tag">Contact me</h1>
            <form className="contact-form" onSubmit={sendEmail}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="user_name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="user_email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button data-testid="button" type="submit" value='send'>Submit</button>
            </form>
      </section>
    )
}

export default Contact;