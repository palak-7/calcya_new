import { NextResponse } from "next/server";
import pool from "../../../../helper/db";

export async function PUT(request) {
  const { formData, value, startDate, artId, rtime } = await request.json();
  try {
    const db = await pool.getConnection();
    const [rows] = await db.execute(
      "UPDATE sub_headings SET article_id = ?, heading_id = ?, name = ?, content = ?, author = ?, reading_time = ?, date = ? WHERE id = ?",
      [
        formData.heading,
        formData.subHeading,
        formData.title,
        value,
        formData.author,
        rtime,
        startDate,
        artId,
      ]
    );
    return NextResponse.json({
      message: "Article updated",
      status: true,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      message: "Can't update article",
      status: false,
    });
  }
}
