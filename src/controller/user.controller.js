import { userService } from "../service/user.service.js";

export const userController = {
  async findAll(req, res) {
    try {
      const result = await userService.findAll();
      if (!result) {
        return res.status(404).json({ message: "Not found" });
      }
      res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async findOne(req, res) {
    const { id } = req.params;
    try {
      const result = await userService.findOne(id);
      if (!result) {
        return res.status(404).json({ message: "Not found" });
      }
      res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async create(req, res) {
    const user = req.body;
    try {
      const result = await userService.create(user);
      if (!result) {
        return res.status(404).json({ message: "Not found" });
      }
      res.status(201).json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async update(req, res) {
    const { id } = req.params;
    const user = req.body;
    try {
      const result = await userService.update(id, user);
      if (!result) {
        return res.status(404).json({ message: "Not found" });
      }
      res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async delete(req, res) {
    const { id } = req.params;
    try {
      const result = await userService.delete(id);
      if (!result) {
        return res.status(404).json({ message: "Not found" });
      }
      res.status(204).json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async login(req, res) {
    const login = req.body;
    try {
      const result = await userService.login(login);
      if (result.rows.length === 0) {
        return res.status(404).json({ message: "Not found" });
      }
      res.status(200).json(result.rows[0]);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
