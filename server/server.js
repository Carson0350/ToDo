const express = require('express');

const db = require('./database/dbConnection.js');

const app = express();

const path = require('path');

app.use(express.json());

// change to port 6969 on deployed proxy
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));
