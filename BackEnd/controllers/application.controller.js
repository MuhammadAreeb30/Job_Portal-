import Application from "../model/application.model.js";
import Job from "../model/job.model.js";

const applyJob = async (req, res) => {
  try {
    const userId = req.id;
    const jobId = req.params.id;
    const application = await Application.findOne({
      applicant: userId,
      job: jobId,
    });
    if (application) {
      return res.status(409).json({
        message: "Application already submitted for this job.",
        success: false,
      });
    }
    // check job exists
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: "Job not found", success: false });
    }
    const newApplication = new Application({
      applicant: userId,
      job: jobId,
    });
    await job.applications.push(newApplication._id);
    await job.save();
    await newApplication.save();
    return res.status(201).json({
      message: "Job applied successfully.",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "something went wrong", success: false });
  }
};

const getAppliedJob = async (req, res) => {
  try {
    const userId = req.id;
    const appliedJobs = await Application.find({ applicant: userId });
    if (!appliedJobs) {
      return res
        .status(404)
        .json({ message: "No applications found", success: false });
    }
    return res.status(200).json({ appliedJobs, success: true });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "something went wrong", success: false });
  }
};

const getApplicants = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId)
      .populate({
        path: "applications",
        options: { sort: { createdAt: -1 } },
        populate: { path: "applicant" },
      })
    if (!job) {
      return res.status(404).json({ message: "Job not found", success: false });
    }
    return res.status(200).json({ job, success: true });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "something went wrong", success: false });
  }
};

const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const applicationId = req.params.id;
    if (!status) {
      return res
        .status(400)
        .json({ message: "status is required", success: false });
    }
    const application = await Application.findByIdAndUpdate(
      applicationId,
      { status: status.toLowerCase() },
      { new: true }
    );
    if (!application) {
      return res.status(404).json({
        message: "Application not found.",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Status updated successfully.",
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "something went wrong", success: false });
  }
};

export { applyJob, getAppliedJob, getApplicants, updateStatus };
