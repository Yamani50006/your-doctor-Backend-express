import { SpecialtiesModel } from "../model/specialties.model.js";

export const SpecialtiesService={

    async findAll(){
        const result=await SpecialtiesModel.findAll();
        return result;
    },
    async findById(id){
        const result=await SpecialtiesModel.findById(id);
        return result;
    },
    async create(specialty){
        const result=await SpecialtiesModel.create(specialty);
        return result;
    },
    async update(id,specialty){
        const result=await SpecialtiesModel.update(id,specialty);
        return result;
    },
    async delete(id){
        const result=await SpecialtiesModel.delete(id);
        return result;
    },
    
}