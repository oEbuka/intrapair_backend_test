const express = require('express');
const moment = require('moment');

const app = express();
app.use(express.json());

const getDates = require ("./route/dates")

app.post('/pickup-dates', getDates.Dates);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
