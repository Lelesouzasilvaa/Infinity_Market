import './Anunciar.css';
import NavBar from '../components/NavBar';
import Rodape from '../components/Rodape';
import Usuario from '../components/Usuario';
import Menu from '../components/Menu';
import Buttons from '../components/Button';
import Forms from '../components/Forms';
import Abas from '../components/Abas';

function Anunciar(){
    return(
        <div>
            <div className='background'>
            <div className='Conteudo'>
                <NavBar/>
                <Usuario/>
                <div className='AlinhamentoConteudo'>
                    <div className='MenuPage'>
                        <Menu/>
                    </div>
                    <div className='AlinhamentoContainers'>
                        <h2 id='TitlePage'>Comece adicionando fotos sobre seu produto/serviço!</h2>
                        <div className='AlinhamentoForms'>
                            <Forms/>
                            <Abas/>   
                        </div>
                        <div className='AlinhamentoButton'>
                             <button id='submit'>Submit</button>
                        </div>  
                    </div> 
                </div>
            </div>
          
            <div className='RodapePage'>
                <Rodape/>
            </div>
        </div>
        </div>
    );

}

export default Anunciar;