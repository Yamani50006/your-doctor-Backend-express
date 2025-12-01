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

  findById: catchAsync(async (req, res) => {
    const { id } = req.params;
    try{
      const doctorProfile = await DoctorProfilesService.findById(id);
    if (!doctorProfile) {
      return res.status(404).json({ error: "Doctor profile not found" });
    }
    res.status(200).json(doctorProfile);
  }catch(error){
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
  }),

  create: catchAsync(async (req, res) => {
    const { doctor_profiles } = req.body;
    const doctorProfile = await DoctorProfilesService.create(doctor_profiles);
    res.status(201).json(doctorProfile);
  }),

  update: catchAsync(async (req, res) => {
    const { id } = req.params;
    const updateProfile = req.body;
    const doctorProfile = await DoctorProfilesService.update(id, updateProfile);
    if (!doctorProfile) {
      return res.status(404).json({ error: "Doctor profile not found" });
    }
    res.status(200).json(doctorProfile);
  }),

  delete: catchAsync(async (req, res) => {
    const { id } = req.params;
    const doctorProfile = await DoctorProfilesService.delete(id);
    if (!doctorProfile) {
      return res.status(404).json({ error: "Doctor profile not found" });
    }
    res.status(204).json(doctorProfile);
  }),
};
