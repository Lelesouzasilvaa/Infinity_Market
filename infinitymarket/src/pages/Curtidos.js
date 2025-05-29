import './Perfil.css';
import Usuario from '../components/Usuario';
import CardVertical from '../components/CardVertical';
import Buttons from '../components/Button';

function Curtidos(){
    return(
        <div className='background'>
            <div className='Conteudo'>
                    <div className='AlinhamentoHeader'>
                        <Usuario/>
                    </div>
                <div className='AlinhamentoConteudo'>
                    <div className='AlinhamentoContainers'>
                        <h2 id='TitlePage'>Veja as publicações que curtiu</h2>
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

export default Curtidos;