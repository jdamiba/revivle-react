import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Set this in your .env.local
});

export default pool;
