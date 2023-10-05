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
        "http://localhost:5000/api/autenticacao/login",
        formData
      );

      if (response.status === 200) {
        // Armazena o token no localStorage
        localStorage.setItem("token", response.data.token);

        const userType = response.data.tipoUsuario; // Supondo que o tipo de usuário vem na resposta
        console.log("Usuário autenticado:", response.data);

        // Redirecionar para o dashboard de acordo com o tipo de usuário
        if (userType === "usuario") {
          navigate("/dashboardUsuario");
        } else if (userType === "coletador") {
          navigate("/dashboardColetador");
        } else {
          navigate("/dashboardCooperativa");
        }
      } else {
        console.log("Erro:", response.data.erros);
      }
    } catch (error) {
      console.error("Houve um erro ao autenticar o usuário", error);
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
