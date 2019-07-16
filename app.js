const express = require('express');
const uuid = require('uuid/v1');
const app = express();
const port = 3000;

function getPingReply() {
    return {
        "uuid": uuid(),
        "reply": "Hi, Duke!"
    };
}

function pingResourceGet(request, response) {
    console.log("'/ping' requested");
    response.json(getPingReply());
}

app.get('/ping', pingResourceGet);

app.listen(port, () => console.log(`Express REST app listening on port ${port}!`));