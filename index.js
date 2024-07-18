require("dotenv").config();
const express = require("express");
const app = express();

// middleware to parse json bodies
app.use(express.json());

const print = require("./home");
app.get("/home", print);

// post /user route
app.post("/user", function (req, res) {
  const { name, email, password } = req.body; // Destructure the user object from the request body
  console.log(`Name: ${name}, Email: ${email}, password: ${password}`); // Print the name and email
  res
    .status(200)
    .send(
      `user data received: Name: ${name}, Email: ${email}, password: ${password}`
    ); // Send a response back to the client
});

app.listen(process.env.PORT, () => {
  console.log(`Listening to port ${process.env.PORT}`);
});
