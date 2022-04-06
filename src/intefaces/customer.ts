export interface InputCustomer {
    name: String;
    code: String;
    idTax: number;
    currency: "USD" | "EUR" | "CLP";
    quotaMonthly: number;
    listBanks: number[];
}

export interface ModelCustomer extends InputCustomer {
    id: String;
}

export interface ModelBank {
    id: String;
    name: String;
}

export interface Invoice {
    id: String;
    idVendor: String;
    number: number;
    date: Date;
    total: number;
    paymentTotal: number;
    creditTotal: number;
    idBank: String;
    dueDate: Date;
    paymentDate: Date;
    currency: "USD" | "EUR" | "CLP";
}