import AuthLayout from "../components/AuthLayout";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";
import GoogleButton from "../components/GoogleButton";
import styles from "../components/estilos/FormsLogin.module.css";

const Login = () => {
  return (
    <div className={styles.conteudo}>
        <AuthLayout
      title="Login"
      subtitle="Bem-vindo ao Infinity Market!"
      
    >
      <form className={styles.form}>
        <InputField label="Email" type="email" placeholder="Digite seu e-mail" />
        <InputField label="Senha" type="password" placeholder="********" />
        <PrimaryButton text="Entrar" />
        <GoogleButton />
      </form>

      <div className={styles.forgotPassword}>
        <a href="#">Esqueceu sua senha?</a>
      </div>

      <div className={styles.registerLink}>
        <span>Não tem uma conta? </span>
        <a href="/cadastro">Criar conta</a>
      </div>
    </AuthLayout>
    </div>
  );
};

export default Login;
