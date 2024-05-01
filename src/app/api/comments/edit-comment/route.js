import { NextResponse } from "next/server";
import pool from "../../../../helper/db";

export const PUT = async (request) => {
  const { id, tempContent } = await request.json();
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.execute(
      "UPDATE comments SET content = ? WHERE id = ?",
      [tempContent, id]
    );
    return NextResponse.json({
      message: "Comment Edited!",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Can't edit comment!",
      success: false,
    });
  }
};
