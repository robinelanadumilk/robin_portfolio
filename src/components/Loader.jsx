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
          setIsFading(true);
          setTimeout(() => {
            if (onFinish) onFinish();
          }, 350);
          return 100;
        }
        return Math.min(prev + 12, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      className={`page-loader ${isFading ? 'fade-out' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#070b14',
        zIndex: 999999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: isFading ? 0 : 1,
        visibility: isFading ? 'hidden' : 'visible',
        transition: 'opacity 0.35s ease, visibility 0.35s ease',
        pointerEvents: isFading ? 'none' : 'all',
      }}
    >
      <div
        className="loader-content"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '380px',
          width: '90%',
        }}
      >
        <div
          className="loader-logo-wrapper"
          style={{
            position: 'relative',
            width: '80px',
            height: '80px',
            marginBottom: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div className="loader-glow-ring"></div>
          <img
            src={logoImg}
            alt="Robin Roy Logo"
            className="loader-logo-img"
            style={{
              width: '80px',
              height: '80px',
              maxWidth: '80px',
              maxHeight: '80px',
              borderRadius: '16px',
              objectFit: 'cover',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.8)',
              position: 'relative',
              zIndex: 2,
            }}
          />
        </div>

        <div
          className="loader-brand-title"
          style={{
            fontSize: '1.65rem',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '0.08em',
            marginBottom: '0.2rem',
          }}
        >
          ROBIN <span className="gradient-text">ROY</span>
        </div>
        <div
          className="loader-sub"
          style={{
            fontSize: '0.825rem',
            color: '#9ca3af',
            fontFamily: 'monospace',
            marginBottom: '1.75rem',
          }}
        >
          Python Django Full Stack Developer
        </div>

        <div
          className="loader-progress-box"
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: '0.85rem',
            marginBottom: '0.5rem',
          }}
        >
          <div
            className="loader-bar-bg"
            style={{
              flexGrow: 1,
              height: '6px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              borderRadius: '9999px',
              overflow: 'hidden',
            }}
          >
            <div
              className="loader-bar-fill"
              style={{
                height: '100%',
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #06b6d4 0%, #6366f1 100%)',
                borderRadius: '9999px',
                transition: 'width 0.08s linear',
                boxShadow: '0 0 10px #06b6d4',
              }}
            ></div>
          </div>
          <span
            className="loader-percent"
            style={{
              fontFamily: 'monospace',
              fontSize: '0.85rem',
              color: '#06b6d4',
              fontWeight: 700,
              minWidth: '40px',
              textAlign: 'right',
            }}
          >
            {progress}%
          </span>
        </div>

        <div
          className="loader-status"
          style={{
            fontSize: '0.75rem',
            fontFamily: 'monospace',
            color: '#6b7280',
            height: '1.2rem',
          }}
        >
          {progress < 40 && 'Initializing environment...'}
          {progress >= 40 && progress < 80 && 'Loading enterprise modules & REST APIs...'}
          {progress >= 80 && 'Ready! Launching portfolio...'}
        </div>
      </div>
    </div>
  );
};

export default Loader;
