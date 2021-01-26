import React from 'react';
import { Films } from './Films/Films';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Film } from './Film/Film';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Image, Col } from 'react-bootstrap';

export const App: React.FC = () => {
  const Logo = "https://seeklogo.com/images/S/star-wars-logo-886FACEAFF-seeklogo.com.png"
  return (
    <Container>
      <Router>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <Link to="/">
              <Image src={Logo} fluid alt="logo" style={{ marginBottom: "10px" }} />
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

