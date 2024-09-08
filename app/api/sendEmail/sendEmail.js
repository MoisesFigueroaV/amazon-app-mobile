// pages/api/sendEmail.js (o .ts si usas TypeScript)
import nodemailer from "nodemailer";
import validator from "validator"; // Librería para validación

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Validar el correo electrónico
    if (!validator.isEmail(email)) {
      return res
        .status(400)
        .json({ success: false, error: "Invalid email address" });
    }

    // Configura tu transporte de correo electrónico
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Configurar opciones del correo
    const mailOptions = {
      from: email, // El correo del remitente
      to: process.env.RECEIVER_EMAIL, // Tu correo
      subject: `Message from ${name}`, // Asunto del correo
      text: `Message: ${message}\n\nContact Email: ${email}`, // Cuerpo del correo
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
