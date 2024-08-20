import Job from "../model/job.model.js";

const job = async (req, res) => {
  try {
    const {
      title,
      description,
      jobType,
      positions,
      salary,
      location,
      experience,
      company,
      requirements,
    } = req.body;
    // console.log(req.body);
    const userId = req.id;
    if (
      !title ||
      !description ||
      !jobType ||
      !positions ||
      !location ||
      !salary ||
      !company ||
      !experience
    ) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }
    const jobData = {
      title,
      description,
      jobType,
      positions,
      salary,
      location,
      requirements: requirements.split(","),
      experience,
      company,
      created_by: userId,
    };
    const newJob = new Job(jobData);
    await newJob.save();
    return res
      .status(200)
      .json({ message: "Job created successfully.", newJob, success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message || "Something went wrong",
      success: false,
    });
  }
};

const getJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const Query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    };
    const jobs = await Job.find(Query)
      .populate({ path: "company" })
      .sort({ createdAt: -1 });
    if (!jobs) {
      return res
        .status(404)
        .json({ message: "Jobs not found.", success: false });
    }
    return res.status(200).json({ jobs, success: true });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Something went wrong", success: false });
  }
};

const getJob = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId)
      .populate({
        path: "applications",
      })
      .sort({ createdAt: -1 });
    if (!job) {
      return res
        .status(404)
        .json({ message: "Job not found.", success: false });
    }
    return res.status(200).json({ job, success: true });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Something went wrong", success: false });
  }
};

// get admin job
const getAdminJob = async (req, res) => {
  try {
    const adminId = req.id;
    // console.log(adminId);
    const job = await Job.find({created_by: adminId})
      .populate({ path: "company", createdAt: -1 });
    if (!job) {
      return res
        .status(404)
        .json({ message: "Job not found.", success: false });
    }
    return res.status(200).json({ job, success: true });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "something went wrong", success: false });
  }
};

// const updateJob = async (req, res) => {
//   try {
//     const jobId = req.params.id;
//     const { title, description, jobType, positions, salary, location } =
//       req.body;
//     const updatedJob = await Job.findByIdAndUpdate(
//       jobId,
//       {
//         title,
//         description,
//         jobType,
//         positions,
//         salary,
//         location,
//       },
//       { new: true }
//     );
//     if (!updatedJob) {
//       return res
//         .status(404)
//         .json({ message: "Job not found.", success: false });
//     }
//     return res.status(200).json({
//       message: "Job updated successfully.",
//       updatedJob,
//       success: true,
//     });
//   } catch (error) {
//     console.error(error);
//     return res
//       .status(500)
//       .json({ message: "Something went wrong", success: false });
//   }
// };

export { job, getJobs, getJob, getAdminJob };
