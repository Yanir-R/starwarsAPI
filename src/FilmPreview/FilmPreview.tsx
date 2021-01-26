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
          <Link to={`/film/${data.episode_id}`}>
            <Button variant="light">Read More</Button>
          </Link>
          <Button variant="light" onClick={toggleIsFavorite}>
            {isFavorite ? "Delete From Favorites" : "Add To Favorites"}
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};