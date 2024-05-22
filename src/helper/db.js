import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  port: 3306,
  database: "calcya",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Function to test the connection pool
const testConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log("Connected to db");
    connection.release(); // Release the connection back to the pool
  } catch (err) {
    console.error("Error connecting to db:", err.message);
  }
};

// Run the test connection function
testConnection();

export default pool;
