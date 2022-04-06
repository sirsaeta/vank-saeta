import { Router } from "express";
import { create, get } from '../controllers/customerController';
import { body } from 'express-validator';

const customerPrivateRoute = Router();
const customerPublicRoute = Router();

customerPrivateRoute.post(
    '/customer', 
    body("name").notEmpty(), 
    body("code").notEmpty(), 
    body("idTax").isNumeric(), 
    body("currency").isIn(["USD","EUR","CLP"]), 
    body("quotaMonthly").isNumeric(), 
    body("listBanks").isArray(), 
    create
);

customerPublicRoute.get('/customer', get);

customerPublicRoute.put('/customer', get);

export { customerPrivateRoute, customerPublicRoute };