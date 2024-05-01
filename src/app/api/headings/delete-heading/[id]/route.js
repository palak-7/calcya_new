import { NextResponse } from "next/server";
import pool from "../../../../../helper/db";

export async function DELETE(request, { params }) {
  const { id } = params;
  try {
    const db = await pool.getConnection();
    const [rows] = await db.execute("DELETE FROM headings WHERE id = ?", [id]);
    const [row] = await db.execute(
      "DELETE FROM sub_headings WHERE heading_id = ?",
      [id]
    );
    return NextResponse.json({
      message: "Heading Deleted",
      status: true,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      message: "Couldn't Delete Heading",
      status: false,
    });
  }
}
