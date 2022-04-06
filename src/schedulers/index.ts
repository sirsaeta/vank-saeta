import { scheduleJob, RecurrenceRule } from "node-schedule";
import Axios from "axios";
import { invoiceCache } from '../memory/index';

const rule = new RecurrenceRule();
rule.hour = 0;
rule.tz = 'Etc/UTC';

export const job = scheduleJob(rule, async function () {
    const csv = await Axios.get("https://gist.githubusercontent.com/rogelio-meza-t/f70a484ec20b8ea43c67f95a58597c29/raw/41f289c605718e923fc1fad0539530e4d0413a90/invoices.csv")
    if (csv) {
        let invoice = csvJSON(csv.data);
        invoiceCache.put("invoices", JSON.stringify([invoice]), 600000);
    }
});

const csvJSON = (csvStr: String) => {
    let lines=csvStr.split("\n");
    let result = [];
  
    for(let i=1;i<lines.length;i++){
        let currentline=lines[i].split(",");
        let obj = {
            id: currentline[0],
            idVendor: currentline[1],
            number: currentline[2],
            date: currentline[3],
            total: currentline[4],
            paymentTotal: currentline[5],
            creditTotal: currentline[6],
            idBank: currentline[7],
            dueDate: currentline[8],
            paymentDate: currentline[9],
            currency: currentline[10],
        }
  
        result.push(obj);
  
    }
    return result;
  }