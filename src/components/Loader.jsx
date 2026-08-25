import React, { useState, useEffect } from 'react';
import logoImg from '../assets/logo.jpg';
import { Terminal, Shield, Cpu, Lock } from 'lucide-react';
import './Loader.css';

const Loader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [statusText, setStatusText] = useState('root@robinroy:~$ init_kernel.sh');

  useEffect(() => {
    const statuses = [
      { at: 0, text: 'root@robin:~$ ./boot_system.sh --target=production' },
      { at: 20, text: '[OK] Loaded Python 3.12 & Django Enterprise Modules' },
      { at: 45, text: '[OK] RESTful API Endpoints & Auth Gateways Mounted' },
      { at: 70, text: '[OK] MSSQL Database Cluster Synchronized [0x7F]' },
      { at: 90, text: '[ACCESS GRANTED] Launching Developer Console...' }
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
          }, 300);
          return 100;
        }
        return next;
      });
    }, 35);

    return () => clearInterval(interval);
  }, [onFinish]);

  const radius = 64;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className={`page-loader ${isFading ? 'fade-out' : ''}`}>
      <div className="loader-matrix-grid"></div>
      <div className="loader-glow-orb"></div>

      <div className="loader-3d-wrapper">
        {/* Terminal Status Tag */}
        <div className="loader-bios-tag">
          <Terminal size={14} className="hacker-green-icon" />
          <span>ROBIN_OS_v3.2 [SECURE SHELL]</span>
        </div>

        {/* 3D Hacker Gyroscope Rings */}
        <div className="gyroscope-container">
          <div className="gyro-ring gyro-ring-outer"></div>
          <div className="gyro-ring gyro-ring-middle"></div>
          <div className="gyro-ring gyro-ring-inner"></div>

          {/* Central 3D Glowing Core */}
          <div className="core-3d">
            <div className="core-cube">
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

          {/* Orbiting Matrix Nodes */}
          <div className="orbit-track">
            <div className="orbit-node node-1"></div>
            <div className="orbit-node node-2"></div>
            <div className="orbit-node node-3"></div>
          </div>
        </div>

        {/* Hacker Typography */}
        <div className="loader-brand-box">
          <h1 className="loader-title">
            ROBIN <span className="matrix-gradient-text">ROY</span>
          </h1>
          <p className="loader-subtitle">&lt;Python / Django Full-Stack Developer /&gt;</p>
        </div>

        {/* 3D Circular HUD Progress */}
        <div className="loader-hud-progress">
          <div className="circular-progress-wrap">
            <svg className="progress-ring" width="150" height="150">
              <circle
                className="progress-ring-bg"
                stroke="rgba(0, 255, 136, 0.12)"
                strokeWidth="4"
                fill="transparent"
                r={radius}
                cx="75"
                cy="75"
              />
              <circle
                className="progress-ring-circle"
                stroke="url(#matrixLoaderGradient)"
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
                <linearGradient id="matrixLoaderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00ff88" />
                  <stop offset="50%" stopColor="#00f0ff" />
                  <stop offset="100%" stopColor="#4ade80" />
                </linearGradient>
              </defs>
            </svg>

            <div className="progress-value-center">
              <span className="percent-num">{progress}</span>
              <span className="percent-symbol">%</span>
            </div>
          </div>

          {/* Hacker Terminal Prompt Feed */}
          <div className="loader-status-container">
            <div className="status-terminal-line">
              <span className="terminal-prompt">&gt;</span>
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
