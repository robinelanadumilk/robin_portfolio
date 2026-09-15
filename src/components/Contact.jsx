import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, AlertCircle, Copy, Check, ShieldCheck, Globe } from 'lucide-react';
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
    setToastMessage(`${label} copied`);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Enter a valid email";
    }
    if (!formData.subject.trim()) errs.subject = "Subject is required";
    if (!formData.message.trim()) errs.message = "A short message is required";

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
      setToastMessage('Opening your mail client…');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setToastMessage(''), 4000);
    }, 600);
  };

  return (
    <section id="contact" className="section contact-section">
      {toastMessage && (
        <div className="contact-toast glass-panel toast-jarvis">
          <Check size={16} className="toast-icon" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="container">
        <div className="section-header">
          <div className="section-index">
            <span className="section-num">05</span>
            <span className="section-rule"></span>
            <span className="section-kicker">Contact</span>
          </div>
          <h2 className="section-title">
            Let’s talk about the next <span className="accent-italic">system to build</span>
          </h2>
        </div>

        <div className="contact-grid">
          <div ref={infoCardRef} className="contact-info-card glass-panel card-3d jarvis-contact-card">
            <div className="contact-card-inner">
              <h3 className="info-title">Direct lines</h3>
              <p className="info-desc">
                Open to software engineering roles, backend architecture, and technical consulting.
              </p>

              <div className="info-items">
                <div className="info-item-jarvis">
                  <div className="icon-jarvis">
                    <Mail size={18} />
                  </div>
                  <div className="info-details-wrap">
                    <span className="info-label">Email</span>
                    <a href="mailto:robinroy1225@gmail.com" className="info-value">
                      robinroy1225@gmail.com
                    </a>
                  </div>
                  <button
                    onClick={() => copyToClipboard('robinroy1225@gmail.com', 'Email')}
                    className="copy-btn-jarvis"
                    aria-label="Copy Email"
                  >
                    <Copy size={14} />
                  </button>
                </div>

                <div className="info-item-jarvis">
                  <div className="icon-jarvis">
                    <Phone size={18} />
                  </div>
                  <div className="info-details-wrap">
                    <span className="info-label">Phone</span>
                    <a href="tel:+919778004292" className="info-value">
                      +91 9778004292
                    </a>
                  </div>
                  <button
                    onClick={() => copyToClipboard('+919778004292', 'Phone')}
                    className="copy-btn-jarvis"
                    aria-label="Copy Phone Number"
                  >
                    <Copy size={14} />
                  </button>
                </div>

                <div className="info-item-jarvis">
                  <div className="icon-jarvis">
                    <MapPin size={18} />
                  </div>
                  <div className="info-details-wrap">
                    <span className="info-label">Based in</span>
                    <span className="info-value">Thrissur, Kerala, India · Remote & hybrid</span>
                  </div>
                </div>

                <div className="info-item-jarvis">
                  <div className="icon-jarvis">
                    <Globe size={18} />
                  </div>
                  <div className="info-details-wrap">
                    <span className="info-label">LinkedIn</span>
                    <a href="https://linkedin.com/in/robinroy1225" target="_blank" rel="noreferrer" className="info-value">
                      linkedin.com/in/robinroy1225
                    </a>
                  </div>
                  <button
                    onClick={() => copyToClipboard('https://linkedin.com/in/robinroy1225', 'LinkedIn')}
                    className="copy-btn-jarvis"
                    aria-label="Copy LinkedIn"
                  >
                    <Copy size={14} />
                  </button>
                </div>
              </div>

              <div className="jarvis-meta-grid">
                <div className="meta-card">
                  <span className="meta-label">Response</span>
                  <span className="meta-val">Within 24h</span>
                </div>
                <div className="meta-card">
                  <span className="meta-label">Status</span>
                  <span className="meta-val">Open to work</span>
                </div>
                <div className="meta-card">
                  <span className="meta-label">Preference</span>
                  <span className="meta-val">Web / Django</span>
                </div>
              </div>

              <div className="response-guarantee-jarvis">
                <ShieldCheck size={16} className="guarantee-icon" />
                <span>Priority replies for roles and project briefs.</span>
              </div>
            </div>
          </div>

          <div ref={formCardRef} className="contact-form-card glass-panel card-3d jarvis-contact-card">
            <div className="contact-card-inner">
              {submitted ? (
                <div className="success-banner">
                  <div className="success-icon-jarvis">
                    <Check size={28} />
                  </div>
                  <h3 className="success-title">Message ready</h3>
                  <p className="success-desc">
                    Your mail client should open shortly. If it doesn’t, write directly to robinroy1225@gmail.com.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn btn-secondary"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-group-jarvis">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={`input-jarvis ${errors.name ? 'input-error' : ''}`}
                    />
                    {errors.name && <span className="error-text"><AlertCircle size={12} /> {errors.name}</span>}
                  </div>

                  <div className="form-group-jarvis">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className={`input-jarvis ${errors.email ? 'input-error' : ''}`}
                    />
                    {errors.email && <span className="error-text"><AlertCircle size={12} /> {errors.email}</span>}
                  </div>

                  <div className="form-group-jarvis">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Role, project, or collaboration"
                      className={`input-jarvis ${errors.subject ? 'input-error' : ''}`}
                    />
                    {errors.subject && <span className="error-text"><AlertCircle size={12} /> {errors.subject}</span>}
                  </div>

                  <div className="form-group-jarvis">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="A short brief on the role, product, or timeline."
                      className={`input-jarvis ${errors.message ? 'input-error' : ''}`}
                    ></textarea>
                    {errors.message && <span className="error-text"><AlertCircle size={12} /> {errors.message}</span>}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary submit-btn"
                    disabled={loading}
                  >
                    {loading ? (
                      <>Preparing message…</>
                    ) : (
                      <>
                        <Send size={16} /> Send message
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
