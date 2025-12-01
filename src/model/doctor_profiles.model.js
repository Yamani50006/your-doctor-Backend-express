import pool from "../config/db.js";
import { validate as validateUUID, } from "uuid";

export const DoctorProfilesModel = {
  async findAll() {
    const rows = await pool.query("SELECT * FROM doctor_profiles d left join specialties s on d.specialty_id=s.id");
    return rows.rows;
  },
  async findById(id) {
    const result = await pool.query("SELECT * FROM doctor_profiles d  left join specialties s on d.specialty_id=s.id where d.doctor_id = $1", [
     id
    ]);
    
    return result.rows[0];
  },  
  async create(doctorProfile) {
    const {
      user_id,
      full_name,
      specialty_id,
      years_experience,
      clinic_address,
      bio,
      license_number,
      verification_status,
    } = doctorProfile;
    const rows = await pool.query(
      "INSERT INTO doctor_profiles (user_id,full_name,specialty_id,years_experience,clinic_address,bio,license_number,verification_status) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *",
      [
        user_id,
        full_name,
        specialty_id,
        years_experience,
        clinic_address,
        bio,
        license_number,
        verification_status,
      ]
    );
    return rows.rows[0];
  },
  async update(id, doctorProfile) {
    const {
      user_id,
      full_name,
      specialty_id,
      years_experience,
      clinic_address,
      bio,
      license_number,
      verification_status,
    } = doctorProfile;
    const rows = await pool.query(
      "UPDATE doctor_profiles SET user_id=$1,full_name=$2,specialty_id=$3,years_experience=$4,clinic_address=$5,bio=$6,license_number=$7,verification_status=$8 WHERE id=$9 RETURNING *",
      [
        user_id,
        full_name,
        specialty_id,
        years_experience,
        clinic_address,
        bio,
        license_number,
        verification_status,
        id,
      ]
    );
    return rows.rows[0];
  },
  async delete(id) {
    const rows = await pool.query(
      "DELETE FROM doctor_profiles WHERE id=$1 RETURNING *",
      [id]
    );
    return rows.rows[0];
  },
};
