import { Router } from "express";
import { get } from '../controllers/invoiceController';

const invoicePrivateRoute = Router();
const invoicePublicRoute = Router();

invoicePublicRoute.get('/invoice', get);

export { invoicePrivateRoute, invoicePublicRoute };