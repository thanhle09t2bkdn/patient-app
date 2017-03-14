// server/index.js

const app = require('./app');
const config = require('./config');

const PORT = config.port || 9000;

app.listen(config.port, () => {
	console.log(`App listening on port ${PORT}!`);
});
