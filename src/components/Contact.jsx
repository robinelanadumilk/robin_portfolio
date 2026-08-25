import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, MessageSquare, Copy, Check, Terminal, Lock, ShieldCheck } from 'lucide-react';
import use3DTilt from '../utils/use3DTilt';
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

  const infoCardRef = use3DTilt({ max: 8, perspective: 1300, scale: 1.015 });
  const formCardRef = use3DTilt({ max: 8, perspective: 1300, scale: 1.015 });

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setToastMessage(`[CLIPBOARD] ${label} copied!`);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "[ERR] Identifier/Name required";
    if (!formData.email.trim()) {
      errs.email = "[ERR] Return address required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "[ERR] Invalid email syntax";
    }
    if (!formData.subject.trim()) errs.subject = "[ERR] Packet Subject required";
    if (!formData.message.trim()) errs.message = "[ERR] Payload message required";

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
      setToastMessage('[200 OK] Launching mail transfer agent...');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setToastMessage(''), 4000);
    }, 600);
  };

  return (
    <section id="contact" className="section contact-section">
      {toastMessage && (
        <div className="contact-toast glass-panel toast-hacker">
          <Check size={16} className="toast-icon pulse-anim" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">
            <Terminal size={14} /> $ ./transmit_encrypted_packet.sh
          </div>
          <h2 className="section-title">
            Establish Secure <span className="gradient-text">Communication</span>
          </h2>
        </div>

        <div className="contact-grid">
          {/* Info Card */}
          <div ref={infoCardRef} className="contact-info-card glass-panel card-3d hacker-contact-card">
            <div className="contact-terminal-bar">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="contact-terminal-title">endpoints.config</span>
            </div>

            <div className="contact-card-inner">
              <h3 className="info-title">
                <span className="hacker-green-icon">&gt;</span> Direct Channels
              </h3>
              <p className="info-desc">
                Looking for a dedicated Python Django Full Stack Developer? Send a transmission directly via secure email, telephone, or dispatch a message below.
              </p>

              <div className="info-items">
                <div className="info-item info-item-hacker">
                  <div className="info-icon icon-hacker">
                    <Mail size={18} />
                  </div>
                  <div className="info-details-wrap">
                    <span className="info-label">// PRIMARY_EMAIL</span>
                    <a href="mailto:robinroy1225@gmail.com" className="info-value">robinroy1225@gmail.com</a>
                  </div>
                  <button 
                    className="copy-btn copy-btn-hacker"
                    onClick={() => copyToClipboard('robinroy1225@gmail.com', 'Email')}
                    title="Copy email"
                  >
                    <Copy size={15} />
                  </button>
                </div>

                <div className="info-item info-item-hacker">
                  <div className="info-icon icon-hacker">
                    <Phone size={18} />
                  </div>
                  <div className="info-details-wrap">
                    <span className="info-label">// VOICE_LINE</span>
                    <a href="tel:8281189244" className="info-value">+91 8281189244</a>
                  </div>
                  <button 
                    className="copy-btn copy-btn-hacker"
                    onClick={() => copyToClipboard('+918281189244', 'Phone')}
                    title="Copy phone"
                  >
                    <Copy size={15} />
                  </button>
                </div>

                <div className="info-item info-item-hacker">
                  <div className="info-icon icon-hacker">
                    <MapPin size={18} />
                  </div>
                  <div className="info-details-wrap">
                    <span className="info-label">// GEO_LOCATION</span>
                    <span className="info-value">BETHESDA, CHUNAKKARA, Alappuzha, Kerala - 690534</span>
                  </div>
                </div>
              </div>

              <div className="personal-meta-grid hacker-meta-grid">
                <div>
                  <span className="meta-label">[DOB]</span>
                  <strong className="meta-val">11/12/1997</strong>
                </div>
                <div>
                  <span className="meta-label">[GENDER]</span>
                  <strong className="meta-val">Male</strong>
                </div>
                <div>
                  <span className="meta-label">[NATIONALITY]</span>
                  <strong className="meta-val">Indian</strong>
                </div>
              </div>

              <div className="response-guarantee response-guarantee-hacker">
                <ShieldCheck size={17} className="guarantee-icon" />
                <span>[READY] Available for Python Django Backend &amp; Full-Stack Deployments.</span>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div ref={formCardRef} className="contact-form-card glass-panel card-3d hacker-contact-card">
            <div className="contact-terminal-bar">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="contact-terminal-title">dispatch_console.sh</span>
            </div>

            <div className="contact-card-inner">
              {submitted ? (
                <div className="success-banner">
                  <div className="success-icon-box success-icon-hacker">
                    <CheckCircle2 size={38} className="pulse-anim" />
                  </div>
                  <h3 className="success-title">[200 OK] Packet Transmitted!</h3>
                  <p className="success-desc">
                    Transmission delivered successfully. Operator Robin Roy has logged your request and will respond shortly.
                  </p>
                  <button
                    className="btn btn-primary btn-hacker"
                    onClick={() => setSubmitted(false)}
                  >
                    ./send_another_packet
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form" noValidate>
                  <div className="form-group form-group-hacker">
                    <label htmlFor="name">&gt; Input_Sender_Name:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      className={`input-hacker ${errors.name ? 'input-error' : ''}`}
                    />
                    {errors.name && (
                      <span className="error-text">
                        <AlertCircle size={13} /> {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="form-group form-group-hacker">
                    <label htmlFor="email">&gt; Input_Return_Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@enterprise.com"
                      className={`input-hacker ${errors.email ? 'input-error' : ''}`}
                    />
                    {errors.email && (
                      <span className="error-text">
                        <AlertCircle size={13} /> {errors.email}
                      </span>
                    )}
                  </div>

                  <div className="form-group form-group-hacker">
                    <label htmlFor="subject">&gt; Input_Packet_Subject:</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Python Backend Architecture Project"
                      className={`input-hacker ${errors.subject ? 'input-error' : ''}`}
                    />
                    {errors.subject && (
                      <span className="error-text">
                        <AlertCircle size={13} /> {errors.subject}
                      </span>
                    )}
                  </div>

                  <div className="form-group form-group-hacker">
                    <label htmlFor="message">&gt; Input_Payload_Message:</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Detail your application requirements, timeline, or inquiries..."
                      className={`input-hacker ${errors.message ? 'input-error' : ''}`}
                    ></textarea>
                    {errors.message && (
                      <span className="error-text">
                        <AlertCircle size={13} /> {errors.message}
                      </span>
                    )}
                  </div>

                  <button type="submit" className="btn btn-primary btn-hacker submit-btn" disabled={loading}>
                    {loading ? '[TRANSMITTING...]' : (
                      <>
                        <Send size={15} /> [TRANSMIT PACKET]
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
