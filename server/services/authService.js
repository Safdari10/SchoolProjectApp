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

module.exports = {
    hashPassword,
    comparePassword
}