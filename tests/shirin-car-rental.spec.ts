import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test.describe('Test suite car-rental', () => {

  test('test 01 get orders', async ({ request }) => {
    const getOrdersResponse = await request.get(' http://localhost:9090/api/v1/orders');
    expect(getOrdersResponse.ok()).toBeTruthy();
    expect(getOrdersResponse.status()).toBe(200);
  });

  test('test 02 get customers', async ({ request }) => {
    const getCustomersResponse = await request.get(' http://localhost:9090/api/v1/customers');
    expect(getCustomersResponse.ok()).toBeTruthy();
    expect(getCustomersResponse.status()).toBe(200);
  });

  test('test 03 get cars', async ({ request }) => {
    const getCarsResponse = await request.get(' http://localhost:9090/api/v1/cars');
    expect(getCarsResponse.ok()).toBeTruthy();
    expect(getCarsResponse.status()).toBe(200);
  });

  test('test 04 create customer', async ({ request }) => {

    const payload = {
      username: faker.internet.userName(),
      name: faker.person.fullName(),
      address: faker.location.streetAddress(),
      email: faker.internet.email(),
      phoneNumber: faker.phone.number()
    }

    const createPostResponse = await request.post('http://localhost:9090/api/v1/addcustomer', {
      data: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' }
    });
    expect(createPostResponse.ok()).toBeTruthy();

  });


  test('test 05 create cars', async ({ request }) => {
    const createPostResponseCars = await request.post('http://localhost:9090/api/v1/addcar', {
      data: {
        "pricePerDay": "45550",
        "fabric": "Toshibanda",
        "model": "C527",
        "registrationNumber": "rC328",
        "isBooked": false
      }
    });
    expect(createPostResponseCars.ok()).toBeTruthy();
    expect(createPostResponseCars.status()).toBe(201);
  });

  test('test 06 updatecustomer', async ({ request }) => {
    const updatecustomerResponse = await request.put('http://localhost:9090/api/v1/updatecustomer', {

      data: {
        "id": 1,
        "username": "robin",
        "name": "ollson",
        "address": "centrum908776",
        "email": "elsisvenson@example.com",
        "phoneNumber": "09876601"
      }
    });
    expect(updatecustomerResponse.ok()).toBeTruthy();
    expect(updatecustomerResponse.status()).toBe(200);
  });
  test('test 07 updatecar', async ({ request }) => {
    const updateCarResponse = await request.put('http://localhost:9090/api/v1/updatecar', {

      data: {
        "id": 1,
        "pricePerDay": 660.0,
        "fabric": "Maazda08",
        "model": "Model20160",
        "registrationNumber": "REG08800",
        "isBooked": true
      }
    });
    expect(updateCarResponse.ok()).toBeTruthy();
    expect(updateCarResponse.status()).toBe(200);
  });
  test('test 08 deletcustomer', async ({ request }) => {
    const deleteCustomerResponse = await request.delete('http://localhost:9090/api/v1/deletecustomer', {

      data: {
        "id": 9,

      }
    });
    expect(deleteCustomerResponse.ok()).toBeTruthy();
    expect(deleteCustomerResponse.status()).toBe(200);
  });
  test('test 09 deletcar', async ({ request }) => {
    const deleteCarResponse = await request.delete('http://localhost:9090/api/v1/deletecar', {

      data: {
        "id": 7,
      }
    });
    expect(deleteCarResponse.ok()).toBeTruthy();
    expect(deleteCarResponse.status()).toBe(200);
  });

  test('test 10 Car already deleted', async ({ request }) => {
    const carAlredydeletedResponse = await request.delete('http://localhost:9090/api/v1/deletecar', {

      data: {
        "id": 7,
      }
    });
    expect(carAlredydeletedResponse.ok()).toBeTruthy();
    expect(carAlredydeletedResponse.status()).toBe(404);
  });



});