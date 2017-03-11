const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const morgan = require('morgan');
const multer  = require('multer')


app.use(multer({ dest: __dirname + '../uploads/'}).any());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

require('../routes')(app);
app.get('/', (req, res) => res.status(200).send({
	message: 'Welcome to the beginning of nothingness.',
}));


// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', '..', 'uploads'), { maxAge: 31557600000 }));

module.exports = app;