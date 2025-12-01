import pool from "../config/db.js";

export const ConsultationsModel = {
  async findAll() {
    const result = await pool.query("SELECT * FROM consultations");
    return result.rows;
  },
  async findById(id) {
    const result = await pool.query("SELECT * FROM consultations WHERE id=$1", [
      Number(id),
    ]);
    return result.rows[0];
  },
  async create(consultation) {
    const { appointment_id, started_at, ended_at, notes } = consultation;
    const result = await pool.query(
      "INSERT INTO consultations (appointment_id,started_at,ended_at,notes) VALUES ($1,$2,$3,$4) RETURNING *",
      [appointment_id, started_at, ended_at, notes]
    );
    return result.rows[0];
  },
  async update(id, consultation) {
    const { appointment_id, started_at, ended_at, notes } = consultation;
    const result = await pool.query(
      "UPDATE consultations SET appointment_id=$1,started_at=$2,ended_at=$3,notes=$4 WHERE id=$5 RETURNING *",
      [appointment_id, started_at, ended_at, notes, Number(id)]
    );
    return result.rows[0];
  },
  async delete(id) {
    const result = await pool.query(
      "DELETE FROM consultations WHERE id=$1 RETURNING *",
      [Number(id)]
    );
    return result.rows[0];
  },
};
