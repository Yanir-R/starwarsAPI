import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import FilmDTO from 'swapi-typescript/dist/models/Film';
import { api } from '../api';
import { Card, ListGroupItem, ListGroup, ProgressBar, Badge, Button } from 'react-bootstrap'
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

  if (isLoading) return <ProgressBar animated now={45} />

  if (error) return <>'An error has occurred: ' + error </>
  return (
    
    <Card >
      <Card.Body>
        <Card.Title><Badge variant="warning">{film!.title}</Badge></Card.Title>
        <Card.Text>
          <Badge variant="light">{film!.release_date}</Badge>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem><Badge variant="info">Planets:</Badge> {getNames(film!.data.planets)}</ListGroupItem>
        <ListGroupItem><Badge variant="info">Vehicles:</Badge> {getNames(film!.data.vehicles)}</ListGroupItem>
        <ListGroupItem><Badge variant="info">Starships:</Badge> {getNames(film!.data.starships)}</ListGroupItem>
      </ListGroup>
      <Button variant="primary" size="lg" href="/">Go Back</Button>
    </Card>
  )
};

// <Table striped bordered hover variant="dark">
//   <thead>
//     <tr>
//       <th>#</th>
//       <th>First Name</th>
//       <th>Last Name</th>
//       <th>Username</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>1</td>
//       <td>Mark</td>
//       <td>Otto</td>
//       <td>@mdo</td>
//     </tr>
//     <tr>
//       <td>2</td>
//       <td>Jacob</td>
//       <td>Thornton</td>
//       <td>@fat</td>
//     </tr>
//     <tr>
//       <td>3</td>
//       <td colSpan="2">Larry the Bird</td>
//       <td>@twitter</td>
//     </tr>
//   </tbody>
// </Table>