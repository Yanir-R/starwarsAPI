import React from 'react';
import Film from 'swapi-typescript/dist/models/Film';
import { Card, Col, Badge } from 'react-bootstrap';
import limitCharacters from 'limit-characters';


interface FilmPreviewProps {
  data: Film

}

export const FilmPreview: React.FC<FilmPreviewProps> = ({ data }) => {
  const excerpt3 = limitCharacters({ text: data.opening_crawl, length: 200, breakWord: false, more: "..." })
  return (
    <Col xs={12} md={4} >
      <Card border="dark" style={{ width: '18rem' }} className="mb-4">
        <Card.Header><Badge variant="dark">{data.title}</Badge></Card.Header>
        <Card.Body>
          <Card.Text>{excerpt3}  </Card.Text>
          <Card.Link href={`/film/${data.episode_id}`}>Read More</Card.Link>
          <Card.Footer>
            <Card.Link>Favorite</Card.Link>
            <Card.Link>Delete Favorite</Card.Link>
          </Card.Footer>
        </Card.Body >
      </Card>
    </Col>

  )

};






