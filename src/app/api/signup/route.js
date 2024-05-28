import { NextResponse } from "next/server";
import pool from "../../../helper/db";
import bcrypt from "bcryptjs";
import { v4 as uuid } from "uuid";
import connection from "../../../helper/connection";

export async function POST(request) {
  const { name, email, password } = await request.json();
  const hashedPassword = await bcrypt.hash(
    password,
    parseInt(process.env.BCRYPT_SALT)
  );
  // const db = await pool.getConnection();
  try {
    //create unique id
    const unique_id = uuid();
    const rows = await new Promise((resolve, reject) => {
      // Perform the database query
      connection.query(
        "SELECT * FROM user WHERE email = ?",
        [email],
        (err, results, fields) => {
          if (err) {
            console.log(err);
            reject(err); // Reject the promise if there's an error
          } else {
            resolve(results); // Resolve the promise with the query results
          }
        }
      );
    });
    if (rows.length !== 0) {
      return NextResponse.json({
        message: "User Already Exists!",
        status: false,
      });
    }
    // const response = await db.execute(
    //   "INSERT INTO user (id, name, email, password,events) VALUES (?, ?, ?, ?, ?)",
    //   [unique_id, name, email, hashedPassword, []]
    // );
    const response = await new Promise((resolve, reject) => {
      // Perform the database query
      connection.query(
        "INSERT INTO user (id, name, email, password,events) VALUES (?, ?, ?, ?, ?)",
        [unique_id, name, email, hashedPassword, JSON.stringify([])],
        (err, results, fields) => {
          if (err) {
            console.log(err);
            reject(err); // Reject the promise if there's an error
          } else {
            resolve(results); // Resolve the promise with the query results
          }
        }
      );
    });
    return NextResponse.json({
      message: "User Registered Successfully",
      status: true,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ message: error.message, status: false });
  }
}
