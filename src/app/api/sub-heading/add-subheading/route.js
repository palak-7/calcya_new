import { NextResponse } from "next/server";
import pool from "../../../../helper/db";
import { v4 as uuid } from "uuid";

export async function POST(request) {
  const { title } = await request.json();
  const db = await pool.getConnection();
  try {
    //create unique id
    const unique_id = uuid();
    const response = await db.execute(
      "INSERT INTO sub_headings (id, article_id) VALUES (?, ?)",
      [unique_id, title]
    );

    return NextResponse.json({
      message: "Heading Added",
      status: true,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      message: "Unable to add heading",
      status: false,
    });
  }
}
