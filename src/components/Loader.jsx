import React, { useState, useEffect } from 'react';
import logoImg from '../assets/logo.jpg';
import { Zap } from 'lucide-react';
import './Loader.css';

const Loader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [statusText, setStatusText] = useState('Preparing workspace…');

  useEffect(() => {
    const statuses = [
      { at: 0, text: 'Preparing workspace…' },
      { at: 20, text: 'Loading systems and production work' },
      { at: 45, text: 'Python · Django REST · React' },
      { at: 70, text: 'MSSQL, ERP, and reporting pipelines' },
      { at: 90, text: 'Ready. Welcome in.' }
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + 4, 100);

        const currentStatus = [...statuses].reverse().find(s => next >= s.at);
        if (currentStatus) {
          setStatusText(currentStatus.text);
        }

        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFading(true);
            setTimeout(() => {
              if (onFinish) onFinish();
            }, 600);
          }, 350);
          return 100;
        }
        return next;
      });
    }, 32);

    return () => clearInterval(interval);
  }, [onFinish]);

  const radius = 64;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className={`page-loader jarvis-loader ${isFading ? 'fade-out' : ''}`}>
      <div className="loader-arc-grid"></div>
      <div className="loader-glow-orb"></div>

      <div className="loader-3d-wrapper">
        {/* Stark Industries Protocol Tag */}
        <div className="loader-bios-tag jarvis-tag">
          <Zap size={14} className="jarvis-cyan-icon pulse-anim" />
          <span>Robin Roy · Portfolio</span>
        </div>

        {/* 3D Arc Reactor Holographic Gyroscope */}
        <div className="gyroscope-container">
          <div className="gyro-ring gyro-ring-outer"></div>
          <div className="gyro-ring gyro-ring-middle"></div>
          <div className="gyro-ring gyro-ring-inner"></div>
          <div className="gyro-ring gyro-ring-stark-gold"></div>

          {/* Central 3D Arc Reactor Core */}
          <div className="core-3d">
            <div className="core-cube jarvis-core">
              <div className="cube-face cube-front">
                <img src={logoImg} alt="Robin Roy" className="core-logo" />
              </div>
              <div className="cube-face cube-back"></div>
              <div className="cube-face cube-right"></div>
              <div className="cube-face cube-left"></div>
              <div className="cube-face cube-top"></div>
              <div className="cube-face cube-bottom"></div>
            </div>
          </div>

          {/* Orbiting Arc Energy Photons */}
          <div className="orbit-track">
            <div className="orbit-node node-1"></div>
            <div className="orbit-node node-2"></div>
            <div className="orbit-node node-3"></div>
          </div>
        </div>

        {/* J.A.R.V.I.S. Typography */}
        <div className="loader-brand-box">
          <h1 className="loader-title">
            ROBIN <span className="jarvis-gradient-text">ROY</span>
          </h1>
          <p className="loader-subtitle">Web Developer · Python · Django</p>
        </div>

        {/* 3D Circular Arc Reactor HUD Progress */}
        <div className="loader-hud-progress">
          <div className="circular-progress-wrap">
            <svg className="progress-ring" width="150" height="150">
              <circle
                className="progress-ring-bg"
                stroke="rgba(212, 165, 116, 0.14)"
                strokeWidth="4"
                fill="transparent"
                r={radius}
                cx="75"
                cy="75"
              />
              <circle
                className="progress-ring-circle"
                stroke="url(#jarvisLoaderGradient)"
                strokeWidth="5"
                strokeDasharray={`${circumference} ${circumference}`}
                style={{ strokeDashoffset }}
                strokeLinecap="round"
                fill="transparent"
                r={radius}
                cx="75"
                cy="75"
              />
              <defs>
                <linearGradient id="jarvisLoaderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#d4a574" />
                  <stop offset="50%" stopColor="#ead3b3" />
                  <stop offset="100%" stopColor="#7ec8c0" />
                </linearGradient>
              </defs>
            </svg>

            <div className="progress-value-center">
              <span className="percent-num">{progress}</span>
              <span className="percent-symbol">%</span>
            </div>
          </div>

          {/* J.A.R.V.I.S. Voice Diagnostic Line */}
          <div className="loader-status-container">
            <div className="status-terminal-line">
              <span className="terminal-prompt">›</span>
              <span className="terminal-text">{statusText}</span>
              <span className="terminal-cursor">_</span>
            </div>

            <div className="loader-linear-bar-track">
              <div
                className="loader-linear-bar-fill"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
