import React from "react";
import axios from "axios";

const Login = () => {
  const handleLogin = async () => {
    const response = await axios.post("sua-api-aqui/api/login", {
      // seus dados de login aqui
    });
    if (response.data.success) {
      // redirecionar para dashboard
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {/* Seu formulário aqui */}
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Login;
