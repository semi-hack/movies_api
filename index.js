const express = require('express')
const bodyParser = require('body-parser');
const router = require('./routes');
const connectDB = require('./db');
const app = express()

require('dotenv').config();
connectDB();
const PORT = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router)

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`)
})