import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { jwtDecode } from "jwt-decode";

export async function POST(request) {
  const { token } = await request.json();
  const secret = process.env.JWT_SECRET;
  const decoded = jwtDecode(token);
  try {
    jwt.verify(token, secret);
    return NextResponse.json({
      message: "successful",
      success: true,
      userId: decoded,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ message: "error", success: false });
  }
}
