import React, { useEffect } from 'react';
import { X, Download, FileText } from 'lucide-react';
import './ResumeModal.css';

const RESUME_PDF = '/Robin_Roy_Resume.pdf';

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

  return (
    <div className="modal-overlay modal-overlay-3d resume-modal-overlay" onClick={onClose}>
      <div
        className="modal-content modal-content-3d jarvis-resume-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="resume-terminal-top">
          <span className="resume-terminal-title">Resume · Robin Roy</span>
          <button className="close-btn-top-jarvis" onClick={onClose} aria-label="Close">
            <X size={16} /> Close
          </button>
        </div>

        <div className="resume-modal-actions no-print">
          <div className="modal-header-info">
            <h3 className="modal-cv-title">
              <FileText size={18} className="title-icon" />
              <span>Web Developer CV</span>
            </h3>
          </div>

          <div className="action-buttons-group">
            <a
              href={RESUME_PDF}
              download="Robin_Roy_Resume.pdf"
              className="btn btn-primary drive-btn"
              title="Download resume PDF"
            >
              <Download size={15} /> Download PDF
            </a>
          </div>
        </div>

        <div className="pdf-viewer-wrapper pdf-viewer-jarvis">
          <iframe
            src={RESUME_PDF}
            title="Robin Roy Resume PDF"
            className="resume-pdf-iframe"
            width="100%"
            height="750px"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
