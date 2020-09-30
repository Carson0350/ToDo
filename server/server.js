const express = require('express');

// const db = require('./database/dbConnection.js');

const app = express();

const path = require('path');

app.use(express.json());

const PORT = 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
