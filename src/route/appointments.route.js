import { AppointmentsController } from "../controller/appoinments.controller.js";
import express from "express";

const appointmentsRouter=express.Router();
appointmentsRouter.get("/",AppointmentsController.findAll);
appointmentsRouter.get("/:id",AppointmentsController.findById);
appointmentsRouter.post("/",AppointmentsController.create);
appointmentsRouter.put("/:id",AppointmentsController.update);
appointmentsRouter.delete("/:id",AppointmentsController.delete);

export default appointmentsRouter;
