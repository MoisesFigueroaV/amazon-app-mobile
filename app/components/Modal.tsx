import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  technologies: string[];
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, description, technologies }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>X</button>
        <h2 className="modal-title">{title}</h2>
        <p className="modal-description">{description}</p>
        <div className="modal-technologies">{technologies.join(', ')}</div>
      </div>
    </div>
  );
};

export default Modal;
