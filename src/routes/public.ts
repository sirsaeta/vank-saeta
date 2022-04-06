import { Router } from "express";
import { customerPublicRoute } from "./customerRoute";

const publicRoute = Router();

publicRoute.use('/public', customerPublicRoute );

export { publicRoute };