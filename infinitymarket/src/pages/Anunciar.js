import './Anunciar.css';
import Usuario from '../components/Usuario';
import Menu from '../components/Menu';
import Forms from '../components/Forms';
import Abas from '../components/Abas';

function Anunciar() {
    return (
        <div>
            <div className="paginaBackground">
                <div className="paginaConteudo">
                    <Usuario />
                    <div className="conteudoAlinhado">
                        <div className="containerColuna">
                            <h2 id="tituloPagina">Comece adicionando fotos sobre seu produto/serviço!</h2>
                            <div className="formularioAlinhado">
                                <Forms />
                                <Abas />
                            </div>
                            <div className="botaoAlinhado">
                                <button id="botaoSubmit">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Anunciar;
