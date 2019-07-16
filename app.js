const express = require('express');
const app = express();
const port = 3000;

app.get('/ping', function(request, response) {
    console.log("'/ping' requested");
    response.send('Hi, Duke!');
});

app.listen(port, () => console.log(`Express REST app listening on port ${port}!`));