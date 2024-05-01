import { NextResponse } from "next/server";
import pool from "../../../../../helper/db";

export async function PUT(request) {
  const { id, content } = request.json();
  try {
    const db = await pool.getConnection();
    const [rows] = await db.execute(
      "UPDATE sub_headings SET content = ? WHERE id = ?",
      [content, id]
    );
    return NextResponse.json({
      message: "updated successfully",
      success: true,
      result: rows,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ message: "error in updating", success: false });
  }
}
