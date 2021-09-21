const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Hello from the server");
});

app.listen(3000, (err) => {
    if (err) {
        console.log("Error in running the server", err);
    }
    console.log(`Server is running the on port `);
});