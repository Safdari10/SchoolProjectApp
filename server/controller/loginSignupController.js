const { loginQuery, signupQuery } = require('../models/loginSignupModel');

const getUser = async (req, res) => {
    try {
        const { email, password, userRole } = req.body;

        // Validate incoming data
        if (!email || !password) {
            return res.status(400).send("Email and password are required.");
        }

        // Check if userRole is provided
        if (!userRole) {
            return res.status(400).send('User role is required for login.');
        }

        const user = await loginQuery(email, password, userRole);

        // Check if user exists
        if (!user) {
            return res.status(404).send('Login details not found.');
        }

        // Omit the password before sending the response
        const { password: _, ...userWithoutPassword } = user;

        return res.status(200).json(userWithoutPassword);

    } catch (error) {
        console.error("Error fetching login details", error);
        res.status(500).send("An error occurred while retrieving login details. Please try again later.");
    }
};

const createUser = async (req, res) => {
    try {
        const { name, email, password, userRole } = req.body;

        // Validate incoming data
        if (!name || !email || !password) {
            return res.status(400).send("Name, email, and password are required.");
        }

        // Check if userRole is provided
        if (!userRole) {
            return res.status(400).send('User role is required for registration.');
        }

        // Create user
        const user = await signupQuery(name, email, password, userRole);
        res.status(201).json(user);

    } catch (error) {
        console.error("Error creating user account", error);
        res.status(500).send("An error occurred while creating user account. Please try again later.");
    }
};

module.exports = {
    getUser,
    createUser
};
