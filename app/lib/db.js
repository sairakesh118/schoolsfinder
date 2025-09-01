// lib/db.js
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // from Neon
  ssl: {
    rejectUnauthorized: false, // required for Neon SSL
  },
});

export default pool;
