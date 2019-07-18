const express = require('express');
const uuid = require('uuid/v1');
const app = express();
const port = 3000;

defineRoutes();
app.listen(port, () => console.log(`Express REST app listening on port ${port}!`));

function defineRoutes() {
    app.get('/ping', new PingResource().get);
    app.use(new ResourceNotFound().perform);
}

function PingResource() {
    var that = this;
    this.get = function (request, response) {
        console.log("GET '/ping'");
        response.json(that.pingReply(request.query.me));
    };
    this.pingReply = function (meQueryParameter) {
        let reply = (meQueryParameter === undefined) ? "Hi, Duke!" : ("Hi, " + meQueryParameter + "!");
        return {
            "uuid": uuid(),
            "reply": reply
        };
    }
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
