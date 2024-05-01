import { NextResponse } from "next/server";
import pool from "../../../../helper/db";

export async function DELETE(request, { params }) {
  const { id } = params;
  try {
    const db = await pool.getConnection();
    const [rows] = await db.execute("DELETE FROM articles WHERE id = ?", [id]);
    const [row] = await db.execute(
      "DELETE FROM headings WHERE article_id = ?",
      [id]
    );
    const [r] = await db.execute(
      "DELETE FROM sub_headings WHERE article_id = ?",
      [id]
    );
    return NextResponse.json({
      message: "Article Deleted",
      status: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Couldn't Delete Article",
      status: false,
    });
  }
}
