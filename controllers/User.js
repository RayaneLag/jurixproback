import User from "../schemas/User.js";
import bcrypt from "bcrypt";
export const Login = async (req, res) => {
  try {
    const FoundUser = await User.findOne({ email: req.body.email });

    console.log(FoundUser);
    if (!FoundUser) {
      return res
        .status(404)
        .json({ message: "email or password is incorrect" });
    }

    const match = await bcrypt.compare(req.body.password, FoundUser.password);

    if (match) {
      res.status(200).json({ user: FoundUser });
    } else {
      return res
        .status(404)
        .json({ message: "email or password are incorrect" });
    }
  } catch (err) {
    res.status(500).json({ message: "server error", err });
  }
};

export const CreateUser = async (req, res) => {
  try {
    const FoundUser = await User.findOne({ email: req.body.email });
    console.log(FoundUser);
    if (FoundUser) {
      return res.status(404).json({ message: "user already exist" });
    }

    bcrypt.hash(req.body.password, 10, function (err, hash) {
      const newUser = {
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        password: hash,
        role: req.body.role,
        job: req.body.job,
      };
      User.insertMany(newUser);
      res.json({ message: "user created", newUser });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "server error", err });
  }
};
