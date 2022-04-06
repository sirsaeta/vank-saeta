import { Router } from "express";
import { create, get } from '../controllers/customerController';
import { body } from 'express-validator';

const customerPrivateRoute = Router();
const customerPublicRoute = Router();

customerPrivateRoute.post(
    '/', 
    body("name").notEmpty(), 
    body("code").notEmpty(), 
    body("idTax").isNumeric(), 
    body("idCurrency").isNumeric(), 
    body("quotaMonthly").isNumeric(), 
    body("listBanks").isArray(), 
    create
);

customerPublicRoute.get('/', get);

customerPublicRoute.get('/a', (req, res) => {
    res.send('Express + TypeScript Server aa');
});

export { customerPrivateRoute, customerPublicRoute };