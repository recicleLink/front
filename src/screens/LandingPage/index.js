import React from "react";
import styles from "./LandingPage.module.css";
import FloatingButton from "../../components/FloatingButton";
import Header from "../../components/Header";

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <div className={styles.leftSide}>
          <h1 className={styles.title}>
            Conectando você ao futuro da Reciclagem. Simplifique.Recicle.Ganhe
          </h1>
          <div className={styles.buttons}>
            <FloatingButton
              label={"Cadastre-se"}
              color="#6200ea"
              to="/cadastrar"
            />
            <FloatingButton label={"Login"} color="#03dac6" to="/login" />
          </div>
        </div>
        <div className={styles.rightSide}></div>
      </div>
    </div>
  );
};

export default LandingPage;
