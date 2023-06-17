/* eslint-disable */
import { ReactNode, VFC } from 'react'

interface Props {
  onClose: () => void
  children: ReactNode
}

const Modal: VFC<Props> = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-50 transition-opacity"
        onClick={onClose}
      ></div>
      <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full md:w-2/3 p-8">
        {children}
      </div>
    </div>
  )
}

export default Modal
