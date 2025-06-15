import React, { useState } from 'react';
import '../contact/contact.css';

const Contact = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const telegramBotToken = '8042872841:AAHk9tIFnDeNE0dXRPLmlBLgjhpg28ypDVU';
    const chatId = '7781742433';
    const text = `
📩 Yangi xabar:
👤 Ism: ${formData.name}
📧 Email: ${formData.email}
💬 Xabar: ${formData.message}
    `;

    await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text
      })
    });

    alert('Xabaringiz yuborildi!');
    setFormData({ name: '', email: '', message: '' });
  };

  if (!data) return <div>Yuklanmoqda...</div>;

  return (
    <section className="contact">
      <div className="contact-content">
        <h2 className="contact-heading">{data.contact}</h2>
        <p className="contact-description">
          {data.contactDescription}
        </p>
        <div className="contact-info">
          <p><strong>Location:</strong> {data.location}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Phone:</strong> {data.phone}</p>
          <p><strong>Instagram:</strong> {data.intagram}</p>
          <p><strong>Telegram:</strong> {data.telegram}</p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Ismingiz"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email manzilingiz"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Xabaringiz"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Yuborish</button>
        </form>

        <button
  className="call-button"
  onClick={() => window.location.href = 'tel:+998902123064'}
>
  📞 Call with me
</button>

      </div>

      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=..."
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
