import { NextResponse } from "next/server";
import pool from "../../../helper/db";

export async function GET() {
  try {
    const db = await pool.getConnection();
    const [result] = await db.execute("SELECT * from articles");
    return NextResponse.json({
      message: "successful",
      success: true,
      result: result,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ message: "error", success: false });
  }
}
