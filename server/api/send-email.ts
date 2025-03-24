import { defineEventHandler, readBody } from 'h3'
import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)


  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: 'mucahit.yaman@hotmail.com',
    subject: `İletişim Formu: ${body.name}`,
    text: `Ad: ${body.name}\nEmail: ${body.email}\nMesaj: ${body.message}`,
  }

  try {
    await transporter.sendMail(mailOptions)
    return { success: true, message: 'E-posta gönderildi!' }
  } catch (error) {
    console.error(error)
    return { success: false, message: 'E-posta gönderilemedi.' }
  }
})
