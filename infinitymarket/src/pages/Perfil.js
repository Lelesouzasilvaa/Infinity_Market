import './Perfil.css';
import Rodape from '../components/Rodape';
import Usuario from '../components/Usuario';
import Menu from '../components/Menu';
import CardVertical from '../components/CardVertical';
import Buttons from '../components/Button';

function Perfil(){
    return(
        <div className='background'>
            <div className='Conteudo'>
                    <div className='AlinhamentoHeader'>
                        <Usuario/>
                    </div>
                <div className='AlinhamentoConteudo'>
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
    
        </div>
    );
}

export default Perfil;