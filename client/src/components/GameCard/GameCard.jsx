import React from 'react';
import "./gameCard.css";

const GameCard = ({ name, image, genres, rating, id, createInDb }) => {

  return (
    <div className='card-cnt'>
      <div className='card-img'>
        <img src={image} alt={`Imagen de ${name}`} />
      </div>
      
      <div className='card-name'>
        <h2>{name}</h2>
      </div>

      <div className='card-genres'>
        <h4>
          {
           genres.every(e => typeof e === "string") ? 
           genres?.map(gen => gen).join(" | ")
           : genres?.map(gen => gen.name).join(" | ") 
        
        }
          
        </h4>
      </div>

      <div className='card-rating'>
        <h5>{rating}⭐</h5>
      </div>
    </div>
  )
  
}

export default GameCard 