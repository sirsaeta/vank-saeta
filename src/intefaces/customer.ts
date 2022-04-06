export interface InputCustomer {
    name: String;
    code: String;
    idTax: number;
    currency: "USD" | "EUR" | "CLP";
    quotaMonthly: number;
    listBanks: number[];
}

export interface ModelCustomer extends InputCustomer {
    id: number;
}

export interface ModelBank {
    id: number;
    name: String;
}