import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/usuarios/login", // Adicionado http://
        formData
      );

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("idUsuario", response.data.idUsuario);
        localStorage.setItem("tipoUsuario", response.data.tipoUsuario);
        localStorage.setItem(
          "solicitacoesAtribuidas",
          JSON.stringify(response.data.solicitacoesAtribuidas)
        );

        const userType = response.data.tipoUsuario;

        if (userType === "usuario") {
          navigate("/dashboardUsuario");
        } else if (userType === "coletador") {
          navigate("/dashboardColetador");
        } else {
          navigate("/dashboardCooperativa");
        }
      } else {
        console.error("Erro:", response.data.error);
      }
    } catch (error) {
      console.error(
        "Houve um erro ao autenticar o usuário:",
        error.response?.data?.error || error
      );
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <div className={styles.leftSVG}></div>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="senha"
              placeholder="Senha"
              value={formData.senha}
              onChange={handleChange}
              required
            />
            <button type="submit">Entrar</button>
          </form>
        </div>
        <div className={styles.rightSVG}></div>
      </div>
    </div>
  );
};

export default LoginPage;
