import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { APIHelper } from './apiHelpers-admin';
import * as testUrl from './Urler';
import { createnewcar, deletecarid, deletecustomeridF, generateRandomPostpaylod, updatecarF, updateCustomerData } from './FekerData';
import { APIHelperCustomer } from './apihelper-customer';

test.describe('Test suite car-rental', () => {

  test('test 01 get orders-VG', async ({ request }) => {
    const apiHelper = new APIHelper(testUrl.url_get_orders);
    const getOrders = await apiHelper.getOrders(request);
    expect(getOrders.ok()).toBeTruthy();
  });

  test('test 02 get customers-VG', async ({ request }) => {
    const apiHelper = new APIHelper(testUrl.url_get_customers);
    const getCustomers = await apiHelper.getCustomers(request);
    expect(getCustomers.status()).toBe(200);
  });
  test('test 03 get cars-VG', async ({ request }) => {
    const apiHelper = new APIHelperCustomer(testUrl.url_get_cars);
    const getcars = await apiHelper.getCars(request);
    expect(getcars.ok()).toBeTruthy();
  });

  test('test 04 create customer-VG', async ({ request }) => {
    const apiHelper = new APIHelper(testUrl.url_create_customer);
    const payload = generateRandomPostpaylod();
    const createCustomerResponse = await apiHelper.createCustomer(request, payload);
    expect(createCustomerResponse.status()).toBe(201);
  });

  test('test 05 create car-VG', async ({ request }) => {
    const apiHelper = new APIHelper(testUrl.url_create_car);
    const payload = createnewcar();
    const createCarResponse = await apiHelper.createCar(request, payload);
    expect(createCarResponse.status()).toBe(201);
  });

  test('test 06 updatecustomer-VG', async ({ request }) => {
    const apiHelper = new APIHelper(testUrl.url_update_customer);
    const payload = updateCustomerData();

    // Uppdatera kunden
    const updatecustomerResponse = await apiHelper.updateCustomer(request, payload);
    expect(updatecustomerResponse.ok()).toBeTruthy();
    expect(updatecustomerResponse.status()).toBe(200);

    //  Kontrollera att uppdaterad kund matchar payload
    const updatedCustomer = await updatecustomerResponse.json();
    expect(updatedCustomer).toMatchObject(
      expect.objectContaining({
        name: payload.name,
        username: payload.username,
        address: payload.address,
        email: payload.email,
        phoneNumber: payload.phoneNumber,
        id: payload.id
      })
    );
    const responseAllCustomers = await apiHelper.getCustomers(request);
    expect(responseAllCustomers.ok()).toBeTruthy();
    const allCustomers = await responseAllCustomers.json();
    expect(allCustomers).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: payload.name,
          username: payload.username,
          address: payload.address,
          email: payload.email,
          phoneNumber: payload.phoneNumber,
          id: payload.id
        })
      ])
    );
  });

  test('test 07 updatecar-VG', async ({ request }) => {
    const apiHelper = new APIHelper(testUrl.url_update_car);
    const payload = updatecarF();
    // Uppdatera bilen
    const updateCarResponse = await apiHelper.updateCarH(request, payload);
    expect(updateCarResponse.status()).toBe(200);

    // Kontrollera att den uppdaterade bilen matchar 
    const updatedCar = await updateCarResponse.json();
    expect(updatedCar).toMatchObject(
      expect.objectContaining({
        id: 2,
        pricePerDay: -1093,
        fabric: "Nissan",
        model: "Life",
        registrationNumber: payload.registrationNumber,
        isBooked: false
      })
    );
    //  Hämta alla bilar 
    const apiHelperCar = new APIHelperCustomer(testUrl.url_get_cars);
    const getcars = await apiHelperCar.getCars(request);
    expect(getcars.ok()).toBeTruthy();

    const getCars = await getcars.json();
    expect(getCars).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: 2,
          pricePerDay: -1093,
          fabric: "Nissan",
          model: "Life",
          registrationNumber: payload.registrationNumber,
          isBooked: false
        })
      ])
    );
  });

  test('test 08 delete customer-VG', async ({ request }) => {
    const apiHelper = new APIHelper(testUrl.url_delete_customer);
    const payload = deletecustomeridF();

    const deleteCustomerResponse = await apiHelper.deleteCustomerH(request, payload);

    expect(deleteCustomerResponse.ok()).toBeTruthy();
    expect(deleteCustomerResponse.status()).toBe(200);
  });


  test('test 09 delete car-VG', async ({ request }) => {
    const apiHelper = new APIHelperCustomer(testUrl.url_get_cars);
    const getcars = await apiHelper.getCars(request);

    const apiHelperdelet = new APIHelper(testUrl.url_delete_car);
    const payload = deletecarid();
    const deletcaridResponse = await apiHelperdelet.deleteCar(request, payload);
    // expect(deletcaridResponse.ok()).toBeTruthy();
    expect(deletcaridResponse.status()).toBe(200);
  });


  test('test 10 delete car-VG', async ({ request }) => {
    const apiHelper = new APIHelper(testUrl.url_delete_car);
    const payload = deletecarid();
    const deletcaridResponse = await apiHelper.deleteCar(request, payload);

    expect(deletcaridResponse.status()).toBe(404);
    expect(await deletcaridResponse.text()).toContain("Not Found");
  });


});




