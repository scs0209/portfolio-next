/* eslint-disable */
import { VFC } from 'react'
import Modal from '../common/Modal'

interface Props {
  onClose: () => void
}

const Qualification: VFC<Props> = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Certificate
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">Score</div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">Date</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                TOEIC Speaking
              </th>
              <td className="px-6 py-4">Level 6(140)</td>
              <td className="px-6 py-4">2021.11</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                TOEIC
              </th>
              <td className="px-6 py-4">755</td>
              <td className="px-6 py-4">2022.05</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                정보처리기사
              </th>
              <td className="px-6 py-4">PASS</td>
              <td className="px-6 py-4">2022.11</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Modal>
  )
}

export default Qualification
