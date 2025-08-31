import pool from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, address, city, state, contact, image, email_id } = body;

    if (!name || !address || !city || !state || !contact || !image || !email_id) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const [result] = await pool.query(
      "INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [name, address, city, state, contact, image, email_id]
    );

    return NextResponse.json(
      { message: "School added successfully", id: result.insertId },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
