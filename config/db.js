import pg from 'pg';
import dotenv from 'dotenv';
const { Pool } = pg
dotenv.config();
process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASS

const pool = new Pool({
  user: process.env.DB_USER,
  host: 'localhost',
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: 5432,
});

export default pool