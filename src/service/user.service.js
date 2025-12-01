import {userModel} from "../model/user.model.js";
export const userService ={

    async  findAll(){
        const result=await userModel.findAll();
        return result;
    },
    async  findOne(id){
        const result=await userModel.findById(id);
        return result;
    },
    async  create(user){
        const result=await userModel.createUsers(user);
        return result;
    },
    async  update(id,user){
        const result=await userModel.updateUsers(id,user);
        return result;
    },
    async  delete(id){
        const result=await userModel.deleteUsers(id);
        return result;
    },
    async  login(login){
        const result=await userModel.login(login);
        return result;
    },
    
}