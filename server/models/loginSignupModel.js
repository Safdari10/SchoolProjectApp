const { query } = require('../db/db-config')
const { hashPassword, comparePassword } = require ('../services/authService')

const loginQuery = async (email, password, userRole) => {
    const table = userRole === 'student' ? 'student' : 'teacher'
    const sql = `SELECT * FROM ${table} WHERE email = ? `
    const [user] = await query(sql, [email])

    if(user.length === 0) {
        throw new Error("Login not found")
    }

    const isPasswordValid = await comparePassword(password, user[0].password)

    if(!isPasswordValid) {
        throw new Error("Invalid credentials")
    }

    return user[0]
};


const signupQuery = async (name, email, password, userRole) => {
    const table = userRole === "student" ? "student" : "teacher"
    const hashedPassword = await hashPassword(password)
    const sql = `INSERT INTO ${table}(name, email, password) value (?, ?, ?)`;
    const [user] = await query(sql, [name, email, hashedPassword])
   return user[0]
}


module.exports = {
    loginQuery,
    signupQuery
}


