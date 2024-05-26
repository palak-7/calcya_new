import { NextResponse } from "next/server";
import pool from "../../../helper/db";

export const revalidate = 1; //revalidate api every 1 second
export async function GET() {
  try {
    const db = await pool.getConnection();
    const [adminResult] = await db.execute(
      "SELECT * from user WHERE email = ?",
      [process.env.ADMIN_EMAIL]
    );
    const response = NextResponse.json({
      message: "successful",
      success: true,
      adminEvents: adminResult[0].events,
    });
    return response;
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ message: "error", success: false });
  }
}
