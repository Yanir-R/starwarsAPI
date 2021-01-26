import React from 'react';
import { useQuery } from 'react-query';
import Film from 'swapi-typescript/dist/models/Film';
import { api } from '../api';
import { FilmPreview } from '../FilmPreview/FilmPreview';
import { Container, Row, ProgressBar, Figure, Col, Image } from 'react-bootstrap'

export const Films: React.FC = () => {

  const { isLoading, error, data } = useQuery<unknown, unknown, { results: Film[] }>('films', api.films)
  const BANNER = "https://seeklogo.com/images/S/star-wars-logo-886FACEAFF-seeklogo.com.png"
  if (isLoading) return <ProgressBar animated now={45} />

  if (error) return <> 'An error has occurred: ' +  error.message </>

  const films = data!.results

  return (
    <Container>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <Image src={BANNER} fluid alt="banner" style={{ marginBottom: "10px" }} />
        </Col>
      </Row>
      <Row>
        {films.map((film) => <FilmPreview key={film.episode_id} data={film} />)}
      </Row>
    </Container>)
};
