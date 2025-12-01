import express from "express";
import { patient_profilesController } from "../controller/patient_profiles.controller.js";

const patient_profilesRoute=express.Router();

patient_profilesRoute.get("/",patient_profilesController.GetAll);
patient_profilesRoute.get("/:id",patient_profilesController.GetOne);
patient_profilesRoute.post("/",patient_profilesController.create);
patient_profilesRoute.put("/:id",patient_profilesController.update);
patient_profilesRoute.delete("/:id",patient_profilesController.delete);

export default patient_profilesRoute;
