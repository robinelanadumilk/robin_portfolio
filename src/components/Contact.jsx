import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, MessageSquare, Copy, Check } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setToastMessage(`${label} copied to clipboard!`);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) errs.subject = "Subject is required";
    if (!formData.message.trim()) errs.message = "Message content is required";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    const mailtoUrl = `mailto:robinroy1225@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Hi Robin,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.location.href = mailtoUrl;
      setToastMessage('Opening your mail client...');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setToastMessage(''), 4000);
    }, 600);
  };

  return (
    <section id="contact" className="section contact-section">
      {toastMessage && (
        <div className="contact-toast glass-panel">
          <Check size={16} className="toast-icon" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">
            <MessageSquare size={14} /> Get In Touch
          </div>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Great Together</span>
          </h2>
        </div>

        <div className="contact-grid">
          <div className="contact-info-card glass-panel">
            <h3 className="info-title">Contact Information</h3>
            <p className="info-desc">
              Looking for a dedicated Python Django Full Stack Developer? Feel free to reach out directly via email, phone, or send a message using the form!
            </p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  <Mail size={20} />
                </div>
                <div className="info-details-wrap">
                  <span className="info-label">Email Me</span>
                  <a href="mailto:robinroy1225@gmail.com" className="info-value">robinroy1225@gmail.com</a>
                </div>
                <button 
                  className="copy-btn"
                  onClick={() => copyToClipboard('robinroy1225@gmail.com', 'Email address')}
                  title="Copy email"
                >
                  <Copy size={16} />
                </button>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Phone size={20} />
                </div>
                <div className="info-details-wrap">
                  <span className="info-label">Call / Phone</span>
                  <a href="tel:8281189244" className="info-value">+91 8281189244</a>
                </div>
                <button 
                  className="copy-btn"
                  onClick={() => copyToClipboard('+918281189244', 'Phone number')}
                  title="Copy phone"
                >
                  <Copy size={16} />
                </button>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <MapPin size={20} />
                </div>
                <div className="info-details-wrap">
                  <span className="info-label">Address / Location</span>
                  <span className="info-value">BETHESDA, CHUNAKKARA, Alappuzha, Kerala - 690534</span>
                </div>
              </div>
            </div>

            <div className="personal-meta-grid">
              <div>
                <span className="meta-label">Date of Birth</span>
                <strong className="meta-val">11/12/1997</strong>
              </div>
              <div>
                <span className="meta-label">Gender</span>
                <strong className="meta-val">Male</strong>
              </div>
              <div>
                <span className="meta-label">Nationality</span>
                <strong className="meta-val">Indian</strong>
              </div>
            </div>

            <div className="response-guarantee" style={{ marginTop: '1.25rem' }}>
              <CheckCircle2 size={18} className="guarantee-icon" />
              <span>Available for Python Django Backend & Full-Stack Roles.</span>
            </div>
          </div>

          <div className="contact-form-card glass-panel">
            {submitted ? (
              <div className="success-banner">
                <div className="success-icon-box">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="success-title">Message Sent Successfully!</h3>
                <p className="success-desc">
                  Thank you for reaching out, Robin has received your note and will get back to you shortly.
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    className={errors.name ? 'input-error' : ''}
                  />
                  {errors.name && (
                    <span className="error-text">
                      <AlertCircle size={14} /> {errors.name}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@company.com"
                    className={errors.email ? 'input-error' : ''}
                  />
                  {errors.email && (
                    <span className="error-text">
                      <AlertCircle size={14} /> {errors.email}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Full-Stack Project Inquiry"
                    className={errors.subject ? 'input-error' : ''}
                  />
                  {errors.subject && (
                    <span className="error-text">
                      <AlertCircle size={14} /> {errors.subject}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, timeline, or requirements..."
                    className={errors.message ? 'input-error' : ''}
                  ></textarea>
                  {errors.message && (
                    <span className="error-text">
                      <AlertCircle size={14} /> {errors.message}
                    </span>
                  )}
                </div>

                <button type="submit" className="btn btn-primary submit-btn" disabled={loading}>
                  {loading ? 'Sending...' : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
