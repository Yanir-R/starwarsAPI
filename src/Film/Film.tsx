
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import IFilm from 'swapi-typescript/dist/models/Film';
import { api } from '../api';
import { Card, Button, ListGroupItem, ListGroup } from 'react-bootstrap'


export const Film: React.FC = () => {

  const { filmId } = useParams<Record<string, string | undefined>>()
  const { isLoading, error, data } = useQuery<unknown, unknown, IFilm>(`films_${filmId}`, api.film(filmId as string))

  if (isLoading) return <> 'Loading...' </>

  if (error) return <>'An error has occurred: ' + error </>
  return (
    <Card >
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{data!.title}</Card.Title>
        <Card.Text>
          {data!.release_date}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Planets: {data!.planets}</ListGroupItem>
        <ListGroupItem>Vehicles: {data!.vehicles}</ListGroupItem>
        <ListGroupItem>Starships: {data!.starships}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="/">Go Back</Card.Link>
        {/* <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
  )

};












