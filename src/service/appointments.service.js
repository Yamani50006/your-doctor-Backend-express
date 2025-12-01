import { AppointmentsModel } from "../model/appointments.model.js";

export const AppointmentsService={
    async findAll(){
        return await AppointmentsModel.findAll();
    },
    async findById(id){
        return await AppointmentsModel.findById(id);
    },
    async create(appointment){
        return await AppointmentsModel.create(appointment);
    },
    async update(id,appointment){
        return await AppointmentsModel.update(id,appointment);
    },
    async delete(id){
        return await AppointmentsModel.delete(id);
    },
}
