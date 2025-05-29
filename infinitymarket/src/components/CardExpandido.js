import styles from './estilos/CardExpandido.module.css';

function cardExpandido(){
    return(
       <div className={styles.cardAnuncio}>
            <img src="/images/produtos/produto1.png" alt="Produto" />

            <div className={styles.cardConteudo}>
                <div className={styles.cardTags}>
                <p className={styles.cardTagItem}>Tag1</p>
                <p className={styles.cardTagItem}>Tag2</p>
                <p className={styles.cardTagItem}>Tag3</p>
                </div>

                <div className={styles.cardInfo}>
                <p className={styles.cardTitulo}>Nome Produto</p>
                <p className={styles.cardDescricao}>Descrição do Produto</p>
                </div>

                <div className={styles.cardDetalhes}>
                <div className={styles.cardData}>
                    <img src="/images/icons/Calendar.png" alt="Ícone de calendário" />
                    <p className={styles.cardTextoDetalhe}>Dia Mês Ano</p>
                </div>
                <div className={styles.cardComentarios}>
                    <img src="/images/icons/Coments.png" alt="Ícone de comentários" />
                    <p className={styles.cardTextoDetalhe}>10 Comentários</p>
                </div>
                </div>

                <div className={styles.cardRodape}>

                <div className={styles.cardFavorito}>
                    <input type="checkbox" id="favoritoProduto1" className={styles.cardCheckbox} />
                    <label htmlFor="favoritoProduto1" className={styles.cardLabelFavorito}></label>
                </div>
                </div>
            </div>
        </div>
    )
}

export default cardExpandido;