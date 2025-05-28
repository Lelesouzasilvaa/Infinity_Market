import AuthLayout from "../components/AuthLayout";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";
import styles from "../components/estilos/FormsLogin.module.css";

const Cadastro = () => {
  return (
    <div className={styles.conteudo}>
      <AuthLayout
        title="Crie sua Conta!"
        subtitle="Comece a publicar intenções de compra agora!"
      >
        <form className={styles.form}>
          <InputField label="Email" type="email" placeholder="Digite seu e-mail" />
          <InputField label="Crie uma senha" type="password" placeholder="********" />
          <p className={styles.notice}>Necessário ter no mínimo 6 caracteres.</p>
          <InputField label="Confirme sua senha" type="password" placeholder="********" />
          <PrimaryButton text="Criar Conta →" />
        </form>

        <div className={styles.registerLink}>
          Já tem uma conta? <a href="/login">Login</a>
        </div>
        </AuthLayout>
    </div>
  );
};

export default Cadastro;
