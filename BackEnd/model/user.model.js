import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: (email) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    },
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  role: {
    type: String,
    enum: ["Student", "Recruiter"],
    required: true,
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
  },
  profile: {
    bio: {
      type: String,
      maxlength: 500,
    },
    skills: [{ type: String }],
    resume: { type: String },
    resumeOrignialName: { type: String },
    profilePicture: { type: String, default: "" },
  },
});

const User = mongoose.model("User", userSchema);

export default User;
