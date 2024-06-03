import React, { useState } from 'react';
import './App.css';

function App() {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [usuario, setUsuario] = useState(null);

  const handleAgregar = () => {
    setUsuario({ nombre, edad });
  };

  return (
    <div className="App">
      <div className="form-container">
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input 
            type="text" 
            id="nombre" 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="edad">Edad:</label>
          <input 
            type="text" 
            id="edad" 
            value={edad} 
            onChange={(e) => setEdad(e.target.value)} 
          />
        </div>
        <button onClick={handleAgregar}>Agregar</button>
        {usuario && (
          <div className="usuario">
            Usuario es "{usuario.nombre}", "{usuario.edad}"
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
