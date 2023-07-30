import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, phone, plan, subplan, product, message } = req.body;

    // Configurar el transporte de Nodemailer con las credenciales de Gmail
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'antonionoveloc@gmail.com', // Coloca aquí tu dirección de Gmail
        pass: 'hqqlfcwcsufjocxm', // Coloca aquí la contraseña de tu cuenta de Gmail
      },
    });

    try {
      // Configurar el contenido del correo electrónico
      const mailContent = `
        Nombre: ${firstName} ${lastName}
        Correo Electrónico: ${email}
        Número de Teléfono: ${phone}
        Categoría Principal: ${plan}
        Subcategoría: ${subplan}
        Producto: ${product}
        Mensaje: ${message}
      `;

      // Enviar el correo electrónico
      await transporter.sendMail({
        from: 'antonionoveloc@gmail.com', // Debe ser la misma dirección que la usada en el transporte
      to: 'antonionoveloc@gmail.com', // Coloca aquí la dirección de correo del destinatario
      subject: '¡Nuevo cliente!',
        text: mailContent,
      });

      // Responder con éxito
      res.status(200).json({ message: 'Mensaje enviado con éxito' });
    } catch (error) {
      console.error('Error al enviar el correo electrónico:', error);
      res.status(500).json({ message: 'Error al enviar el mensaje' });
    }
  } else {
    res.status(405).end(); // Método no permitido
  }
}
