import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CooperativaDashboard.module.css"; // Importe o CSS

const CooperativaDashboard = () => {
  const [solicitacoes, setSolicitacoes] = useState([]);
  const [coletadores, setColetadores] = useState([]);

  useEffect(() => {
    const fetchColetadores = async () => {
      try {
        // Substitua pela URL correta do seu backend e adicione o query param tipoUsuario=coletador
        const res = await axios.get(
          "http://localhost:5000/api/usuarios?tipoUsuario=coletador"
        );
        setColetadores(res.data);
        // Faça algo com os coletadores aqui (defina o estado, por exemplo)
      } catch (err) {
        console.error("Erro ao buscar coletadores:", err);
      }
    };

    fetchColetadores();
  }, []);

  useEffect(() => {
    // Substitua pela URL correta do seu backend
    const fetchSolicitacoes = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/solicitacoesColeta"
        );
        setSolicitacoes(res.data);
      } catch (err) {
        console.error("Erro ao buscar solicitações:", err);
      }
    };

    fetchSolicitacoes();
  }, []);

  const handleAssign = async (solicitacaoId, coletadorId) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/solicitacoesColeta/atribuir",
        {
          coletadorId,
          solicitacaoId,
        }
      );

      if (res.status === 200) {
        console.log("Solicitação atribuída com sucesso");
      } else {
        console.log("Erro ao atribuir solicitação:", res.data);
      }
    } catch (error) {
      console.error("Houve um erro ao atribuir a solicitação", error);
    }
  };

  return (
    <div className="cooperativaContainer">
      <h1>Dashboard da Cooperativa</h1>
      <div className="solicitacaoList">
        {solicitacoes.map((solicitacao) => (
          <div className="solicitacaoItem" key={solicitacao._id}>
            <div>
              <p>Endereço: {solicitacao.endereco}</p>
              <p>Descrição: {solicitacao.descricao}</p>
            </div>
            {/* Dropdown para seleção de coletador */}
            <select
              onChange={(e) => handleAssign(solicitacao._id, e.target.value)}
            >
              <option value="">Selecionar Coletador</option>
              {coletadores.map((coletador) => (
                <option value={coletador._id} key={coletador._id}>
                  {coletador.nome}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CooperativaDashboard;
