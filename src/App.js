import { createContext, useState } from 'react';
import './App.css';
import Router from './components/Router';

export const GlobalContext = createContext();


function App() {

  const [rutas, setRutas] = useState([]);
  const [idRuta, setIdRuta] = useState({ id: "" });

  return (
    <div className="App">
      <GlobalContext.Provider
        value={{
          rutas, setRutas, idRuta, setIdRuta
        }}>
        <Router />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
