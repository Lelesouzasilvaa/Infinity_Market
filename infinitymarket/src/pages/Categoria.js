import './Categoria.css';
import NavBar from '../components/NavBar';
import Caixa from '../components/caixa';
import Cards from '../components/Cards';
import Buttons from '../components/Button';
import Rodape from '../components/Rodape';


function Categoria(){

    return(
        <div className='background'>
            <NavBar/>
            <div className='Conteudo'>
                <Caixa/>
                <div className='alinhamentoVertical'>

                    <div className='alinhamentoHorizontal'>
                        <Cards/>
                        <Cards/>
                    </div>

                    <div className='alinhamentoHorizontal'>
                        <Cards/>
                        <Cards/>
                    </div>

                    <div className='alinhamentoHorizontal'>
                        <Cards/>
                        <Cards/>
                    </div>

                    <div className='alinhamentoHorizontal'>
                        <Cards/>
                        <Cards/>
                    </div>

                    <div className='alinhamentoHorizontal'>
                        <Cards/>
                        <Cards/>
                    </div>
                    <Buttons/>
                </div>
            </div>
            <Rodape/>
        </div>
    );

}


export default Categoria;
