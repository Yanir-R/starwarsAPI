import React from 'react';
// import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import Film from 'swapi-typescript/dist/models/Film';
// import { api } from '../api';


interface FilmPreviewProps {
  data: Film
  
}

const FilmPreview: React.FC<FilmPreviewProps> = ({data}) => {
  return (
    <div className="film">
      <h3>{data.title}</h3>
      <p>{data.opening_crawl}</p>
      
    </div>
  )
 
};



export default FilmPreview;
