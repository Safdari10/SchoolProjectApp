const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config()

// Hash Password
const hashPassword = async (password) => {
    const saltRounds = 10;
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        console.error("Error hashing password:", error);
        throw new Error("Error hashing password.");
    }
};

// Compare a password with a hash
const comparePassword = async (password, hash) => {
    try {
        return await bcrypt.compare(password, hash);
    } catch (error) {
        console.error("Error comparing passwords:", error);
        throw new Error("Error comparing passwords.");
    }
};

// Create JWT token
const createToken = (userId) => {
    const expirationTime = process.env.JWT_EXPIRATION;
    const secret = process.env.JWT_SECRET;

    // Check if the secret and expiration time are defined
    if (!secret) {
        throw new Error("JWT secret not defined.");
    }
    if (!expirationTime) {
        throw new Error("JWT expiration time not defined.");
    }

    return jwt.sign({ id: userId }, secret, { expiresIn: expirationTime });
};

module.exports = {
    hashPassword,
    comparePassword,
    createToken,
};
