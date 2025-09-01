import pool from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await pool.query("SELECT * FROM schools");
    return NextResponse.json(result.rows, { status: 200 });
  } catch (error) {
    console.error("DB Error:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
