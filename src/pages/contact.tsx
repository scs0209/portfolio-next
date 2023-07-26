/* eslint-disable */
import { useState } from 'react'
import axios from 'axios'
import HeadInfo from '@/components/common/HeadInfo'
import SvgIcons from '@/components/contact/svg'
import { Avatar } from 'flowbite-react'
import Link from 'next/link'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    try {
      const res = await axios.post('/api/send-email', formData)
      if (res.status === 200) {
        alert('Email sent successfully.')
      } else {
        alert('There was an error sending the email.')
      }
    } catch (error) {
      console.error(error)
      alert('There was an error sending the email.')
    }
  }

  return (
    <>
      <HeadInfo title="Contact Me" />
      <section className="flex text-gray-600 body-font relative max-w-screen-lx mx-auto my-0">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex w-2/3 justify-between mx-auto items-center">
            <div className="flex flex-col justify-start text-center w-full mb-12">
              <h1 className="flex justify-center sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white ">
                <Avatar
                  alt="avatar"
                  img="/images/이력서사진.jpg"
                  className="mr-3"
                  rounded
                />
                Contact Me
              </h1>
              <p className="lg:w-2/3 font-semibold mx-auto leading-relaxed text-base ">
                피드백은 언제나 환영입니다!
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600 dark:text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={handleChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:focus:bg-gray-700"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600 dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:focus:bg-gray-700"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600 dark:text-white">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    onChange={handleChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out dark:focus:bg-gray-700"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full mx-auto">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="flex mx-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg"
                >
                  Send
                </button>
                <Link href="/" className="flex justify-center">
                  홈으로
                </Link>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <div className="mb-5">
                  <a className="text-purple-500 hover:text-gray-400">
                    asd123644@gmail.com
                  </a>
                </div>
                <SvgIcons />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
