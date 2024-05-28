import mysql from "mysql2";

// Create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "TekBooster@1991",
  database: "calcya",
});

export default connection;
