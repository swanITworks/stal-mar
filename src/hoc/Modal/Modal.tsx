import React from 'react'
import Backdrop from '../../components/UI/Backdrop/Backdrop'
import * as styles from './Modal.module.scss'

const Modal = ({ children, click, ratio }): JSX.Element => {
  return (
    <div style={{ overflowY: 'hidden' }}>
      <Backdrop click={click} style={{ zIndex: '1000' }} />
      <div
        onClick={click}
        style={{
          position: 'fixed',
          top: '0px',
          width: `calc(${ratio}*100vh)`,
          zIndex: '1000',
          margin: '0 auto',
          left: 0,
          right: 0,
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default Modal
