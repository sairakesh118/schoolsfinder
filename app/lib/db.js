import mysql from "mysql2/promise";

// Create a connection pool (better than single connection)
const pool = mysql.createPool({
  host: "localhost",       // your MySQL host (use your cloud/db IP or "localhost")
  user: "root",            // your MySQL username
  password: "root",    // your MySQL password
  database: "schooldb",    // your database name
});

export default pool;
