import React, { useEffect } from 'react';
import { X, FileCode, Download, Terminal, ShieldCheck } from 'lucide-react';
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
        className="modal-content modal-content-3d hacker-resume-modal" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="resume-terminal-top">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="resume-terminal-title">$ gpg --decrypt robin_roy_curriculum_vitae.pdf.asc [AUTH: 0x7F]</span>
          <button className="close-btn-top-hacker" onClick={onClose} aria-label="Close">
            <X size={16} /> [ESC]
          </button>
        </div>

        <div className="resume-modal-actions no-print">
          <div className="modal-header-info">
            <h3 className="modal-cv-title">
              <Terminal size={17} className="title-icon" /> 
              <span>Robin Roy // Official Curriculum Vitae</span>
            </h3>
          </div>

          <div className="action-buttons-group">
            <a
              href={driveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-hacker drive-btn"
              title="Download Original Resume PDF"
            >
              <Download size={15} /> [DOWNLOAD_PDF]
            </a>
          </div>
        </div>

        <div className="pdf-viewer-wrapper pdf-viewer-hacker">
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
