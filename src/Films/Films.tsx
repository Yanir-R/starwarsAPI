import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { api } from '../api';
import FilmPreview from '../FilmPreview/FilmPreview';


const Films: React.FC = () => {

  const { isLoading, error, data } = useQuery('films', api.films)
  
  if (isLoading) return <> 'Loading...' </>
  
  if (error) return  <> 'An error has occurred: ' +  error.message </>
  
  return data.map((film) => <FilmPreview data={film} />)
};



export default Films;
