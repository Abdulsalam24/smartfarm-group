// components/CustomModal.tsx
import React, { FC, useEffect } from "react";

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: any;
}

const Modal: FC<CustomModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div
          className="custom-modal-container  fixed inset-0 w-full h-full backdrop-filter flex justify-center items-center z-[60]"
          onClick={onClose}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default Modal;
