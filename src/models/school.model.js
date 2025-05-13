import { pool } from '../db/index.js';
console.log("model working")
export const insertSchool = async (name, address, latitude, longitude) => {
  const [result] = await pool.query(
    'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)',
    [name, address, latitude, longitude]
  );
  return result.insertId;
};

export const getAllSchools = async () => {
  const [schools] = await pool.query('SELECT * FROM schools');
  return schools;
};
