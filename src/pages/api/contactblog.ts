import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, phone, plan, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'antonionoveloc@gmail.com', // Coloca aquí tu dirección de Gmail
        pass: 'hqqlfcwcsufjocxm', // Coloca aquí la contraseña de tu cuenta de Gmail
      },
    });

    const mailOptions = {
      from: 'antonionoveloc@gmail.com', // Debe ser la misma dirección que la usada en el transporte
      to: 'antonionoveloc@gmail.com', // Coloca aquí la dirección de correo del destinatario
      subject: '¡Nuevo cliente!',
      text: `
        Nombre: ${firstName} ${lastName}
        Correo Electrónico: ${email}
        Número de Teléfono: ${phone}
        Plan para cotizar: ${plan}
        Mensaje: ${message}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Correo enviado exitosamente' });
    } catch (error) {
      console.error('Error al enviar el correo electrónico:', error);
      res.status(500).json({ message: 'Hubo un problema al enviar el correo' });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}
