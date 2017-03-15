const express = require('express');
const path = require('path');
const app = express();

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build'), { maxAge: 31557600000 }));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '/../build', 'index.html'));
});

app.listen(3000);