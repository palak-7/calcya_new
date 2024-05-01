import pool from "../../../helper/db";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
export async function POST(request) {
  const { authToken } = await request.json();
  const data = jwt.verify(authToken, process.env.JWT_KEY);
  const db = await pool.getConnection();
  const [rows] = await db.execute("SELECT * FROM user WHERE email = ?", [
    data.email,
  ]);
  return NextResponse.json(rows[0]);
}
