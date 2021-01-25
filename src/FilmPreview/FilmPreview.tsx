import React from 'react';
import Film from 'swapi-typescript/dist/models/Film';
import { Card, Col } from 'react-bootstrap';
import limitCharacters from 'limit-characters';


interface FilmPreviewProps {
  data: Film

}

export const FilmPreview: React.FC<FilmPreviewProps> = ({ data }) => {
  const excerpt3 = limitCharacters({ text: data.opening_crawl, length: 200, breakWord: false, more: "..." })
  return (
    <Col xs={12} md={4} >
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
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




    // <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>

    // Some quick example text to build on the card title and make up the bulk of
    // the card's content.

    // <Card.Link href="#">Card Link</Card.Link>
    // <Card.Link href="#">Another Link</Card.Link>




