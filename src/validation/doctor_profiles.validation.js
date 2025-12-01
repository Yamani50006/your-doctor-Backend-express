import Joi from "joi";

const createDoctorProfile = {
  body: Joi.object().keys({
    doctor_profiles: Joi.object()
      .keys({
        user_id: Joi.number().integer().required(),
        full_name: Joi.string().required(),
        specialty_id: Joi.number().integer().required(),
        years_experience: Joi.number().integer().required(),
        clinic_address: Joi.string().required(),
        bio: Joi.string().allow("").optional(),
        license_number: Joi.string().required(),
        verification_status: Joi.string()
          .valid("verified", "pending", "rejected")
          .default("pending"),
      })
      .required(),
  }),
};


const updateDoctorProfile = {
  params: Joi.object().keys({
    id: Joi.number().integer().required(),
  }),
  body: Joi.object()
    .keys({
      user_id: Joi.number().integer(),
      full_name: Joi.string(),
      specialty_id: Joi.number().integer(),
      years_experience: Joi.number().integer(),
      clinic_address: Joi.string(),
      bio: Joi.string().allow(""),
      license_number: Joi.string(),
      verification_status: Joi.string().valid(
        "verified",
        "pending",
        "rejected"
      ),
    })
    .min(1),
};

const getDoctorProfile = {
  params: Joi.object().keys({
    id: Joi.number().integer().required(),
  }),
};

const deleteDoctorProfile = {
  params: Joi.object().keys({
    id: Joi.number().integer().required(),
  }),
};

export const DoctorProfilesValidation = {
  createDoctorProfile,
  updateDoctorProfile,
  getDoctorProfile,
  deleteDoctorProfile,
};
