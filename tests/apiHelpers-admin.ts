import { APIRequestContext } from "@playwright/test";
import { url_get_orders, url_get_customers, url_create_customer, url_update_customer, url_delete_car } from './Urler';


export class APIHelper {
    private baseUrl: string;
    private url_get_orders: string;
    private url_get_customers: string;
    private url_create_customer: string;
    private url_update_customer: string;
    private delete_car: string;

    constructor(baseUrl: string) {
        this.url_get_orders = url_get_orders;
        this.url_get_customers = url_get_customers;

    }
    //POST;GET;PUT;DELETE
    //Get orders 
    async getOrders(request: APIRequestContext) {
        const respnse = await request.get(`${this.url_get_orders}`)
        return respnse;
    }
    //Get customers
    async getCustomers(request: APIRequestContext) {
        const respnse = await request.get(`${this.url_get_customers}`)
        return respnse;
    }

    //POST

    async createCustomer(request: APIRequestContext, payload:object) {
        const respnse = await request.post(`${this.url_create_customer}`, 
            {data: JSON.stringify(payload)
         })
        return respnse;
    }


}