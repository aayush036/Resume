import dotenv from "dotenv";
dotenv.config({ path: "./backend/.env" });

console.log("Checking environment variables...");
console.log("EMAIL_USER present:", !!process.env.EMAIL_USER);
console.log("EMAIL_PASS present:", !!process.env.EMAIL_PASS);
console.log("EMAIL_USER length:", process.env.EMAIL_USER ? process.env.EMAIL_USER.length : 0);
console.log("EMAIL_PASS length:", process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : 0);
