import React, { useState } from "react";
import Header from "../../components/Header";
import styles from "./SignupPage.module.css";

const SignupPage = () => {
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
      const response = await fetch("http://localhost:5000/registro", {
        // Substitua pela URL do seu backend
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.status === 200) {
        // Usuário registrado com sucesso. Redirecionar para a página de login ou outra ação
        console.log("Usuário registrado:", data);
      } else {
        // Mostrar erros
        console.log("Erro:", data.erros);
      }
    } catch (error) {
      console.error("Houve um erro ao registrar o usuário", error);
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
