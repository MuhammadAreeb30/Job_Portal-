import express from "express";
import {
  register,
  login,
  updateProfile,
  logout,
} from "../controllers/user.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { singleUpload } from "../middleware/multer.js";

const userRouter = express.Router();

userRouter.post("/register", singleUpload, register);
userRouter.post("/login", login);
userRouter.get("/logout", logout);
userRouter.post("/profile/update", isAuthenticated, updateProfile);

export default userRouter;
