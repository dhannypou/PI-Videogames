import React from 'react';
import { Link } from 'react-router-dom';


const Error = () => {

  return (
    <div>
        <h1>No se encontro ningun videojuego </h1>
        <Link to='/home'>
          <button>Volver al inicio</button>
        </Link>
    </div>
  )
}

export default Error