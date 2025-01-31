import { MouseEventHandler, ReactNode } from 'react'
import closeButton from '../assets/close.svg'
import './modal.css'

const Modal = (props: ModalProps) => {
  const {
    children,
    isOpen,
    closeModal
  } = props

  return (
    isOpen && (
      <div className='modal-overlay'>
        <div className='modal-box'>
          <div>
            <button className='close-modal-btn' onClick={closeModal}>
              <img src={closeButton} alt='close icon' />
            </button>
          </div>
          {children}
        </div >
      </div >
    ))
}

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  closeModal: MouseEventHandler;
}

export default Modal