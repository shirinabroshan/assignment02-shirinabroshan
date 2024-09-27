import { APIRequestContext } from "@playwright/test";
import { url_get_orders, url_get_customers, url_create_customer, url_update_customer, url_delete_car } from './Urler';
import * as testUrl from './Urler';
import { updateCustomerData } from "./FekerData";
export class APIHelper {
    private baseUrl: string;
    private url_get_orders: string;
    private url_get_customers: string;
    private url_create_customer: string;
    private url_update_customer: string;
    private url_delete_car: string;

    constructor(testUrl: string,) {
        this.url_get_orders = url_get_orders;
        this.url_get_customers = url_get_customers;
        this.url_create_customer = url_create_customer;
        this.url_update_customer = url_update_customer;
        this.url_delete_car = url_delete_car;
    }

    //Get Orders 
    async getOrders(request: APIRequestContext) {
        const respnse = await request.get(`${this.url_get_orders}`)
        return respnse;
    }

    //Get customers
    async getCustomers(request: APIRequestContext) {
        const response = await request.get(`${this.url_get_customers}`)
        return response;
    }

    //POST
    async createCustomer(request: APIRequestContext, payload: object) {
        const response = await request.post(`${this.url_create_customer}`, {
            data: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
        });
        return response;
    }

    //PUT
    async updateCustomer(request: APIRequestContext, payload: object) {
        const response = await request.put(`${this.url_update_customer}`, {
            data: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
        });
        return response;
    }

    //DELETE
    async deleteCar(request: APIRequestContext, payload: object) {
        const response = await request.delete(`${this.url_delete_car}`, {
            data: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
        });
        return response;
    }

}
