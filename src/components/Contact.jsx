import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, AlertCircle, Copy, Check, Zap, ShieldCheck } from 'lucide-react';
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
    setToastMessage(`[QUANTUM_RELAY] ${label} copied to clipboard!`);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "[ERR] Sender Identifier required";
    if (!formData.email.trim()) {
      errs.email = "[ERR] Return Quantum Address required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "[ERR] Invalid email syntax";
    }
    if (!formData.subject.trim()) errs.subject = "[ERR] Mission Subject required";
    if (!formData.message.trim()) errs.message = "[ERR] Dispatch Payload required";

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
      setToastMessage('[200 OK] Establishing Quantum Mail Link...');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setToastMessage(''), 4000);
    }, 600);
  };

  return (
    <section id="contact" className="section contact-section">
      {toastMessage && (
        <div className="contact-toast glass-panel toast-jarvis">
          <Check size={16} className="toast-icon pulse-anim" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">
            <Zap size={14} /> J.A.R.V.I.S. // SECURE QUANTUM COMMS
          </div>
          <h2 className="section-title">
            Establish Direct <span className="gradient-text">Transmission</span>
          </h2>
        </div>

        <div className="contact-grid">
          {/* Info Card */}
          <div ref={infoCardRef} className="contact-info-card glass-panel card-3d jarvis-contact-card hud-corner-brackets">
            <div className="contact-terminal-bar">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="contact-terminal-title">stark_quantum_comms.relay</span>
            </div>

            <div className="contact-card-inner">
              <h3 className="info-title">Quantum Transmission Relays</h3>
              <p className="info-desc">
                Open for high-impact software engineering roles, enterprise backend architecture, and technical consulting.
              </p>

              <div className="info-items">
                {/* Email Relay */}
                <div className="info-item-jarvis">
                  <div className="icon-jarvis">
                    <Mail size={18} />
                  </div>
                  <div className="info-details-wrap">
                    <span className="info-label">// DIRECT QUANTUM MAIL:</span>
                    <a href="mailto:robinroy1225@gmail.com" className="info-value">
                      robinroy1225@gmail.com
                    </a>
                  </div>
                  <button
                    onClick={() => copyToClipboard('robinroy1225@gmail.com', 'Email')}
                    className="copy-btn-jarvis"
                    aria-label="Copy Email"
                    title="Copy to clipboard"
                  >
                    <Copy size={14} />
                  </button>
                </div>

                {/* Telephone Relay */}
                <div className="info-item-jarvis">
                  <div className="icon-jarvis">
                    <Phone size={18} />
                  </div>
                  <div className="info-details-wrap">
                    <span className="info-label">// SECURE VOICE RELAY:</span>
                    <a href="tel:8281189244" className="info-value">
                      +91 8281189244
                    </a>
                  </div>
                  <button
                    onClick={() => copyToClipboard('+918281189244', 'Phone')}
                    className="copy-btn-jarvis"
                    aria-label="Copy Phone Number"
                    title="Copy to clipboard"
                  >
                    <Copy size={14} />
                  </button>
                </div>

                {/* Geo Coordinates */}
                <div className="info-item-jarvis">
                  <div className="icon-jarvis">
                    <MapPin size={18} />
                  </div>
                  <div className="info-details-wrap">
                    <span className="info-label">// STARK BASE COORDINATES:</span>
                    <span className="info-value">Kerala, India [Open for Remote &amp; Hybrid]</span>
                  </div>
                </div>
              </div>

              <div className="jarvis-meta-grid">
                <div className="meta-card">
                  <span className="meta-label">RELAY LATENCY</span>
                  <span className="meta-val">&lt; 12ms</span>
                </div>
                <div className="meta-card">
                  <span className="meta-label">DISPATCH STATUS</span>
                  <span className="meta-val jarvis-glow-text">READY</span>
                </div>
                <div className="meta-card">
                  <span className="meta-label">SECURITY</span>
                  <span className="meta-val stark-gold-text">ENCRYPTED</span>
                </div>
              </div>

              <div className="response-guarantee-jarvis">
                <ShieldCheck size={16} className="guarantee-icon" />
                <span>Priority response guaranteed within 24 operational hours.</span>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div ref={formCardRef} className="contact-form-card glass-panel card-3d jarvis-contact-card hud-corner-brackets">
            <div className="contact-terminal-bar">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="contact-terminal-title">dispatch_console.sh --interactive</span>
            </div>

            <div className="contact-card-inner">
              {submitted ? (
                <div className="success-banner">
                  <div className="success-icon-jarvis">
                    <Zap size={32} />
                  </div>
                  <h3 className="success-title">Dispatch Broadcast Sent!</h3>
                  <p className="success-desc">
                    Your transmission payload has been initiated. If your mail client didn't open automatically, reach out directly to robinroy1225@gmail.com.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn btn-secondary btn-jarvis"
                  >
                    Transmit Another Dispatch
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-group-jarvis">
                    <label htmlFor="name">// SENDER IDENTIFIER</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tony Stark / Stark Industries..."
                      className={`input-jarvis ${errors.name ? 'input-error' : ''}`}
                    />
                    {errors.name && <span className="error-text"><AlertCircle size={12} /> {errors.name}</span>}
                  </div>

                  <div className="form-group-jarvis">
                    <label htmlFor="email">// RETURN QUANTUM ADDRESS</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="stark@starkindustries.com"
                      className={`input-jarvis ${errors.email ? 'input-error' : ''}`}
                    />
                    {errors.email && <span className="error-text"><AlertCircle size={12} /> {errors.email}</span>}
                  </div>

                  <div className="form-group-jarvis">
                    <label htmlFor="subject">// MISSION SUBJECT</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Enterprise Python / Django Architecture Project..."
                      className={`input-jarvis ${errors.subject ? 'input-error' : ''}`}
                    />
                    {errors.subject && <span className="error-text"><AlertCircle size={12} /> {errors.subject}</span>}
                  </div>

                  <div className="form-group-jarvis">
                    <label htmlFor="message">// DISPATCH PAYLOAD</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Detail project specifications, backend requirements, timeline..."
                      className={`input-jarvis ${errors.message ? 'input-error' : ''}`}
                    ></textarea>
                    {errors.message && <span className="error-text"><AlertCircle size={12} /> {errors.message}</span>}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary submit-btn btn-jarvis"
                    disabled={loading}
                  >
                    {loading ? (
                      <>Transmitting Encrypted Payload...</>
                    ) : (
                      <>
                        <Send size={16} /> TRANSMIT COMMS PAYLOAD
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
