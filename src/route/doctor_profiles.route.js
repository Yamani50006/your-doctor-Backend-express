import express from "express";
import { DoctorProfilesController } from "../controller/doctor_profiles.controller.js";
import { validate } from "../middleware/validate.middleware.js";
import { DoctorProfilesValidation } from "../validation/doctor_profiles.validation.js";

const router = express.Router();

router
  .route("/")
  .get(DoctorProfilesController.findAll)
  .post(
    validate(DoctorProfilesValidation.createDoctorProfile),
    DoctorProfilesController.create
  );

router
  .route("/:id")
  .get(
    validate(DoctorProfilesValidation.getDoctorProfile),
    DoctorProfilesController.findById
  )
  .put(
    validate(DoctorProfilesValidation.updateDoctorProfile),
    DoctorProfilesController.update
  )
  .delete(
    validate(DoctorProfilesValidation.deleteDoctorProfile),
    DoctorProfilesController.delete
  );

export default router;
