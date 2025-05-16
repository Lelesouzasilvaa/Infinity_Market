import React from 'react';
import styles from './estilos/Caixa.module.css';

function Caixa(){
    return(
         <div className={styles.Caixa_Container}>
            <div className={styles.Titulo_Container}>
                <img src='/images/icons/arrow_left.png' id={styles.arrow_id}></img>
                <p id={styles.texto_titulo}>Voltar</p>
            </div>
            <p id={styles.texto_principal}>Ferramentas</p>       
          
        </div>
    );
}

export default Caixa;