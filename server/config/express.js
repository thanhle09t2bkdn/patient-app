const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const morgan = require('morgan');
const busboy = require('connect-busboy');
const cors = require('cors');
const Util = require('../helpers/Util');
const config = require('./index');

// app.use(busboy());

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Setup logger
if (config.env === 'development') {
    app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
}


require('../routes')(app);


// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', '..', 'uploads'), { maxAge: 31557600000 }));

module.exports = app;