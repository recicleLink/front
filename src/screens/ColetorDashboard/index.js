import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import CardSolicitacao from "../../components/CardSolicitacao";
import styles from "./ColetorDashboard.module.css"; // Importe o CSS

const ColetorDashboard = () => {
  const [solicitacoes, setSolicitacoes] = useState([]);
  const location = useLocation();
  const userData = location.state?.userData;

  useEffect(() => {
    console.log("Dados do usuário:", userData);
    if (userData && userData.solicitacoesAtribuidas) {
      setSolicitacoes(userData.solicitacoesAtribuidas);
      console.log("Solicitações de coleta:", solicitacoes);
    }
  }, []);

  const uniqueSolicitacoes = new Set(solicitacoes);

  return (
    <div className={styles.coletorContainer}>
      <h1>Dashboard do Coletor</h1>

      {uniqueSolicitacoes &&
        Array.from(uniqueSolicitacoes).map((solicitacaoId, index) => (
          <div className={styles.solicitacaoItem} key={index}>
            <div>
              <CardSolicitacao id={solicitacaoId} />
            </div>
            <button className="completeButton">Marcar como Completo</button>
          </div>
        ))}
    </div>
  );
};

export default ColetorDashboard;
