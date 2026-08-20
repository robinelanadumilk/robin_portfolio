import React, { useState, useEffect } from 'react';
import logoImg from '../assets/logo.jpg';
import './Loader.css';

const Loader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsFading(true), 200);
          setTimeout(() => {
            if (onFinish) onFinish();
          }, 700);
          return 100;
        }
        const diff = Math.floor(Math.random() * 15) + 8;
        return Math.min(prev + diff, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className={`page-loader ${isFading ? 'fade-out' : ''}`}>
      <div className="loader-content">
        <div className="loader-logo-wrapper">
          <div className="loader-glow-ring"></div>
          <img src={logoImg} alt="Robin Roy Logo" className="loader-logo-img" style={{ width: '80px', height: '80px', maxWidth: '80px', maxHeight: '80px', borderRadius: '16px', objectFit: 'cover' }} />
        </div>

        <div className="loader-brand-title">
          ROBIN <span className="gradient-text">ROY</span>
        </div>
        <div className="loader-sub">Python Django Full Stack Developer</div>

        <div className="loader-progress-box">
          <div className="loader-bar-bg">
            <div className="loader-bar-fill" style={{ width: `${progress}%` }}></div>
          </div>
          <span className="loader-percent">{progress}%</span>
        </div>

        <div className="loader-status">
          {progress < 40 && 'Initializing environment...'}
          {progress >= 40 && progress < 80 && 'Loading enterprise modules & REST APIs...'}
          {progress >= 80 && 'Ready! Launching portfolio...'}
        </div>
      </div>
    </div>
  );
};

export default Loader;
