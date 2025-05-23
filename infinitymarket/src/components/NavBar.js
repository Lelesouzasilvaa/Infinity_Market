import React, { useEffect, useState } from 'react';
import styles from './estilos/NavBar.module.css';


function NavBar(){
    return(
            <div className={styles.topbar}>
                <a href="#" className={styles.logo}>INFINITY MARKET</a>
                <div className={styles.input_container}>
                <img src="/images/icons/search.png" alt="Pesquisa" className={styles.search_icon} />
                <input type="text" placeholder="pesquise por itens, coleções ou contas..." />
                </div>
                <nav>
                    <a href="#">Explorar</a>
                    <a href="#">Coleções</a>
                    <a href="#">Anúncios</a>
                    <a href="#">Comunidade</a>
   
                </nav>
                <button id={styles.button}>Criar</button>
                <img src="/images/icons/user.png" alt="Usuario" className={styles.user_icon} />
                
            </div>
    );
}

export default NavBar