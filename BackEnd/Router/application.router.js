import express from "express";
import {
  applyJob,
  getAppliedJob,
  getApplicants,
  updateStatus,
} from "../controllers/application.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const applicationRouter = express.Router();

applicationRouter.get("/apply/:id", isAuthenticated, applyJob);
applicationRouter.get("/applied", isAuthenticated, getAppliedJob);
applicationRouter.get("/applicants/:id", isAuthenticated, getApplicants);
applicationRouter.post("/update/status/:id", isAuthenticated, updateStatus);

export default applicationRouter;
