import express from "express";
import { SpecialtiesController } from "../controller/specialties.controller.js";
const specialtiesRoute=express.Router();
specialtiesRoute.get("/",SpecialtiesController.findAll);
specialtiesRoute.get("/:id",SpecialtiesController.findById);
specialtiesRoute.post("/",SpecialtiesController.create);
specialtiesRoute.put("/:id",SpecialtiesController.update);
specialtiesRoute.delete("/:id",SpecialtiesController.delete);

export default specialtiesRoute;