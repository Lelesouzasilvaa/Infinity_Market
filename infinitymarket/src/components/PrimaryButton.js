import styles from "./estilos/components.module.css";

const PrimaryButton = ({ text, type = "submit" }) => (
  <button type={type} className={styles.btnPrimary}>
    {text}
  </button>
);

export default PrimaryButton;
