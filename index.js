const express = require('express')
const bodyParser = require('body-parser');
const router = require('./routes');
const connectDB = require('./db');

require('dotenv').config();
connectDB();
const PORT = process.env.PORT || 3000

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router)

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`)
})