import React from 'react';
import { X, ExternalLink, FileText, Download } from 'lucide-react';
import './ResumeModal.css';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const driveUrl = "https://drive.google.com/file/d/1mcMgupcAwyecDaLfgIkWa4MlFGbVCM6E/view?usp=sharing";
  const previewUrl = "https://drive.google.com/file/d/1mcMgupcAwyecDaLfgIkWa4MlFGbVCM6E/preview";

  return (
    <div className="modal-overlay resume-modal-overlay" onClick={onClose}>
      <div className="modal-content resume-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="resume-modal-actions no-print">
          <div className="modal-header-info">
            <h3 className="modal-cv-title">
              <FileText size={18} className="title-icon" /> Robin Roy — Official Curriculum Vitae
            </h3>
          </div>

          <div className="action-buttons-group">
            <a
              href={driveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary drive-btn"
              title="Download Original Resume PDF"
            >
              <Download size={16} /> Download Original CV
            </a>
            <button className="close-btn" onClick={onClose} aria-label="Close">
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="pdf-viewer-wrapper">
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
