import { NextResponse } from "next/server";
import pool from "../../../helper/db";
export async function POST(request) {
  const { events } = await request.json();
  const mail = process.env.ADMIN_EMAIL;
  try {
    const db = await pool.getConnection();
    const [result] = await db.execute(
      "UPDATE user SET events = ? WHERE email = ?",
      [JSON.stringify(events), mail]
    );
    const response = NextResponse.json({
      message: "Success",
      success: true,
    });
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: error.message,
      success: false,
    });
  }
}
