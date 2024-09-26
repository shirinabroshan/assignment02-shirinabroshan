import { faker } from "@faker-js/faker";
export const generateRandomPostpaylod = () => {
    return {
        username: faker.internet.userName(),
        name: faker.person.fullName(),
        address: faker.location.streetAddress(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number()
    }
};
