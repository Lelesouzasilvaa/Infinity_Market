import './Perfil.css';
import NavBar from '../components/NavBar';
import Rodape from '../components/Rodape';
import Usuario from '../components/Usuario';
import Menu from '../components/Menu';
import CardVertical from '../components/CardVertical';
import Buttons from '../components/Button';

function Perfil(){
    return(
        <div className='background'>
            <div className='Conteudo'>
                <NavBar/>
                <Usuario/>
                <div className='AlinhamentoConteudo'>
                    <div className='MenuPage'>
                        <Menu/>
                    </div>
                    <div className='AlinhamentoContainers'>
                        <h2 id='TitlePage'>Veja as últimas publicações visualizadas</h2>
                        <div className='AlinhamentoVertical'>
                            <div className='AlinhamentoHorizontal'>
                                <CardVertical/>
                                <CardVertical/>
                                <CardVertical/>
                            </div>

                            <div className='AlinhamentoHorizontal'>
                                <CardVertical/>
                                <CardVertical/>
                                <CardVertical/>
                            </div>
                        </div>
                        <div className='AlinhamentoButton'>
                            <Buttons/>
                        </div>  
                    </div> 
                </div>
            </div>
          
            <div className='RodapePage'>
                <Rodape/>
            </div>
        </div>
    );
}

export default Perfil;