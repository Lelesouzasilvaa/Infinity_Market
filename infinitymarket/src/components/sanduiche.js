import styles from './estilos/Sanduiche.module.css';

function Sanduiche(){
    return(
        <div className={styles.Container_Maior}>

            <div id={styles.Container_Menor}>
                <div id={styles.Conteudo}>
                    <img src="./images/icons/layers.png" alt="" />
                    <p id={styles.Text}>Pesquisas Recentes</p>
                </div>
                <div id={styles.Icon}>
                    <img src="/images/icons/chevron-down.png" alt="" id={styles.Seta} />
                </div>
            </div>

            <div id={styles.Container_Menor}>
                <div id={styles.Conteudo}>
                    <img src="./images/icons/dollar-sign.png" alt="" />
                    <p id={styles.Text}>Produtos Curtidos</p>
                </div>
                <div id={styles.Icon}>
                    <img src="/images/icons/chevron-down.png" alt="" id={styles.Seta} />
                </div>
            </div>
            <div id={styles.Container_Menor}>
                <div id={styles.Conteudo}>
                    <img src="./images/icons/user.png" alt="" />
                    <p id={styles.Text}>Meus Anúncios</p>
                </div>
                <div id={styles.Icon}>
                    <img src="/images/icons/chevron-down.png" alt="" id={styles.Seta} />
                </div>
            </div>

            <div id={styles.Container_Menor}>
                <div id={styles.Conteudo}>
                    <img src="./images/icons/camera.png" alt="" />
                    <p id={styles.Text}>Anunciar</p>
                </div>
                <div id={styles.Icon}>
                    <img src="/images/icons/chevron-down.png" alt="" id={styles.Seta} />
                </div>
            </div>
   
        </div>
    )

}

export default Sanduiche