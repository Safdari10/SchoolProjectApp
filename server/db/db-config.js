
const mysql = require("mysql2/promise")

const pool = mysql.createPool({
   host: process.env.MYSQL_HOST,
   user: process.env.MYSQL_USER,
   password: process.env.MYSQL_PASSWORD,
   database: process.env.MYSQL_DATABASE,
   waitForConnections: true,
   connectionLimit: 10,
   queueLimit: 5,
})


// -- wrapper function for executing parameterized queries --

const query = async (sql, params) => {
   try {
      const [results] = await pool.execute(sql, params)
      return results;
   } catch (error) {
      throw new Error('Database query error:' + error.message)
   }
}

module.exports = {
   query
}