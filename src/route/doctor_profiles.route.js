import express from "express";
import { DoctorProfilesController } from "../controller/doctor_profiles.controller.js";
import { validate } from "../middleware/validate.middleware.js";
import { DoctorProfilesValidation } from "../validation/doctor_profiles.validation.js";

const doctorProfilesRouter = express.Router();

// router
//   .route("/")
//   .get(DoctorProfilesController.findAll)
//   .post(
//     DoctorProfilesController.create
//   );

// router
//   .route("/:id")
//   .get(
//     DoctorProfilesController.findById
//   )
//   .put(
//     DoctorProfilesController.update
//   )
//   .delete(
//     DoctorProfilesController.delete
//   );

doctorProfilesRouter.get("/", DoctorProfilesController.findAll);
doctorProfilesRouter.post("/", validate(DoctorProfilesValidation), DoctorProfilesController.create);
doctorProfilesRouter.get("/:id", DoctorProfilesController.findById);
doctorProfilesRouter.put("/:id", validate(DoctorProfilesValidation), DoctorProfilesController.update);
doctorProfilesRouter.delete("/:id", DoctorProfilesController.delete);


export default  doctorProfilesRouter;
