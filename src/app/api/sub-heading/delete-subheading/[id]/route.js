import { NextResponse } from "next/server";
import pool from "../../../../../helper/db";

export async function DELETE(request, { params }) {
  const { id } = params;
  try {
    const db = await pool.getConnection();
    const [rows] = await db.execute("DELETE FROM sub_headings WHERE id = ?", [
      id,
    ]);
    return NextResponse.json({
      message: "SubHeading Deleted",
      status: true,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      message: "Couldn't Delete Sub Heading",
      status: false,
    });
  }
}
