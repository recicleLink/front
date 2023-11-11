import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header";
import styles from "./SignupPage.module.css";

const SignupPage = () => {
  const navigate = useNavigate();

  const [userTypes, setUserTypes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/user-types")
      .then((response) => response.json())
      .then((data) => setUserTypes(data));
  }, []);

  const [formData, setFormData] = useState({
    user_type_id: "",
    name: "",
    email: "",
    mobile_number: "",
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
        "http://localhost:8080/api/v1/users",
        formData
      );
      console.log(response);
      if (response.status === 201) {
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
              name="name"
              placeholder="Digite seu nome"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Digite seu email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="mobile_number"
              placeholder="Digite seu telefone, (XX)9XXXX-XXXX"
              pattern="\(\d{2}\)9\d{4}-\d{4}"
              value={formData.mobile_number}
              onChange={handleChange}
              required
            ></input>
            <input
              type="password"
              name="password"
              placeholder="Digite sua senha"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <select
              name="user_type_id"
              value={formData.user_type_id}
              onChange={handleChange}
              required
            >
              <option value=""></option>
              {userTypes.map((userType) => {
                return (
                  <option key={userType._id} value={userType._id}>
                    {userType.ust_des_name}
                  </option>
                );
              })}
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
