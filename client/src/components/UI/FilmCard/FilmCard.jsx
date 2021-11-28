import React from 'react';
import { Link } from 'react-router-dom';

const FilmCard = ({ film }) => {

  return (
    <div className="film-card">
      <div className="film">
        <img src={film.img} alt={film.title} />
        <div className="rating high-rating"><p>{film.rating}</p></div>
        <p className="film-name"><span data-title={film.dataAttribute}>{film.title}</span></p>
        <div className="film-description d-flex justify-content-between">
          <p>{film.date}</p>
          <p id="add-to-favourite"><span data-film-id={film.id} className="heart">&hearts;</span></p>
          <p id="delete-from-favourite"><i data-film-id={film.id} className="gg-trash" /></p>
          <p><Link to={`/film/${film.id}`}> More</Link></p>
        </div>
      </div>
    </div>
  ) 
}

export default FilmCard;
