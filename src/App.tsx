import React from 'react';
import { Films } from './Films/Films';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Film } from './Film/Film';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Image, Col } from 'react-bootstrap';
import { logo } from '../src/logo'

export const App: React.FC = () => {

  return (
    <Container>
      <Router>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <Link to="/">
              <Image src={logo} fluid alt="logo" style={{ marginBottom: "10px" }} />
            </Link>
          </Col>
        </Row>
        <Switch>
          <Route path="/film/:filmId">
            <Film />
          </Route>
          <Route path="/" >
            <Films />
          </Route>
        </Switch>
      </Router>
    </Container>
  )
}

