import pool from "../config/db.js";

export const patient_profilesModel={

    async getAll(){

        try{
            const result= await pool.query("SELECT * FROM patient_profiles  join users on patient_profiles.user_id=users.id");
            if(result.rows.length===0){
                return null;
            }
            return result.rows;
        }
        catch(error){
            console.log(error);
            return null;
        }
    },

    async GetOne(id){
        
        try{
            const result= await pool.query("SELECT * FROM patient_profiles  join users on patient_profiles.user_id=users.id where patient_profiles.id=$1",[id]);
            if(result.rows.length===0){
                return null;
            }
            return result.rows[0];
        }
        catch(error){
            return error;
        }
    }
    ,

    async  create(data){
        const {user_id,full_name,gender,date_of_birth,blood_type,chronic_diseases,allergies}=data;
        try{    
            const result= await pool.query("INSERT INTO patient_profiles (user_id,full_name,gender,date_of_birth,blood_type,chronic_diseases,allergies) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *",[user_id,full_name,gender,date_of_birth,blood_type,chronic_diseases,allergies]);
            return result.rows[0];
        }
        catch(error){
            return error;
        }
    }
    ,
    async update(id,data){
        
        const {user_id,full_name,gender,date_of_birth,blood_type,chronic_diseases,allergies}=data;
        try{    
            const result= await pool.query("UPDATE patient_profiles SET user_id=$1,full_name=$2,gender=$3,date_of_birth=$4,blood_type=$5,chronic_diseases=$6,allergies=$7 WHERE id=$8 RETURNING *",[user_id,full_name,gender,date_of_birth,blood_type,chronic_diseases,allergies,id]);
            return result.rows[0];
        }
        catch(error){
            return error;
        }
    }
    ,
    async delete(id){
      
        try{
            const result= await pool.query("DELETE FROM patient_profiles WHERE id=$1 RETURNING *",[id]);
            return result.rows[0];
        }
        catch(error){
            return error;
        }
    }
}