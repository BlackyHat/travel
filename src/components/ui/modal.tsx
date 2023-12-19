"use client";
import { useEffect, FC } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}
interface KeyboardEvent {
  key: string;
}

const Modal: FC<ModalProps> = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        onClose && onClose();
      }
      return;
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);
  return createPortal(
    <>
      <div className="bg-modal-background fixed inset-0 z-50 flex items-center justify-center backdrop-blur-2xl">
        {children}
      </div>
    </>,
    document.getElementById("portal") as HTMLElement,
  );
};

export default Modal;
