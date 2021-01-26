import React from 'react';
import { useQuery } from 'react-query';
import Film from 'swapi-typescript/dist/models/Film';
import { api } from '../api';
import { FilmPreview } from '../FilmPreview/FilmPreview';
import { Row, ProgressBar } from 'react-bootstrap'

export const Films: React.FC = () => {

  const { isLoading, error, data } = useQuery<unknown, unknown, { results: Film[] }>('films', api.films)

  if (isLoading) return <ProgressBar animated now={45} />

  if (error) return <> 'An error has occurred: ' +  error.message </>

  const films = data!.results

  return (
    <Row>
      {films.map((film) => <FilmPreview key={film.episode_id} data={film} />)}
    </Row>
  )
};
