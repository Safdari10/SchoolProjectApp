const { query } = require('../db/db-config');

const loginQuery = async (email, userRole) => {
    const table = userRole === 'student' ? 'student' : 'teacher';
    const sql = `SELECT * FROM ${table} WHERE email = ?`;

    // Execute the query to find the user by email
    const user = await query(sql, [email]);

    // Check if user is found
    if (!user || user.length === 0) {
        throw new Error("Invalid credentials");
    }

    return user[0];
};

const signupQuery = async (name, email, hashedPassword, userRole) => {
    const table = userRole === "student" ? "student" : "teacher";
    const sql = `INSERT INTO ${table} (name, email, password) VALUES (?, ?, ?)`;
    const result = await query(sql, [name, email, hashedPassword]);

    // Check if the insertion was successful
    if (result.affectedRows === 0) {
        throw new Error("Failed to create account");
    }

    return { message: "Account successfully created" };
};

module.exports = {
    loginQuery,
    signupQuery
};
