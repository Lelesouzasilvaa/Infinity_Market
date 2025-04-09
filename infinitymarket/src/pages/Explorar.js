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
        <Cards />
      </div>
        <Button/>
    </div>
  );
}

export default Explorar;
