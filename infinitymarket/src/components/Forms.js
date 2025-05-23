import styles from './estilos/Forms.module.css';

function Forms(){
    return(
        <div className={styles.AlinhamentoCard}>
            <form action="/enviar" method="post" className={styles.Forms}>
                <div className={styles.imageForms}>
                    <input type='image' src="/images/icons/addImage.png" id={styles.imageInput}></input>
                </div>

                <div className={styles.campoNome}>
                    <input type='text' placeholder="De nome ao seu Anúncio" id={styles.textCampo}></input>
                </div>

                <div className={styles.boxDescricao}>
                    <div className={styles.AlinhamentoVertical}>
                        <div className={styles.AlinhamentoHorizontal}>
                            <div className={styles.AlinhamentoTexto}>
                                <h4>Seu momento de brilhar!</h4>
                                <p id={styles.paragrafo}>Faça uma breve descrição do produto que procura ou anuncia.</p>
                            </div>
                            <div className={styles.button}>
                                <button>View all</button>
                            </div>
                        </div>
                        <div className={styles.caixaPontilhada}>
                            <input type='text' id={styles.inputCaixa}></input>
                        </div>
                    </div>
                </div>

                <div className={styles.buttonsEscolha}>
                    <div className={styles.buttonVender}>
                        <img src="/images/icons/message.png" alt="Ícone de cadeado"  />
                        <h2>Quero Vender</h2>
                    </div>

                    <div className={styles.buttonSolicitar}>
                        <img src="/images/icons/cadeado.svg" alt="Ícone de nuvem"  id={styles.id}/>
                        <h2>Quero Solicitar</h2>
                    </div>
                </div>
             
            </form>
        </div>
    );
}

export default Forms