import { NextResponse } from "next/server";
import pool from "../../../../helper/db";
import { v4 as uuid } from "uuid";

export async function POST(request) {
  const { article_id, heading_id, formData, value, startDate, reading_time } =
    await request.json();
  const db = await pool.getConnection();
  try {
    //create unique id
    const unique_id = uuid();
    const [rows] = await db.execute(
      "SELECT * FROM sub_headings WHERE name = ?",
      [formData.title]
    );
    if (rows.length !== 0) {
      const [rows] = await db.execute(
        "UPDATE sub_headings SET content = ?, author = ?, reading_time = ?, date = ?  WHERE name = ?",
        [value, formData.author, reading_time, startDate, formData.title]
      );
      return NextResponse.json({
        message: "Article Updated!",
        status: true,
      });
    }
    const response = await db.execute(
      "INSERT INTO sub_headings (id, article_id, heading_id, name, content, author, reading_time, date) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        unique_id,
        article_id,
        heading_id,
        formData.title,
        value,
        formData.author,
        reading_time,
        startDate,
      ]
    );

    return NextResponse.json({
      message: "Sub Heading Added",
      status: true,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      message: "Unable to add sub-heading",
      status: false,
    });
  }
}
