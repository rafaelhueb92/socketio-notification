const routes = require("express").Router();

const pushController = require("./controllers/pushController");

routes.post("/push", pushController.push);

module.exports = routes;
