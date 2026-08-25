import React, { useRef } from 'react';
import { X, FileText, Download, Sparkles, ExternalLink } from 'lucide-react';
import use3DTilt from '../utils/use3DTilt';
import './ResumeModal.css';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const driveUrl = "https://drive.google.com/file/d/1mcMgupcAwyecDaLfgIkWa4MlFGbVCM6E/view?usp=sharing";
  const previewUrl = "https://drive.google.com/file/d/1mcMgupcAwyecDaLfgIkWa4MlFGbVCM6E/preview";

  return (
    <div className="modal-overlay modal-overlay-3d resume-modal-overlay" onClick={onClose}>
      <div 
        className="modal-content modal-content-3d resume-modal-content" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="resume-modal-actions no-print">
          <div className="modal-header-info">
            <h3 className="modal-cv-title">
              <Sparkles size={18} className="title-icon pulse-anim" /> 
              <span>Robin Roy — Official Curriculum Vitae</span>
            </h3>
          </div>

          <div className="action-buttons-group">
            <a
              href={driveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-3d drive-btn"
              title="Download Original Resume PDF"
            >
              <Download size={16} /> Download Original PDF
            </a>
            <button className="close-btn close-btn-3d" onClick={onClose} aria-label="Close">
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="pdf-viewer-wrapper pdf-viewer-3d">
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
