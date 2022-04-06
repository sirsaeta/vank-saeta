import { Response, Request } from "express";
import {Cache} from "memory-cache";
import { validationResult } from 'express-validator';

const customerCache = new Cache();
//customerCache.put("customer","[]", 1000)

export const create = (req:Request, res:Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
        customerCache.put("customers",JSON.stringify(req.body),10000);
        res.json({
            message: "OK"
        });
    } catch (error) {
        res.json({
            message: "ERROR"
        });
    }
}

export const get = (req:Request, res:Response) => {
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

export { customerCache };