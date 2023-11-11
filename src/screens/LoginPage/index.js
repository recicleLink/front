import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
        "http://localhost:8080/api/v1/users/login", // Adicionado http://
        formData
      );

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user_id", response.data.user_id);
        localStorage.setItem("user_type", response.data.user_type);

        const userTypeId = response.data.user_type;

        if (userTypeId === "654fd260c61dc36d26d149f0") {
          navigate("/dashboardUsuario");
        } else if (userTypeId === "654fd264c61dc36d26d149f2") {
          navigate("/dashboardColetador");
        } else if (userTypeId === "654fd268c61dc36d26d149f4") {
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
              placeholder="Digite seu email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Digite sua senha"
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
