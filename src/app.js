import express from "express";
import userRoute from "./route/user.route.js";
import appointmentsRoute from "./route/appointments.route.js";
import consultationsRoute from "./route/consultations.route.js";
import doctorProfilesRouter from "./route/doctor_profiles.route.js";
import { errorHandler } from "./middleware/error.middleware.js";
import patient_profilesRoute from "./route/patient_profiles.route.js";
import specialtiesRoute from "./route/specialties.route.js";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3000;
const url = "/api/v1";

app.use(cors({
    origin:"*",
    methods:"*",
    allowedHeaders:"*"
}));
// router
app.use(`${url}/user`, userRoute);
app.use(`${url}/appointments`, appointmentsRoute);
app.use(`${url}/consultations`, consultationsRoute);
app.use(`${url}/doctor-profiles`, doctorProfilesRouter);
app.use(`${url}/patient-profiles`, patient_profilesRoute);
app.use(`${url}/specialties`, specialtiesRoute);
// Error Handler
app.use(errorHandler);

export default app;
