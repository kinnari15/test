
import './App.css';
import Image from './components/Image'

function App() {
  return (
    <div className="App">
     <h1 className = "New">Astroverse</h1>
     <p>Galaxies are beautiful!</p>
     <img src = {require('./images/galaxies.jpg')}/>
     
    </div>
  );
}

export default App;
