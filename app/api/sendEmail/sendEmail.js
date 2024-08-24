import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Configura el transporte de correo usando tu cuenta de email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Configura el correo
    const mailOptions = {
      from: email,
      to: 'tu-correo-personal@ejemplo.com', // Cambia esto a tu correo personal
      subject: `Nuevo mensaje de ${name}`,
      text: message,
      html: `<p>Has recibido un nuevo mensaje de contacto desde tu sitio web.</p>
             <p><strong>Nombre: </strong> ${name}</p>
             <p><strong>Email: </strong> ${email}</p>
             <p><strong>Mensaje: </strong></p>
             <p>${message}</p>`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ error: 'Error al enviar el mensaje' });
    }
  } else {
    res.status(405).json({ message: 'Only POST requests are allowed' });
  }
}
