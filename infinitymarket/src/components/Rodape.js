import styles from './estilos/Rodape.module.css';

function Rodape(){
    return(
        <div className={styles.Rodape}>
            <div className={styles.InfoRodape}>
                <img src="/images/icons/phone.png" alt="Ícone de Telefone" />
                <p>14 3316-3443</p>
            </div>

            <div className={styles.InfoRodape}>
                <img src="/images/icons/email.png" alt="Ícone de Email"  id={styles.IconEmail}/>
                <p>infinity.market@example.com</p>
            </div>

            <div className={styles.InfoRodape}>
                <p id={styles.slogan}>Encontre os melhores serviços e prestadores</p>
            </div>

            <div className={styles.InfoRodape}>
                <p id={styles.slogan}>Nos Siga:</p>
                <img src="/images/icons/instagram.png" alt="Ícone de Instagram" id={styles.IconInstagram} />
                <img src="/images/icons/youtube.png" alt="Ícone de Youtube" />
                <img src="/images/icons/facebook.png" alt="Ícone de Facebook" />
                <img src="/images/icons/twitter.png" alt="Ícone de Twitter" />
            </div>

        </div>
    );
}

export default Rodape;