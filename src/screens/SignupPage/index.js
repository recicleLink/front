import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header";
import styles from "./SignupPage.module.css";

const SignupPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    endereco: "",
    tipoUsuario: "usuario",
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
        "http://localhost:5000/api/usuarios",
        formData
      );
      if (response.status === 200) {
        // Usuário registrado com sucesso. Redirecionar para a página de login ou outra ação
        console.log("Usuário registrado:", response.data);
        navigate("/login");
      }
    } catch (error) {
      if (error.response) {
        // Erros do servidor
        console.log("Erro:", error.response.data);
      } else if (error.request) {
        // Erros de rede
        console.log("Erro de Rede:", error.message);
      } else {
        // Outros erros
        console.log("Erro:", error.message);
      }
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
              type="text"
              name="nome"
              placeholder="Nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
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
            <input
              type="text"
              name="endereco"
              placeholder="Endereço"
              value={formData.endereco}
              onChange={handleChange}
              required
            />
            <select
              name="tipoUsuario"
              value={formData.tipoUsuario}
              onChange={handleChange}
              required
            >
              <option value="usuario">Usuário</option>
              <option value="coletador">Coletador</option>
              <option value="cooperativa">Cooperativa</option>
            </select>
            <button type="submit">Cadastrar</button>
          </form>
        </div>
        <div className={styles.rightSVG}></div>
      </div>
    </div>
  );
};

export default SignupPage;
