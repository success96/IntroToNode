const faker = require("Faker");

//const randomName = faker.name.findName();
const randomEmail = faker.internet.email();
const randomCard = faker.Helpers.createCard();

//console.log(randomName);
console.log(randomEmail);
console.log(randomCard);
