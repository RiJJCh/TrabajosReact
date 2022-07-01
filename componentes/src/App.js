import logo from './logo.svg';
import './App.css';
import Tarjeta from './Tarjeta'
import Nav from './Nav'

function App() {
  return (
    <div className="App">
      <Tarjeta Nombre={"Ricardo"} Ocupacion={"Programador Fullstack"}/>
      <Tarjeta Nombre={"Nixon"} Ocupacion={"Programador Frontend"}/>
      <Tarjeta Nombre={"Raymond"} Ocupacion={"Programador Backend"}/>
    </div>
  );
}

export default App;
