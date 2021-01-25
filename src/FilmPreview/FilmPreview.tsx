import React from 'react';
import Film from 'swapi-typescript/dist/models/Film';
import { Link } from "react-router-dom";
interface FilmPreviewProps {
  data: Film

}

export const FilmPreview: React.FC<FilmPreviewProps> = ({ data }) => {
  return (
    <div className="film">
      <h3>{data.title}</h3>
      <p>{data.opening_crawl}</p>
      <Link to={`/film/${data.episode_id}`}>Read More</Link>
    </div>


  )

};



