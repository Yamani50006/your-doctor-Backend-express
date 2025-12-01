import {patient_profilesModel} from "../model/patient_profiles.model.js";


export const patient_profilesService={
    async getAll(){
        return await patient_profilesModel.getAll();
    },
    async GetOne(id){
        return await patient_profilesModel.GetOne(id);
    },
    async create(data){
        return await patient_profilesModel.create(data);
    },
    async update(id,data){
        return await patient_profilesModel.update(id,data);
    },
    async delete(id){
        return await patient_profilesModel.delete(id);
    }
}