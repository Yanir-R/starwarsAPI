import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import FilmDTO from 'swapi-typescript/dist/models/Film';
import { api } from '../api';
import { Card, ListGroupItem, ListGroup } from 'react-bootstrap'
import Planet from 'swapi-typescript/dist/models/Planet';
import Vehicle from 'swapi-typescript/dist/models/Vehicle';
import Starship from 'swapi-typescript/dist/models/Starship';

export interface IFilm extends FilmDTO {
  data: {
    planets: Planet[]
    vehicles: Vehicle[]
    starships: Starship[]
  }
}

type IResource = Planet | Vehicle | Starship

const getNames = (resources: IResource[]) => resources.map(resource => resource.name).join(', ')

export const Film: React.FC = () => {
  const { filmId } = useParams<Record<string, string | undefined>>()
  const { isLoading, error, data: film } = useQuery<unknown, unknown, IFilm>(['film', filmId], api.film(filmId as string))

  if (isLoading) return <> 'Loading...' </>

  if (error) return <>'An error has occurred: ' + error </>
  return (
    <Card >
      <Card.Body>
        <Card.Title>{film!.title}</Card.Title>
        <Card.Text>
          {film!.release_date}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Planets: {getNames(film!.data.planets)}</ListGroupItem>
        <ListGroupItem>Vehicles: {getNames(film!.data.vehicles)}</ListGroupItem>
        <ListGroupItem>Starships: {getNames(film!.data.starships)}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="/">Go Back</Card.Link>
        {/* <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
  )
};