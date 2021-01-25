import React from 'react';
import { useQuery } from 'react-query';
import Film from 'swapi-typescript/dist/models/Film';
import { api } from '../api';
import FilmPreview from '../FilmPreview/FilmPreview';



const Films: React.FC = () => {
  
  const { isLoading, error, data } = useQuery<unknown, unknown, {results: Film[]} >('films', api.films)
  
  if (isLoading) return <> 'Loading...' </>
  
  if (error) return  <> 'An error has occurred: ' +  error.message </>
  const films = data!.results
  return (<>{films.map((film) => <FilmPreview data={film} />)}</>)
};


export default Films;
