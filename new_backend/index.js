const express = require('express');
const logger = require('morgan');

const jobsRouter = require('./jobs');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/jobs', jobsRouter);

module.exports = app;

app.listen(8080);
console.log("App listening on port 8080");