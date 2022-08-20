const Tarefas = require("../models/Tarefa");

const tarefas = [
  {
    id: 3747996704660,
    descricao: "Buscar minha vo no JiuJitsu.",
    tempoLimite: "2022-08-17T02:12:23.719Z",
    concluido: false,
  },
  {
    id: 9147996704662,
    descricao: "Andar de T-Rex.",
    tempoLimite: "2022-09-17T02:13:26.729Z",
    concluido: true,
  },
  {
    id: 1479969001,
    descricao: "Consertar meu Corsa.",
    tempoLimite: "2022-10-19T06:1:26.729Z",
    concluido: false,
  },
];

module.exports = {
  async createTarefa(req, res) {
    const { descricao, tempoLimite, concluido } = req.body;

    const tarefa = {
      id: new Date().getTime(),
      descricao,
      tempoLimite,
      concluido: false,
    };

    tarefas.push(tarefa);
    return res.json(tarefa);
  },

  async getTarefas(_, res) {
    return res.json(tarefas);
  },

  async getTarefaById(req, res) {
    const id = req.params.id;
    const tarefaFitrada = tarefas.filter(
      (tarefa) => tarefa.id.toString().indexOf(id) > -1
    );

    if (tarefaFitrada) {
      return res.json(tarefaFitrada);
    } else {
      res.status(404).json({
        message: "Essa tarefa nao existe.",
      });
    }
  },

  async changeTarefa(req, res) {
    const { descricao, tempoLimite, concluido } = req.body;
    const id = parseInt(req.params.id);
    const tarefaIndex = tarefas.findIndex((tarefa) => tarefa.id == id);

    if (tarefaIndex != -1) {
      const updatedTarefa = {
        id,
        descricao,
        tempoLimite,
        concluido,
      };
      tarefas.splice(tarefaIndex, 1, updatedTarefa);
        return res.json(updatedTarefa);

    } 
    else {
      res.status(404).json({
        message: "Essa tarefa nao existe.",
      });
    }
  },

  async removeTarefa(req, res) {
    const id = req.params.id;
    const tarefaIndex = tarefas.findIndex((tarefa) => tarefa.id == id);

    if (tarefaIndex != -1) {
      tarefas.splice(tarefaIndex , 1);
      return res.json({
        message: "Uma tarefa foi deletada.",
      });
    } else {
      res.status(404).json({
        message: "Essa tarefa nao existe.",
      });
    }
  },
};
