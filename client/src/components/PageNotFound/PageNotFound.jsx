import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div>
        <h1>
            Pagina no encontrada
        </h1>
        <div>
            <Link to='/home'>
                <button>Volver al inicio</button>
            </Link>
        </div>
    </div>
  )
}

export default PageNotFound
