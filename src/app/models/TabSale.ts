import { Sale } from "./sale";

export interface TabSale {
    person_id: number,
    sale: Array<Sale>, 
    total: number
}