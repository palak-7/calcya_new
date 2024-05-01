import { NextResponse } from "next/server";
import pool from "../../../../helper/db";
export const GET = async () => {
  try {
    const connection = await pool.getConnection();
    const query = "SELECT * FROM comments";
    const values = [];
    const [data] = await connection.execute(query, values);
    connection.release();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error.message);
  }
};
