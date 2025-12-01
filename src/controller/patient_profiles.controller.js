import {patient_profilesService} from "../service/patient_profiles.service.js";


export const patient_profilesController={
    async GetAll(req,res){
        try{
            const result=await patient_profilesService.getAll();
            if(!result){
                return res.status(404).json({error:"No data found"});
            }
            res.status(200).json(result);
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    },
    async GetOne(req,res){
        const {id}=req.params;
        try{
            const result=await patient_profilesService.GetOne(id);
            if(!result){
                return res.status(404).json({error:"No data found"});
            }
            res.status(200).json(result);
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    },
    async create(req,res){
        const patient_profiles=req.body;
        try{
            const result=await patient_profilesService.create(patient_profiles);
            if(!result){
                return res.status(404).json({error:"No data found"});
            }
            res.status(200).json(result);
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    },
    async update(req,res){
        const {id}=req.params;
         const patient_profiles=req.body;
        try{
            const result=await patient_profilesService.update(id,patient_profiles);
            if(!result){
                return res.status(404).json({error:"No data found"});
            }
            res.status(200).json(result);
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    },
    async delete(req,res){
        const {id}=req.params;
        try{
            const result=await patient_profilesService.delete(id);
            if(!result){
                return res.status(404).json({error:"No data found"});
            }
            res.status(200).json(result);
        }
        catch(error){
            res.status(500).json({error:error.message});
        }
    }    
}
