import "./App.css";
import React, { useEffect, useState } from "react";
import api from "./service/api";

function App() {
  const [tarefas, setTarefa] = useState([]);
  const [date, dataAlteracao] = useState(new Date());
  const [descricao, setDescricao] = useState("");
  const [prucuraId, setPrucId] = useState("");

  const tareafaConcluida = (id, descricao, tempoLimite, concluido) => {
    api.put(`/tarefa/${id}`, { descricao, tempoLimite, concluido: !concluido })
      .then((resultado) => {
        const mapTarefa = tarefas.map((tarefa) => {
          return tarefa.id === id ? { ...resultado.data } : { ...tarefa };
        });
        setTarefa(mapTarefa);
      });
  };

  const addTarefa = () => {
    const dateISO = date.toISOString();
    api.post(`/tarefa`, { descricao, tempoLimite: dateISO }).then((resultado) => {
      setTarefa((antesArray) => [...antesArray, resultado.data]);
    });
  };

  const removeTarefa = (id) => {
    api.delete(`/tarefa/${id}`).then((resultado) => {
      setTarefa(tarefas.filter((tarefa) => tarefa.id !== id));
    });
  };

  const procuTarefa = () => {
    api.get(`/tarefa/${prucuraId}`).then((resultado) => {
      setTarefa(resultado.data);
    });
  };

  useEffect(() => {
    if (prucuraId === "")
      api.get("/tarefas").then((resultado) => {
        setTarefa(resultado.data);
        console.log(resultado.data);
      });
  }, [prucuraId]);

  return (
    
    <div className="App">
      <h1>API - REST</h1>
      <div id="id-search">
        <p>ID: </p>
        
        <input
          placeholder="Ex: 2910213331"
          type="text"
          name="search"
          onChange={(e) => setPrucId(e.target.value)}
        />

        <input type="button" 
          value="Pesquisar" 
          onClick={procuTarefa} />
      </div>

      <div id="descricao">
        <p>Descrição das suas tarefas:</p>
        <input
          placeholder="Decreva as tarefas"
          type="text"
          name="descricao"
          onChange={(e) => setDescricao(e.target.value)}/>

        <input id="add" 
          type="button" 
          value="Adicionar" 
          onClick={addTarefa} />
      </div>

      <div id="board" >
        {tarefas.map((tarefa) => (
          <div className="toDoList">
            <div
              id="card"
              style={{
                textDecoration: tarefa.concluido ? "line-through" : "none",
              }}
              onClick={() =>
                tareafaConcluida(
                  tarefa.id,
                  tarefa.descricao,
                  tarefa.tempoLimite,
                  tarefa.concluido
                )
              }
            >
              <label> 
                <h3>ID: {tarefa.id} </h3> 
              </label>
              
              <label id="label-card" > 
                Descrição: {tarefa.descricao}
              </label>
              
              <label> 
                  Data: {new Date(tarefa.tempoLimite).toLocaleString()}
              </label>
              
              <input
                id="remove"
                type="button"
                value="Remover"
                onClick={() => removeTarefa(tarefa.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}

export default App;
