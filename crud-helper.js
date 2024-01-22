require("dotenv").config();
require("./config/database");

// Require the Mongoose models
// const User = require("./models/userModels");
// const Item = require('./models/item');
// const Category = require('./models/category');
// const Order = require('./models/order');
const main = async () => {
  var jwt = require("jsonwebtoken");
  const payload = { foo: "bar" };
  const secret = "shhhhh";
  const options = { expiresIn: "1m" };
  var token = jwt.sign(payload, secret, options);
  console.log(token);
};

main();
