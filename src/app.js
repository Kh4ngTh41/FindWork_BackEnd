const express = require("express");
<<<<<<< HEAD
require("dotenv").config({ path: "./src/database/.env" });
const routes = require("./route");
const app = express();
const db = require("./database/dbConnection");
const cors = require("cors");
app.use(cors());

db.connectDB();
const port = process.env.PORT;
app.use(express.json());
routes(app);

app.get("/", (req, res) => {
  res.send("hello");
});
=======
const dotenv = require("dotenv");
const routes = require("./routers");
const app = express();
const cors = require("cors");
const Database = require("./config/DatabaseConnection");
const Passport = require("./config/Passport");
dotenv.config();
Database.connectDB();

const port = process.env.PORT;
app.use(cors());
app.use(express.json());
routes(app);
Passport(app);

app.get("/", (req, res) => {
  res.send("HELLO");
});

>>>>>>> 37cce2d532a93b44fba1b3bbdac4807c0e8b4683
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
