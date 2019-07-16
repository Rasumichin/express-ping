const express = require('express');
const app = express();
const port = 3000;

function pingResourceGet(request, response) {
    console.log("'/ping' requested");
    response.send('Hi, Duke!');
}
app.get('/ping', pingResourceGet);

app.listen(port, () => console.log(`Express REST app listening on port ${port}!`));