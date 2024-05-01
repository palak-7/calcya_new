import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ message: "Logout", success: true });
  return response;
}
