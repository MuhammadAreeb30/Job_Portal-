import express from "express";
import {
  registerCompany,
  getCompanies,
  getCompany,
  updateCompany,
} from "../controllers/company.controller.js";

const companyRouter = express.Router();

companyRouter.post("/register", registerCompany);
companyRouter.get("/", getCompanies);
companyRouter.get("/:id", getCompany);
companyRouter.put("/update/:id", updateCompany);

export default companyRouter;
