import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import Film from 'swapi-typescript/dist/models/Film';
import { api } from '../api';
import FilmPreview from '../FilmPreview/FilmPreview';



const Films: React.FC = () => {
  const queryClient = useQueryClient()
  const { isLoading, error, data } = useQuery('films', api.films)
  
  if (isLoading) return <> 'Loading...' </>
  
  if (error) return  <> 'An error has occurred: ' +  error.message </>
  
  return data.map((film: Film) => <FilmPreview data={film} />)
};


export default Films;
