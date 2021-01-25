import React from 'react';
import { useQuery } from 'react-query';
import Film from 'swapi-typescript/dist/models/Film';
import { api } from '../api';
import { FilmPreview } from '../FilmPreview/FilmPreview';
import { Container, Row, ProgressBar, Badge, Figure } from 'react-bootstrap'


export const Films: React.FC = () => {

  const { isLoading, error, data } = useQuery<unknown, unknown, { results: Film[] }>('films', api.films)
  const BANNER = "https://cdn.commonwealthclub.org/s3fs-public/styles/hero/public/2019-11/hero%20star%20wars.png?itok=waMDC-JL"
  if (isLoading) return <ProgressBar animated now={45} />

  if (error) return <> 'An error has occurred: ' +  error.message </>
  const films = data!.results
  return (
    <Container>
      <Figure.Image width={250} height={180} src={BANNER} alt="banner" />
      <Row>
        {films.map((film) => <FilmPreview key={film.episode_id} data={film} />)}
      </Row>
    </Container>)
};
