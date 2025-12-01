import express from "express";
import { ConsultationsController } from "../controller/consultations.controllers.js";

const consultationsRoute=express.Router();

consultationsRoute.get("/",ConsultationsController.findAll);
consultationsRoute.get("/:id",ConsultationsController.findById);
consultationsRoute.post("/",ConsultationsController.create);
consultationsRoute.put("/:id",ConsultationsController.update);
consultationsRoute.delete("/:id",ConsultationsController.delete);

export default consultationsRoute;
