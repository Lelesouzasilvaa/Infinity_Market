import './Categoria.css';
import NavBar from '../components/NavBar';
import Caixa from '../components/caixa';



function Categoria(){

    return(
        <div className='background'>
            <NavBar/>
            <div className="Conteudo">
                <Caixa/>
            </div>
        </div>
    );

}


export default Categoria;
