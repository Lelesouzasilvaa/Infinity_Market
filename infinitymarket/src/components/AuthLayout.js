import styles from "./estilos/FormsLogin.module.css";

const AuthLayout = ({ title, subtitle, children }) => {
  return (
    <div className={styles.container}>
      {/* Lado esquerdo */}
      <div className={styles.loginContainer}>
        <h1 className={styles.heading}>{title}</h1>
        <p className={styles.welcomeText}>{subtitle}</p>
        {children}
        <footer className={styles.footer}>© 2025 InfinityMarket</footer>
      </div>

      {/* Lado direito */}
      <div className={styles.imageContainer}>
        <img src="/images/outros/ilustracao.png" alt="Ilustração" />
      </div>
    </div>
  );
};

export default AuthLayout;