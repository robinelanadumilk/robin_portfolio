import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Sparkles, Zap, Shield, FileText, Send, X, Activity, RefreshCw } from 'lucide-react';
import './JarvisAssistant.css';

const JarvisAssistant = ({ onOpenResume, onRunDiagnostics }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'jarvis',
      text: 'Good day. J.A.R.V.I.S. protocol online. I am at your service to analyze developer Robin Roy’s architectural specs, projects, or credentials. How may I assist, sir?'
    }
  ]);
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Voice Synthesizer
  const speakText = (text) => {
    if (!voiceEnabled || !('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    const cleanText = text.replace(/\[.*?\]/g, '').replace(/[#*_`]/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 1.05;
    utterance.pitch = 0.95;

    // Pick British or English voice if available
    const voices = window.speechSynthesis.getVoices();
    const jarvisVoice = voices.find(v => v.lang.includes('en-GB') || v.name.includes('Daniel') || v.name.includes('George') || v.name.includes('Oliver') || v.lang.includes('en'));
    if (jarvisVoice) {
      utterance.voice = jarvisVoice;
    }

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const handleToggleVoice = () => {
    if (!voiceEnabled) {
      setVoiceEnabled(true);
      speakText("Audio interface activated. J.A.R.V.I.S. vocal telemetry online.");
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
        reply = "Initiating full-spectrum diagnostic scan across Robin Roy’s architecture. All 6+ live production clusters and MSSQL database layers are reporting 100% operational efficiency, sir.";
        if (onRunDiagnostics) onRunDiagnostics();
      } else if (actionType === 'profile') {
        reply = "Robin Roy is a Python & Django Full Stack Developer with 3+ years of experience specializing in high-throughput REST APIs, ERP systems, React.js frontend architecture, and MSSQL database optimization.";
        const element = document.getElementById('about');
        element?.scrollIntoView({ behavior: 'smooth' });
      } else if (actionType === 'projects') {
        reply = "Navigating to classified blueprints. Highlights include the enterprise Elanadu Milk ERP platform, MGUIF Mainsite, and High-Performance Computing (HPC) platforms.";
        const element = document.getElementById('projects');
        element?.scrollIntoView({ behavior: 'smooth' });
      } else if (actionType === 'skills') {
        reply = "Accessing computational arsenal: Python 3.x, Django REST Framework, React.js, MSSQL stored procedures, ReportLab PDF generators, and Flutter backend integration.";
        const element = document.getElementById('skills');
        element?.scrollIntoView({ behavior: 'smooth' });
      } else if (actionType === 'resume') {
        reply = "Decrypting Robin Roy’s holographic resume and technical credentials for your review now.";
        if (onOpenResume) onOpenResume();
      } else if (actionType === 'contact') {
        reply = "Redirecting to Stark Secure Quantum Comms relay. You may transmit direct dispatches to robinroy1225@gmail.com or phone +91 8281189244.";
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
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
        response = "Robin Roy holds a Master of Computer Applications (MCA) and possesses 3+ years of software engineering experience across Elanadu Milk, MGUIF, Santhisoft Technologies, and Luminar Technolab.";
      } else if (lower.includes('project') || lower.includes('elanadu') || lower.includes('mguif') || lower.includes('work')) {
        response = "Key flagship projects include Elanadu Milk Enterprise ERP (managing procurement, sales, Flutter APIs, and automated ReportLab PDF reports) and the MGUIF React/Django web applications.";
      } else if (lower.includes('skill') || lower.includes('tech') || lower.includes('python') || lower.includes('django') || lower.includes('react')) {
        response = "Robin's core arsenal consists of Python 3.12, Django & Django REST Framework, React.js, Microsoft SQL Server (MSSQL), MySQL, OpenPyXL, and Git version control.";
      } else if (lower.includes('contact') || lower.includes('email') || lower.includes('hire') || lower.includes('phone')) {
        response = "You can contact Robin directly at robinroy1225@gmail.com or via telephone at +91 8281189244. Transmission channels are fully open.";
      } else if (lower.includes('resume') || lower.includes('cv') || lower.includes('download')) {
        response = "Opening the verified dossier now, sir.";
        if (onOpenResume) onOpenResume();
      } else {
        response = `J.A.R.V.I.S. analysis: Regarding "${userText}", Robin Roy is fully primed to design and deploy scalable Python Django web applications and enterprise REST architectures tailored to your mission requirements.`;
      }

      setMessages(prev => [...prev, { sender: 'jarvis', text: response }]);
      setIsProcessing(false);
      speakText(response);
    }, 500);
  };

  return (
    <div className={`jarvis-assistant-wrapper ${isOpen ? 'is-open' : ''}`}>
      {/* Floating HUD Arc Reactor Core Orb Trigger */}
      {!isOpen && (
        <button
          className="jarvis-trigger-orb"
          onClick={() => {
            setIsOpen(true);
            speakText("J.A.R.V.I.S. AI command console active. Ready for input.");
          }}
          aria-label="Open JARVIS AI Assistant"
          title="Open J.A.R.V.I.S. Command Hub"
        >
          <div className="orb-arc-ring ring-1"></div>
          <div className="orb-arc-ring ring-2"></div>
          <div className="orb-arc-core">
            <Zap size={20} className="orb-zap-icon" />
          </div>
          <div className="orb-pulse-wave"></div>
          <span className="orb-hud-label">J.A.R.V.I.S.</span>
        </button>
      )}

      {/* Expanded Holographic HUD AI Window */}
      {isOpen && (
        <div className="jarvis-hud-window glass-panel hud-corner-brackets">
          {/* Header Bar */}
          <div className="jarvis-window-header">
            <div className="jarvis-header-left">
              <div className="jarvis-status-orb">
                <div className="status-core"></div>
                <div className="status-ripple"></div>
              </div>
              <div>
                <div className="jarvis-hud-title">J.A.R.V.I.S. MARK-LXXXV</div>
                <div className="jarvis-hud-sub">STARK AI NEURAL CONSOLE • ONLINE</div>
              </div>
            </div>

            <div className="jarvis-header-actions">
              <button
                className={`jarvis-audio-btn ${voiceEnabled ? 'active' : ''}`}
                onClick={handleToggleVoice}
                title={voiceEnabled ? 'Mute Voice Synthesizer' : 'Enable J.A.R.V.I.S. Voice'}
              >
                {voiceEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
                <span className="audio-btn-label">{voiceEnabled ? 'VOICE ON' : 'MUTE'}</span>
              </button>

              <button
                className="jarvis-close-btn"
                onClick={() => {
                  window.speechSynthesis?.cancel();
                  setIsOpen(false);
                }}
                aria-label="Close J.A.R.V.I.S. Console"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Equalizer Wave bar if speaking */}
          <div className="jarvis-telemetry-strip">
            <span className="telemetry-label">VOICE_SYNTH: {isSpeaking ? 'TRANSMITTING...' : 'IDLE'}</span>
            <div className="audio-visualizer-bars">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span className="telemetry-core">ARC_CORE: 100%</span>
          </div>

          {/* Quick Preset Directive Buttons */}
          <div className="jarvis-presets-row">
            <button
              className="preset-pill"
              onClick={() => handleCommand("Run System Diagnostics", "diagnostics")}
            >
              <Zap size={11} /> ⚡ Run Diagnostics
            </button>
            <button
              className="preset-pill"
              onClick={() => handleCommand("Summarize Architecture", "profile")}
            >
              <Shield size={11} /> 👤 Developer Specs
            </button>
            <button
              className="preset-pill"
              onClick={() => handleCommand("Access Project Blueprints", "projects")}
            >
              <Activity size={11} /> 📂 Deployed Systems
            </button>
            <button
              className="preset-pill"
              onClick={() => handleCommand("Inspect Technical Arsenal", "skills")}
            >
              <Sparkles size={11} /> ⚙️ Skills Matrix
            </button>
            <button
              className="preset-pill"
              onClick={() => handleCommand("Decrypt Resume Dossier", "resume")}
            >
              <FileText size={11} /> 📜 Decrypt Dossier
            </button>
          </div>

          {/* Chat Transcript Area */}
          <div className="jarvis-messages-container">
            {messages.map((m, idx) => (
              <div key={idx} className={`jarvis-msg-row ${m.sender}`}>
                {m.sender === 'jarvis' && (
                  <div className="jarvis-msg-avatar">
                    <Zap size={13} />
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
                  <span>Processing Stark Neural Query...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Command Input Field */}
          <form className="jarvis-input-form" onSubmit={handleSendQuery}>
            <div className="input-prefix">JARVIS &gt;</div>
            <input
              type="text"
              className="jarvis-cmd-input"
              placeholder="Ask J.A.R.V.I.S. about Robin's experience, Django projects..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="jarvis-send-btn" aria-label="Send Directive">
              <Send size={15} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default JarvisAssistant;
