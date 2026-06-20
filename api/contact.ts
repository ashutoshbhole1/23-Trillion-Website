import nodemailer from 'nodemailer';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { fullName, email, company, projectType, budget, description } = req.body;

  if (!fullName || !email || !description) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER,
      subject: `New Project Inquiry from ${fullName}`,
      text: `
You have received a new contact form submission!

Name: ${fullName}
Email: ${email}
Company: ${company || 'N/A'}
Project Type: ${projectType || 'N/A'}
Budget: ${budget || 'N/A'}

Description:
${description}
      `,
    };

    await transporter.sendMail(mailOptions);

    // Send auto-reply to the client
    const clientMailOptions = {
      from: `"23 Trillion" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thank you for contacting 23 Trillion!`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2>Hi ${fullName},</h2>
          <p>Thank you for reaching out to <strong>23 Trillion</strong>!</p>
          <p>We have received your project inquiry and our engineering team is reviewing your requirements. We will get back to you within 24 hours to discuss the next steps.</p>
          <br/>
          <p>Best regards,<br/><strong>The 23 Trillion Team</strong></p>
        </div>
      `,
    };

    await transporter.sendMail(clientMailOptions);

    return res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Failed to send email' });
  }
}
