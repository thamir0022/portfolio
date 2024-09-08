"use server";
import nodemailer from "nodemailer";

const { SMTP_MAIL, SMTP_PASS, SMTP_HOST, SMTP_PORT } = process.env;

export const sendEmail = async (formData: FormData) => {
  try {
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    console.log(data);

    const transporter = nodemailer.createTransport({
      host: String(SMTP_HOST),
      port: Number(SMTP_PORT), // Convert to number
      secure: false, // Use TLS, which is supported by Ethereal on port 587
      auth: {
        user: SMTP_MAIL,
        pass: SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `${data.firstName} ${data.lastName} <${data.email}>`, // sender address
      to: SMTP_MAIL, // list of receivers
      subject: data.subject as string, // Subject line
      text: data.message as string, // plain text body
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; width: 90vw; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px;">
          <h3 style="color: #394867; margin-bottom: 16px;">Message from Thamir's Portfolio Website</h3>
          <p style="font-size: 1em; font-weight: bold; margin: 0 0 12px 0; line-height: 1.6; color: #555;">You have received a new message from your website's contact form:</p>
          <p style="padding: 12px; margin: 0 0 20px 0; font-size: 1em; font-weight: 500; color: #333;">
            ${data.message}
          </p>
          <hr style="border: 0; height: 1px; background: #ddd; margin: 20px 0;">
          <p style="font-size: 0.9em; color: #555; margin: 0;">
            <strong>Sender:</strong> ${data.firstName} ${data.lastName}<br />
            <strong>Email:</strong> <a href="mailto:${data.email}" style="color: #394867; text-decoration: none;">${data.email}</a>
          </p>
        </div>
      `, // HTML body
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    console.log("Message sent: %s", info.messageId);

    return {
      ok: true,
      message: "Message sent successfully",
      messageId: info.messageId,
    };

  } catch (error: any) {
    console.error("Error occurred while sending email:", error);

    return {
      ok: false,
      message: error.message,
    };
  }
};

