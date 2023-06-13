import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      },
      secure: true,
    })

    try {
      await transporter.sendMail({
        from: email, // 발신자 이메일 주소
        to: process.env.EMAIL_ADDRESS, // 수신자 이메일 주소
        subject: `New message from ${name} <${email}>`, // 이메일 제목
        html: `<p>${message}</p>`, // 이메일 내용
      })

      res.status(200).json({ status: 'success' })
    } catch (error) {
      console.error(error)
      res.status(500).json({ status: 'error' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

export default handler
