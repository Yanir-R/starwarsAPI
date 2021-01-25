
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { api } from '../api';



const Film: React.FC = () => {

  const { filmId } = useParams<Record<string, string | undefined>>()
  const { isLoading, error, data } = useQuery('films', api.film(filmId as string))

  if (isLoading) return <> 'Loading...' </>

  if (error) return <>'An error has occurred: ' + error </>
  return (
    <div >
      <h3>{data}</h3>
    </div>
  )

};

export default Film;
