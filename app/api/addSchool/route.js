import pool from "@/app/lib/db";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, address, city, state, contact, image, email_id } = body;

    if (!name || !address || !city || !state || !contact || !image || !email_id) {
      return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 });
    }

    // Use $1, $2... instead of ?
    const query = `
      INSERT INTO schools (name, address, city, state, contact, image, email_id)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING id;
    `;

    const values = [name, address, city, state, contact, image, email_id];
    const result = await pool.query(query, values);

    return new Response(
      JSON.stringify({ message: "School added", id: result.rows[0].id }),
      { status: 200 }
    );
  } catch (err) {
    console.error("DB Error:", err);
    return new Response(JSON.stringify({ error: "Database error" }), { status: 500 });
  }
}
