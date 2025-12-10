import pool from "../config/db.js";

export const AppointmentsModel={

    async findAll(){
        const result=await pool.query('SELECT  a.id AS appointment_id,  a.patient_id,a.doctor_id, a.scheduled_at::date AS date,a.scheduled_at AS time,a.status,a.type,a.created_at AS appointment_created_at,dp.id AS doctor_profile_id, dp.full_name AS doctor_name,u.email AS doctor_email,u.phone AS doctor_phone,u.role AS doctor_role,s.name AS specialization,dp.qualifications,dp.years_experience,dp.rating,dp.reviews_count,dp.consultation_fee,dp.bio,dp.languages,dp.is_verified,dp.created_at AS doctor_created_at FROM appointments a JOIN doctor_profiles dp ON dp.id = a.doctor_id JOIN users u ON u.id = dp.user_id LEFT JOIN specialties s ON s.id = dp.specialty_id ORDER BY a.scheduled_at ASC');
        return result.rows;
    },
    
    async findById(id){
        const result=await pool.query("SELECT  a.id AS appointment_id,  a.patient_id,a.doctor_id, a.scheduled_at::date AS date,a.scheduled_at AS time,a.status,a.type,a.created_at AS appointment_created_at,dp.id AS doctor_profile_id, dp.full_name AS doctor_name,u.email AS doctor_email,u.phone AS doctor_phone,u.role AS doctor_role,s.name AS specialization,dp.qualifications,dp.years_experience,dp.rating,dp.reviews_count,dp.consultation_fee,dp.bio,dp.languages,dp.is_verified,dp.created_at AS doctor_created_at FROM appointments a JOIN doctor_profiles dp ON dp.id = a.doctor_id JOIN users u ON u.id = dp.user_id LEFT JOIN specialties s ON s.id = dp.specialty_id WHERE a.id = $1",[id]);
        return result.rows[0];
    },
    
    async create(appointment){
        const {patient_id,doctor_id,scheduled_at,duration_minutes,type,status}=appointment;
        const result=await pool.query("INSERT INTO appointments (patient_id,doctor_id,scheduled_at,duration_minutes,type,status) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *",[patient_id,doctor_id,scheduled_at,duration_minutes,type,status]);
        return result.rows[0];
    },
    
    async update(id,appointment){
        const {patient_id,doctor_id,scheduled_at,duration_minutes,type,status}=appointment;
        const result=await pool.query("UPDATE appointments SET patient_id=$1,doctor_id=$2,  scheduled_at=$3,duration_minutes=$4,type=$5,status=$6 WHERE id=$7 RETURNING *",[patient_id,doctor_id,scheduled_at,duration_minutes,type,status,Number(id)]);
        return result.rows[0];
    },
    
    async delete(id){
        const result=await pool.query("DELETE FROM appointments WHERE id=$1 RETURNING *",[Number(id)]);
        return result.rows[0];
    },
    
}   