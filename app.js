const express = require('express');
const uuid = require('uuid/v1');
const app = express();
const port = 3000;

function getPingReply(meQueryParameter) {
    let reply = (meQueryParameter === undefined) ? "Hi, Duke!" : ("Hi, " + meQueryParameter + "!");
    return {
        "uuid": uuid(),
        "reply": reply
    };
}

function pingResourceGet(request, response) {
    console.log("'/ping' requested");
    response.json(getPingReply(request.query.me));
}

app.get('/ping', pingResourceGet);

app.listen(port, () => console.log(`Express REST app listening on port ${port}!`));