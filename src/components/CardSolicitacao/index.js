import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./CardSolicitacao.module.css"; // Importe seu arquivo de estilos aqui

const CardSolicitacao = ({ id }) => {
  const [solicitacao, setSolicitacao] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/sua-rota-aqui/id?id=${id}`);
        setSolicitacao(response.data[0]);
        setIsLoading(false);
      } catch (error) {
        console.error("Erro ao buscar a solicitação:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return <p className={styles.loading}>Carregando...</p>;
  }

  if (!solicitacao) {
    return <p className={styles.loading}>Solicitação não encontrada</p>;
  }

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>ID: {solicitacao._id}</h3>
      <p className={styles.content}>Descrição: {solicitacao.descricao}</p>
      <p className={styles.content}>Endereço: {solicitacao.endereco}</p>
    </div>
  );
};

export default CardSolicitacao;
