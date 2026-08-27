import React, { useEffect } from 'react';
import { X, Download, Zap } from 'lucide-react';
import './ResumeModal.css';

const ResumeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const driveUrl = "https://drive.google.com/file/d/1mcMgupcAwyecDaLfgIkWa4MlFGbVCM6E/view?usp=sharing";
  const previewUrl = "https://drive.google.com/file/d/1mcMgupcAwyecDaLfgIkWa4MlFGbVCM6E/preview";

  return (
    <div className="modal-overlay modal-overlay-3d resume-modal-overlay" onClick={onClose}>
      <div 
        className="modal-content modal-content-3d jarvis-resume-modal hud-corner-brackets" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="resume-terminal-top">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="resume-terminal-title">J.A.R.V.I.S. // DECRYPTED DOSSIER • ROBIN ROY CV [STARK LEVEL-7 ACCESS]</span>
          <button className="close-btn-top-jarvis" onClick={onClose} aria-label="Close">
            <X size={16} /> [ESC]
          </button>
        </div>

        <div className="resume-modal-actions no-print">
          <div className="modal-header-info">
            <h3 className="modal-cv-title">
              <Zap size={18} className="title-icon jarvis-pulse-dot" /> 
              <span>Robin Roy // Official Verified Dossier</span>
            </h3>
          </div>

          <div className="action-buttons-group">
            <a
              href={driveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-jarvis drive-btn"
              title="Download Verified Dossier PDF"
            >
              <Download size={15} /> [DOWNLOAD DOSSIER PDF]
            </a>
          </div>
        </div>

        <div className="pdf-viewer-wrapper pdf-viewer-jarvis">
          <iframe
            src={previewUrl}
            title="Robin Roy Official Resume PDF"
            className="resume-pdf-iframe"
            width="100%"
            height="750px"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
