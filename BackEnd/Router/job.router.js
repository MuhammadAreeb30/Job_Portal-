import express from "express";
import {
  job,
  getJob,
  getJobs,
  getAdminJob
} from "../controllers/job.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const jobRouter = express.Router();

jobRouter.post("/", isAuthenticated, job);
jobRouter.get("/:id", isAuthenticated, getJob);
jobRouter.get("/", isAuthenticated, getJobs);
jobRouter.get("/admin/jobs", isAuthenticated, getAdminJob);

export default jobRouter;