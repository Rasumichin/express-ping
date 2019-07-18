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

function ResourceNotFound() {
    var that = this;
    this.reply = function () {
        return {
            "problem": "Resource not found!"
        };
    };
    this.perform = function (request, response, next) {
        response.status(404).json(that.reply());
    };
}

function defineRoutes() {
    app.get('/ping', pingResourceGet);
    app.use(new ResourceNotFound().perform);
}

defineRoutes();
app.listen(port, () => console.log(`Express REST app listening on port ${port}!`));