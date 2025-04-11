import './Explorar.css';
import TitlePage from '../components/TitlePage';
import Cards from '../components/Cards';
import Menu from '../components/Menu';
import Button from '../components/Button'

function Explorar() {
  return (
    <div className="Background">
        <TitlePage/>
        <div className="Container">
            <Menu />
            <div className="Conteudo">
            <div className="Alinhamento_Card">
              <Cards/>
              <Cards/>
              <Cards/>
              <Cards/>
            </div>
            <div className="Alinhamento_Card">
              <Cards/>
              <Cards/>
              <Cards/>
              <Cards/>
            </div>
            </div>
        </div>
       
        <Button/>
    </div>
  );
}

export default Explorar;
