import User from "../model/user.model";
import bcrypt from "bcryptjs";

const register = async (req, res) => {
  try {
    const { fullName, email, password, phone, role } = req.body;
    if (!fullName || !email || !password || !phone || !role) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res
        .status(400)
        .json({ message: "user already exists", success: false });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      fullName,
      email,
      password: hashedPassword,
      phone,
      role,
    });
    await user.save();
    res
      .status(201)
      .json({ message: "User registered successfully", success: true });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "something went wrong", success: false });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found", success: false });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ message: "Invalid credentials", success: false });
    }
    return res
      .status(201)
      .json({ message: "Login successfully!", success: true });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "something went wrong", success: false });
  }
};
