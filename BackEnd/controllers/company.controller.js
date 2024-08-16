import Company from "../model/company.model.js";

const registerCompany = async (req, res) => {
  try {
    const { companyName } = req.body;
    if (!companyName) {
      return res
        .status(400)
        .json({ message: "Company name is required", success: false });
    }
    const existingCompany = await Company.findOne({ companyName });
    if (existingCompany) {
      return res
        .status(400)
        .json({ message: "Company already exists", success: false });
    }
    const company = new Company({ companyName });
    await company.save();
    return res.status(201).json({
      message: "Company registered successfully.",
      company,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({ message: "something went wrong", success: false });
  }
};

const getCompanies = async (req, res) => {
  try {
    const userId = req.id;
    const companies = await Company.find({ userId });
    if (!companies) {
      return res
        .status(404)
        .json({ message: "Companies not found.", success: false });
    }
    return res.status(200).json({ companies, success: true });
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({ message: "something went wrong", success: false });
  }
};

const getCompany = async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await Company.findById(companyId);
    if (!company) {
      return res
        .status(404)
        .json({ message: "Company not found.", success: false });
    }
    return res.status(200).json({ company, success: true });
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({ message: "something went wrong", success: false });
  }
};

const updateCompany = async (req, res) => {
  try {
    const { companyName, description, website, location } = req.body;
    const companyData = {
      companyName,
      description,
      website,
      location,
    };
    const company = await Company.findByIdAndUpdate(
      req.params.id,
      companyData,
      { new: true }
    );
    if (!company) {
      return res
        .status(404)
        .json({ message: "Company not found.", success: false });
    }
    return res
      .status(200)
      .json({ message: "Company Data Updated.", company, success: true });
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({ message: "something went wrong", success: false });
  }
};

export { registerCompany, getCompanies, getCompany, updateCompany };