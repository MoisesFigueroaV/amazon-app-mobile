import nodemailer from "nodemailer";
import validator from "validator";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, message } = req.body;

  // Validar campos obligatorios
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ success: false, error: "All fields are required" });
  }

  // Validar el correo electrónico
  if (!validator.isEmail(email)) {
    return res
      .status(400)
      .json({ success: false, error: "Invalid email address" });
  }

  // Configurar el transporte de correo electrónico
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
  });

  // Configurar opciones del correo
  const mailOptions = {
    from: `"${name}" <${email}>`, // El nombre y correo del remitente
    to: process.env.RECEIVER_EMAIL, // Tu correo receptor
    subject: `Message from ${name}`, // Asunto del correo
    text: `Message: ${message}\n\nContact Email: ${email}`, // Cuerpo del correo
  };

  try {
    // Enviar el correo
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send email." });
  }
}
