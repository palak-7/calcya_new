import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import pool from "../../../helper/db";
import connection from "../../../helper/connection";
export async function POST(request) {
  const { email, password } = await request.json();
  // const db = await pool.getConnection();
  try {
    //fetch user by email id
    const results = await new Promise((resolve, reject) => {
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
    if (results.length == 0) {
      NextResponse.json(
        {
          message: "User Doesn't Exist",
          success: false,
        },
        { status: 500 }
      );
    }
    const user = results[0];
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return NextResponse.json({
        message: "Invalid Password",
        success: false,
        //user: user,
      });
    }

    //creating token
    const token = jwt.sign(
      {
        email: user.email,
      },
      process.env.JWT_KEY
    );

    //create next-response cookie
    const response = NextResponse.json({
      message: "Login Success",
      success: true,
      token: token,
      user: user,
    });
    response.cookies.set("authToken", token, {
      expiresIn: "1d",
      httpOnly: true,
    });
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: error.message,
        success: false,
      },
      { status: 500 }
    );
  }
}
