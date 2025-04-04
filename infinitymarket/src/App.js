import './App.css';
import NavBar from './components/NavBar';
import Cards from './components/Cards';
import Menu from './components/Menu';

function App() {
  return (
    <div>
      <NavBar/>
      <div className="Container">
        <Menu/>
        <Cards/>
      </div>

    </div>
  );
}

export default App;
