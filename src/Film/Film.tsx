import React from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import FilmDTO from "swapi-typescript/dist/models/Film";
import { api } from "../api";
import { Card, Spinner, Button, Col, Row } from "react-bootstrap";
import Planet from "swapi-typescript/dist/models/Planet";
import Vehicle from "swapi-typescript/dist/models/Vehicle";
import Starship from "swapi-typescript/dist/models/Starship";
export interface IFilm extends FilmDTO {
  data: {
    planets: Planet[];
    vehicles: Vehicle[];
    starships: Starship[];
  };
}

type IResource = Planet | Vehicle | Starship;

const getNames = (resources: IResource[]) =>
  resources.map((resource) => resource.name).join(", ");

export const Film: React.FC = () => {
  const { filmId } = useParams<Record<string, string | undefined>>();
  const { isLoading, error, data: film } = useQuery<unknown, unknown, IFilm>(
    ["film", filmId],
    api.film(filmId as string)
  );

  if (isLoading) return <Spinner animation="border" variant="dark" />;

  if (error) return <>'An error has occurred: ' + error </>;
  return (
    <>
      <Card>
        <Card.Header>
          <Card.Title>{film!.title}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <small className="text-muted">Release Date: </small>
            {film!.release_date}
          </Card.Text>
        </Card.Body>
        <Card.Header> Planets:</Card.Header>
        <Card.Body>
          <Card.Text>{getNames(film!.data.planets)} </Card.Text>
        </Card.Body>
        <Card.Header> Vehicles:</Card.Header>
        <Card.Body>
          <Card.Text>{getNames(film!.data.vehicles)}</Card.Text>
        </Card.Body>
        <Card.Header> Starships:</Card.Header>
        <Card.Body>
          <Card.Text> {getNames(film!.data.starships)}</Card.Text>
        </Card.Body>
      </Card>
      <Row >
        <Col md={{ span: 4, offset: 4 }} >
          <Link to="/" style={{ marginTop: "20px" }}>
            <Button block variant="light">
              Go Back
            </Button>
          </Link>
        </Col>
      </Row>
    </>
  );
};