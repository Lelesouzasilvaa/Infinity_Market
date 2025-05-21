import styles from './estilos/Usuario.module.css';

function Usuario(){
    return(
        <div className={styles.Container}>
            <div className={styles.ImageBackground}>
                <img src="" alt="" />
            </div>
           <div className={styles.AlinhamnetoHorizontal}>
                <div className={styles.ImagePerfil}>
                    <img src="" alt="" />
                </div>
                <div className={styles.InfoPerfil}>
                    <h1>Nome Usuario</h1>
                    <div className={styles.InfoCategoria}>
                        <a><p id={styles.TextCategoria}>9 anúncios</p></a>
                        <a><p id={styles.TextCategoria}>39 Favoritos</p></a>
                    </div>
                </div>
                <p id={styles.NotaPerfil}></p>
           </div>

        </div>
    );
}

export default Usuario;