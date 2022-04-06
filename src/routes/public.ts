import { Router } from "express";
import { customerPublicRoute } from "./customerRoute";
import { invoicePublicRoute } from "./invoiceRoute";

const publicRoute = Router();

publicRoute.use('/public', [customerPublicRoute, invoicePublicRoute] );

export { publicRoute };