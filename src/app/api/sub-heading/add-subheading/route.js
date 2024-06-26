import { NextResponse } from "next/server";
import pool from "../../../../helper/db";

export async function POST(request) {
  const { formData, value, startDate, id, rtime } = await request.json();
  const db = await pool.getConnection();
  try {
    //create unique id
    const response = await db.execute(
      "INSERT INTO sub_headings (id, article_id, heading_id, name, content, author, reading_time, date) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        id,
        formData.heading,
        formData.subHeading,
        formData.title,
        value,
        formData.author,
        rtime,
        startDate,
      ]
    );

    return NextResponse.json({
      message: "Article Added",
      status: true,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      message: "Unable to add article",
      status: false,
    });
  }
}
