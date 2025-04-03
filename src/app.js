const express = require("express");
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
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
