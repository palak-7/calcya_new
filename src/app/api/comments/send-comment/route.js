import { NextResponse } from "next/server";
import pool from "../../../../helper/db";
export async function POST(request) {
  try {
    const { unique_id, user, comment } = await request.json();
    const db = await pool.getConnection();

    //make new subscription
    const [rows] = await db.execute(
      "INSERT INTO comments (id, user_id, name, content) VALUES (?, ?, ?, ?)",
      [unique_id, user.id, user.name, comment]
    );
    return NextResponse.json({
      message: "Comment Posted!",
      success: true,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      message: "Comment posting failed",
      success: false,
    });
  }
}
