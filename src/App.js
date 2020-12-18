import 'bootstrap/dist/css/bootstrap.min.css';

import {
  HashRouter,
  Switch,
  Route
} from "react-router-dom";

import {
  Navbar,
  Nav,
  Container,
  Row,
  Col
} from "react-bootstrap";

import Routes from "./Routes"
import About from "./Pages/About"
import Home from "./Pages/Home"
import Recipes from "./Pages/Recipes";
import Post from "./Pages/Post";

export default function App() {
  return (
    <HashRouter>
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <h1>appetitediary</h1>
          </Col>
          <Col></Col>
        </Row>

        <Row>
          <Col></Col>
          <Col>
            <Navbar expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href={Routes.Home}>Home</Nav.Link>
                  <Nav.Link href={Routes.Recipes}>Recipes</Nav.Link>
                  <Nav.Link href={Routes.About}>About Us</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
          <Col></Col>
        </Row>
      </Container>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/recipes">
          <Recipes />
        </Route>
        <Route path="/Post">
          <Post />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </HashRouter>
  );
}