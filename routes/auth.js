import express from "express";
import * as controllers from "../controllers/authControllers.js";

const authRouter = express.Router();

authRouter.post("/signup", controllers.signUp);



export default authRouter;
