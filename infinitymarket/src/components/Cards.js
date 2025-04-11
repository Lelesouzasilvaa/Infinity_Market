import styles from './estilos/Cards.module.css';

function Cards() {
  return (

        <div className={styles.Card}>
              <p id={styles.TextUF}>UF</p>
              <img src="/images/produtos/produto1.png" alt="Produto" />
              <div className={styles.TextCard}>
                <p id={styles.TextName}>Nome Produto</p>
                <p id={styles.TextDescricao}>Descrição do Produto</p>
                <b><p id={styles.TextLoc}>Localização do produto</p></b>
              </div>
                <input type="checkbox" id="heart1" className={styles["heart-checkbox"]} />
                <label htmlFor="heart1" className={styles["heart-label"]}></label>     
  
        </div>

  );
}

export default Cards;
