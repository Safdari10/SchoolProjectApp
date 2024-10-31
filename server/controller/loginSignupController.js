const { loginQuery, signupQuery } = require('../models/loginSignupModel');

const getUser = async (req, res) => {
    try {
        const { email, password, userRole } = req.body;

        // Validate incoming data
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required."});
        }

        // Check if userRole is coming through from front end
        if (!userRole) {
            return res.status(400).json({message: 'userRole not recieved, login failed'});
        }

        const user = await loginQuery(email, password, userRole);

        // Omit the password before sending the response
        const { password: _, ...userWithoutPassword } = user;

        return res.status(200).json(userWithoutPassword);

    } catch (error) {
        console.error("Error fetching login details", error);
        if(error.message === "Invalid credentials") {
            return res.status(401).json({message: "Invalid credentials"})
        }
        res.status(500).json({ message: "An error occurred while retrieving login details. Please try again later."});
    }
};

const createUser = async (req, res) => {
    try {
        const { name, email, password, userRole } = req.body;

        // Validate incoming data
        if (!name || !email || !password) {
            return res.status(400).json({ message: "Name, email, and password are required."});
        }

        // Check if userRole is recieved
        if (!userRole) {
            return res.status(400).json({ message: 'User role not recieved, signup failed.'});
        }

        // Create user
        const result = await signupQuery(name, email, password, userRole);
        res.status(201).json(result);

    } catch (error) {
        console.error("Error creating user account", error);
        res.status(500).json({message: "An error occurred while creating user account. Please try again later."});
    }
};

module.exports = {
    getUser,
    createUser
};
