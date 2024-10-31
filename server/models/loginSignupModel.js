const { query } = require('../db/db-config');

const loginQuery = async (email, userRole) => {
    const table = userRole === 'student' ? 'student' : 'teacher';
    const sql = `SELECT * FROM ${table} WHERE email = ?`;

    try {
        // Execute the query to find the user by email
        const user = await query(sql, [email]);

        // Check if user is found
        if (!user || user.length === 0) {
            throw new Error("User not found with the provided email.");
        }

        return {
                id: userRole === "student" ? user[0].student_id : user[0].teacher_id,
            ...user[0] 
        }
    } catch (error) {
        console.error("Error in loginQuery:", error);
        throw error; 
    }
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
