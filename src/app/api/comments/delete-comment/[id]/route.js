import { NextResponse } from "next/server";
import pool from "../../../../../helper/db";

export async function DELETE(request, { params }) {
  const rid = params.id;
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.execute(
      "DELETE FROM comments WHERE id = ?",
      [rid]
    );
    return NextResponse.json({
      message: "Comment Deleted!",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Comment Deletion Failed!",
      success: false,
    });
  }
}
