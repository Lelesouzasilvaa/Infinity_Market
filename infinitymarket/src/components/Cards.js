import styles from './estilos/Cards.module.css';
import { useNavigate } from 'react-router-dom';

function Cards() {
  const navigate = useNavigate(); 
  return (
    <div className={styles.card}>
      <img src="/images/produtos/produto1.png" alt="Produto" />

      <div className={styles.textCard}>
        <div className={styles.tags}>
          <p className={styles.textTag}>Tag1</p>
          <p className={styles.textTag}>Tag2</p>
          <p className={styles.textTag}>Tag3</p>
        </div>

        <div className={styles.info}>
          <p className={styles.textName}>Nome Produto</p>
          <p className={styles.textDescricao}>Descrição do Produto</p>
        </div>

        <div className={styles.icons}>
          <div className={styles.date}>
            <img src="/images/icons/Calendar.png" alt="Ícone de calendário" />
            <p className={styles.textIcons}>Dia Mês Ano</p>
          </div>
          <div className={styles.coments}>
            <img src="/images/icons/Coments.png" alt="Ícone de comentários" />
            <p className={styles.textIcons}>10 Comentários</p>
          </div>
        </div>

        <div className={styles.rodape}>
          <div className={styles.rodapeButton}>
            <a onClick={() => navigate('/visualizar')}><h4>Veja Mais</h4></a>
            <img src="/images/icons/arrow_blue.png" alt="Ícone de seta" />
          </div>

          <div className={styles.favoritos}>
            <input type="checkbox" id="heart1" className={styles.heartCheckbox} />
            <label htmlFor="heart1" className={styles.heartLabel}></label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
