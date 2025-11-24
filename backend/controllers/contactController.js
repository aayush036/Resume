import { getTransporter } from "../config/mailConfig.js";

export const sendContactMail = async (req, res) => {
    const { name, email, message } = req.body;
    try {
        const transporter = getTransporter();
        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_USER,
            subject: `New Message from ${name}`,
            text: `Email: ${email}\n\nMessage:\n${message}`,
        });
        res.status(200).json({ success: true });
    }
    catch (error) {
        console.error("Mail error:", error);
        res.status(500).json({ success: false, error: "Failed to send email" });
    }

}
