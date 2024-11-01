const { loginQuery, signupQuery } = require("../models/loginSignupModel");
const {
  hashPassword,
  comparePassword,
  createToken,
} = require("../services/authService");

const loginUser = async (req, res) => {
  try {
    const { email, password, userRole } = req.body;

    // Validate incoming data
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required." });
    }

    // Check if userRole is coming through from the frontend
    if (!userRole) {
      return res
        .status(400)
        .json({ message: "userRole not received, login failed" });
    }

    // Retrieve user data from the database
    const user = await loginQuery(email, password, userRole);
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Validate password
    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Create JWT token
    const token = createToken(user.id);

    // Omit the password before sending the response
    const { password: _, ...userWithoutPassword } = user;

    return res.status(200).json({ ...userWithoutPassword, token });
  } catch (error) {
    console.error("Error fetching login details", error);
    return res.status(500).json({
      message:
        "An error occurred while retrieving login details. Please try again later.",
    });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email, password, userRole } = req.body;

    // Validate incoming data
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Name, email, and password are required." });
    }

    // Check if userRole is recieved
    if (!userRole) {
      return res
        .status(400)
        .json({ message: "User role not recieved, signup failed." });
    }

    // Hash Password before storing it
    const hashedPassword = await hashPassword(password);

    // Create user in the database
    const result = await signupQuery(name, email, hashedPassword, userRole);
    res.status(201).json(result);
  } catch (error) {
    console.error("Error creating user account", error);
    res.status(500).json({
      message:
        "An error occurred while creating user account. Please try again later.",
    });
  }
};

module.exports = {
  loginUser,
  createUser,
};
