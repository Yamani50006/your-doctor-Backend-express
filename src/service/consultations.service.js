import { ConsultationsModel } from "../model/consultations.model.js";

export const ConsultationsService={
    async findAll(){
        return await ConsultationsModel.findAll();
    },
    async findById(id){
        return await ConsultationsModel.findById(id);
    },
    async create(consultation){
        return await ConsultationsModel.create(consultation);
    },
    async update(id,consultation){
        return await ConsultationsModel.update(id,consultation);
    },
    async delete(id){
        return await ConsultationsModel.delete(id);
    },
}
