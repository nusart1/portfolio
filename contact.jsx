import React from 'react';
import '../contact/contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-content">
        <h2 className="contact-heading">Contact Me</h2>
        <p className="contact-description">
          Feel free to get in touch! I'm available for collaborations, freelance projects, or just to chat about tech. Below is my location on the map.
        </p>
        <div className="contact-info">
          <p><strong>Location:</strong> IT_TAT o'quv markazi</p>
          <p><strong>Email:</strong> nusratillo815@gmail.com</p>
          <p><strong>Phone:</strong> +998-90-212-30-64</p>
        </div>
      </div>

      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2918.8235738612975!2d66.923967775789!3d39.677560471568064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d19d54b324835%3A0xdf389d78adb91db2!2sIT%20TAT!5e1!3m2!1sru!2s!4v1747487560861!5m2!1sru!2s"
          width="600"
          height="450"
          style={{ border: 0 }} // Inline style ni ob'ekt sifatida berish
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;
