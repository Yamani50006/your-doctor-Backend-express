import { ConsultationsService } from "../service/consultations.service.js";

export const ConsultationsController = {
  async findAll(req, res) {
    try {
      const consultations = await ConsultationsService.findAll();
      if (!consultations) {
        return res.status(404).json({ message: "Consultations not found" });
      }
      res.status(200).json(consultations);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  async findById(req, res) {
    const { id } = req.params;
    try {
      const consultation = await ConsultationsService.findById(id);
      if (!consultation) {
        return res.status(404).json({ message: "Consultation not found" });
      }
      res.status(200).json(consultation);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  async create(req, res) {
    const newConsultation = req.body;
    try {
      const consultation = await ConsultationsService.create(newConsultation);
      res.status(201).json(consultation);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  async update(req, res) {
    const { id } = req.params;
    const updatedConsultation = req.body;
    try {
      const consultation = await ConsultationsService.update(
        id,
        updatedConsultation
      );
      res.status(200).json(consultation);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  async delete(req, res) {
    const { id } = req.params;
    try {
      const consultation = await ConsultationsService.delete(id);
      res.status(204).json(consultation);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
