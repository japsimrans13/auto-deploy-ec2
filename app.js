// express boilerplate code
const express = require('express');
const app = express();
const port = 3000;



app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

// start the server
app.listen(port, () => {
    console.log("This is new commit 2");
    console.log(`Example app listening at http://localhost:${port}`);
    }
);


