import styles from './estilos/NavBar.module.css';

function NavBar(){
    return(
        <div className={styles.NavBar}>
            <div>
                <h1 id={styles.texth1}>Explorar</h1>
            </div>

            <div>
                <p id={styles.texth3}>30k Produtos</p>
            </div>
        </div>
        
    )
}

export default NavBar