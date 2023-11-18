/* eslint-disable */
import React, { FC, ReactNode, useRef } from 'react'

interface Props {
  showModal: boolean
  setShowModal: (showModal: boolean) => void
  children?: ReactNode
}

const Modal: FC<Props> = ({ showModal, setShowModal, children }) => {
  const modalRef = useRef(null)

  return (
    <>
      {showModal ? (
        <>
          <div
            className="modal-wrapper"
            ref={modalRef}
            onClick={(e) => {
              modalRef.current === e.target && setShowModal(false)
            }}
          >
            {children}
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25" />
        </>
      ) : null}
    </>
  )
}

export default Modal
