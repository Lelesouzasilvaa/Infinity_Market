import './MeusAnuncios.css';
import Rodape from '../components/Rodape';
import Usuario from '../components/Usuario';
import Menu from '../components/Menu';
import Cards from '../components/Cards';
import Buttons from '../components/Button';

function MeusAnuncios() {
  return (
    <div className='paginaMeusAnuncios'>
      <div className='containerConteudo'>
        <div className='headerUsuario'>
          <Usuario />
        </div>

        <div className='areaConteudo'>
          <h2 className='tituloPagina'>Veja as publicações que curtiu</h2>
          <div className='AlinhamentoContaners'>
                <div className='containerCards'>
                    <Cards />
                    <Cards />
                    <Cards />
                </div>
                <div className='containerCards'>
                    <Cards />
                    <Cards />
                    <Cards />
                </div>
          </div>

          <div className='botaoCentralizado'>
            <Buttons />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeusAnuncios;