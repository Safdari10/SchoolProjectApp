const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

// hashPassword 

const hashPassword = async (password) => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds)
    return hashedPassword
}

// compare a password with a hash

const comparePassword = async (password, hash) => {
    return await bcrypt.compare(password,hash)   
}


// Create JWT token
const createToken = (userId) => {
    const expirationTime = process.env.JWT_EXPIRATION
    return jwt.sign({id: userId}, process.env.JWT_SECRET, { expiresIn: expirationTime })
}

module.exports = {
    hashPassword,
    comparePassword,
    createToken
}