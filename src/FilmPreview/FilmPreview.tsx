import React from "react";
import Film from "swapi-typescript/dist/models/Film";
import { Card, Col, Button } from "react-bootstrap";
import limitCharacters from "limit-characters";
import { useFavoriteFilm } from "../useFavoriteFilm";
interface FilmPreviewProps {
  data: Film;
}

export const FilmPreview: React.FC<FilmPreviewProps> = ({ data }) => {
  const excerpt3 = limitCharacters({
    text: data.opening_crawl,
    length: 200,
    breakWord: false,
    more: "...",
  });

  const [isFavorite, toggleIsFavorite] = useFavoriteFilm(
    data.episode_id.toString()
  );

  return (
    <Col xs={12} md={4}>
      <Card border="dark" style={{ width: "18rem" }} className="mb-4">
        <Card.Header className="font-weight-bold text-secondary text-uppercase">
          {data.title}
        </Card.Header>
        <Card.Body>
          <Card.Text>{excerpt3} </Card.Text>
          <Card.Link href={`/film/${data.episode_id}`}><Button className="mb-4" variant="light">Read More</Button></Card.Link>
          <Card.Footer>
            <Card.Link onClick={toggleIsFavorite}>
              <Button className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0" variant="light"> {isFavorite ? "Delete From Favorite" : "Add To Favorite"} </Button>
            </Card.Link>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Col>
  );
};

