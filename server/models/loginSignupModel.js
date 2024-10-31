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
  const table = userRole === "student" ? "student" : "teacher";
  const hashedPassword = await hashPassword(password);

  // insert the user into the database
  const sql = `INSERT INTO ${table}(name, email, password) value (?, ?, ?)`;
  const result = await query(sql, [name, email, hashedPassword]);

  // check if the insertion was successful
  if (result.affectedRows === 0) {
    throw new Error("Failed to create account");
  }

  return { message: "Account successfully created" };
};


module.exports = {
    loginQuery,
    signupQuery
}


