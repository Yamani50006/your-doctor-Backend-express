import { DoctorProfilesModel } from "../model/doctor_profiles.model.js";

export const DoctorProfilesService={
    async findAll(){
        return await DoctorProfilesModel.findAll();
    },
    async findById(id){
        return await DoctorProfilesModel.findById(id);
    },
    async create(doctorProfile){
        return await DoctorProfilesModel.create(doctorProfile);
    },
    async update(id,doctorProfile){
        return await DoctorProfilesModel.update(id,doctorProfile);
    },
    async delete(id){
        return await DoctorProfilesModel.delete(id);
    }
}