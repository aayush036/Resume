import dotenv from "dotenv";
dotenv.config({ path: "./backend/.env" });
import express from "express";
import nodemailer from "nodemailer"
import contactRoutes from "./routes/contactRoutes.js";
import cors from "cors";
import path from "path";

const app = express();
const __dirname = path.resolve();

app.use(cors());
app.use(express.json());
app.use("/contact", contactRoutes);
app.use(express.static(path.join(__dirname, "portfolio/dist")));
app.use((_, res) => {
    res.sendFile(path.join(__dirname, 'portfolio', 'dist', 'index.html'));
})
const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
    console.log(`server is running on port ${port}`)
});

server.on('error', (e) => {
    console.error('Server error:', e);
});

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
});