import styles from './estilos/Usuario.module.css';

function Usuario(){
    return(
        <div className={styles.Container}>
            <div className={styles.ImageBackground}>
                <div className={styles.AlinhamentoHorizontal}>
                    <div className={styles.ImagePerfil}>
                        <img src="/images/icons/ImageProfile.png" alt="" />
                    </div>
                    <div className={styles.InfoPerfil}>
                        <h1>Nome Usuario</h1>
                        <div className={styles.InfoCategoria}>
                                <div className={styles.Info}>
                                    <a><p id={styles.TextCategoria}>9 anúncios</p></a>
                                    <a><p id={styles.TextCategoria}>39 Favoritos</p></a>
                                </div>
                                <p id={styles.NotaPerfil}>Nota</p>
                          
                        </div>

                    </div>   
                </div>
            </div>
            

        </div>
    );
}

export default Usuario;