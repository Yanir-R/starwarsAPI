import React from "react";
import Film from "swapi-typescript/dist/models/Film";
import { Card, Col, Button } from "react-bootstrap";
import limitCharacters from "limit-characters";
import { useFavoriteFilm } from "../useFavoriteFilm";
import { Link } from "react-router-dom";
interface FilmPreviewProps {
  data: Film;
}

export const FilmPreview: React.FC<FilmPreviewProps> = ({ data }) => {
  const description = limitCharacters({
    text: data.opening_crawl,
    length: 200,
    breakWord: false,
    more: "...",
  });

  const [isFavorite, toggleIsFavorite] = useFavoriteFilm(
    data.episode_id.toString()
  );

  return (
    <Col xs={12} md={6} lg={4}>
      <Card border="dark">
        <Card.Header className="font-weight-bold text-secondary text-uppercase">
          {data.title}
        </Card.Header>
        <Card.Body>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="light">
            <Card.Link href={`/film/${data.episode_id}`}>Read More</Card.Link>
          </Button>
          <Button variant="light">
            <Card.Link onClick={toggleIsFavorite}>
              <Link to="href">
                {isFavorite ? "Delete From Favorites" : "Add To Favorites"}
              </Link>
            </Card.Link>
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

