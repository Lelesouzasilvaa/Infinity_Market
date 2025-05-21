import './Perfil.css';
import NavBar from '../components/NavBar';
import Rodape from '../components/Rodape';
import Usuario from '../components/Usuario';

function Perfil(){
    return(
        <div className='background'>
            <div className='Conteudo'>
                <NavBar/>
                <Usuario/>
            </div>
         <Rodape/>
        </div>
    );
}

export default Perfil;