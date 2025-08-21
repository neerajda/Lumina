import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs.sendForm(
      'service_03ud21o',       // Replace with your EmailJS Service ID
      'template_512sj16',      // Replace with your Template ID
      formRef.current,
      '2uzfd8MDORxa3msSW'        // Replace with your Public Key
    ).then(
      (result) => {
        console.log(result.text);
        setStatus('Message sent successfully!');
        formRef.current.reset();
      },
      (error) => {
        console.log(error.text);
        setStatus('Failed to send message. Try again later.');
      }
    );
  };

  return (
    <section className="contact-page">
      <div className="container">
        <h1 className="section-title">Contact Us</h1>
        <p className="section-subtitle">
          Have questions or want to collaborate? Get in touch with us today!
        </p>

        <div className="contact-info">
          <div className="contact-item">
            <h3>Call Us</h3>
            <p><a href="tel:+91911434431">+91 91143 4431</a></p>
          </div>
          <div className="contact-item">
            <h3>Email</h3>
            <p><a href="mailto:info@luminaacademy.com">info@luminaacademy.com</a></p>
          </div>
          <div className="contact-item">
            <h3>Visit Us</h3>
            <p>123 Lumina Avenue, Tech City, India</p>
          </div>
        </div>

        <form ref={formRef} onSubmit={sendEmail} className="contact-form">
          <h2>Send Us a Message</h2>
          <input type="text" name="from_name" placeholder="Your Name" required />
          <input type="email" name="from_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
