import { AppointmentsService } from "../service/appointments.service.js";

export const AppointmentsController = {
  async findAll(req, res) {
    try {
      const appointments = await AppointmentsService.findAll();
      if (!appointments) {
        return res.status(404).json({ message: "Appointments not found" });
      }
      res.status(200).json(appointments);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  async findById(req, res) {
    const appointment = await AppointmentsService.findById(req.params.id);
    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }
    res.status(200).json(appointment);
  },
  async create(req, res) {
    const newAppointments = req.body;
    try {
      const appointment = await AppointmentsService.create(newAppointments);
      res.status(201).json(appointment);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  async update(req, res) {
    const { id } = req.params;
    const updatedAppointments = req.body;
    try {
      const appointment = await AppointmentsService.update(
        id,
        updatedAppointments
      );
      res.status(200).json(appointment);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  async delete(req, res) {
    const { id } = req.params;
    try {
      const appointment = await AppointmentsService.delete(id);
      res.status(204).json(appointment);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
