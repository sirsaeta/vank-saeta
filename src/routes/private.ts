import { Router } from "express";
import { customerPrivateRoute } from "./customerRoute";

const privateRoute = Router();

privateRoute.use('/private', customerPrivateRoute);

export { privateRoute };