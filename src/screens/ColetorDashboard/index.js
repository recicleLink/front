import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import styles from "./ColetorDashboard.module.css"; // Importe o CSS


const ColetorDashboard = () => {
  const [solicitacoes, setSolicitacoes] = useState([]);
  const location = useLocation();
  const userData = location.state?.userData;

  useEffect(() => {
    console.log("Dados do usuário:", userData);
    // Use o campo correto aqui
    setSolicitacoes(userData.solicitacoesAtribuidas || []);
    console.log("Solicitações de coleta:", solicitacoes);
  }, []);

  return (
    <div className={styles.coletorContainer}>
      <h1>Dashboard do Coletor</h1>

      {solicitacoes &&
        solicitacoes.map((solicitacaoId, index) => (
          <div className={styles.solicitacaoItem} key={index}>
            <div>
              <p>ID da Solicitação: {solicitacaoId}</p>{" "}
              {/* Mostrando apenas o ID */}
            </div>
            <button className="completeButton">Marcar como Completo</button>
          </div>
        ))}
    </div>
  );
};

export default ColetorDashboard;
