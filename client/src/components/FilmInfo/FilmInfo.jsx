import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { fetchFilmInfo } from '../../http/fetchFilms';
import Loader from '../UI/Loader/Loader';

function FilmInfo() {
  const { id } = useParams();
  const [film, setFilm] = useState('');

  useEffect(() => {
    (async () => {
      const film = await fetchFilmInfo(id);
      setFilm(film);
    })();
  }, );
  return (
    <>
    {
      film 
       ?
       <main>
       <div class="film-info">
         <h1 class="text-center mb-3">{film.title}</h1>
           <div class="film d-flex justify-content-between">
             <div class="film-img">
               <img src={film.img} alt={film.title} />
               <div class="buttons d-flex justify-content-end">
                 <p id="add-to-favourite"><span data-film-id={id} className="heart">&hearts;</span></p>
                 <button id="add-comment" data-film-id={id} className="btn btn-success">Comment</button>
               </div>
             </div>
             <div class="film-info-description" >
               <div class="rating high-rating"><p>{film.rating}</p></div>
               <div>
                 <h4>Слоган</h4>
                 <p>{film.tagline}</p>
               </div>
               <div>
                 <h4>Описание</h4>
                 <p>{film.description}</p>
               </div>
               <div>
                 <h4>Жанр</h4>
                 <p>{film.genres}</p>
               </div>
               <div>
                 <h4>Бюджет</h4>
                 <p>{film.budget}</p>
               </div>
               <div>
                 <h4>Дата выхода</h4>
                 <p>{film.date}</p>
               </div>
               <div>
                 <h4>IMDB</h4>
                 <p><a href={film.IMDBlink} target="_blank">Перейти на сайт Imdb</a></p>
               </div>
             </div>
           </div>
       </div>
     </main> 
     :
      <div className="center-block"><Loader /></div>
    }
   </>
  )
}

export default FilmInfo

