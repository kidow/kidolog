require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const {
  PORT: port = 4000,
  HOST: host = '127.0.0.1'
} = process.env

const app = express()

app.listen(port, () => {
  console.log(`App listening on ${host} and PORT ${port}!`);
});