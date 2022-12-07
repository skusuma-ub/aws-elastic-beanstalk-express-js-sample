const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('CPSC-571-FALL-2022_NEW'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
