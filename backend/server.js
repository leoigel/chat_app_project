const express = require('express');
const colors = require("colors");
const dotenv = require("dotenv");
const path = require('path');

const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')

dotenv.config();
const app = express();

app.use(express.json())

app.use('/',authRoutes)
app.use('/',userRoutes)


app.use(express.static(path.resolve(__dirname + '/public')))
app.use(express.static(path.resolve(__dirname + '/uploads')))
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is running ${PORT}`.yellow.bold));