import User from "../models/user.model.js";
import bcrypt from "bcryptjs"; // Import bcryptjs

const signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Create a new user
    const newUser = new User({ username, email, password: hashedPassword });

    // Save the user to the database
    await newUser.save();

    // Respond with success
    res.status(201).json("User created successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred during signup" });
  }
};

export default signup;
