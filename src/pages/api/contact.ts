import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Configura el transporter de nodemailer
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'antonionoveloc@gmail.com', // Coloca aquí tu dirección de Gmail
        pass: 'hqqlfcwcsufjocxm', // Coloca aquí la contraseña de tu cuenta de Gmail
      },
    });

    // Cuerpo del correo electrónico
    const mailOptions = {
      from: 'antonionoveloc@gmail.com', // Debe ser la misma dirección que la usada en el transporte
      to: 'antonionoveloc@gmail.com', // Coloca aquí la dirección de correo del destinatario
      subject: 'Nuevo formulario de contacto',
      text: `Nombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`,
    };

    try {
      // Envía el correo electrónico
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
