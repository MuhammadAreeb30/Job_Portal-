import express from "express";
import {
  registerCompany,
  getCompanies,
  getCompany,
  updateCompany,
} from "../controllers/company.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const companyRouter = express.Router();

companyRouter.post("/register", isAuthenticated, registerCompany);
companyRouter.get("/", isAuthenticated, getCompanies);
companyRouter.get("/:id", isAuthenticated, getCompany);
companyRouter.put("/update/:id", isAuthenticated, updateCompany);

export default companyRouter;