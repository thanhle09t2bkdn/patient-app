const express = require('express');
const bodyParser = require('body-parser');
const routes = require('../routes/IndexRoute');
const app = express();
const path = require('path');
const morgan = require('morgan');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

app.use('/api', routes);

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', '..', 'build')));
app.get('/app', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', '..', 'build', 'index.html'));
});

module.exports = app;