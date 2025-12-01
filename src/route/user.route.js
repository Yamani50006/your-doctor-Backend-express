import { userController } from "../controller/user.controller.js";
import express from "express";
    const userRoute=express.Router();
    userRoute.get("/",userController.findAll);
    userRoute.get("/:id",userController.findOne);
    userRoute.post("/",userController.create);
    userRoute.put("/:id",userController.update);
    userRoute.delete("/:id",userController.delete);
    userRoute.post("/login",userController.login);

export default userRoute;
