import User from "../schemas/User.js";
import bcrypt from "bcrypt";

export const updateProfile = async (req, res) => {
  const { userId, username, email } = req.body;

  try {
    const user = await User.findById(userId);

    if (user) {
      user.username = username || user.username;
      user.email = email || user.email;
      await user.save();

      res.status(200).json({ message: "Profile updated successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating profile", error });
  }
};

export const updatePassword = async (req, res) => {
  const { userId, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  try {
    const user = await User.findById(userId);

    if (user) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();

      res.status(200).json({ message: "Password updated successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating password", error });
  }
};
