import { Call } from "../model/call";
import { Customer } from "../model/customer";

export const callsData: Call[] = [
    { customerId: 1, name: "Mr Eren Yaeger", date: new Date("01/21/2022"), callStatus: "Completed", type: "Service" },
    { customerId: 2, name: "Mrs Mikasa Ackerman", date: new Date("04/29/2021"), callStatus: "New", type: "Service" },
    { customerId: 3, name: "Mr Levi Ackerman", date: new Date("06/13/2021"), callStatus: "New", type: "Sales" },
    { customerId: 4, name: "Miss Historia Reiss", date: new Date("09/07/2021"), callStatus: "In use", type: "Sales" },
    { customerId: 5, name: "Miss Ymir Fritz", date: new Date("03/02/2022"), callStatus: "In use", type: "Service" }
]

export const customersData: Customer[] = [
    { id: 1, title: "Mr", firstName: "Eren", surName: "Yaeger", mobile: "0412345678", home: "0387654321" },
    { id: 2, title: "Mrs", firstName: "Mikasa", surName: "Ackerman", mobile: "0412345678", home: "0387654321" },
    { id: 3, title: "Mr", firstName: "Levi", surName: "Ackerman", mobile: "0412345678", home: "0387654321" },
    { id: 4, title: "Miss", firstName: "Historia", surName: "Reiss", mobile: "0412345678", home: "0387654321" },
    { id: 5, title: "Miss", firstName: "Ymir", surName: "Fritz", mobile: "0412345678", home: "0387654321" },
]