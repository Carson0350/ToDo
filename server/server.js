const express = require('express');

// const db = require('./database/dbConnection.js');

const app = express();

const path = require('path');

const router = require('./routes/routes.js');

app.use(express.json());

app.use('/', router);

const PORT = 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
