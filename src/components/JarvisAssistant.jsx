import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Sparkles, MessageCircle, Shield, FileText, Send, X, Activity, RefreshCw } from 'lucide-react';
import './JarvisAssistant.css';

const JarvisAssistant = ({ onOpenResume, onRunDiagnostics }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'jarvis',
      text: 'Hi — I can walk you through Robin’s background, selected work, skills, or resume. What would you like to see?'
    }
  ]);
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const speakText = (text) => {
    if (!voiceEnabled || !('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    const cleanText = text.replace(/\[.*?\]/g, '').replace(/[#*_`]/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 1.05;
    utterance.pitch = 0.95;

    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(v => v.lang.includes('en-GB') || v.name.includes('Daniel') || v.name.includes('George') || v.name.includes('Oliver') || v.lang.includes('en'));
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const handleToggleVoice = () => {
    if (!voiceEnabled) {
      setVoiceEnabled(true);
      speakText("Voice replies are on.");
    } else {
      window.speechSynthesis?.cancel();
      setVoiceEnabled(false);
      setIsSpeaking(false);
    }
  };

  const handleCommand = (cmdText, actionType) => {
    const userMsg = { sender: 'user', text: cmdText };
    setMessages(prev => [...prev, userMsg]);
    setIsProcessing(true);

    setTimeout(() => {
      let reply = '';
      if (actionType === 'diagnostics') {
        reply = "Quick check: the live production systems, Django APIs, and MSSQL layers in this portfolio are all accounted for.";
        if (onRunDiagnostics) onRunDiagnostics();
      } else if (actionType === 'profile') {
        reply = "Robin Roy is a Web Developer with 2+ years of experience building production Python/Django applications, REST APIs, React interfaces, and MSSQL systems.";
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      } else if (actionType === 'projects') {
        reply = "Taking you to selected work — including the Elanadu Milk ERP, MGUIF mainsite, and HPC platforms.";
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      } else if (actionType === 'skills') {
        reply = "Core stack: Python, Django REST Framework, React, MSSQL, ReportLab, and Flutter API integration.";
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
      } else if (actionType === 'resume') {
        reply = "Opening Robin’s resume now.";
        if (onOpenResume) onOpenResume();
      } else if (actionType === 'contact') {
        reply = "You can reach Robin at robinroy1225@gmail.com, +91 9778004292, or linkedin.com/in/robinroy1225.";
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }

      setMessages(prev => [...prev, { sender: 'jarvis', text: reply }]);
      setIsProcessing(false);
      speakText(reply);
    }, 450);
  };

  const handleSendQuery = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const userText = query.trim();
    setMessages(prev => [...prev, { sender: 'user', text: userText }]);
    setQuery('');
    setIsProcessing(true);

    setTimeout(() => {
      const lower = userText.toLowerCase();
      let response = '';

      if (lower.includes('experience') || lower.includes('background') || lower.includes('who') || lower.includes('about')) {
        response = "Robin holds an MCA and has 2+ years of professional web development experience at Elanadu Milk, MGUIF, Santhisoft Technologies, and Luminar Technolab.";
      } else if (lower.includes('project') || lower.includes('elanadu') || lower.includes('mguif') || lower.includes('work')) {
        response = "Flagship work includes the Elanadu Milk ERP (procurement, sales, Flutter APIs, PDF reports) and MGUIF React/Django applications.";
      } else if (lower.includes('skill') || lower.includes('tech') || lower.includes('python') || lower.includes('django') || lower.includes('react')) {
        response = "Core skills: Python, Django & Django REST Framework, React, Microsoft SQL Server, MySQL, OpenPyXL, and Git.";
      } else if (lower.includes('contact') || lower.includes('email') || lower.includes('hire') || lower.includes('phone')) {
        response = "Email robinroy1225@gmail.com, call +91 9778004292, or visit linkedin.com/in/robinroy1225.";
      } else if (lower.includes('resume') || lower.includes('cv') || lower.includes('download')) {
        response = "Opening the resume now.";
        if (onOpenResume) onOpenResume();
      } else {
        response = `On “${userText}”: Robin designs and ships Python Django applications and enterprise REST APIs. Ask about work, skills, or how to get in touch.`;
      }

      setMessages(prev => [...prev, { sender: 'jarvis', text: response }]);
      setIsProcessing(false);
      speakText(response);
    }, 500);
  };

  return (
    <div className={`jarvis-assistant-wrapper ${isOpen ? 'is-open' : ''}`}>
      {!isOpen && (
        <button
          className="jarvis-trigger-orb"
          onClick={() => {
            setIsOpen(true);
            speakText("Hi. How can I help you explore this portfolio?");
          }}
          aria-label="Open portfolio guide"
          title="Ask about this portfolio"
        >
          <div className="orb-arc-ring ring-1"></div>
          <div className="orb-arc-ring ring-2"></div>
          <div className="orb-arc-core">
            <MessageCircle size={20} className="orb-zap-icon" />
          </div>
          <div className="orb-pulse-wave"></div>
          <span className="orb-hud-label">Ask</span>
        </button>
      )}

      {isOpen && (
        <div className="jarvis-hud-window glass-panel">
          <div className="jarvis-window-header">
            <div className="jarvis-header-left">
              <div className="jarvis-status-orb">
                <div className="status-core"></div>
                <div className="status-ripple"></div>
              </div>
              <div>
                <div className="jarvis-hud-title">Portfolio guide</div>
                <div className="jarvis-hud-sub">Ask about work, skills, or contact</div>
              </div>
            </div>

            <div className="jarvis-header-actions">
              <button
                className={`jarvis-audio-btn ${voiceEnabled ? 'active' : ''}`}
                onClick={handleToggleVoice}
                title={voiceEnabled ? 'Mute voice' : 'Enable voice'}
              >
                {voiceEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
                <span className="audio-btn-label">{voiceEnabled ? 'Voice on' : 'Muted'}</span>
              </button>

              <button
                className="jarvis-close-btn"
                onClick={() => {
                  window.speechSynthesis?.cancel();
                  setIsOpen(false);
                }}
                aria-label="Close guide"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          <div className="jarvis-telemetry-strip">
            <span className="telemetry-label">{isSpeaking ? 'Speaking…' : 'Ready'}</span>
            <div className="audio-visualizer-bars">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span className="telemetry-core">Robin Roy</span>
          </div>

          <div className="jarvis-presets-row">
            <button
              className="preset-pill"
              onClick={() => handleCommand("Run a quick systems check", "diagnostics")}
            >
              <Sparkles size={11} /> Systems
            </button>
            <button
              className="preset-pill"
              onClick={() => handleCommand("Tell me about Robin", "profile")}
            >
              <Shield size={11} /> About
            </button>
            <button
              className="preset-pill"
              onClick={() => handleCommand("Show selected work", "projects")}
            >
              <Activity size={11} /> Work
            </button>
            <button
              className="preset-pill"
              onClick={() => handleCommand("What is the tech stack?", "skills")}
            >
              <Sparkles size={11} /> Skills
            </button>
            <button
              className="preset-pill"
              onClick={() => handleCommand("Open the resume", "resume")}
            >
              <FileText size={11} /> Resume
            </button>
          </div>

          <div className="jarvis-messages-container">
            {messages.map((m, idx) => (
              <div key={idx} className={`jarvis-msg-row ${m.sender}`}>
                {m.sender === 'jarvis' && (
                  <div className="jarvis-msg-avatar">
                    <MessageCircle size={13} />
                  </div>
                )}
                <div className="jarvis-msg-bubble">
                  {m.text}
                </div>
              </div>
            ))}
            {isProcessing && (
              <div className="jarvis-msg-row jarvis">
                <div className="jarvis-msg-avatar">
                  <RefreshCw size={13} className="spin-icon" />
                </div>
                <div className="jarvis-msg-bubble processing">
                  <span>Thinking…</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form className="jarvis-input-form" onSubmit={handleSendQuery}>
            <input
              type="text"
              className="jarvis-cmd-input"
              placeholder="Ask about experience, projects, or how to reach Robin…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="jarvis-send-btn" aria-label="Send message">
              <Send size={15} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default JarvisAssistant;
