import styles from "./estilos/components.module.css";

const InputField = ({ label, type = "text", placeholder }) => (
  <div className={styles.inputGroup}>
    <label className={styles.label}>{label}</label>
    <input className={styles.input} type={type} placeholder={placeholder} />
  </div>
);

export default InputField;