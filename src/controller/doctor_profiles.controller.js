import { DoctorProfilesService } from "../service/doctor_profiles.service.js";
import { catchAsync } from "../utils/catchAsync.js";
import { validate as isUUID } from "uuid";

export const DoctorProfilesController = {
  findAll: catchAsync(async (req, res) => {
    const doctorProfiles = await DoctorProfilesService.findAll();
    if (!doctorProfiles) {
      return res.status(404).json({ error: "Doctor profiles not found" });
    }
    res.status(200).json(doctorProfiles);
  }),

  async findById(req, res) {
    const { id } = req.params;
    try{
      const doctorProfile = await DoctorProfilesService.findById(Number(id));
    if (!doctorProfile) {
      return res.status(404).json({ error: "Doctor profile not found" });
    }
    res.status(200).json(doctorProfile);
  }catch(error){
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
  },

  async create(req, res) {
    const { doctor_profiles } = req.body;
    try{
      const doctorProfile = await DoctorProfilesService.create(doctor_profiles);
      res.status(201).json(doctorProfile);
    }catch(error){
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  async update(req, res) {
    const { id } = req.params;
    const updateProfile = req.body;
    try{
      const doctorProfile = await DoctorProfilesService.update(id, updateProfile);
      res.status(200).json(doctorProfile);
    }catch(error){
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  async delete(req, res) {
    const { id } = req.params;
    try{
      const doctorProfile = await DoctorProfilesService.delete(id);
    if (!doctorProfile) {
      return res.status(404).json({ error: "Doctor profile not found" });
    }
    res.status(204).json(doctorProfile);
  }catch(error){
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
}
