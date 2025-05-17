import style from './estilos/Button.module.css'

function Button(){
   return(
    <div className={style.alinhamentoButton}>
        <button id={style.ButtonUm}>Anterior</button>
        <button id={style.ButtonDois}>Próximo</button>
    </div>
   )
}

export default Button