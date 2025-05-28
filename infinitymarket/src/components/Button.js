import styles from './estilos/Button.module.css'

function Button(){
   return(
    <div className={styles.alinhamentoButton}>
        <button id={styles.ButtonUm}>Anterior</button>
        <button id={styles.ButtonDois}>Próximo</button>
    </div>
   )
}

export default Button