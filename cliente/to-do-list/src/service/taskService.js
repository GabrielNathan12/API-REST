import api from "./api";

export default class taskService {
  getAll = () => {
    api.get("/tarefa").then((result) => {
      console.log(result);
    });
  };
}
