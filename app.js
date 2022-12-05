const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const expressStatusmonitor = require('express-status-monitor');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
app.use(expressStatusmonitor());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(3000, () => {
  console.log('Conectado al puerto 3000');
});
