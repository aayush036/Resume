import "dotenv/config";
import express from "express";
import nodemailer from "nodemailer"
import contactRoutes from "./routes/contactRoutes.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/contact", contactRoutes);
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})