const express = require("express");
const faker = require("@faker-js/faker");

const port = 5000;
const app = express();
const server = app.listen(port, () => {
  console.log(`this serveur is working right now ${port}`);
});

// app.get("/api", (req, res) => {
//   res.send("hello /api is work thats great ");
// });
// we can create a function to return a random / fake "Product"
const user = () => {
  const newFake = {
    firstName: faker.person.fullName({ firstName: "Joann" }),
    lastName: faker.person.fullName({ lastName: "Beer" }),
    password: faker.internet.password(),
    email: faker.email.text("joannBeer@faker.com"),
    phoneNumber: faker.phone.imei("+16355478965"),
    id: faker.id.number(55),
  };
  const url = app.listen("/api/user/new", (req, res) => {
    return newFakeProduct;
  });
  return newFake;
};
const company = () => {
  const newCompany = {
    _id: faker.id.number(100),
    name: faker.company.name("dojo"),
    address: faker.location.streetAddress("tchno pol ghzela"),
  };
  return newCompany;
};
const newFakeProduct = createProduct();
console.log(newFakeProduct);
/*
 * The output of the above console log will look like this
 * {
 *   name: 'Anime Figure',
 *   price: '$568.00
 *   department: 'Tools'
 * }
 */
