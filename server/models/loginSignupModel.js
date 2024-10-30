const { query } = require('../db/db-config')

const loginQuery = async (email, password, userRole) => {
    const table = userRole === 'student' ? 'student' : 'teacher'
    const sql = `SELECT * FROM ${table} WHERE email = ? AND password = ?`
    const [user] = await query(sql, [email, password])

    if(user.length === 0) {
        throw new Error("Login not found")
    }
    return user[0]
};


const signupQuery = async (name, email, password, userRole) => {
    const table = userRole === "student" ? "student" : "teacher"
    const sql = `INSERT INTO ${table}(name, email, password) value (?, ?, ?)`;
    const [user] = await query(sql, [name, email, password])
   return user[0]
}


module.exports = {
    loginQuery,
    signupQuery
}


