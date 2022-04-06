import { Response, Request } from "express";
import { invoiceCache } from "../memory";
import { Invoice } from '../intefaces/customer';

export const get = (req: Request, res: Response) => {
    try {
        console.log(req.query)
        const getCache = invoiceCache.get("invoices");
        if (getCache) {
            const getInvoiceCache: Invoice[] = JSON.parse(`${getCache}`);
            res.json(getInvoiceCache);
        } else {
            res.sendStatus(404);
        }
    } catch (error) {
        res.json({
            message: "ERROR"
        });
    }
}