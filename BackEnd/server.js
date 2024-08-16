import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import DBConnect from "./utils/DBConnect.js";
import userRouter from "./Router/user.router.js";
dotenv.config({});

const app = express();
const port = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.json({ message: "hello world" });
});

app.listen(port, () => {
  DBConnect();
  console.log(`Server is running on port ${port}`);
});
