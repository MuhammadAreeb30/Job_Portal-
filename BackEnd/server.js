import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import DBConnect from "./utils/DBConnect.js";
import userRouter from "./Router/user.router.js";
import companyRouter from "./Router/company.router.js";
import applicationRouter from "./Router/application.router.js";
import jobRouter from "./Router/job.router.js";
dotenv.config({});

const app = express();
const port = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const corsOptions = {
  origin: "http://127.0.0.1:5173",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(cookieParser());
// api's
app.use("/api/users", userRouter);
app.use("/api/company", companyRouter);
app.use("/api/job", jobRouter);
app.use("/api/application", applicationRouter);

app.get("/", (req, res) => {
  console.log('Cookies: ', req.cookies)
  res.json({ message: "hello world" });
});

app.listen(port, () => {
  DBConnect();
  console.log(`Server is running on port ${port}`);
});
