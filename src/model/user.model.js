import pool from "../config/db.js";
export const userModel={

  async  findAll(){
    const result=await pool.query("SELECT * FROM users");
    return result.rows;
 },

 async  findById(id){
    const result=await pool.query("SELECT * FROM users WHERE id=$1",[id]);
    if(result.rows.length==0){
        return null;
    }
    return result.rows[0];
 },

 async  findByEmail(email){
    const result=await pool.query("SELECT * FROM users WHERE email=$1",[email]);
    return result.rows[0];
 },

 async  createUsers(user){
    const {email,phone,password_hash,role,is_active,created_at,updated_at}=user;
    const result=await pool.query("INSERT INTO users (email,phone,password_hash,role,is_active,created_at,updated_at) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *",[email,phone,password_hash,role,is_active,created_at,updated_at]);
    return result.rows[0];
 },

 async  updateUsers(id,user){
    const {email,phone,password_hash,role,is_active,created_at,updated_at}=user;
    const result=await pool.query("UPDATE users SET email=$1,phone=$2,password_hash=$3,role=$4,is_active=$5,created_at=$6,updated_at=$7 WHERE id=$8 RETURNING *",[email,phone,password_hash,role,is_active,created_at,updated_at,id]);
    return result.rows[0];
 },

 async  deleteUsers(id){
    const result=await pool.query("DELETE FROM users WHERE id=$1",[id]);
    return result.rows[0];
 },

 async login(login){
   const {email,password}=login;
    const result=await pool.query("SELECT * FROM users WHERE email=$1 AND password=$2",[email,password]);
    return result.rows[0];
 },

}
