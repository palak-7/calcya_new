import { NextResponse } from "next/server";
import pool from "../../../helper/db";
import { v4 as uuid } from "uuid";

export async function POST(request) {
  const { title } = await request.json();

  const db = await pool.getConnection();
  try {
    //create unique id
    const unique_id = uuid();
    const [rows] = await db.execute("SELECT * FROM articles WHERE name = ?", [
      title,
    ]);
    if (rows.length !== 0) {
      return NextResponse.json({
        message: "Title Already Exists!",
        status: false,
      });
    }
    const response = await db.execute(
      "INSERT INTO articles (id, name) VALUES (?, ?)",
      [unique_id, title]
    );

    return NextResponse.json({
      message: "Title Article",
      status: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Unable to add Article",
      status: false,
    });
  }
}
