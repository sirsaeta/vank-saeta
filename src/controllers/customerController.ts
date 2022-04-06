import { Response, Request } from "express";
import { validationResult } from 'express-validator';
import { v4 } from "uuid";
import { customerCache } from '../memory/index';

export const create = (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const getCache = customerCache.get("customers");
        if (getCache) {
            const getCustomerCache = JSON.parse(`${getCache}`);
            customerCache.put("customers", JSON.stringify([...getCustomerCache, { id: v4(), ...req.body }]), 10000);
        } else {
            customerCache.put("customers", JSON.stringify([{ id: v4(), ...req.body }]), 10000);
        }
        res.json({
            message: "OK"
        });
    } catch (error) {
        res.json({
            message: "ERROR"
        });
    }
}

export const get = (req: Request, res: Response) => {
    try {
        const getCache = customerCache.get("customers");
        if (getCache) {
            const getCustomerCache = JSON.parse(`${customerCache.get("customers") || ""}`);
            res.json(getCustomerCache);
        } else {
            res.sendStatus(404);
        }
    } catch (error) {
        res.json({
            message: "ERROR"
        });
    }
}