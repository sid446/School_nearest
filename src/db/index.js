import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

export let pool;

export const connectDB = async () => {
  try {
    pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    const [rows] = await pool.query('SELECT NOW() AS now');
    console.log(`✅ Connected to MySQL at ${rows[0].now}`);
  } catch (error) {
    console.error('❌ MySQL connection failed:', error.message);
    throw error;
  }
};
