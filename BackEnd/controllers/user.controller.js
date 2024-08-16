import User from "../model/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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
      .json({ message: "Account created successfully.", success: true });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "something went wrong", success: false });
  }
};

const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
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
    if (role !== user.role) {
      return res
        .status(400)
        .json({ message: "Account doesn't exit with current role.", success });
    }

    const tokenData = {
      userId: user._id,
    };

    const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });

    user = {
      userId: user._id,
      fullName: user.fullName,
      email: user.email,
      phone: user.phone,
      role: user.role,
      profile: user.profile,
    };

    return res
      .status(201)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpsOnly: true,
        sameSite: "strict",
      })
      .json({ message: `welcome back ${user.fullName}.`, success: true });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "something went wrong", success: false });
  }
};

const logout = async () => {
  try {
    return res
      .status(200)
      .cookie("token", "", { maxAge: 0 })
      .json({ message: "logged out successfully.", success: true });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "something went wrong", success: false });
  }
};

const updateProfile = async (req, res) => {
  try {
    const { fullName, email, phone, bio, skills } = req.body;
    if (!fullName || !email || !phone || !bio || !skills) {
      return res
        .status(400)
        .json({ message: "something is missing", success: false });
    }
    const userId = req.id;
    const skillsArray = skills.split(",");
    let user = await User.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found", success: false });
    }
    user.fullName = fullName;
    user.email = email;
    user.phone = phone;
    user.profile.bio = bio;
    user.profile.skills = skillsArray;
    await user.save();
    user = {
      userId: user._id,
      fullName: user.fullName,
      email: user.email,
      phone: user.phone,
      role: user.role,
      profile: user.profile,
    };
    return res
      .status(201)
      .json({ message: "Profile update successfully.", user, success: true });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "something went wrong", success: false });
  }
};

export { register, login, updateProfile, logout };
