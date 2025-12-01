import pool from "../config/db.js";

export const AppointmentsModel={

    async findAll(){
        const result=await pool.query("SELECT * FROM appointments");
        return result.rows;
    },
    
    async findById(id){
        const result=await pool.query("SELECT * FROM appointments WHERE id=$1",[id]);
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