import { NextResponse } from "next/server";
import connection from "../../../helper/connection";
export const dynamic = "force-dynamic";

// export const revalidate = 1; //revalidate api every 1 second
export async function GET() {
  try {
    const [adminResult] = await new Promise((resolve, reject) => {
      // Perform the database query
      connection.query(
        "SELECT * from user WHERE email = ?",
        [process.env.ADMIN_EMAIL],
        (err, results, fields) => {
          if (err) {
            console.log(err);
            reject(err); // Reject the promise if there's an error
          } else {
            resolve(results); // Resolve the promise with the query results
          }
        }
      );
    });
    if (adminResult == undefined) {
      return NextResponse.json({
        message: "successful",
        success: true,
        adminEvents: [],
      });
    }
    const response = NextResponse.json({
      message: "successful",
      success: true,
      adminEvents: adminResult.events,
    });
    return response;
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ message: "error", success: false });
  }
}
