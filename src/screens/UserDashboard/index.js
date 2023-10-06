import React, { useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import styles from "./UserDashBoard.module.css";
import Header from "../../components/Header";

const UserDashboard = () => {
  const [solicitacao, setSolicitacao] = useState({
    endereco: "",
    descricao: "",
  });
  const [historico, setHistorico] = useState([]); // Este array deveria ser populado com dados do backend

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSolicitacao({ ...solicitacao, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Pega o token armazenado no localStorage
    const token = localStorage.getItem("token");

    // Decodifica o token para pegar o ID do usuário
    const decoded = jwt_decode(token);
    const userId = decoded.id;
    console.log("userId de quem criou a solicitação", userId); // Ajuste para o campo correto, se necessário

    try {
      // Faz a chamada à API
      const response = await axios.post(
        "http://localhost:5000/api/solicitacoesColeta",
        {
          usuario: userId,
          endereco: solicitacao.endereco,
          descricao: solicitacao.descricao,
        }
      );

      // Checa o status da resposta
      if (response.status === 200 || response.status === 201) {
        console.log("Solicitação de coleta criada:", response.data);
        // Aqui você pode atualizar o histórico ou fazer outras ações
      } else {
        console.log("Erro ao criar solicitação:", response.data);
        // Tratar possíveis erros retornados pelo servidor
      }
    } catch (error) {
      console.error("Houve um erro ao criar a solicitação de coleta", error);
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <h2>Dashboard do Usuário</h2>
        <div className={styles.leftSVG}></div>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="endereco"
              placeholder="Endereço"
              value={solicitacao.endereco}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="descricao"
              placeholder="Descrição"
              value={solicitacao.descricao}
              onChange={handleChange}
              required
            />
            <button type="submit">Solicitar Coleta</button>
          </form>
        </div>
        <div className={styles.rightSVG}></div>
        <div>
          <h2>Histórico de Solicitações</h2>
          <ul>
            {historico.map((item, index) => (
              <li key={index}>
                {item.endereco} - {item.descricao} - {item.data}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
