// server/index.js

const app = require('./app');
const config = require('./config/env');

const PORT = config.port || 9000;

app.listen(config.port, () => {
	console.log(`App listening on port ${PORT}!`);
});
