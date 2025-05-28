import styles from "./estilos/components.module.css";

const GoogleButton = () => (
  <button type="button" className={styles.btnGoogle}>
    <img
      src="https://www.svgrepo.com/show/475656/google-color.svg"
      alt="Google"
      className={styles.googleIcon}
    />
    Entrar com o Google
  </button>
);

export default GoogleButton;