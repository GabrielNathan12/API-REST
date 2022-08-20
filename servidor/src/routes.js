const express = require("express");
const TarefaController = require("./controler/TarefaController");

const routes = express.Router();

routes.post("/tarefa", TarefaController.createTarefa);
routes.get("/tarefas", TarefaController.getTarefas);
routes.get("/tarefa/:id", TarefaController.getTarefaById);
routes.put("/tarefa/:id", TarefaController.changeTarefa);
routes.delete("/tarefa/:id", TarefaController.removeTarefa);

module.exports = routes;