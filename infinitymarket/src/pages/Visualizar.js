import CardExpandido from '../components/CardExpandido';
import ComentCard from '../components/ComentCard';
import './Visualizar.css';

function Visualizar(){
    return(
        <div className='Alinhamentoconteudo'>
            <ComentCard/>
            <CardExpandido/>
        </div>
    )
}

export default Visualizar;