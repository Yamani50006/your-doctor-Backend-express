import pool from "../config/db.js";

export const SpecialtiesModel = {
  async findAll() {
    const rows = await pool.query("SELECT * FROM specialties");
    return rows.rows;
  },
  async findById(id) {
    const rows = await pool.query("SELECT * FROM specialties WHERE id=$1", [
      id,
    ]);
    return rows.rows[0];
  },
  async create(specialty) {
    const { name } = specialty;
    const rows = await pool.query(
      "INSERT INTO specialties (name) VALUES ($1) RETURNING *",
      [name]
    );
    return rows.rows[0];
  },
  async update(id, specialty) {
    const { name } = specialty;
    const rows = await pool.query(
      "UPDATE specialties SET name=$1 WHERE id=$2 RETURNING *",
      [name, id]
    );
    return rows.rows[0];
  },
  async delete(id) {
    const res = await pool.query(
      "DELETE FROM specialties WHERE id=$1 RETURNING *",
      [id]
    );
    if (res.rows.length == 0) {
      return null;
    }
    return res.rows[0];
  },
};
