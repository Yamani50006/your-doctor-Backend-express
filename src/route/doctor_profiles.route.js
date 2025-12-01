import express from "express";
import { DoctorProfilesController } from "../controller/doctor_profiles.controller.js";
import { validate } from "../middleware/validate.middleware.js";
import { DoctorProfilesValidation } from "../validation/doctor_profiles.validation.js";

const router = express.Router();

router
  .route("/")
  .get(DoctorProfilesController.findAll)
  .post(
    DoctorProfilesController.create
  );

router
  .route("/:id")
  .get(
   
    DoctorProfilesController.findById
  )
  .put(
    DoctorProfilesController.update
  )
  .delete(
    DoctorProfilesController.delete
  );

export default router;
