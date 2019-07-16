const express = require('express');
const app = express();
const port = 3000;

function pingResourceGet(request, response) {
    reply = {
        "reply": "Hi, Duke!"
    };
    
    console.log("'/ping' requested");
    response.send(reply);
}
app.get('/ping', pingResourceGet);

app.listen(port, () => console.log(`Express REST app listening on port ${port}!`));