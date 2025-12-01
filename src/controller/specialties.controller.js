import { SpecialtiesService } from "../service/specialties.service.js";

export const SpecialtiesController={
    
    async findAll(req,res){
        try {
            const result=await SpecialtiesService.findAll();
            if(!result){
                return res.status(404).json({message:"Not found"});
            }
            res.status(200).json(result);
        } catch (error) {
            return res.status(500).json({message:error.message});
        }
    },
    async findById(req,res){
        const {id}=req.params;
        try {
            const result=await SpecialtiesService.findById(id);
            if(!result){
                return res.status(404).json({message:"Not found"});
            }
            res.status(200).json(result);
        } catch (error) {
            return res.status(500).json({message:error.message});
        }
    },
    async create(req,res){
        const specialties=req.body;
        try {
            const result=await SpecialtiesService.create(specialties);
            if(!result){
                return res.status(404).json({message:"Not found"});
            }
            res.status(201).json(result);
        } catch (error) {
            return res.status(500).json({message:error.message});
        }
    },
    async update(req,res){
        const {id}=req.params;
        const specialties=req.body;
        try {
            const result=await SpecialtiesService.update(id,specialties);
            if(!result){
                return res.status(404).json({message:"Not found"});
            }
            res.status(200).json(result);
        } catch (error) {
            return res.status(500).json({message:error.message});
        }
    },
    async delete(req,res){
        const {id}=req.params;
        try {
            const result=await SpecialtiesService.delete(id);
            if(!result){
                return res.status(404).json({message:"Not found"});
            }
            res.status(204).json(result);
        } catch (error) {
            return res.status(500).json({message:error.message});
        }
    },  
}