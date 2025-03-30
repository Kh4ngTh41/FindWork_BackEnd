const express = require('express');
require('dotenv').config({ path: './src/Database/.env' });
const routes = require('./routers');
const app = express();
const db = require('./Database/dbConnection')
const cors = require("cors");
app.use(cors());

db.connectDB();
const port = process.env.PORT;
app.use(express.json());
routes(app)


  

app.get('/',(req,res) => {
    res.send('hello')
})
app.listen(port, () =>{
    console.log(`Server is running at http://localhost:${port}`);
})